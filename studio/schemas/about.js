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
  ]
};
