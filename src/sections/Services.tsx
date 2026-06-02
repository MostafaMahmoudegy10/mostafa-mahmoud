import { motion } from 'framer-motion'
import { fadeUp, stagger } from '../animations/variants'
import { Section } from '../components/ui/Section'
import { copy, services } from '../data/portfolio'
import type { Lang } from '../types'

export function Services({ lang }: { lang: Lang }) {
  const t = copy[lang]

  return (
    <Section id="services" eyebrow={t.services.eyebrow} title={t.services.title}>
      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon
          return (
            <motion.article key={service.title} variants={fadeUp} whileHover={{ y: -8 }} className="glass-panel p-6">
              <div className="mb-8 grid h-12 w-12 place-items-center rounded-lg border border-sky-100 bg-sky-50 text-bluewave">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-black text-slate-950">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{service.text}</p>
            </motion.article>
          )
        })}
      </motion.div>
    </Section>
  )
}
