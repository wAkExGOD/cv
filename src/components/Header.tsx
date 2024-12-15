import { SITE_SECTION_IDS } from "../constants"

const links = [
  { title: "Work experience", href: `#${SITE_SECTION_IDS.workExperience}` },
  { title: "Pet projects", href: `#${SITE_SECTION_IDS.petProjects}` },
  { title: "Contacts", href: `#${SITE_SECTION_IDS.contacts}` },
] as const

export function Header() {
  return (
    <div className="flex items-center justify-end gap-6">
      {links.map(({ title, href }) => (
        <a key={title} href={href} className="text-green text-sm">
          {title}
        </a>
      ))}
    </div>
  )
}
