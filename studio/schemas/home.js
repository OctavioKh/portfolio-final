export default {
    name: "home",
    title: "Home",
    type: "document",
    
    fields: [
      
      {
        name: 'ctitle',
        title: 'Encabezado',
        type: 'string',
      },
      
              {
                name: 'mainImage',
                title: 'Image',
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
  