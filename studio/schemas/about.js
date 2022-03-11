export default {
    name: 'about',
    title: 'About',
    type: 'document',
    fields: [
      {
        name: 'atitle',
        title: 'Slogan',
        type: 'string',
      },
      {
        name: 'btitle',
        title: 'SubText',
        type: 'string',
      },
      {
        name: 'mainImage',
        title: 'Main image',
        type: 'image',
        options: {
          hotspot: true,
        }},
      {
        name: 'body',
        title: 'Body',
        type: 'blockContent',
      },
    ],
  }
  