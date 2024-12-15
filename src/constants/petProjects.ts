type PetProject = {
  name: string
  description?: string
  link?: string
  stack: string[]
}

export const PET_PROJECTS: PetProject[] = [
  {
    name: "Notion",
    description:
      "Notion is a web application that allows users to create, delete, and edit their notes. Users can easily manage their notes through an intuitive interface",
    link: "https://github.com/wAkExGOD/notion-redux",
    stack: [
      "React",
      "TypeScript",
      "Redux",
      "Redux Thunk",
      "React Hook Form",
      "Zod",
      "Tailwind CSS",
      "shadcn/ui",
      "json-server",
    ],
  },
  {
    name: "Lamoda",
    description:
      "Lamoda is a platform that showcases a list of clothing items. Users can easily filter products by color, price, and name, allowing for a personalized shopping experience. Additionally, items can be sorted by popularity and price, ensuring customers can find exactly what they’re looking for with ease and efficiency.",
    link: "https://github.com/wAkExGOD/lamoda",
    stack: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
  },
  {
    name: "API & SPA",
    description:
      "Developed a multi-page React application utilizing the JSONPlaceholder API and the react-router-dom library. This project showcases my ability to integrate external APIs, manage routing, and create a seamless user experience in a React environment.",
    link: "https://github.com/wAkExGOD/api-spa",
    stack: ["React", "TypeScript", "React Router", "Tailwind CSS", "shadcn/ui"],
  },
  {
    name: "Todoist",
    description: `This project is a simple "To-Do List" application that allows users to add, remove, and track tasks. The application is written in TypeScript and supports synchronization with Local Storage, enabling data to be saved between sessions.`,
    link: "https://github.com/wAkExGOD/todoist",
    stack: ["React", "TypeScript", "React Router", "shadcn/ui"],
  },
]
