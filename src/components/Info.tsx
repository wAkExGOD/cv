import { CONTACTS, LANGUAGES, SITE_SECTION_IDS, SKILLS } from "../constants"

const sections = [
  {
    title: "Skills",
    content: (
      <ul className="flex flex-col pl-4">
        {SKILLS.map((skill) => (
          <li key={skill} className="text-sm list-disc leading-6">
            {skill}
          </li>
        ))}
      </ul>
    ),
  },
  {
    title: "Languages",
    content: (
      <ul className="flex flex-col">
        {LANGUAGES.map(({ language, level }) => (
          <li key={language} className="text-sm leading-6">
            {language} - {level}
          </li>
        ))}
      </ul>
    ),
  },
  {
    title: "Contacts",
    content: (
      <ul className="flex flex-col" id={SITE_SECTION_IDS.contacts}>
        {CONTACTS.map(({ title, link }) => (
          <li key={title}>
            <a href={link} target="_blank" className="text-sm">
              {title}
            </a>
          </li>
        ))}
      </ul>
    ),
  },
]

export function Info() {
  return (
    <ul className="flex flex-wrap gap-6 md:flex-col">
      {sections.map(({ title, content }) => (
        <li key={title} className="flex flex-col gap-2">
          <h2 className="font-bold text-2xl">{title}</h2>
          {content}
        </li>
      ))}
    </ul>
  )
}
