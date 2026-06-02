import { motion } from 'framer-motion'
import { fadeUp, stagger } from '../animations/variants'
import { Section } from '../components/ui/Section'
import { copy, whyCards } from '../data/portfolio'
import type { Lang } from '../types'

export function WhyWorkWithMe({ lang }: { lang: Lang }) {
  const t = copy[lang]

  return (
    <Section id="why-me" eyebrow={t.why.eyebrow} title={t.why.title}>
      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {whyCards.map((card, index) => {
          const Icon = card.icon
          return (
            <motion.article key={card.title} variants={fadeUp} whileHover={{ y: -8, rotate: index % 2 === 0 ? 0.35 : -0.35 }} className="thin-glass p-6">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-lg bg-white text-bluewave shadow-sm">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="text-sm font-black text-slate-300">0{index + 1}</span>
              </div>
              <h3 className="text-xl font-black text-slate-950">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{card.text}</p>
            </motion.article>
          )
        })}
      </motion.div>
    </Section>
  )
}
