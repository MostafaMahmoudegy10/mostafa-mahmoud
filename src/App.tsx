import { useEffect, useState } from 'react'
import { CursorFollower } from './components/background/CursorFollower'
import { NoiseLayer } from './components/background/NoiseLayer'
import { ParticleField } from './components/background/ParticleField'
import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { ProjectModal } from './components/projects/ProjectModal'
import { copy } from './data/portfolio'
import { Contact } from './sections/Contact'
import { Hero } from './sections/Hero'
import { Process } from './sections/Process'
import { Projects } from './sections/Projects'
import { Services } from './sections/Services'
import { Stats } from './sections/Stats'
import { WhyWorkWithMe } from './sections/WhyWorkWithMe'
import type { Lang, Project } from './types'

function App() {
  const [lang, setLang] = useState<Lang>('en')
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeProject, setActiveProject] = useState<Project | null>(null)
  const t = copy[lang]

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = t.dir
  }, [lang, t.dir])

  function toggleLang() {
    setLang((value) => (value === 'en' ? 'ar' : 'en'))
    setMenuOpen(false)
  }

  return (
    <div className="relative overflow-hidden bg-deep text-ice">
      <NoiseLayer />
      <CursorFollower />
      <ParticleField />

      <Header lang={lang} menuOpen={menuOpen} onMenu={() => setMenuOpen((value) => !value)} onLang={toggleLang} />

      <main>
        <Hero lang={lang} />
        <Projects lang={lang} onOpen={setActiveProject} />
        <Stats lang={lang} />
        <Services lang={lang} />
        <Process lang={lang} />
        <WhyWorkWithMe lang={lang} />
        <Contact lang={lang} />
      </main>

      <Footer lang={lang} />
      <ProjectModal project={activeProject} lang={lang} onClose={() => setActiveProject(null)} />
    </div>
  )
}

export default App
