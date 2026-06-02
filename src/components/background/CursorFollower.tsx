import { useEffect } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'

export function CursorFollower() {
  const shouldReduceMotion = useReducedMotion()
  const cursorX = useMotionValue(-80)
  const cursorY = useMotionValue(-80)
  const springX = useSpring(cursorX, { stiffness: 320, damping: 34 })
  const springY = useSpring(cursorY, { stiffness: 320, damping: 34 })

  useEffect(() => {
    if (shouldReduceMotion) return undefined
    const move = (event: PointerEvent) => {
      cursorX.set(event.clientX - 22)
      cursorY.set(event.clientY - 22)
    }
    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [cursorX, cursorY, shouldReduceMotion])

  if (shouldReduceMotion) return null

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[80] hidden h-11 w-11 rounded-full border border-orange-300/70 bg-orange-100/20 shadow-[0_0_30px_rgba(251,146,60,0.18)] md:block"
      style={{ x: springX, y: springY }}
    />
  )
}
