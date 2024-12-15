import GamdomLogo from "../assets/companies/gamdom.jpg"
import SokLogo from "../assets/companies/sok.jpg"
import SDTVLogo from "../assets/companies/sdtv.jpg"

type WorkPlace = {
  company: {
    name: string | React.ReactNode
    imgSrc?: string
    link?: string
  }
  companyImgSrc?: string
  role: string
  date: string
  description?: string | React.ReactNode
}

export const WORK_PLACES: WorkPlace[] = [
  {
    company: {
      name: "Gamdom",
      imgSrc: GamdomLogo,
      link: "https://gamdom.com/",
    },
    role: "Frontend Developer",
    date: "Nov 2024 - Present",
    description: "",
  },
  {
    company: {
      name: "Sok Studio",
      imgSrc: SokLogo,
      link: "https://www.sok.studio/",
    },
    role: "Frontend Developer",
    date: "Aug 2023 - Nov 2024",
    description:
      "Development of various iGaming projects from scratch: from common landing pages to Telegram Mini App.",
  },
  {
    company: {
      name: (
        <span>
          Crypto Startup{" "}
          <span className="text-gray-400">(unlaunched project)</span>
        </span>
      ),
    },
    role: "Fullstack Developer",
    date: "Oct 2022 - Mar 2023",
    description: (
      <div className="flex flex-col gap-2">
        <p>
          Solo Web developer. Provided IT-consulting, communicated with the
          founders and designer.
        </p>
        <p>Backend (Node.js, Express, MySQL):</p>
        <ul className="list-disc pl-4">
          <li>REST architecture</li>
          <li>JWT authentication</li>
          <li>
            Integrating with Third-Party APIs (Twitter, Discord, Telegram)
          </li>
          <li>Sending emails using SMTP (Postmark)</li>
        </ul>
        <p>Frontend (React):</p>
        <ul className="list-disc pl-4">
          <li>SPA</li>
          <li>JWT authentication</li>
          <li>Fetching data with Axios and TanStack Query</li>
          <li>Storing and handling data using Redux Toolkit</li>
        </ul>
      </div>
    ),
  },
  {
    company: {
      name: "SDTV.gg",
      imgSrc: SDTVLogo,
      link: "https://vk.com/sdtvtournaments",
    },
    role: "Fullstack Developer",
    date: "Jun 2020 - Feb 2023",
    description:
      "Creating interfaces, layout (PHP, HTML, CSS). Implemented new functionality using JavaScript and PHP. Often used to work with the backend (PHP, Node.JS, Socket.io), with a database (MySQL)",
  },
]
