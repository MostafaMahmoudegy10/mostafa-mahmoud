import { motion } from 'framer-motion'
import type { Lang } from '../../types'

export function LoadingScreen({ lang }: { lang: Lang }) {
  return (
    <motion.div className="fixed inset-0 z-[90] grid place-items-center bg-deep" exit={{ opacity: 0, transition: { duration: 0.55, ease: 'easeInOut' } }}>
      <div className="w-[min(420px,calc(100%-32px))] text-center">
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="mx-auto mb-6 grid h-20 w-20 place-items-center rounded-lg border border-orange-200 bg-orange-50 text-2xl font-black text-orange-600 shadow-sm"
        >
          MM
        </motion.div>
        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-5 text-sm font-semibold text-muted">
          {lang === 'en' ? 'Preparing a clean product experience' : 'تجهيز تجربة منتج نظيفة'}
        </motion.p>
        <div className="h-1 overflow-hidden rounded-full bg-slate-200">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-bluewave via-cyanline to-orangecore"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </div>
    </motion.div>
  )
}
