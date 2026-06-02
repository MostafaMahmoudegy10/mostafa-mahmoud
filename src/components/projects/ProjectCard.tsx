import { motion } from 'framer-motion'
import { ArrowUpRight, ImagePlus, Star } from 'lucide-react'
import { fadeUp } from '../../animations/variants'
import { copy } from '../../data/portfolio'
import type { Lang, Project } from '../../types'
import { ProjectDiagram } from './ProjectDiagram'

type ProjectCardProps = {
  project: Project
  lang: Lang
  index: number
  onOpen: (project: Project) => void
}

export function ProjectCard({ project, lang, index, onOpen }: ProjectCardProps) {
  const t = copy[lang]
  const Icon = project.icon
  const previewImage = project.screenshots?.[0]?.src

  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -8 }}
      className={project.featured ? 'glass-panel group overflow-hidden lg:col-span-2' : 'glass-panel group overflow-hidden'}
    >
      <div className={project.featured ? 'grid gap-0 lg:grid-cols-[1.08fr_0.92fr]' : 'grid'}>
        <div className="relative min-h-64 overflow-hidden border-b border-slate-200/70 bg-slate-50 lg:border-b-0 lg:border-r">
          {previewImage ? (
            <img
              src={previewImage}
              alt={`${project.title} project preview`}
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
          ) : (
            <ProjectDiagram icon={Icon} />
          )}
          <div className="absolute inset-0 bg-linear-to-t from-white/95 via-white/28 to-transparent" />
          <motion.div
            className="absolute inset-x-8 bottom-7 h-px origin-left bg-linear-to-r from-bluewave via-orangecore to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.08 }}
          />
          <div className="absolute left-5 top-5 grid h-12 w-12 place-items-center rounded-lg border border-slate-200 bg-white/82 text-bluewave shadow-sm backdrop-blur rtl:left-auto rtl:right-5">
            <Icon className="h-6 w-6" />
          </div>
          {project.featured ? (
            <div className="absolute right-5 top-5 inline-flex items-center gap-2 rounded-lg border border-orange-200 bg-orange-50/90 px-3 py-2 text-xs font-bold uppercase text-orange-600 shadow-sm backdrop-blur rtl:left-5 rtl:right-auto">
              <Star className="h-4 w-4" />
              {t.projects.featured}
            </div>
          ) : null}
          {!previewImage ? (
            <div className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white/82 px-3 py-2 text-xs font-bold text-slate-600 backdrop-blur rtl:left-auto rtl:right-5">
              <ImagePlus className="h-4 w-4 text-orange-500" />
              {t.projects.placeholder}
            </div>
          ) : null}
        </div>

        <div className="p-6 sm:p-7">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-2xl font-black text-slate-950 sm:text-3xl">{project.title}</h3>
              {project.subtitle ? <p className="mt-2 text-sm font-bold text-blue-600">{project.subtitle}</p> : null}
            </div>
            <button
              type="button"
              onClick={() => onOpen(project)}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-800 shadow-sm transition hover:border-bluewave/45 hover:bg-sky-50"
            >
              {t.projects.preview}
              <ArrowUpRight className="h-4 w-4 text-orange-500" />
            </button>
          </div>

          <p className="mt-5 text-sm leading-7 text-muted">{project.description[lang]}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.features[lang].slice(0, project.featured ? 8 : 5).map((feature) => (
              <span key={feature} className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 shadow-sm">
                {feature}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span key={item} className="rounded-lg bg-slate-100 px-3 py-2 text-xs font-bold text-slate-700">
                {item}
              </span>
            ))}
          </div>

          {project.links?.length ? (
            <div className="mt-6 flex flex-wrap gap-2">
              {project.links.map((link) => {
                const linkLabel = typeof link.label === 'string' ? link.label : link.label[lang]
                return (
                  <a
                    key={linkLabel}
                    href={link.href}
                    className="inline-flex items-center gap-2 rounded-lg border border-orange-200 bg-orange-50 px-3 py-2 text-xs font-bold text-orange-700 transition hover:bg-orange-100"
                  >
                    {linkLabel}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )
              })}
            </div>
          ) : null}
        </div>
      </div>
    </motion.article>
  )
}
