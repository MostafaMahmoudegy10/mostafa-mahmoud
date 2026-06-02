import type { LucideIcon } from 'lucide-react'

export type Lang = 'en' | 'ar'
export type LocalizedText = Record<Lang, string>

export type SkillCategory = 'backend' | 'architecture' | 'database' | 'frontend' | 'tools'

export type Project = {
  title: string
  subtitle?: string
  description: LocalizedText
  features: Record<Lang, string[]>
  stack: string[]
  highlight: LocalizedText
  icon: LucideIcon
  featured?: boolean
  technicalHighlights?: string[]
  businessProblems?: string[]
  links?: ProjectLink[]
  screenshots?: ProjectScreenshot[]
}

export type ProjectLink = {
  label: string
  href: string
}

export type ProjectScreenshot = {
  src: string
  alt: string
  label: string
}

export type SkillGroup = {
  key: SkillCategory
  icon: LucideIcon
  value: number
  skills: string[]
}

export type ExperienceItem = {
  title: LocalizedText
  icon: LucideIcon
  lines: Record<Lang, string[]>
}

export type Achievement = {
  icon: LucideIcon
  title: LocalizedText
  text: LocalizedText
}

export type Stat = {
  value: number
  suffix: string
  label: LocalizedText
}

export type ProblemCard = {
  icon: LucideIcon
  title: string
  text: string
}

export type ServiceCard = ProblemCard
export type WhyCard = ProblemCard

export type ProcessStep = {
  icon: LucideIcon
  title: string
  text: string
}

export type ContactItem = {
  icon: LucideIcon
  label: string
  value: string
  href: string
}
