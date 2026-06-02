import { motion } from 'framer-motion'
import { fadeUp, stagger } from '../animations/variants'
import { Section } from '../components/ui/Section'
import { copy, services } from '../data/portfolio'
import type { Lang } from '../types'

export function Services({ lang }: { lang: Lang }) {
  const t = copy[lang]

  return (
    <Section id="services" eyebrow={t.services.eyebrow} title={t.services.title}>
      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon
          const serviceTitle = typeof service.title === 'string' ? service.title : service.title[lang]
          const serviceDesc = typeof service.description === 'string' ? service.description : service.description?.[lang]
          const deliverables = service.deliverables?.[lang] || []

          return (
            <motion.article key={serviceTitle} variants={fadeUp} whileHover={{ y: -8 }} className="glass-panel p-6 flex flex-col h-full">
              <div className="mb-6 grid h-12 w-12 place-items-center rounded-lg border border-sky-100 bg-sky-50 text-bluewave">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-950">{serviceTitle}</h3>
              {serviceDesc && <p className="mt-2 text-sm leading-6 text-muted">{serviceDesc}</p>}
              {deliverables.length > 0 && (
                <ul className="mt-4 space-y-2 flex-1">
                  {deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="mt-1.5 shrink-0 h-1.5 w-1.5 rounded-full bg-bluewave" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.article>
          )
        })}
      </motion.div>
    </Section>
  )
}

