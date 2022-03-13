export default {
  name: "social",
  title: "Socials and Logos",
  type: "document",

  fields: [
    {
      name: "linkIg",
      title: "Instagram",
      type: "string",
    },
    {
      name: "logoImage1",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "logoImage2",
      title: "Monograma",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
};
