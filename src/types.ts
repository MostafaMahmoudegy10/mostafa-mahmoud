import type { LucideIcon } from 'lucide-react'

export type Lang = 'en' | 'ar'
export type LocalizedText = Record<Lang, string>

export type SkillCategory = 'backend' | 'architecture' | 'database' | 'frontend' | 'tools'

export type Project = {
  title: string
  subtitle?: string
  description: LocalizedText
  businessCategory?: LocalizedText
  businessValue?: LocalizedText
  businessProblems?: Record<Lang, string[]>
  features: Record<Lang, string[]>
  stack: string[]
  highlight: LocalizedText
  icon: LucideIcon
  featured?: boolean
  technicalHighlights?: string[]
  links?: ProjectLink[]
  screenshots?: ProjectScreenshot[]
}

export type ProjectLink = {
  label: string | LocalizedText
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
  title: string | LocalizedText
  text?: string
}

export type ServiceCard = {
  icon: LucideIcon
  title: LocalizedText | string
  description?: LocalizedText | string
  deliverables?: Record<Lang, string[]>
  text?: string
}

export type WhyCard = {
  icon: LucideIcon
  title: string
  text: string
}

export type ProcessStep = {
  icon: LucideIcon
  title: LocalizedText | string
  description?: LocalizedText | string
  text?: string
}

export type ContactItem = {
  icon: LucideIcon
  label: LocalizedText | string
  value: string
  href: string
}

