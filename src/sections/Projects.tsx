import { motion } from 'framer-motion'
import { stagger } from '../animations/variants'
import { ProjectCard } from '../components/projects/ProjectCard'
import { Section } from '../components/ui/Section'
import { copy, projects } from '../data/portfolio'
import type { Lang, Project } from '../types'

type ProjectsProps = {
  lang: Lang
  onOpen: (project: Project) => void
}

export function Projects({ lang, onOpen }: ProjectsProps) {
  const t = copy[lang]

  return (
    <Section id="work" eyebrow={t.projects.eyebrow} title={t.projects.title}>
      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} className="grid gap-5 lg:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} lang={lang} index={index} onOpen={onOpen} />
        ))}
      </motion.div>
    </Section>
  )
}
