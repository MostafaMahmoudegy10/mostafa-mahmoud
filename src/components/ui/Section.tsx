import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type SectionProps = {
  id: string
  eyebrow: string
  title: string
  children: ReactNode
}

export function Section({ id, eyebrow, title, children }: SectionProps) {
  return (
    <section id={id} className="relative py-24">
      <div className="section-shell">
        <Reveal className="mb-12 max-w-4xl">
          <p className="mb-3 text-sm font-bold text-blue-600">{eyebrow}</p>
          <h2 className="edge-line text-3xl font-black leading-tight text-slate-950 sm:text-5xl">{title}</h2>
        </Reveal>
        {children}
      </div>
    </section>
  )
}
