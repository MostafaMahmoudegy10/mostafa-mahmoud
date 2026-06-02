import { motion } from 'framer-motion'
import { fadeUp, stagger } from '../animations/variants'
import { Section } from '../components/ui/Section'
import { copy, processSteps } from '../data/portfolio'
import type { Lang } from '../types'

export function Process({ lang }: { lang: Lang }) {
  const t = copy[lang]

  return (
    <Section id="process" eyebrow={t.process.eyebrow} title={t.process.title}>
      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} className="relative grid gap-4">
        <div className="absolute left-6 top-6 hidden h-[calc(100%-48px)] w-px bg-linear-to-b from-bluewave via-orangecore to-transparent md:block rtl:left-auto rtl:right-6" />
        {processSteps.map((step, index) => {
          const Icon = step.icon
          const stepTitle = typeof step.title === 'string' ? step.title : step.title[lang]
          const stepBody = step.description || step.text
          const stepDesc = typeof stepBody === 'string' ? stepBody : stepBody?.[lang]
          const deliverables = step.deliverables?.[lang] || []

          return (
            <motion.article key={stepTitle} variants={fadeUp} className="grid gap-4 md:grid-cols-[80px_1fr]">
              <div className="relative hidden md:block">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="relative z-10 grid h-12 w-12 place-items-center rounded-lg border border-slate-200 bg-white text-orange-500 shadow-sm"
                >
                  <Icon className="h-5 w-5" />
                </motion.div>
              </div>
              <motion.div whileHover={{ x: lang === 'ar' ? -8 : 8 }} className="glass-panel p-5">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-bold text-blue-600">{lang === 'ar' ? 'خطوة' : 'Step'} {index + 1}</p>
                    <h3 className="mt-1 text-xl font-black text-slate-950">{stepTitle}</h3>
                  </div>
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-orange-50 text-orange-500 md:hidden">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                {stepDesc && <p className="mt-3 text-sm leading-7 text-muted">{stepDesc}</p>}
                {deliverables.length > 0 && (
                  <div className="mt-5 rounded-lg border border-slate-200 bg-white/70 p-4">
                    <p className="mb-3 text-xs font-black uppercase text-orange-600">
                      {lang === 'ar' ? 'ستحصل على' : 'You will receive'}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {deliverables.map((item) => (
                        <span key={item} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-bold text-slate-700">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.article>
          )
        })}
      </motion.div>
    </Section>
  )
}
