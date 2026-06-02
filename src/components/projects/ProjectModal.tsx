import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Check, X } from 'lucide-react'
import { copy } from '../../data/portfolio'
import type { Lang, Project } from '../../types'
import { ProjectDiagram } from './ProjectDiagram'

type ProjectModalProps = {
  project: Project | null
  lang: Lang
  onClose: () => void
}

export function ProjectModal({ project, lang, onClose }: ProjectModalProps) {
  const t = copy[lang]

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-[70] grid place-items-center bg-slate-950/30 p-4 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.article
            className="glass-panel max-h-[88vh] w-full max-w-5xl overflow-y-auto"
            initial={{ scale: 0.94, y: 28, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.96, y: 20, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 230, damping: 26 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-slate-200 p-5">
              <div>
                <p className="text-sm font-bold text-blue-600">{project.subtitle ?? t.projects.featured}</p>
                <h3 className="mt-2 text-3xl font-black text-slate-950">{project.title}</h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-slate-200 bg-white text-slate-800 shadow-sm transition hover:bg-slate-100"
                aria-label={t.projects.close}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="grid gap-6 p-5 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="relative min-h-72 overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
                {project.screenshots?.[0] ? (
                  <img src={project.screenshots[0].src} alt={project.screenshots[0].alt} className="absolute inset-0 h-full w-full object-cover" />
                ) : (
                  <ProjectDiagram icon={project.icon} />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-white/85 via-white/20 to-transparent" />
              </div>

              <div className="space-y-6">
                <p className="leading-7 text-muted">{project.description[lang]}</p>

                {project.links?.length ? (
                  <div>
                    <h4 className="mb-3 font-bold text-slate-950">{t.projects.links}</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          className="inline-flex items-center gap-2 rounded-lg border border-orange-200 bg-orange-50 px-3 py-2 text-xs font-bold text-orange-700 transition hover:bg-orange-100"
                        >
                          {link.label}
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      ))}
                    </div>
                  </div>
                ) : null}

                <div>
                  <h4 className="mb-3 font-bold text-slate-950">{t.projects.features}</h4>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {project.features[lang].map((feature) => (
                      <div key={feature} className="flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700">
                        <Check className="h-4 w-4 text-bluewave" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="mb-3 font-bold text-slate-950">{t.projects.stack}</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-700 shadow-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-l-2 border-bluewave/70 pl-4 text-sm leading-6 text-slate-700 rtl:border-l-0 rtl:border-r-2 rtl:pl-0 rtl:pr-4">
                  <strong className="text-blue-600">{t.projects.highlight}: </strong>
                  {project.highlight[lang]}
                </div>
              </div>
            </div>

            {project.screenshots?.length ? (
              <div className="grid gap-4 border-t border-slate-200 p-5 sm:grid-cols-2">
                {project.screenshots.map((screenshot) => (
                  <figure key={screenshot.src} className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
                    <img src={screenshot.src} alt={screenshot.alt} className="aspect-video w-full object-cover transition duration-500 group-hover:scale-105" />
                    <figcaption className="border-t border-slate-200 px-4 py-3 text-sm font-bold text-slate-800">{screenshot.label}</figcaption>
                  </figure>
                ))}
              </div>
            ) : null}
          </motion.article>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
