import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { CursorFollower } from './components/background/CursorFollower'
import { LoadingScreen } from './components/background/LoadingScreen'
import { NoiseLayer } from './components/background/NoiseLayer'
import { ParticleField } from './components/background/ParticleField'
import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { ProjectModal } from './components/projects/ProjectModal'
import { copy } from './data/portfolio'
import { Contact } from './sections/Contact'
import { Hero } from './sections/Hero'
import { Projects } from './sections/Projects'
import { Stats } from './sections/Stats'
import type { Lang, Project } from './types'

function App() {
  const [lang, setLang] = useState<Lang>('en')
  const [menuOpen, setMenuOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  const [activeProject, setActiveProject] = useState<Project | null>(null)
  const t = copy[lang]

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = t.dir
  }, [lang, t.dir])

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1350)
    return () => window.clearTimeout(timer)
  }, [])

  function toggleLang() {
    setLang((value) => (value === 'en' ? 'ar' : 'en'))
    setMenuOpen(false)
  }

  return (
    <div className="relative overflow-hidden bg-deep text-ice">
      <NoiseLayer />
      <CursorFollower />
      <ParticleField />
      <AnimatePresence>{loading ? <LoadingScreen lang={lang} /> : null}</AnimatePresence>

      <Header lang={lang} menuOpen={menuOpen} onMenu={() => setMenuOpen((value) => !value)} onLang={toggleLang} />

      <main>
        <Hero lang={lang} />
        <Projects lang={lang} onOpen={setActiveProject} />
        <Stats lang={lang} />
  
        <Contact lang={lang} />
      </main>

      <Footer lang={lang} />
      <ProjectModal project={activeProject} lang={lang} onClose={() => setActiveProject(null)} />
    </div>
  )
}

export default App
