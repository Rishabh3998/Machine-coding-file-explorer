export const explorer = {
  id: 1,
  name: "root",
  isFolder: true,
  items: [
    {
      id: 2,
      name: "public",
      isFolder: true,
      items: [
        {
          id: 3,
          name: "index.html",
          isFolder: false,
        },
        {
          id: 4,
          name: "publicFile.ts",
          isFolder: false,
        },
      ],
    },
    {
      id: 3,
      name: "src",
      isFolder: true,
      items: [
        {
          id: 4,
          name: "components",
          isFolder: true,
          items: [
            {
              id: 5,
              name: "1.tsx",
              isFolder: false,
            },
            {
              id: 6,
              name: "2.tsx",
              isFolder: false,
            },
          ],
        },
        {
          id: 5,
          name: "data",
          isFolder: true,
          items: [
            {
              id: 5,
              name: "data.ts",
              isFolder: false,
            },
            {
              id: 6,
              name: "dummyData.ts",
              isFolder: false,
            },
          ],
        },

        {
          id: 7,
          name: "App.tsx",
          isFolder: false,
        },
        {
          id: 8,
          name: "index.tsx",
          isFolder: false,
        },
      ],
    },
  ],
};
