import type { Project } from '../../types'
import { ProjectDiagram } from './ProjectDiagram'

type ProjectPreviewProps = {
  project: Project
}

export function ProjectPreview({ project }: ProjectPreviewProps) {
  const screenshots = project.screenshots || []
  const desktop = screenshots.find((screenshot) => screenshot.orientation !== 'mobile') || screenshots[0]
  const mobileScreens = screenshots.filter((screenshot) => screenshot.orientation === 'mobile').slice(0, 3)

  if (!desktop) {
    return <ProjectDiagram icon={project.icon} />
  }

  if (project.featured && mobileScreens.length > 0) {
    return (
      <div className="absolute inset-0 overflow-hidden bg-linear-to-br from-slate-100 via-white to-sky-50">
        <div className="absolute -left-8 top-8 w-[78%] overflow-hidden rounded-lg border border-slate-200 bg-white shadow-2xl shadow-slate-300/50 sm:left-6 sm:w-[72%]">
          <img src={desktop.src} alt={desktop.alt} className="aspect-video w-full object-cover" />
        </div>

        <div className="absolute bottom-5 right-4 top-9 flex items-end gap-2 sm:right-7">
          {mobileScreens.map((screenshot, index) => (
            <div
              key={screenshot.src}
              className="w-20 overflow-hidden rounded-[1.35rem] border-[6px] border-slate-950 bg-slate-950 shadow-2xl shadow-slate-400/50 sm:w-24"
              style={{ transform: `translateY(${index * 16}px)` }}
            >
              <img src={screenshot.src} alt={screenshot.alt} className="aspect-[9/16] w-full object-cover" />
            </div>
          ))}
        </div>

        <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-white/78 to-transparent" />
      </div>
    )
  }

  return <img src={desktop.src} alt={desktop.alt} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
}
