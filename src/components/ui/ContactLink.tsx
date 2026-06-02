import { ArrowUpRight, type LucideIcon } from 'lucide-react'

type ContactLinkProps = {
  href: string
  icon: LucideIcon
  label: string
}

export function ContactLink({ href, icon: Icon, label }: ContactLinkProps) {
  return (
    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="thin-glass group flex items-center justify-between gap-4 px-4 py-3 text-slate-900 transition hover:border-bluewave/40 hover:bg-sky-50">
      <span className="flex items-center gap-3">
        <Icon className="h-5 w-5 text-bluewave" />
        <span className="font-semibold">{label}</span>
      </span>
      <ArrowUpRight className="h-4 w-4 text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-orange-500 rtl:rotate-[-90deg]" />
    </a>
  )
}
