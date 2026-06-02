import { AnimatePresence, motion } from 'framer-motion'
import { Code2, Languages, Menu, Rocket, X } from 'lucide-react'
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
      className="fixed inset-x-0 top-0 z-50 border-b border-white/50 bg-white/72 backdrop-blur-2xl"
    >
      <nav className="section-shell flex h-[72px] items-center justify-between gap-4">
        <a href="#hero" className="group flex items-center gap-3" aria-label="Mostafa Mahmoud home">
          <span className="grid h-11 w-11 place-items-center rounded-lg border border-slate-200 bg-slate-950 text-white shadow-sm transition group-hover:border-orange-300 group-hover:bg-orange-500">
            <Code2 className="h-5 w-5" />
          </span>
          <span className="hidden sm:block">
            <span className="block text-sm font-black leading-tight text-slate-950">Mostafa Mahmoud</span>
            <span className="block text-xs font-semibold text-muted">Product-minded software engineer</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 rounded-lg border border-slate-200 bg-white/74 p-1 shadow-sm lg:flex">
          {sections.map((section, index) => (
            <a
              key={section}
              href={`#${section}`}
              className="rounded-lg px-3 py-2 text-sm font-bold text-slate-500 transition hover:bg-slate-950 hover:text-white"
            >
              {t.nav[index]}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onLang}
            className="group inline-flex h-10 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 text-sm font-bold text-slate-700 shadow-sm transition hover:border-bluewave/50 hover:bg-sky-50"
            type="button"
          >
            <Languages className="h-4 w-4 text-bluewave" />
            <span>{t.nextLocale}</span>
          </button>
          <a
            href="#contact"
            className="hidden h-10 items-center gap-2 rounded-lg bg-slate-950 px-4 text-sm font-black text-white shadow-sm transition hover:bg-orange-500 md:inline-flex"
          >
            <Rocket className="h-4 w-4" />
            {lang === 'ar' ? 'ابدأ مشروعك' : 'Start a Project'}
          </a>
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
            <div className="section-shell grid gap-1 py-3">
              {sections.map((section, index) => (
                <a
                  key={section}
                  href={`#${section}`}
                  onClick={onMenu}
                  className="rounded-lg px-3 py-3 text-sm font-bold text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
                >
                  {t.nav[index]}
                </a>
              ))}
              <a
                href="#contact"
                onClick={onMenu}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-4 py-3 text-sm font-black text-white transition hover:bg-orange-500"
              >
                <Rocket className="h-4 w-4" />
                {lang === 'ar' ? 'ابدأ مشروعك' : 'Start a Project'}
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  )
}
