import { AnimatePresence, motion } from 'framer-motion'
import { Languages, Menu, X } from 'lucide-react'
import { copy, sections } from '../../data/portfolio'
import type { Lang } from '../../types'

type HeaderProps = {
  lang: Lang
  menuOpen: boolean
  onMenu: () => void
  onLang: () => void
}

export function Header({ lang, menuOpen, onMenu, onLang }: HeaderProps) {
  const t = copy[lang]

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/78 backdrop-blur-xl"
    >
      <nav className="section-shell flex h-16 items-center justify-between gap-4">
        <a href="#hero" className="group flex items-center gap-3" aria-label="Mostafa Mahmoud home">
          <span className="grid h-10 w-10 place-items-center rounded-lg border border-orange-200 bg-orange-50 text-sm font-black text-orange-600 shadow-sm">
            MM
          </span>
          <span className="hidden text-sm font-semibold text-slate-900 sm:block">Mostafa Mahmoud</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {sections.map((section, index) => (
            <a
              key={section}
              href={`#${section}`}
              className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-500 transition hover:bg-slate-100 hover:text-slate-950"
            >
              {t.nav[index]}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onLang}
            className="group inline-flex h-10 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-bluewave/50 hover:bg-sky-50"
            type="button"
          >
            <Languages className="h-4 w-4 text-bluewave" />
            <span>{t.nextLocale}</span>
          </button>
          <button
            onClick={onMenu}
            className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 bg-white text-slate-800 shadow-sm lg:hidden"
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-slate-200 bg-white/95 lg:hidden"
          >
            <div className="section-shell grid py-3">
              {sections.map((section, index) => (
                <a
                  key={section}
                  href={`#${section}`}
                  onClick={onMenu}
                  className="rounded-lg px-2 py-3 text-sm font-semibold text-slate-500 transition hover:bg-slate-100 hover:text-slate-950"
                >
                  {t.nav[index]}
                </a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  )
}
