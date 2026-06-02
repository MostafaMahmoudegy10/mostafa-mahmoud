import { useEffect, useMemo, useRef, useState, type FormEvent, type MouseEvent, type ReactNode } from 'react'
import {
  AnimatePresence,
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from 'framer-motion'
import clsx from 'clsx'
import {
  ArrowUpRight,
  ChevronRight,
  Cloud,
  Code2,
  Command,
  Cpu,
  Database,
  ExternalLink,
  GitBranch,
  Globe2,
  GraduationCap,
  Languages,
  Lock,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Network,
  PackageCheck,
  Rocket,
  Send,
  Server,
  ShieldCheck,
  Sparkles,
  Terminal,
  UserRound,
  Workflow,
  X,
  Zap,
  type LucideIcon,
} from 'lucide-react'

type Lang = 'en' | 'ar'
type LocalizedText = Record<Lang, string>

type Project = {
  title: string
  description: LocalizedText
  features: Record<Lang, string[]>
  stack: string[]
  highlight: LocalizedText
  icon: LucideIcon
}

const copy = {
  en: {
    dir: 'ltr',
    nextLocale: 'AR',
    nav: ['About', 'Skills', 'Experience', 'Projects', 'Contact'],
    hero: {
      kicker: 'Giza, Egypt',
      name: 'Mostafa Mahmoud',
      arabicName: 'مصطفى محمود',
      role: 'Backend Developer | Full Stack Developer',
      intro:
        'I build secure Spring Boot backends, clean REST APIs, database-driven systems, and full-stack products that move from local code to VPS production.',
      primary: 'View Projects',
      secondary: 'Contact Me',
      typing: ['Spring Boot APIs', 'Scalable Backends', 'Production Deployments', 'React Interfaces'],
      cardTitle: 'System mindset',
      cardCopy: 'APIs, data models, security, deployment, and the calm engineering discipline that keeps products reliable.',
      available: 'Open to backend and full-stack opportunities',
    },
    about: {
      eyebrow: 'About Me',
      title: 'A backend-first engineer who also ships the interface.',
      text:
        'Passionate Software Engineer specializing in Backend Development using Java and Spring Boot. I enjoy building scalable applications, designing clean APIs, working with databases, and solving complex technical problems. I also have experience with React, cloud fundamentals, Linux servers, deployment, and modern software architecture.',
      goal:
        'My goal is to build reliable systems that solve real-world problems and continuously improve my engineering skills.',
      education: 'Bachelor of Computer Science',
      university: 'Misr University for Science and Technology (MUST)',
      graduation: 'Graduation Year: 2026',
      location: 'Giza, Egypt',
    },
    skills: {
      eyebrow: 'Technical Stack',
      title: 'Built around Java, Spring Boot, data, and production delivery.',
      backend: 'Backend',
      frontend: 'Frontend',
      databases: 'Databases',
      devops: 'DevOps & Tools',
      programming: 'Programming',
    },
    experience: {
      eyebrow: 'Experience',
      title: 'Training, team delivery, and production practice.',
    },
    projects: {
      eyebrow: 'Featured Projects',
      title: 'Selected systems with real backend depth.',
      preview: 'Preview',
      close: 'Close',
      features: 'Features',
      stack: 'Tech Stack',
      highlight: 'Highlight',
      architecture: 'Architecture View',
    },
    stats: {
      eyebrow: 'Engineering Signals',
      title: 'Focused on systems that are useful, maintainable, and deployed.',
    },
    wall: {
      eyebrow: 'Tech Stack Wall',
      title: 'Tools I use to design, build, test, and deploy software.',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Let us build something reliable.',
      copy:
        'Have a backend system, API, dashboard, or deployment problem? Send a message and I will get back with a practical engineering plan.',
      name: 'Your name',
      email: 'Email address',
      message: 'Project details',
      send: 'Send Message',
      sent: 'Message prepared. Connect the form to your preferred email service to make it live.',
    },
    footer: 'Backend Developer | Full Stack Developer based in Giza, Egypt.',
  },
  ar: {
    dir: 'rtl',
    nextLocale: 'EN',
    nav: ['نبذة', 'المهارات', 'الخبرة', 'المشاريع', 'تواصل'],
    hero: {
      kicker: 'الجيزة، مصر',
      name: 'مصطفى محمود',
      arabicName: 'Mostafa Mahmoud',
      role: 'مطور باك اند | مطور فل ستاك',
      intro:
        'أبني أنظمة Spring Boot آمنة، وواجهات REST نظيفة، وتطبيقات تعتمد على قواعد البيانات، ومنتجات Full Stack تنتقل من الكود المحلي إلى بيئة إنتاج على VPS.',
      primary: 'عرض المشاريع',
      secondary: 'تواصل معي',
      typing: ['واجهات Spring Boot', 'أنظمة قابلة للتوسع', 'نشر إنتاجي', 'واجهات React'],
      cardTitle: 'تفكير هندسي منظومي',
      cardCopy: 'واجهات API، نمذجة البيانات، الأمان، النشر، والانضباط الهندسي الذي يجعل المنتج موثوقا.',
      available: 'متاح لفرص Backend و Full Stack',
    },
    about: {
      eyebrow: 'نبذة عني',
      title: 'مهندس يبدأ من الباك اند ويستطيع تسليم التجربة كاملة.',
      text:
        'مهندس برمجيات شغوف متخصص في تطوير Backend باستخدام Java و Spring Boot. أستمتع ببناء تطبيقات قابلة للتوسع، وتصميم APIs نظيفة، والعمل مع قواعد البيانات، وحل المشكلات التقنية المعقدة. لدي أيضا خبرة في React، وأساسيات السحابة، وخوادم Linux، والنشر، ومعمارية البرمجيات الحديثة.',
      goal:
        'هدفي بناء أنظمة موثوقة تحل مشكلات حقيقية، مع تطوير مهاراتي الهندسية باستمرار.',
      education: 'بكالوريوس علوم الحاسب',
      university: 'جامعة مصر للعلوم والتكنولوجيا MUST',
      graduation: 'سنة التخرج: 2026',
      location: 'الجيزة، مصر',
    },
    skills: {
      eyebrow: 'المهارات التقنية',
      title: 'خبرة مرتكزة على Java و Spring Boot وقواعد البيانات والتسليم الإنتاجي.',
      backend: 'Backend',
      frontend: 'Frontend',
      databases: 'Databases',
      devops: 'DevOps & Tools',
      programming: 'Programming',
    },
    experience: {
      eyebrow: 'الخبرة',
      title: 'تدريب، عمل جماعي، وممارسة قريبة من بيئة الإنتاج.',
    },
    projects: {
      eyebrow: 'مشاريع مميزة',
      title: 'أنظمة مختارة بعمق واضح في الباك اند.',
      preview: 'معاينة',
      close: 'إغلاق',
      features: 'المميزات',
      stack: 'التقنيات',
      highlight: 'أبرز نقطة',
      architecture: 'عرض معماري',
    },
    stats: {
      eyebrow: 'مؤشرات هندسية',
      title: 'تركيز على أنظمة مفيدة، قابلة للصيانة، ومنشورة فعليا.',
    },
    wall: {
      eyebrow: 'تقنيات العمل',
      title: 'الأدوات التي أستخدمها لتصميم وبناء واختبار ونشر البرمجيات.',
    },
    contact: {
      eyebrow: 'تواصل',
      title: 'لنبني شيئا موثوقا.',
      copy:
        'لديك نظام Backend أو API أو Dashboard أو تحدي نشر؟ ارسل رسالة وسأعود بخطة هندسية عملية.',
      name: 'الاسم',
      email: 'البريد الإلكتروني',
      message: 'تفاصيل المشروع',
      send: 'إرسال الرسالة',
      sent: 'تم تجهيز الرسالة. اربط النموذج بخدمة البريد المناسبة ليصبح فعالا.',
    },
    footer: 'مطور Backend و Full Stack من الجيزة، مصر.',
  },
} as const

const sections = ['about', 'skills', 'experience', 'projects', 'contact'] as const

const skillGroups = [
  {
    key: 'backend',
    icon: Server,
    value: 95,
    skills: [
      'Java',
      'Spring Boot',
      'Spring MVC',
      'Spring Security',
      'Spring Data JPA',
      'REST APIs',
      'Hibernate',
      'Microservices Basics',
      'RabbitMQ',
      'Event Driven Architecture',
    ],
  },
  {
    key: 'frontend',
    icon: Code2,
    value: 82,
    skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS'],
  },
  {
    key: 'databases',
    icon: Database,
    value: 88,
    skills: ['MySQL', 'SQL Server', 'H2 Database', 'Database Optimization'],
  },
  {
    key: 'devops',
    icon: Cloud,
    value: 84,
    skills: ['Git', 'GitHub', 'Linux', 'Ubuntu', 'Apache Tomcat', 'Apache Server', 'VPS Deployment', 'Postman', 'Maven'],
  },
  {
    key: 'programming',
    icon: Terminal,
    value: 90,
    skills: ['Java', 'C++', 'Python', 'Algorithms', 'Problem Solving'],
  },
] as const

const projects: Project[] = [
  {
    title: 'El-Habashy Auctions Platform',
    icon: Rocket,
    description: {
      en:
        'A full-stack auction management platform developed for a real company. The system allows administrators to manage auctions, upload images, organize categories, and publish auction listings. Includes a public website and admin dashboard.',
      ar:
        'منصة مزادات Full Stack تم تطويرها لشركة حقيقية. تتيح للنظام الإداري إدارة المزادات ورفع الصور وتنظيم التصنيفات ونشر قوائم المزادات، مع موقع عام ولوحة تحكم.',
    },
    features: {
      en: [
        'Admin Dashboard',
        'Auction Management',
        'Image Upload System',
        'Category Filtering',
        'Authentication & Authorization',
        'Responsive Design',
        'VPS Deployment',
        'Domain Configuration',
      ],
      ar: [
        'لوحة تحكم',
        'إدارة المزادات',
        'نظام رفع الصور',
        'فلترة التصنيفات',
        'مصادقة وصلاحيات',
        'تصميم متجاوب',
        'نشر على VPS',
        'إعداد الدومين',
      ],
    },
    stack: ['Spring Boot', 'Thymeleaf', 'MySQL', 'Apache Tomcat', 'Ubuntu VPS', 'Bootstrap'],
    highlight: {
      en: 'Deployed on a live VPS with custom domain configuration and a production-ready environment.',
      ar: 'تم نشره على VPS حقيقي مع إعداد دومين وبيئة جاهزة للإنتاج.',
    },
  },
  {
    title: 'Multi Vendor E-Commerce Platform',
    icon: PackageCheck,
    description: {
      en: 'A scalable e-commerce backend supporting multiple vendors, products, carts, orders, and user management.',
      ar: 'Backend قابل للتوسع لمنصة تجارة إلكترونية متعددة البائعين، يدعم المنتجات والسلات والطلبات وإدارة المستخدمين.',
    },
    features: {
      en: ['Product Management', 'Order Processing', 'Authentication', 'Vendor System', 'REST APIs', 'Database Optimization'],
      ar: ['إدارة المنتجات', 'معالجة الطلبات', 'المصادقة', 'نظام البائعين', 'REST APIs', 'تحسين قواعد البيانات'],
    },
    stack: ['Java', 'Spring Boot', 'Spring Security', 'JPA', 'MySQL'],
    highlight: {
      en: 'Designed around clean domain boundaries for vendor, product, cart, and order flows.',
      ar: 'مصمم بحدود واضحة بين البائعين والمنتجات والسلة والطلبات.',
    },
  },
  {
    title: 'News Management Backend System',
    icon: Globe2,
    description: {
      en: 'Backend system for managing news articles, views, categories, publishing workflow, and content administration.',
      ar: 'نظام Backend لإدارة المقالات الإخبارية والمشاهدات والتصنيفات وسير النشر وإدارة المحتوى.',
    },
    features: {
      en: ['News Publishing', 'View Tracking', 'Categories', 'Authentication', 'Admin Dashboard APIs'],
      ar: ['نشر الأخبار', 'تتبع المشاهدات', 'التصنيفات', 'المصادقة', 'APIs للوحة التحكم'],
    },
    stack: ['Spring Boot', 'MySQL', 'REST APIs'],
    highlight: {
      en: 'Focused on content operations, view tracking, and structured administration APIs.',
      ar: 'يركز على عمليات المحتوى وتتبع المشاهدات وواجهات إدارة منظمة.',
    },
  },
  {
    title: 'Event Driven Gig Marketplace',
    icon: Workflow,
    description: {
      en: 'A marketplace backend using RabbitMQ and Event Driven Architecture for asynchronous communication and scalable processing.',
      ar: 'Backend لمنصة خدمات يستخدم RabbitMQ ومعمارية Event Driven للتواصل غير المتزامن والمعالجة القابلة للتوسع.',
    },
    features: {
      en: ['Event Driven Design', 'RabbitMQ Messaging', 'Service Communication', 'High Scalability'],
      ar: ['تصميم Event Driven', 'مراسلة RabbitMQ', 'تواصل بين الخدمات', 'قابلية توسع عالية'],
    },
    stack: ['Spring Boot', 'RabbitMQ', 'MySQL'],
    highlight: {
      en: 'Built to separate slow workflows from request paths through asynchronous events.',
      ar: 'مصمم لفصل العمليات الثقيلة عن مسار الطلب باستخدام أحداث غير متزامنة.',
    },
  },
]

const experiences = [
  {
    title: { en: 'DEPI - MERN Stack Program', ar: 'برنامج DEPI - MERN Stack' },
    icon: Code2,
    lines: {
      en: [
        'Worked with React.js',
        'Built full stack applications',
        'Collaborated in team projects',
        'Applied software engineering best practices',
      ],
      ar: ['العمل باستخدام React.js', 'بناء تطبيقات Full Stack', 'التعاون في مشاريع جماعية', 'تطبيق أفضل ممارسات هندسة البرمجيات'],
    },
  },
  {
    title: { en: 'NTI Cloud Computing Training', ar: 'تدريب NTI في الحوسبة السحابية' },
    icon: Cloud,
    lines: {
      en: ['Cloud Fundamentals', 'Linux Administration', 'Deployment Concepts', 'Infrastructure Basics'],
      ar: ['أساسيات الحوسبة السحابية', 'إدارة Linux', 'مفاهيم النشر', 'أساسيات البنية التحتية'],
    },
  },
]

const achievements = [
  {
    icon: Server,
    title: { en: 'Production VPS deployments', ar: 'نشر إنتاجي على VPS' },
    text: { en: 'Built and deployed production applications on VPS servers.', ar: 'بناء ونشر تطبيقات إنتاجية على خوادم VPS.' },
  },
  {
    icon: ShieldCheck,
    title: { en: 'Secure REST APIs', ar: 'REST APIs آمنة' },
    text: { en: 'Experience designing secure REST APIs with clear authorization flows.', ar: 'خبرة في تصميم REST APIs آمنة بصلاحيات واضحة.' },
  },
  {
    icon: Database,
    title: { en: 'SQL optimization', ar: 'تحسين قواعد البيانات' },
    text: { en: 'Comfortable working with SQL, schemas, and database performance.', ar: 'العمل مع SQL والمخططات وتحسين الأداء.' },
  },
  {
    icon: Cpu,
    title: { en: 'Problem solving', ar: 'حل المشكلات' },
    text: { en: 'Strong problem-solving and algorithmic thinking.', ar: 'تفكير قوي في حل المشكلات والخوارزميات.' },
  },
]

const stats = [
  { value: 4, suffix: '+', label: { en: 'Featured Projects', ar: 'مشاريع مميزة' } },
  { value: 2, suffix: '+', label: { en: 'Training Programs', ar: 'برامج تدريب' } },
  { value: 12, suffix: '+', label: { en: 'Core Technologies', ar: 'تقنية أساسية' } },
  { value: 2026, suffix: '', label: { en: 'Graduation Year', ar: 'سنة التخرج' } },
]

const techRows = [
  ['Java', 'Spring Boot', 'Spring Security', 'JPA', 'Hibernate', 'REST APIs', 'RabbitMQ', 'Microservices'],
  ['React.js', 'JavaScript', 'Tailwind CSS', 'Bootstrap', 'HTML5', 'CSS3', 'Thymeleaf', 'Responsive UI'],
  ['MySQL', 'SQL Server', 'H2', 'Git', 'GitHub', 'Linux', 'Ubuntu', 'Apache Tomcat', 'Postman', 'Maven'],
]

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 42, filter: 'blur(14px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.78, ease: [0.22, 1, 0.36, 1] },
  },
}

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.08,
    },
  },
}

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

  return (
    <div className="relative overflow-hidden bg-deep text-ice">
      <NoiseLayer />
      <CursorFollower />
      <ParticleField />
      <AnimatePresence>{loading ? <LoadingScreen lang={lang} /> : null}</AnimatePresence>

      <Header
        lang={lang}
        menuOpen={menuOpen}
        onMenu={() => setMenuOpen((value) => !value)}
        onLang={() => {
          setLang((value) => (value === 'en' ? 'ar' : 'en'))
          setMenuOpen(false)
        }}
      />

      <main>
        <Hero lang={lang} />
        <About lang={lang} />
        <Skills lang={lang} />
        <Experience lang={lang} />
        <Projects lang={lang} onOpen={setActiveProject} />
        <Stats lang={lang} />
        <TechWall lang={lang} />
        <Contact lang={lang} />
      </main>

      <Footer lang={lang} />
      <ProjectModal project={activeProject} lang={lang} onClose={() => setActiveProject(null)} />
    </div>
  )
}

