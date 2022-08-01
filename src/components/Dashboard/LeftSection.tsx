import Image from 'next/image'
import Projects from '../projects/OpenProjects'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

export default function LeftSection() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:col-span-2 shadow">
      <section aria-labelledby="section-1-title">
        <h2 className="sr-only" id="section-1-title">
          Section title
        </h2>
        <div className="rounded-lg bg-white overflow-hidden shadow">
          <div className="pb-8 px-8 flex flex-col">
            <div className="flex flex-row">
              <div className="flex flex-col">
                <p className="text-7xl mt-14 text-gray-800">
                  Frontend Developer & UI / UX Designer
                </p>
                <span className="text-gray-400 mt-5">
                  I am a React developer and UI/UX designer, who's mission is to
                  make the world a better place through the use of technology.
                </span>
              </div>

              <Image
                src="/images/devices.png"
                alt="devices"
                width={1000}
                height={500}
              />
            </div>
            <button className="border-gray-900 border"> Contact me</button>
          </div>
          <DndProvider backend={HTML5Backend}>
            <Projects />
          </DndProvider>
        </div>
      </section>
    </div>
  )
}
