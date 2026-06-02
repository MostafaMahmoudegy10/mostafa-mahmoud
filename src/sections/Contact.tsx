import { useState, type FormEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Send } from 'lucide-react'
import { fadeUp, stagger } from '../animations/variants'
import { MagneticButton } from '../components/ui/MagneticButton'
import { Reveal } from '../components/ui/Reveal'
import { Section } from '../components/ui/Section'
import { contactItems, copy } from '../data/portfolio'
import type { Lang } from '../types'

export function Contact({ lang }: { lang: Lang }) {
  const t = copy[lang]
  const [sent, setSent] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <Section id="contact" eyebrow={t.contact.eyebrow} title={t.contact.title}>
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="space-y-6">
          <p className="text-lg leading-8 text-muted">{t.contact.copy}</p>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="grid gap-3">
            {contactItems.map((item) => {
              const Icon = item.icon
              const itemLabel = typeof item.label === 'string' ? item.label : item.label[lang]
              return (
                <motion.a
                  key={itemLabel}
                  variants={fadeUp}
                  whileHover={{ x: lang === 'ar' ? -7 : 7 }}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="thin-glass group flex items-center justify-between gap-4 p-4"
                >
                  <span className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-lg bg-sky-50 text-bluewave">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-sm font-bold text-slate-950">{itemLabel}</span>
                      <span className="mt-1 block text-sm text-muted">{item.value}</span>
                    </span>
                  </span>
                  <span className="h-2 w-2 rounded-full bg-orangecore transition group-hover:scale-[1.8]" />
                </motion.a>
              )
            })}
          </motion.div>
        </Reveal>

        <motion.form
          onSubmit={handleSubmit}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="glass-panel grid gap-4 p-5 sm:p-6"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <input className="input-field" placeholder={t.contact.name} required />
            <input className="input-field" type="email" placeholder={t.contact.email} required />
          </div>
          <textarea className="input-field min-h-40 resize-y" placeholder={t.contact.message} required />
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <MagneticButton asButton variant="primary">
              {t.contact.send}
              <Send className="h-5 w-5" />
            </MagneticButton>
            <AnimatePresence>
              {sent ? (
                <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-sm font-semibold text-blue-600">
                  {t.contact.sent}
                </motion.p>
              ) : null}
            </AnimatePresence>
          </div>
        </motion.form>
      </div>
    </Section>
  )
}
