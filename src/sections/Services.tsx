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
        {services.map((service, index) => {
          const Icon = service.icon
          const serviceTitle = typeof service.title === 'string' ? service.title : service.title[lang]
          const serviceDesc = typeof service.description === 'string' ? service.description : service.description?.[lang]
          const groups = [
            { label: lang === 'ar' ? 'أمثلة' : 'Examples', items: service.examples?.[lang] || [] },
            { label: lang === 'ar' ? 'التسليمات' : 'Deliverables', items: service.deliverables?.[lang] || [] },
            { label: lang === 'ar' ? 'الميزات' : 'Features', items: service.features?.[lang] || [] },
          ].filter((group) => group.items.length > 0)

          return (
            <motion.article key={serviceTitle} variants={fadeUp} whileHover={{ y: -8 }} className="glass-panel group flex h-full flex-col p-6">
              <div className="mb-6 flex items-start justify-between gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-lg border border-sky-100 bg-sky-50 text-bluewave transition group-hover:border-orange-200 group-hover:bg-orange-50 group-hover:text-orange-500">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-black text-slate-400">
                  0{index + 1}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-950">{serviceTitle}</h3>
              {serviceDesc && <p className="mt-2 text-sm leading-6 text-muted">{serviceDesc}</p>}
              <div className="mt-5 flex flex-1 flex-col gap-5">
                {groups.map((group) => (
                  <div key={group.label}>
                    <p className="mb-2 text-xs font-black uppercase text-blue-600">{group.label}</p>
                    <ul className="space-y-2">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-bluewave" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.article>
          )
        })}
      </motion.div>
    </Section>
  )
}
