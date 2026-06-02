import type { MouseEvent, ReactNode } from 'react'
import { motion, useMotionValue } from 'framer-motion'
import clsx from 'clsx'

type MagneticButtonProps = {
  children: ReactNode
  href?: string
  variant: 'primary' | 'secondary'
  asButton?: boolean
}

export function MagneticButton({ children, href, variant, asButton = false }: MagneticButtonProps) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  function handleMove(event: MouseEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect()
    x.set((event.clientX - rect.left - rect.width / 2) * 0.18)
    y.set((event.clientY - rect.top - rect.height / 2) * 0.18)
  }

  function handleLeave() {
    x.set(0)
    y.set(0)
  }

  const className = clsx(
    'inline-flex min-h-12 items-center justify-center gap-3 rounded-lg px-5 py-3 text-sm font-bold transition',
    variant === 'primary'
      ? 'bg-orangecore text-white shadow-[0_18px_48px_rgba(251,146,60,0.24)] hover:bg-orange-500'
      : 'border border-slate-200 bg-white text-slate-800 shadow-sm hover:border-bluewave/45 hover:bg-sky-50',
  )

  if (asButton) {
    return (
      <motion.button type="submit" style={{ x, y }} onMouseMove={handleMove} onMouseLeave={handleLeave} whileTap={{ scale: 0.98 }} className={className}>
        {children}
      </motion.button>
    )
  }

  return (
    <motion.a href={href} style={{ x, y }} onMouseMove={handleMove} onMouseLeave={handleLeave} whileTap={{ scale: 0.98 }} className={className}>
      {children}
    </motion.a>
  )
}
