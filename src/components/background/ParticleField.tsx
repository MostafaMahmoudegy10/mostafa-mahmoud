import { useMemo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export function ParticleField() {
  const shouldReduceMotion = useReducedMotion()
  const particles = useMemo(
    () =>
      Array.from({ length: 64 }, (_, index) => ({
        id: index,
        left: `${(index * 37) % 100}%`,
        top: `${(index * 53) % 100}%`,
        color: index % 3 === 0 ? '#60a5fa' : index % 3 === 1 ? '#fb923c' : '#38bdf8',
        duration: 9 + (index % 7),
        delay: (index % 9) * 0.34,
      })),
    [],
  )

  if (shouldReduceMotion) return null

  return (
    <div aria-hidden="true">
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="particle"
          style={{ left: particle.left, top: particle.top, color: particle.color }}
          animate={{ y: [0, -24, 0], opacity: [0.08, 0.34, 0.08], scale: [1, 1.6, 1] }}
          transition={{ duration: particle.duration, delay: particle.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}
