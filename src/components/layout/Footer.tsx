import { ArrowUpRight } from 'lucide-react'
import { copy } from '../../data/portfolio'
import type { Lang } from '../../types'

export function Footer({ lang }: { lang: Lang }) {
  const t = copy[lang]

  return (
    <footer className="border-t border-slate-200/80 bg-white/50 py-8">
      <div className="section-shell flex flex-col gap-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>{t.footer}</p>
        <a href="#hero" className="inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:text-orange-500">
          <ArrowUpRight className="h-4 w-4 -rotate-45" />
          Mostafa Mahmoud
        </a>
      </div>
    </footer>
  )
}
