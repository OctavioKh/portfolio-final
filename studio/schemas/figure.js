export default {
    name: 'figure',
    type: 'object',
    title: 'Figure',
    fields: [
        {
            name: 'image',
            type: 'image',
            title: 'Image',
        },
        {
            name: 'alt',
            type: 'string',
            title: 'Alternative Text',
        },
        {
            name: 'caption',
            type: 'string',
            title: 'Caption Text'
        },
    ],
}