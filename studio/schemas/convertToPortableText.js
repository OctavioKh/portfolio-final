/* eslint-disable no-console */
import client from 'part:@sanity/base/client'

// length(description) returns null if description isn't a (Portable Text) array
const fetchDocuments = () =>
  client.fetch(`*[_type == 'post' && length(description) == null][0...100] {_id, _rev, description}`)

const buildPatches = docs =>
  docs.map(doc => ({
    id: doc._id,
    patch: {
      set: {description: [
        {
          "style": "normal",
          "_type": "block",
          "children": [
            {
              "_type": "span",
              "marks": [],
              "text": doc.description
            }
          ],
          markDefs: []
        }
      ]},
      // this will cause the migration to fail if any of the documents has been
      // modified since it was fetched.
      ifRevisionID: doc._rev
    }
  }))

const createTransaction = patches =>
  patches.reduce((tx, patch) => tx.patch(patch.id, patch.patch), client.transaction())

const commitTransaction = tx => tx.commit()

const migrateNextBatch = async () => {
  const documents = await fetchDocuments()
  const patches = buildPatches(documents)
  if (patches.length === 0) {
    console.log('No more documents to migrate!')
    return null
  }
  console.log(
    `Migrating batch:\n %s`,
    patches.map(patch => `${patch.id} => ${JSON.stringify(patch.patch)}`).join('\n')
  )
  const transaction = createTransaction(patches)
  await commitTransaction(transaction)
  return migrateNextBatch()
}

migrateNextBatch().catch(err => {
  console.error(err)
  process.exit(1)
})