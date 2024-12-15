import { Header, Banner, WorkExperience, PetProjects, Info } from "./components"

function App() {
  return (
    <div className="max-w-[1000px] mx-auto py-12 px-4">
      <Header />
      <div className="flex flex-col gap-12">
        <Banner />
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="shrink-0 md:w-40">
            <Info />
          </div>
          <div className="flex flex-col gap-8 md:gap-12">
            <WorkExperience />
            <PetProjects />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
