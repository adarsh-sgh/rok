import { Tenants } from "./app/types/data.ts/data";
const data: Tenants = {
  "purple-pink": {
    color1: "#8a4baf",
    color2: "#d53f8c",
    cards: [
      {
        title: "Title 1",
        description: "Description 1 ",
        action: "Action 1",
        actionLink: "/",
      },
      {
        title: "Title 2",
        description: "Description 2",
        action: "Action 2",
        actionLink: "/",
      },
      {
        title: "Title 3",
        description: "Description 3",
        action: "Action 3",
        actionLink: "/",
      },
    ],
  },
  "blue-green": {
    color1: "#001f3f",
    color2: "#ffd700",
    cards: [
      {
        title: "Title 1",
        description: "Description 1",
        action: "Action 1",
        actionLink: "/",
      },
      {
        title: "Title 2",
        description: "Description 2",
        action: "Action 2",
        actionLink: "/",
      },
      {
        title: "Title 3",
        description: "Description 3",
        action: "Action 3",
        actionLink: "/",
      },
    ],
  },
} as const;

export default data;
