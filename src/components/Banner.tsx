import { TypeAnimation } from "react-type-animation"
import Me from "../assets/me.jpg"

export function Banner() {
  return (
    <div className="flex flex-col gap-8 mt-12">
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-5xl">Vladislav Panasik</h1>
        <h2 className="text-3xl text-green font-medium">Frontend Developer</h2>
      </div>
      <div className="flex flex-col gap-8 sm:flex-row">
        <div className="w-40 shrink-0">
          <img
            src={Me}
            width={160}
            height={160}
            alt="Vladislav Panasik"
            className="rounded-xl shadow-xl border border-emerald"
          />
        </div>
        <TypeAnimation
          className="min-h-36 md:min-h-28"
          style={{ whiteSpace: "pre-line" }}
          sequence={[
            "Hi! 👋 My name is Vlad. \nI am a passionate Frontend Developer with over 1.5 years of commercial experience working on various projects, including creating responsive websites and user-friendly interfaces with a strong focus on writing clean and efficient code.",
          ]}
          speed={90}
          repeat={0}
        />
      </div>
    </div>
  )
}
