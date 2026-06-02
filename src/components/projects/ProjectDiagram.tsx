import { motion } from 'framer-motion'
import { Database, GitBranch, Palette, UserRound, type LucideIcon } from 'lucide-react'

export function ProjectDiagram({ icon: Icon }: { icon: LucideIcon }) {
  const nodes = [
    { icon: UserRound, x: '18%', y: '28%' },
    { icon: Palette, x: '50%', y: '20%' },
    { icon: Database, x: '78%', y: '34%' },
    { icon: GitBranch, x: '28%', y: '70%' },
    { icon: Icon, x: '63%', y: '68%' },
  ]

  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(96,165,250,0.16),transparent_36%,rgba(251,146,60,0.12))]" />
      <svg className="absolute inset-0 h-full w-full opacity-80" viewBox="0 0 520 260" fill="none" aria-hidden="true">
        <path d="M100 72 C190 28 250 44 330 86 S430 118 470 78" stroke="url(#lineA)" strokeWidth="1.5" />
        <path d="M140 185 C218 150 274 170 330 116 S410 80 440 150" stroke="url(#lineA)" strokeWidth="1.5" />
        <path d="M265 58 V198" stroke="url(#lineB)" strokeWidth="1.5" strokeDasharray="7 8" />
        <defs>
          <linearGradient id="lineA" x1="84" y1="62" x2="484" y2="174" gradientUnits="userSpaceOnUse">
            <stop stopColor="#06b6d4" />
            <stop offset="1" stopColor="#f97316" />
          </linearGradient>
          <linearGradient id="lineB" x1="265" y1="58" x2="265" y2="198" gradientUnits="userSpaceOnUse">
            <stop stopColor="#f97316" />
            <stop offset="1" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
      </svg>
      {nodes.map((node, index) => {
        const NodeIcon = node.icon
        return (
          <motion.div
            key={`${node.x}-${node.y}`}
            className="absolute grid h-12 w-12 place-items-center rounded-lg border border-slate-200 bg-white/78 text-bluewave shadow-sm backdrop-blur"
            style={{ left: node.x, top: node.y }}
            animate={{ y: [0, index % 2 === 0 ? -10 : 10, 0] }}
            transition={{ duration: 4 + index * 0.3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <NodeIcon className="h-5 w-5" />
          </motion.div>
        )
      })}
    </div>
  )
}
