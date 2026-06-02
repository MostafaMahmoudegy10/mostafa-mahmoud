import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { fadeUp } from '../../animations/variants'

type RevealProps = {
  children: ReactNode
  className?: string
}

export function Reveal({ children, className }: RevealProps) {
  return (
    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} className={className}>
      {children}
    </motion.div>
  )
}
