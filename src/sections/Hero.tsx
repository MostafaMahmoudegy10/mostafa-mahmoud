import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, BarChart3, Layers, MousePointer2, Sparkles, Workflow } from 'lucide-react'
import { fadeUp, stagger } from '../animations/variants'
import { MagneticButton } from '../components/ui/MagneticButton'
import { copy } from '../data/portfolio'
import { useTyping } from '../hooks/useTyping'
import type { Lang } from '../types'

export function Hero({ lang }: { lang: Lang }) {
  const t = copy[lang]
  const typed = useTyping(t.hero.typing)
  const { scrollYProgress } = useScroll()
  const contentY = useTransform(scrollYProgress, [0, 0.32], [0, 46])
  const visualY = useTransform(scrollYProgress, [0, 0.36], [0, -90])

  return (
    <section id="hero" className="relative flex min-h-[100svh] items-center overflow-hidden pt-24">
      <motion.div
        aria-hidden="true"
        className="absolute inset-x-0 top-20 h-px bg-gradient-to-r from-transparent via-bluewave/40 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ delay: 0.35, duration: 1.1 }}
      />

      <div className="section-shell grid items-center gap-12 pb-20 lg:grid-cols-[0.94fr_1.06fr]">
        <motion.div style={{ y: contentY }} variants={stagger} initial="hidden" animate="visible" className="relative z-10">
          <motion.div variants={fadeUp} className="mb-5 inline-flex items-center gap-2 rounded-lg border border-bluewave/20 bg-white/70 px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur">
            <Sparkles className="h-4 w-4 text-orangecore" />
            {t.hero.kicker}
          </motion.div>

          <motion.h1 variants={fadeUp} className="max-w-4xl text-5xl font-black leading-[1.02] text-slate-950 sm:text-6xl lg:text-7xl">
            {t.hero.name}
          </motion.h1>

          <motion.div variants={fadeUp} className="mt-5 flex flex-wrap items-center gap-3">
            <span className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-base font-bold text-slate-800 shadow-sm">{t.hero.title}</span>
            <span className="rounded-lg border border-orange-200 bg-orange-50 px-4 py-2 text-base font-bold text-orange-600">{typed}</span>
          </motion.div>

          <motion.p variants={fadeUp} className="mt-7 max-w-3xl text-2xl font-semibold leading-snug text-slate-700 sm:text-3xl">
            {t.hero.intro}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <MagneticButton href="#work" variant="primary">
              {t.hero.primary}
              <ArrowRight className="h-5 w-5 rtl:rotate-180" />
            </MagneticButton>
            <MagneticButton href="#contact" variant="secondary">
              {t.hero.secondary}
              <MousePointer2 className="h-5 w-5" />
            </MagneticButton>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: visualY }}
          initial={{ opacity: 0, y: 40, rotateX: 8 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative min-h-[520px]"
        >
          <div className="glass-panel mesh-border absolute inset-0 overflow-hidden p-4">
            <div className="grid h-full gap-4 md:grid-cols-[0.78fr_1.22fr]">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5.4, repeat: Infinity, ease: 'easeInOut' }}
                className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="mb-7 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-slate-950">Product Sprint</p>
                    <p className="mt-1 text-xs text-muted">Idea to shipped MVP</p>
                  </div>
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-orange-50 text-orangecore">
                    <Workflow className="h-5 w-5" />
                  </div>
                </div>
                <div className="space-y-3">
                  {['Plan', 'Design', 'Build', 'Launch'].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ width: '45%' }}
                      animate={{ width: `${72 + index * 7}%` }}
                      transition={{ duration: 1.1, delay: 0.45 + index * 0.12 }}
                      className="rounded-lg bg-slate-100 px-3 py-3 text-sm font-semibold text-slate-700"
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <div className="grid gap-4">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 6.2, repeat: Infinity, ease: 'easeInOut' }}
                  className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold text-slate-950">Business Dashboard</p>
                      <p className="mt-1 text-xs text-muted">Clean data, clear decisions</p>
                    </div>
                    <BarChart3 className="h-5 w-5 text-bluewave" />
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {['5+', '100+', '24h'].map((item) => (
                      <div key={item} className="rounded-lg bg-slate-50 p-4">
                        <p className="text-2xl font-black text-slate-950">{item}</p>
                        <div className="mt-4 h-2 rounded-full bg-gradient-to-r from-bluewave/70 to-orangecore/70" />
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5.8, repeat: Infinity, ease: 'easeInOut' }}
                  className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-lg bg-sky-50 text-bluewave">
                      <Layers className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-950">Modern Product UI</p>
                      <p className="mt-1 text-xs text-muted">Friendly, premium, responsive</p>
                    </div>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {['Website', 'Dashboard', 'MVP', 'Backend'].map((item) => (
                      <div key={item} className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-3 text-sm font-semibold text-slate-700">
                        {item}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          <motion.div
            aria-hidden="true"
            animate={{ x: [0, 18, 0], y: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -right-3 top-10 hidden rounded-lg border border-orange-200 bg-white/82 px-4 py-3 text-sm font-bold text-orange-600 shadow-lg backdrop-blur md:block"
          >
            Smooth launch flow
          </motion.div>
          <motion.div
            aria-hidden="true"
            animate={{ x: [0, -14, 0], y: [0, 12, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -left-4 bottom-16 hidden rounded-lg border border-sky-200 bg-white/82 px-4 py-3 text-sm font-bold text-blue-600 shadow-lg backdrop-blur md:block"
          >
            Clean product systems
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
