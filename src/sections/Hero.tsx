import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, BarChart3, CheckCircle2, Layers, MousePointer2, Sparkles, Workflow } from 'lucide-react'
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
  const imageY = useTransform(scrollYProgress, [0, 0.36], [0, -60])
  const proofPoints = lang === 'ar'
    ? ['منتجات حقيقية', 'لوحات تحكم واضحة', 'إطلاق جاهز للمستخدمين']
    : ['Real products', 'Clear dashboards', 'Launch-ready systems']

  return (
    <section id="hero" className="relative flex min-h-[100svh] items-center overflow-hidden bg-slate-950 pt-24 text-white">
      <motion.img
        src="/assets/hero-product-background.png"
        alt=""
        aria-hidden="true"
        style={{ y: imageY }}
        className="absolute inset-0 h-[112%] w-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/72 to-slate-950/10" />
      <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-transparent to-slate-950/26" />

      <motion.div
        aria-hidden="true"
        className="absolute inset-x-0 top-20 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ delay: 0.35, duration: 1.1 }}
      />

      <div className="section-shell relative z-10 pb-20">
        <motion.div style={{ y: contentY }} variants={stagger} initial="hidden" animate="visible" className="max-w-3xl">
          <motion.div variants={fadeUp} className="mb-5 inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/12 px-3 py-2 text-sm font-bold text-white shadow-sm backdrop-blur">
            <Sparkles className="h-4 w-4 text-orangecore" />
            {t.hero.kicker}
          </motion.div>

          <motion.h1 variants={fadeUp} className="max-w-4xl text-5xl font-black leading-[1.02] text-white sm:text-6xl lg:text-7xl">
            {t.hero.name}
          </motion.h1>

          <motion.div variants={fadeUp} className="mt-5 flex flex-wrap items-center gap-3">
            <span className="rounded-lg border border-white/18 bg-white/14 px-4 py-2 text-base font-bold text-white shadow-sm backdrop-blur">{t.hero.title}</span>
            <span className="rounded-lg border border-orange-300/40 bg-orange-400/18 px-4 py-2 text-base font-bold text-orange-100 backdrop-blur">{typed}</span>
          </motion.div>

          <motion.p variants={fadeUp} className="mt-7 max-w-3xl text-2xl font-semibold leading-snug text-slate-100 sm:text-3xl">
            {t.hero.intro}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-3">
            {proofPoints.map((point) => (
              <span key={point} className="inline-flex items-center gap-2 rounded-lg border border-white/16 bg-white/10 px-3 py-2 text-sm font-bold text-slate-100 backdrop-blur">
                <CheckCircle2 className="h-4 w-4 text-cyanline" />
                {point}
              </span>
            ))}
          </motion.div>

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

        <div className="pointer-events-none absolute right-0 top-1/2 hidden h-[520px] w-[44%] -translate-y-1/2 lg:block rtl:left-0 rtl:right-auto">
          <motion.div
            initial={{ opacity: 0, y: 28, rotate: -1 }}
            animate={{ opacity: 1, y: [0, -12, 0], rotate: [-1, 0.5, -1] }}
            transition={{ opacity: { duration: 0.7, delay: 0.2 }, y: { duration: 6, repeat: Infinity, ease: 'easeInOut' }, rotate: { duration: 6, repeat: Infinity, ease: 'easeInOut' } }}
            className="absolute right-8 top-4 w-72 rounded-lg border border-white/18 bg-white/14 p-5 text-white shadow-2xl shadow-slate-950/25 backdrop-blur-2xl rtl:left-8 rtl:right-auto"
          >
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm font-black">{lang === 'ar' ? 'رحلة المنتج' : 'Product Flow'}</p>
                <p className="mt-1 text-xs font-semibold text-slate-200">{lang === 'ar' ? 'من الفكرة للإطلاق' : 'Idea to launch'}</p>
              </div>
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-orange-400/20 text-orange-100">
                <Workflow className="h-5 w-5" />
              </div>
            </div>
            <div className="space-y-3">
              {(lang === 'ar' ? ['تخطيط', 'تصميم', 'بناء', 'إطلاق'] : ['Plan', 'Design', 'Build', 'Launch']).map((item, index) => (
                <div key={item} className="rounded-lg bg-white/12 px-3 py-3">
                  <div className="mb-2 flex items-center justify-between text-xs font-bold text-slate-100">
                    <span>{item}</span>
                    <span>{index + 1}/4</span>
                  </div>
                  <motion.div
                    className="h-1.5 rounded-full bg-linear-to-r from-cyanline to-orangecore"
                    initial={{ width: '28%' }}
                    animate={{ width: `${62 + index * 10}%` }}
                    transition={{ duration: 1.2, delay: 0.45 + index * 0.12 }}
                  />
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28, rotate: 1 }}
            animate={{ opacity: 1, y: [0, 14, 0], rotate: [1, -0.4, 1] }}
            transition={{ opacity: { duration: 0.7, delay: 0.35 }, y: { duration: 6.8, repeat: Infinity, ease: 'easeInOut' }, rotate: { duration: 6.8, repeat: Infinity, ease: 'easeInOut' } }}
            className="absolute right-2 top-56 w-80 rounded-lg border border-white/18 bg-slate-950/38 p-5 text-white shadow-2xl shadow-slate-950/30 backdrop-blur-2xl rtl:left-2 rtl:right-auto"
          >
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm font-black">{lang === 'ar' ? 'لوحة بزنس' : 'Business Dashboard'}</p>
                <p className="mt-1 text-xs font-semibold text-slate-200">{lang === 'ar' ? 'أرقام واضحة وقرارات أسرع' : 'Clear numbers, faster decisions'}</p>
              </div>
              <BarChart3 className="h-5 w-5 text-cyanline" />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {['5+', '100+', '24h'].map((item, index) => (
                <div key={item} className="rounded-lg border border-white/12 bg-white/10 p-3">
                  <p className="text-2xl font-black">{item}</p>
                  <motion.div
                    className="mt-4 h-2 rounded-full bg-linear-to-r from-bluewave to-orangecore"
                    initial={{ scaleX: 0.28 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.2, delay: 0.65 + index * 0.12 }}
                    style={{ originX: 0 }}
                  />
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: [0, -10, 0] }}
            transition={{ opacity: { duration: 0.7, delay: 0.5 }, y: { duration: 5.6, repeat: Infinity, ease: 'easeInOut' } }}
            className="absolute bottom-8 right-24 w-64 rounded-lg border border-white/18 bg-white/12 p-5 text-white shadow-2xl shadow-slate-950/20 backdrop-blur-2xl rtl:left-24 rtl:right-auto"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-cyanline/18 text-cyan-100">
                <Layers className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-black">{lang === 'ar' ? 'سيستم كامل' : 'Complete System'}</p>
                <p className="mt-1 text-xs font-semibold text-slate-200">{lang === 'ar' ? 'واجهة + داشبورد + إطلاق' : 'Frontend + dashboard + launch'}</p>
              </div>
            </div>
            <div className="grid gap-2">
              {(lang === 'ar' ? ['موقع', 'داشبورد', 'تطبيق', 'نشر'] : ['Website', 'Dashboard', 'App', 'Deploy']).map((item) => (
                <div key={item} className="rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-xs font-bold text-slate-100">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
