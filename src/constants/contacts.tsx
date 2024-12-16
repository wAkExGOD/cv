import { Telegram, Github, LinkedIn } from "../components/Icons"

type Contact = {
  title: string
  link: string
  icon?: JSX.Element
}

export const CONTACTS: Contact[] = [
  {
    title: "Telegram",
    link: "https://t.me/wakexgod/",
    icon: <Telegram />,
  },
  {
    title: "Github",
    link: "https://github.com/wakexgod/",
    icon: <Github />,
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/vladislav-panasik/",
    icon: <LinkedIn />,
  },
  {
    title: "vladpanasik@mail.ru",
    link: "mailto:vladpanasik@mail.ru",
  },
] as const
