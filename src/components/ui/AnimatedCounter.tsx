import { useEffect, useRef, useState } from 'react'
import { animate, useInView, useMotionValue } from 'framer-motion'

type AnimatedCounterProps = {
  value: number
  suffix: string
}

export function AnimatedCounter({ value, suffix }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const motionValue = useMotionValue(0)
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return undefined
    const controls = animate(motionValue, value, {
      duration: value > 100 ? 2.4 : 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    })
    return () => controls.stop()
  }, [inView, motionValue, value])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}
