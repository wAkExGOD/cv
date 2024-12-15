import { SITE_SECTION_IDS, WORK_PLACES } from "../constants"

export function WorkExperience() {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-3xl font-bold" id={SITE_SECTION_IDS.workExperience}>
        Work experience
      </h2>
      <ul className="flex flex-col gap-6">
        {WORK_PLACES.map(({ company, role, date, description }) => (
          <li key={date} className="flex gap-4">
            <a
              href={company?.link || "#"}
              target="_blank"
              className={`flex flex-col justify-center items-center border-solid w-16 h-16 shrink-0 rounded-md shadow-lg border border-emerald overflow-hidden transition-transform ${
                company?.link ? "hover:scale-105" : "pointer-events-none"
              }`}
            >
              {company.imgSrc ? (
                <img
                  src={company.imgSrc}
                  alt={`${company.name} logo`}
                  loading="lazy"
                />
              ) : (
                <p className="text-xs pointer-events-none select-none">*</p>
              )}
            </a>
            <div className="flex flex-col gap-1">
              <p className="text-lg font-medium text-green leading-none">
                {role}
              </p>
              <p className="text-sm">{company.name}</p>
              <p className="text-sm">{date}</p>
              {description && (
                <p className="text-sm text-gray-400 mt-2">{description}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
