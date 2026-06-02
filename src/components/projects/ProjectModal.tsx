import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Check, ChevronLeft, ChevronRight, Images, Monitor, Smartphone, X } from 'lucide-react'
import { copy } from '../../data/portfolio'
import type { Lang, Project } from '../../types'
import { ProjectDiagram } from './ProjectDiagram'
import { ProjectPreview } from './ProjectPreview'

type ProjectModalProps = {
  project: Project | null
  lang: Lang
  onClose: () => void
}

export function ProjectModal({ project, lang, onClose }: ProjectModalProps) {
  const t = copy[lang]
  const [activeFilter, setActiveFilter] = useState<'all' | 'desktop' | 'mobile'>('all')
  const [activeIndex, setActiveIndex] = useState(0)
  const visibleLinks = project?.links?.filter((link) => link.href !== 'placeholder') || []
  const screenshots = project?.screenshots || []
  const hasDesktopScreens = screenshots.some((screenshot) => screenshot.orientation !== 'mobile')
  const hasMobileScreens = screenshots.some((screenshot) => screenshot.orientation === 'mobile')
  const galleryFilters = [
    { key: 'all' as const, label: lang === 'ar' ? 'الكل' : 'All', icon: Images },
    { key: 'desktop' as const, label: lang === 'ar' ? 'لوحات التحكم' : 'Dashboards', icon: Monitor },
    { key: 'mobile' as const, label: lang === 'ar' ? 'الموبايل' : 'Mobile app', icon: Smartphone },
  ].filter((filter) => filter.key === 'all' || (filter.key === 'desktop' ? hasDesktopScreens : hasMobileScreens))
  const filteredScreenshots = useMemo(
    () =>
      screenshots.filter(
        (screenshot) =>
          activeFilter === 'all' ||
          (activeFilter === 'desktop' ? screenshot.orientation !== 'mobile' : screenshot.orientation === 'mobile'),
      ),
    [activeFilter, screenshots],
  )
  const activeScreenshot = filteredScreenshots[activeIndex] || filteredScreenshots[0]

  useEffect(() => {
    setActiveFilter('all')
    setActiveIndex(0)
  }, [project?.title])

  useEffect(() => {
    setActiveIndex(0)
  }, [activeFilter, project?.title])

  function showPreviousScreenshot() {
    setActiveIndex((current) => (current === 0 ? filteredScreenshots.length - 1 : current - 1))
  }

  function showNextScreenshot() {
    setActiveIndex((current) => (current + 1) % filteredScreenshots.length)
  }

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-70 grid place-items-center bg-slate-950/30 p-4 backdrop-blur-xl"
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
                {project.businessCategory && (
                  <p className="text-sm font-bold text-orange-600">
                    {typeof project.businessCategory === 'string' ? project.businessCategory : project.businessCategory[lang]}
                  </p>
                )}
                {project.subtitle && (
                  <p className="text-sm font-bold text-blue-600">{project.subtitle}</p>
                )}
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
                  <ProjectPreview project={project} />
                ) : (
                  <ProjectDiagram icon={project.icon} />
                )}
                <div className="absolute inset-0 bg-linear-to-t from-white/78 via-white/12 to-transparent" />
              </div>

              <div className="space-y-6">
                <div>
                  <p className="leading-7 text-muted">{project.description[lang]}</p>
                </div>

                {project.businessValue && (
                  <div>
                    <h4 className="mb-3 font-bold text-slate-950">{lang === 'ar' ? 'لماذا المشروع مهم' : 'Why it matters'}</h4>
                    <p className="text-sm leading-6 text-slate-700">
                      {typeof project.businessValue === 'string' ? project.businessValue : project.businessValue[lang]}
                    </p>
                  </div>
                )}

                {project.businessProblems && project.businessProblems[lang]?.length ? (
                  <div>
                    <h4 className="mb-3 font-bold text-slate-950">{lang === 'ar' ? 'المشاكل التي يحلها' : 'Problems it solves'}</h4>
                    <ul className="space-y-2">
                      {project.businessProblems[lang].map((problem) => (
                        <li key={problem} className="flex items-start gap-2 text-sm text-slate-700">
                          <span className="mt-1.5 shrink-0 h-1.5 w-1.5 rounded-full bg-bluewave" />
                          <span>{problem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {visibleLinks.length ? (
                  <div>
                    <h4 className="mb-3 font-bold text-slate-950">{t.projects.links}</h4>
                    <div className="flex flex-wrap gap-2">
                      {visibleLinks.map((link) => {
                        const linkLabel = typeof link.label === 'string' ? link.label : link.label[lang]
                        return (
                          <a
                            key={linkLabel}
                            href={link.href}
                            target={link.href.startsWith('http') ? '_blank' : undefined}
                            rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                            className="inline-flex items-center gap-2 rounded-lg border border-orange-200 bg-orange-50 px-3 py-2 text-xs font-bold text-orange-700 transition hover:bg-orange-100"
                          >
                            {linkLabel}
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </a>
                        )
                      })}
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

            {screenshots.length ? (
              <section className="border-t border-slate-200 p-5">
                <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h4 className="font-bold text-slate-950">{t.projects.screenshots}</h4>
                    {activeScreenshot ? <p className="mt-1 text-sm font-semibold text-muted">{activeScreenshot.label}</p> : null}
                  </div>

                  {galleryFilters.length > 2 ? (
                    <div className="flex flex-wrap gap-2">
                      {galleryFilters.map((filter) => {
                        const Icon = filter.icon
                        const isActive = activeFilter === filter.key
                        return (
                          <button
                            key={filter.key}
                            type="button"
                            onClick={() => setActiveFilter(filter.key)}
                            className={`inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-xs font-bold transition ${
                              isActive
                                ? 'border-slate-950 bg-slate-950 text-white'
                                : 'border-slate-200 bg-white text-slate-700 hover:border-bluewave/50 hover:bg-sky-50'
                            }`}
                          >
                            <Icon className="h-4 w-4" />
                            {filter.label}
                          </button>
                        )
                      })}
                    </div>
                  ) : null}
                </div>

                {activeScreenshot ? (
                  <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-slate-50 p-4 sm:p-6">
                    <div className="grid min-h-[300px] place-items-center">
                      {activeScreenshot.orientation === 'mobile' ? (
                        <div className="w-full max-w-[270px] overflow-hidden rounded-[2rem] border-[10px] border-slate-950 bg-slate-950 shadow-2xl shadow-slate-400/50">
                          <img src={activeScreenshot.src} alt={activeScreenshot.alt} className="aspect-[9/16] w-full bg-white object-cover" />
                        </div>
                      ) : (
                        <div className="w-full max-w-4xl overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
                          <img src={activeScreenshot.src} alt={activeScreenshot.alt} className="aspect-video w-full bg-white object-contain" />
                        </div>
                      )}
                    </div>

                    {filteredScreenshots.length > 1 ? (
                      <>
                        <button
                          type="button"
                          onClick={showPreviousScreenshot}
                          className="absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-lg border border-slate-200 bg-white/90 text-slate-800 shadow-sm backdrop-blur transition hover:bg-sky-50 rtl:left-auto rtl:right-3"
                          aria-label="Previous screenshot"
                        >
                          <ChevronLeft className="h-5 w-5 rtl:rotate-180" />
                        </button>
                        <button
                          type="button"
                          onClick={showNextScreenshot}
                          className="absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-lg border border-slate-200 bg-white/90 text-slate-800 shadow-sm backdrop-blur transition hover:bg-sky-50 rtl:left-3 rtl:right-auto"
                          aria-label="Next screenshot"
                        >
                          <ChevronRight className="h-5 w-5 rtl:rotate-180" />
                        </button>
                      </>
                    ) : null}

                    <div className="absolute bottom-3 right-3 rounded-lg border border-slate-200 bg-white/90 px-3 py-1.5 text-xs font-black text-slate-600 shadow-sm backdrop-blur rtl:left-3 rtl:right-auto">
                      {activeIndex + 1} / {filteredScreenshots.length}
                    </div>
                  </div>
                ) : null}

                {filteredScreenshots.length > 1 ? (
                  <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
                    {filteredScreenshots.map((screenshot, index) => {
                      const isActive = index === activeIndex
                      return (
                        <button
                          key={screenshot.src}
                          type="button"
                          onClick={() => setActiveIndex(index)}
                          className={`shrink-0 overflow-hidden rounded-lg border bg-white p-1 shadow-sm transition ${
                            isActive ? 'border-bluewave ring-2 ring-bluewave/20' : 'border-slate-200 hover:border-orange-300'
                          }`}
                          aria-label={`Show ${screenshot.label}`}
                        >
                          <img
                            src={screenshot.src}
                            alt=""
                            className={`bg-slate-50 object-cover ${screenshot.orientation === 'mobile' ? 'h-24 w-14 rounded-md' : 'h-20 w-36 rounded-md'}`}
                          />
                        </button>
                      )
                    })}
                  </div>
                ) : null}
              </section>
            ) : null}
          </motion.article>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
