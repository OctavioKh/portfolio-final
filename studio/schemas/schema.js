// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'
// import category from './category'
import post from './post'
import project from './project'
import author from './author'
import about from './about'
import youtube from './youtube'
import gallery from './gallery'
import richText from './richText'
import figure from './figure'
import social from './social'
import home from './home'
import bodyPortableText from './objects/bodyPortableText'
import galeria from './galeria'


// import bodyPortableText from './objects/bodyPortableText'



// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    home,
    about,
    post,
    project,
    youtube,
    gallery,
    richText,
    figure,
    social,
    author,
     bodyPortableText,
     galeria,
    // category,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
  ]),
})
