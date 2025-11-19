import { EDUCATION_PLACES, SITE_SECTION_IDS } from "../constants"
import { LinkIcon } from "./Icons"

export function Education() {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-3xl font-bold" id={SITE_SECTION_IDS.education}>
        Education
      </h2>
      <ul className="flex flex-col gap-6">
        {EDUCATION_PLACES.map(
          ({ place, specialty, specialtyLink, faculty, facultyLink, date }) => (
            <li
              key={specialty}
              className="flex gap-4 border border-emerald rounded-md p-6"
            >
              <div>
                <a
                  href={specialtyLink}
                  target="_blank"
                  className="text-lg leading-tight font-medium text-green inline-block mb-2"
                >
                  <LinkIcon className="inline text-emerald mr-2 mb-1" />
                  <span>{specialty}</span>
                </a>
                <div className="text-sm text-gray-400 mb-3">
                  <span>{date}</span> <span>{place}</span>
                </div>
                <a href={facultyLink} target="_blank" className="font-medium">
                  {faculty}
                </a>
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  )
}
