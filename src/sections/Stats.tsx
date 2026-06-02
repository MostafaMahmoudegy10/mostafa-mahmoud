import { motion } from 'framer-motion'
import { fadeUp, stagger } from '../animations/variants'
import { AnimatedCounter } from '../components/ui/AnimatedCounter'
import { Reveal } from '../components/ui/Reveal'
import { copy, stats } from '../data/portfolio'
import type { Lang } from '../types'

export function Stats({ lang }: { lang: Lang }) {
  const t = copy[lang]

  return (
    <section id="results" className="relative py-24">
      <div className="section-shell">
        <Reveal className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-bold text-blue-600">{t.stats.eyebrow}</p>
          <h2 className="text-3xl font-black leading-tight text-slate-950 sm:text-5xl">{t.stats.title}</h2>
        </Reveal>

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div key={stat.label.en} variants={fadeUp} whileHover={{ y: -8 }} className="glass-panel relative min-h-48 overflow-hidden p-7">
              <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-bluewave via-orangecore to-cyanline" />
              <p className="text-sm font-bold text-muted">0{index + 1}</p>
              <div className="mt-8 text-5xl font-black text-slate-950">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-3 text-base font-semibold text-slate-600">{stat.label[lang]}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
