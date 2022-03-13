export default {
  name: "about",
  title: "About",
  type: "document",
  
  fields: [
    {
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        },
      ],
    },
    {
      name: 'ctitle',
      title: 'Encabezado',
      type: 'string',
    },
    {
              name: 'btitle',
              title: 'Bio Corta',
              type: 'string',
            },
            {
              name: 'atitle',
              title: 'Slogan',
              type: 'string',
            },
            {
              name: 'mainImage',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },},
              {
                name: 'logoImage2',
                title: 'Monograma',
                type: 'image',
                options: {
                  hotspot: true,
                },},
            
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
};