function Header({
  lang,
  menuOpen,
  onMenu,
  onLang,
}: {
  lang: Lang
  menuOpen: boolean
  onMenu: () => void
  onLang: () => void
}) {
  const t = copy[lang]

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-deep/70 backdrop-blur-xl"
    >
      <nav className="section-shell flex h-16 items-center justify-between gap-4">
        <a href="#hero" className="group flex items-center gap-3" aria-label="Mostafa Mahmoud home">
          <span className="grid h-10 w-10 place-items-center rounded-lg border border-cyanline/30 bg-cyanline/10 text-sm font-black text-cyanline shadow-[0_0_32px_rgba(65,231,255,0.16)]">
            MM
          </span>
          <span className="hidden text-sm font-semibold text-white sm:block">Mostafa Mahmoud</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {sections.map((section, index) => (
            <a
              key={section}
              href={`#${section}`}
              className="rounded-lg px-4 py-2 text-sm text-muted transition hover:bg-white/5 hover:text-white"
            >
              {t.nav[index]}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onLang}
            className="group inline-flex h-10 items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 text-sm text-white transition hover:border-cyanline/50 hover:bg-cyanline/10"
            type="button"
          >
            <Languages className="h-4 w-4 text-cyanline" />
            <span>{t.nextLocale}</span>
          </button>
          <button
            onClick={onMenu}
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-white lg:hidden"
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-white/10 bg-deep/95 lg:hidden"
          >
            <div className="section-shell grid py-3">
              {sections.map((section, index) => (
                <a
                  key={section}
                  href={`#${section}`}
                  onClick={onMenu}
                  className="rounded-lg px-2 py-3 text-sm text-muted transition hover:bg-white/5 hover:text-white"
                >
                  {t.nav[index]}
                </a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  )
}

function Hero({ lang }: { lang: Lang }) {
  const t = copy[lang]
  const typed = useTyping(t.hero.typing)
  const { scrollYProgress } = useScroll()
  const visualY = useTransform(scrollYProgress, [0, 0.35], [0, -110])
  const contentY = useTransform(scrollYProgress, [0, 0.32], [0, 54])

  return (
    <section id="hero" className="relative flex min-h-[calc(100svh-32px)] items-center overflow-hidden pt-24">
      <motion.div
        className="pointer-events-none absolute inset-x-0 top-28 h-px bg-gradient-to-r from-transparent via-cyanline/70 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ delay: 0.4, duration: 1.1 }}
      />

      <div className="section-shell grid items-center gap-10 pb-16 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div style={{ y: contentY }} variants={stagger} initial="hidden" animate="visible" className="relative z-10">
          <motion.div variants={fadeUp} className="mb-5 inline-flex items-center gap-2 rounded-lg border border-cyanline/25 bg-cyanline/10 px-3 py-2 text-sm text-cyanline">
            <MapPin className="h-4 w-4" />
            {t.hero.kicker}
          </motion.div>

          <motion.h1 variants={fadeUp} className="max-w-4xl text-5xl font-black leading-[1.02] text-white sm:text-6xl lg:text-7xl">
            {t.hero.name}
            <span className="mt-3 block text-2xl font-semibold text-muted sm:text-3xl">{t.hero.arabicName}</span>
          </motion.h1>

          <motion.div variants={fadeUp} className="mt-6 flex min-h-16 max-w-3xl flex-wrap items-center gap-3 text-2xl font-bold text-white sm:text-3xl">
            <span>{t.hero.role}</span>
            <span className="gradient-text">/ {typed}</span>
            <span className="h-8 w-[3px] animate-pulse bg-cyanline" />
          </motion.div>

          <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            {t.hero.intro}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <MagneticButton href="#projects" variant="primary">
              <Rocket className="h-5 w-5" />
              {t.hero.primary}
            </MagneticButton>
            <MagneticButton href="#contact" variant="secondary">
              <MessageCircle className="h-5 w-5" />
              {t.hero.secondary}
            </MagneticButton>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
            {[
              { icon: Lock, label: 'Security' },
              { icon: Database, label: 'Data' },
              { icon: Cloud, label: 'Deploy' },
            ].map((item) => (
              <div key={item.label} className="thin-glass flex items-center gap-3 px-4 py-3">
                <item.icon className="h-5 w-5 text-cyanline" />
                <span className="text-sm font-semibold text-white">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div style={{ y: visualY }} initial={{ opacity: 0, scale: 0.92, rotateX: 8 }} animate={{ opacity: 1, scale: 1, rotateX: 0 }} transition={{ duration: 1, delay: 0.15 }} className="relative">
          <div className="glass-panel mesh-border overflow-hidden p-3">
            <div className="grid gap-3 lg:grid-cols-[0.62fr_0.38fr]">
              <div className="relative min-h-72 overflow-hidden rounded-lg">
                <img
                  src="/assets/backend-command-center.png"
                  alt="Cinematic backend engineering command center with code screens, servers, databases, and cloud infrastructure"
                  className="hero-visual absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/92 via-deep/15 to-transparent" />
                <motion.div
                  animate={{ x: ['-18%', '18%', '-18%'] }}
                  transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-transparent via-cyanline/10 to-transparent"
                />
              </div>

              <div className="relative min-h-72 overflow-hidden rounded-lg border border-white/10 bg-panel">
                <img
                  src="/assets/mostafa-portrait.png"
                  alt="Mostafa Mahmoud professional developer portrait"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 rounded-lg border border-cyanline/25 bg-deep/70 p-3 backdrop-blur">
                  <p className="text-sm font-bold text-white">Mostafa Mahmoud</p>
                  <p className="mt-1 text-xs text-cyanline">{t.hero.available}</p>
                </div>
              </div>
            </div>

            <div className="grid gap-3 p-3 sm:grid-cols-[1.2fr_0.8fr]">
              <div>
                <div className="flex items-center gap-2 text-sm text-cyanline">
                  <Command className="h-4 w-4" />
                  {t.hero.cardTitle}
                </div>
                <p className="mt-2 text-sm leading-6 text-muted">{t.hero.cardCopy}</p>
              </div>
              <div className="grid gap-2 text-sm">
                {['Spring Boot', 'REST APIs', 'MySQL', 'Linux VPS'].map((item) => (
                  <div key={item} className="flex items-center justify-between border-b border-white/10 pb-2 text-white last:border-b-0 last:pb-0">
                    <span>{item}</span>
                    <Zap className="h-4 w-4 text-cyanline" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -14, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -left-4 top-10 hidden rounded-lg border border-violetcore/30 bg-violetcore/10 p-3 backdrop-blur md:block"
          >
            <Network className="h-7 w-7 text-violetcore" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 14, 0], rotate: [0, -2, 0] }}
            transition={{ duration: 5.8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -right-4 bottom-24 hidden rounded-lg border border-cyanline/30 bg-cyanline/10 p-3 backdrop-blur md:block"
          >
            <Database className="h-7 w-7 text-cyanline" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function About({ lang }: { lang: Lang }) {
  const t = copy[lang]

  return (
    <Section id="about" eyebrow={t.about.eyebrow} title={t.about.title}>
      <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <Reveal className="space-y-6 text-lg leading-8 text-muted">
          <p>{t.about.text}</p>
          <p className="text-white">{t.about.goal}</p>
        </Reveal>

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-120px' }} className="grid gap-4">
          {[
            { icon: GraduationCap, label: t.about.education, value: t.about.university },
            { icon: Sparkles, label: t.about.graduation, value: 'MUST' },
            { icon: MapPin, label: t.about.location, value: 'Backend / Full Stack' },
          ].map((item) => (
            <motion.div key={item.label} variants={fadeUp} className="glass-panel flex items-start gap-4 p-5">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-cyanline/10 text-cyanline">
                <item.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-white">{item.label}</h3>
                <p className="mt-1 text-sm leading-6 text-muted">{item.value}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {achievements.map((item) => (
          <motion.div key={item.title.en} variants={fadeUp} whileHover={{ y: -8, rotateX: 4 }} className="glass-panel p-5">
            <item.icon className="mb-5 h-7 w-7 text-cyanline" />
            <h3 className="font-bold text-white">{item.title[lang]}</h3>
            <p className="mt-3 text-sm leading-6 text-muted">{item.text[lang]}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}

function Skills({ lang }: { lang: Lang }) {
  const t = copy[lang]

  return (
    <Section id="skills" eyebrow={t.skills.eyebrow} title={t.skills.title}>
      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group, index) => {
          const Icon = group.icon
          const title = t.skills[group.key]
          return (
            <motion.article
              key={group.key}
              variants={fadeUp}
              whileHover={{ y: -10, rotateX: 5, rotateY: index % 2 === 0 ? -3 : 3 }}
              transition={{ type: 'spring', stiffness: 260, damping: 24 }}
              className="glass-panel p-5"
            >
              <div className="mb-5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-lg bg-cyanline/10 text-cyanline">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{title}</h3>
                </div>
                <span className="text-sm font-semibold text-cyanline">{group.value}%</span>
              </div>

              <div className="skill-track">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${group.value}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.1 + index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full rounded-full bg-gradient-to-r from-cyanline via-bluewave to-violetcore"
                />
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-muted">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          )
        })}
      </motion.div>
    </Section>
  )
}

function Experience({ lang }: { lang: Lang }) {
  const t = copy[lang]

  return (
    <Section id="experience" eyebrow={t.experience.eyebrow} title={t.experience.title}>
      <div className="relative mx-auto max-w-4xl">
        <div className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-cyanline via-violetcore to-transparent rtl:left-auto rtl:right-5" />
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} className="space-y-6">
          {experiences.map((item) => (
            <motion.article key={item.title.en} variants={fadeUp} className="relative pl-16 rtl:pl-0 rtl:pr-16">
              <div className="absolute left-0 top-2 grid h-10 w-10 place-items-center rounded-lg border border-cyanline/40 bg-deep text-cyanline shadow-[0_0_28px_rgba(65,231,255,0.22)] rtl:left-auto rtl:right-0">
                <item.icon className="h-5 w-5" />
              </div>
              <div className="glass-panel p-6">
                <h3 className="text-2xl font-bold text-white">{item.title[lang]}</h3>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {item.lines[lang].map((line) => (
                    <div key={line} className="flex items-center gap-3 text-muted">
                      <ChevronRight className="h-4 w-4 shrink-0 text-cyanline rtl:rotate-180" />
                      <span>{line}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}

function Projects({ lang, onOpen }: { lang: Lang; onOpen: (project: Project) => void }) {
  const t = copy[lang]

  return (
    <Section id="projects" eyebrow={t.projects.eyebrow} title={t.projects.title}>
      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} className="grid gap-5 lg:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} lang={lang} index={index} onOpen={onOpen} />
        ))}
      </motion.div>
    </Section>
  )
}

function ProjectCard({
  project,
  lang,
  index,
  onOpen,
}: {
  project: Project
  lang: Lang
  index: number
  onOpen: (project: Project) => void
}) {
  const t = copy[lang]
  const Icon = project.icon

  return (
    <motion.article variants={fadeUp} whileHover={{ y: -10 }} className="glass-panel group overflow-hidden">
      <div className="relative min-h-56 overflow-hidden border-b border-white/10 bg-panel">
        {index === 0 ? (
          <img
            src="/assets/backend-command-center.png"
            alt="Backend command center visual used as a project preview"
            className="absolute inset-0 h-full w-full object-cover opacity-70 transition duration-700 group-hover:scale-105"
          />
        ) : (
          <ProjectDiagram icon={Icon} />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/40 to-transparent" />
        <motion.div
          className="absolute inset-x-8 bottom-7 h-px bg-gradient-to-r from-cyanline via-violetcore to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.1 }}
        />
        <div className="absolute left-5 top-5 grid h-12 w-12 place-items-center rounded-lg border border-cyanline/30 bg-deep/70 text-cyanline backdrop-blur rtl:left-auto rtl:right-5">
          <Icon className="h-6 w-6" />
        </div>
      </div>

      <div className="p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <h3 className="text-2xl font-black text-white">{project.title}</h3>
          <button
            type="button"
            onClick={() => onOpen(project)}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg border border-cyanline/30 bg-cyanline/10 px-4 py-2 text-sm font-semibold text-cyanline transition hover:bg-cyanline/20"
          >
            <ExternalLink className="h-4 w-4" />
            {t.projects.preview}
          </button>
        </div>
        <p className="mt-4 line-clamp-4 text-sm leading-7 text-muted">{project.description[lang]}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span key={item} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-muted">
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

function ProjectDiagram({ icon: Icon }: { icon: LucideIcon }) {
  const nodes = [
    { icon: UserRound, x: '18%', y: '28%' },
    { icon: ShieldCheck, x: '50%', y: '20%' },
    { icon: Database, x: '78%', y: '34%' },
    { icon: GitBranch, x: '28%', y: '70%' },
    { icon: Icon, x: '63%', y: '68%' },
  ]

  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(65,231,255,0.11),transparent_36%,rgba(139,92,246,0.12))]" />
      <svg className="absolute inset-0 h-full w-full opacity-80" viewBox="0 0 520 260" fill="none" aria-hidden="true">
        <path d="M100 72 C190 28 250 44 330 86 S430 118 470 78" stroke="url(#lineA)" strokeWidth="1.5" />
        <path d="M140 185 C218 150 274 170 330 116 S410 80 440 150" stroke="url(#lineA)" strokeWidth="1.5" />
        <path d="M265 58 V198" stroke="url(#lineB)" strokeWidth="1.5" strokeDasharray="7 8" />
        <defs>
          <linearGradient id="lineA" x1="84" y1="62" x2="484" y2="174" gradientUnits="userSpaceOnUse">
            <stop stopColor="#41e7ff" />
            <stop offset="1" stopColor="#8b5cf6" />
          </linearGradient>
          <linearGradient id="lineB" x1="265" y1="58" x2="265" y2="198" gradientUnits="userSpaceOnUse">
            <stop stopColor="#8b5cf6" />
            <stop offset="1" stopColor="#41e7ff" />
          </linearGradient>
        </defs>
      </svg>
      {nodes.map((node, index) => {
        const NodeIcon = node.icon
        return (
          <motion.div
            key={`${node.x}-${node.y}`}
            className="absolute grid h-12 w-12 place-items-center rounded-lg border border-white/15 bg-deep/70 text-cyanline backdrop-blur"
            style={{ left: node.x, top: node.y }}
            animate={{ y: [0, index % 2 === 0 ? -10 : 10, 0] }}
            transition={{ duration: 4 + index * 0.3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <NodeIcon className="h-5 w-5" />
          </motion.div>
        )
      })}
    </div>
  )
}

function Stats({ lang }: { lang: Lang }) {
  const t = copy[lang]

  return (
    <section className="relative py-24">
      <div className="section-shell">
        <Reveal className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-bold text-cyanline">{t.stats.eyebrow}</p>
          <h2 className="text-3xl font-black leading-tight text-white sm:text-5xl">{t.stats.title}</h2>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label.en} className="glass-panel p-6 text-center">
              <div className="text-4xl font-black text-white sm:text-5xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-3 text-sm text-muted">{stat.label[lang]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TechWall({ lang }: { lang: Lang }) {
  const t = copy[lang]

  return (
    <Section id="tech" eyebrow={t.wall.eyebrow} title={t.wall.title}>
      <div className="space-y-4 overflow-hidden border-y border-white/10 py-8">
        {techRows.map((row, index) => (
          <div key={row.join('-')} className="flex overflow-hidden">
            <div className={clsx('tech-marquee gap-3', index % 2 === 1 && 'reverse')}>
              {[...row, ...row, ...row, ...row].map((tech, techIndex) => (
                <span
                  key={`${tech}-${techIndex}`}
                  className="inline-flex h-12 min-w-36 items-center justify-center rounded-lg border border-white/10 bg-white/5 px-5 text-sm font-semibold text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

function Contact({ lang }: { lang: Lang }) {
  const t = copy[lang]
  const [sent, setSent] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <Section id="contact" eyebrow={t.contact.eyebrow} title={t.contact.title}>
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal className="space-y-6">
          <p className="text-lg leading-8 text-muted">{t.contact.copy}</p>
          <div className="grid gap-3">
            <ContactLink href="https://github.com/" icon={GitBranch} label="GitHub" />
            <ContactLink href="https://www.linkedin.com/" icon={Globe2} label="LinkedIn" />
            <ContactLink href="mailto:" icon={Mail} label="Email" />
          </div>
        </Reveal>

        <motion.form
          onSubmit={handleSubmit}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="glass-panel grid gap-4 p-5"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <input className="input-field" placeholder={t.contact.name} required />
            <input className="input-field" type="email" placeholder={t.contact.email} required />
          </div>
          <textarea className="input-field min-h-40 resize-y" placeholder={t.contact.message} required />
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <MagneticButton asButton variant="primary">
              <Send className="h-5 w-5" />
              {t.contact.send}
            </MagneticButton>
            <AnimatePresence>
              {sent ? (
                <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-sm text-cyanline">
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

function ProjectModal({ project, lang, onClose }: { project: Project | null; lang: Lang; onClose: () => void }) {
  const t = copy[lang]

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-[70] grid place-items-center bg-deep/85 p-4 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.article
            className="glass-panel max-h-[88vh] w-full max-w-4xl overflow-y-auto"
            initial={{ scale: 0.92, y: 32, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.96, y: 24, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 230, damping: 26 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-white/10 p-5">
              <div>
                <p className="text-sm font-bold text-cyanline">{t.projects.architecture}</p>
                <h3 className="mt-2 text-3xl font-black text-white">{project.title}</h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
                aria-label={t.projects.close}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="grid gap-6 p-5 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="relative min-h-72 overflow-hidden rounded-lg border border-white/10 bg-panel">
                <ProjectDiagram icon={project.icon} />
              </div>

              <div className="space-y-6">
                <p className="leading-7 text-muted">{project.description[lang]}</p>
                <div>
                  <h4 className="mb-3 font-bold text-white">{t.projects.features}</h4>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {project.features[lang].map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-muted">
                        <ChevronRight className="h-4 w-4 text-cyanline rtl:rotate-180" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="mb-3 font-bold text-white">{t.projects.stack}</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-muted">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-l-2 border-cyanline/60 pl-4 text-sm leading-6 text-white rtl:border-l-0 rtl:border-r-2 rtl:pl-0 rtl:pr-4">
                  <strong className="text-cyanline">{t.projects.highlight}: </strong>
                  {project.highlight[lang]}
                </div>
              </div>
            </div>
          </motion.article>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="relative py-24">
      <div className="section-shell">
        <Reveal className="mb-12 max-w-4xl">
          <p className="mb-3 text-sm font-bold text-cyanline">{eyebrow}</p>
          <h2 className="edge-line text-3xl font-black leading-tight text-white sm:text-5xl">{title}</h2>
        </Reveal>
        {children}
      </div>
    </section>
  )
}

function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} className={className}>
      {children}
    </motion.div>
  )
}

function MagneticButton({
  children,
  href,
  variant,
  asButton = false,
}: {
  children: ReactNode
  href?: string
  variant: 'primary' | 'secondary'
  asButton?: boolean
}) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  function handleMove(event: MouseEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect()
    x.set((event.clientX - rect.left - rect.width / 2) * 0.18)
    y.set((event.clientY - rect.top - rect.height / 2) * 0.18)
  }

  function handleLeave() {
    x.set(0)
    y.set(0)
  }

  const className = clsx(
    'inline-flex min-h-12 items-center justify-center gap-3 rounded-lg px-5 py-3 text-sm font-bold transition',
    variant === 'primary'
      ? 'bg-cyanline text-deep shadow-[0_18px_55px_rgba(65,231,255,0.22)] hover:bg-white'
      : 'border border-white/10 bg-white/5 text-white hover:border-cyanline/50 hover:bg-cyanline/10',
  )

  if (asButton) {
    return (
      <motion.button type="submit" style={{ x, y }} onMouseMove={handleMove} onMouseLeave={handleLeave} whileTap={{ scale: 0.98 }} className={className}>
        {children}
      </motion.button>
    )
  }

  return (
    <motion.a href={href} style={{ x, y }} onMouseMove={handleMove} onMouseLeave={handleLeave} whileTap={{ scale: 0.98 }} className={className}>
      {children}
    </motion.a>
  )
}

function ContactLink({ href, icon: Icon, label }: { href: string; icon: LucideIcon; label: string }) {
  return (
    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="thin-glass group flex items-center justify-between gap-4 px-4 py-3 text-white transition hover:border-cyanline/40 hover:bg-cyanline/10">
      <span className="flex items-center gap-3">
        <Icon className="h-5 w-5 text-cyanline" />
        <span className="font-semibold">{label}</span>
      </span>
      <ArrowUpRight className="h-4 w-4 text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white rtl:rotate-[-90deg]" />
    </a>
  )
}

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
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

function useTyping(words: readonly string[]) {
  const [wordIndex, setWordIndex] = useState(0)
  const [letterIndex, setLetterIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const word = words[wordIndex]

  useEffect(() => {
    const speed = deleting ? 38 : 74
    const pause = !deleting && letterIndex === word.length ? 1050 : 0
    const timer = window.setTimeout(() => {
      if (!deleting && letterIndex < word.length) {
        setLetterIndex((value) => value + 1)
      } else if (!deleting && letterIndex === word.length) {
        setDeleting(true)
      } else if (deleting && letterIndex > 0) {
        setLetterIndex((value) => value - 1)
      } else {
        setDeleting(false)
        setWordIndex((value) => (value + 1) % words.length)
      }
    }, speed + pause)

    return () => window.clearTimeout(timer)
  }, [deleting, letterIndex, word.length, words.length])

  return word.slice(0, letterIndex)
}

function CursorFollower() {
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
      className="pointer-events-none fixed left-0 top-0 z-[80] hidden h-11 w-11 rounded-full border border-cyanline/50 mix-blend-screen md:block"
      style={{ x: springX, y: springY }}
    />
  )
}

function ParticleField() {
  const shouldReduceMotion = useReducedMotion()
  const particles = useMemo(
    () =>
      Array.from({ length: 64 }, (_, index) => ({
        id: index,
        left: `${(index * 37) % 100}%`,
        top: `${(index * 53) % 100}%`,
        color: index % 3 === 0 ? '#41e7ff' : index % 3 === 1 ? '#8b5cf6' : '#3d7bff',
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
          animate={{ y: [0, -28, 0], opacity: [0.18, 0.82, 0.18], scale: [1, 1.8, 1] }}
          transition={{ duration: particle.duration, delay: particle.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}

function LoadingScreen({ lang }: { lang: Lang }) {
  return (
    <motion.div
      className="fixed inset-0 z-[90] grid place-items-center bg-deep"
      exit={{ opacity: 0, transition: { duration: 0.55, ease: 'easeInOut' } }}
    >
      <div className="w-[min(420px,calc(100%-32px))] text-center">
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="mx-auto mb-6 grid h-20 w-20 place-items-center rounded-lg border border-cyanline/30 bg-cyanline/10 text-2xl font-black text-cyanline"
        >
          MM
        </motion.div>
        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-5 text-sm font-semibold text-muted">
          {lang === 'en' ? 'Building backend-grade experience' : 'تجهيز تجربة هندسية قوية'}
        </motion.p>
        <div className="h-1 overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-cyanline via-bluewave to-violetcore"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </div>
    </motion.div>
  )
}

function NoiseLayer() {
  return <div className="noise-layer" aria-hidden="true" />
}

function Footer({ lang }: { lang: Lang }) {
  const t = copy[lang]
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="section-shell flex flex-col gap-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>{t.footer}</p>
        <a href="#hero" className="inline-flex items-center gap-2 text-cyanline transition hover:text-white">
          <ArrowUpRight className="h-4 w-4 -rotate-45" />
          Mostafa Mahmoud
        </a>
      </div>
    </footer>
  )
}

export default App
