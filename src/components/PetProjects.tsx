import { PET_PROJECTS, SITE_SECTION_IDS } from "../constants"

export function PetProjects() {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-3xl font-bold" id={SITE_SECTION_IDS.petProjects}>
        Pet projects
      </h2>
      <ul className="flex flex-col gap-6">
        {PET_PROJECTS.map(({ name, description, link, stack }) => (
          <li key={name} className="flex gap-4 border border-emerald p-6">
            <div className="flex flex-col gap-2">
              <a href={link} target="_blank" className="text-lg text-green">
                {name}
              </a>
              {description && (
                <p className="text-sm text-gray-400">{description}</p>
              )}
              <ul className="flex flex-wrap gap-2">
                {stack.map((technology) => (
                  <li key={technology} className="text-xs">
                    {technology}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
