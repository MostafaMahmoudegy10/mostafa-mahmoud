import {
  ArrowUpRight,
  BarChart3,
  Brush,
  CheckCircle2,
  CloudUpload,
  Code2,
  Cpu,
  Gauge,
  Handshake,
  HeartHandshake,
  Lightbulb,
  Mail,
  MessageCircle,
  PackageCheck,
  Palette,
  Phone,
  Rocket,
  Search,
  Server,
  ShoppingBag,
  Sparkles,
  Timer,
  Workflow,
} from 'lucide-react'
import brandAddProduct from '../assets/brand-dashboard/add-product-form.png'
import brandCategories from '../assets/brand-dashboard/category-builder-and-explorer.png'
import brandDashboard from '../assets/brand-dashboard/dashboard-performance-overview.png'
import brandCollaboration from '../assets/brand-dashboard/model-collaboration-discovery.png'
import brandProducts from '../assets/brand-dashboard/product-catalog-management.png'
import ecommerceCart from '../assets/Ecommerce/cart screen.png'
import ecommerceCheckout from '../assets/Ecommerce/checkout screen 1.png'
import ecommerceHome from '../assets/Ecommerce/Home screen.png'
import ecommerceProducts from '../assets/Ecommerce/Products screen.png'
import ecommerceShowProduct from '../assets/Ecommerce/Show product screen.png'
import modelAgreement from '../assets/model-dashboard/agreement-submission-workspace.png'
import modelDashboard from '../assets/model-dashboard/dashboard-overview.png'
import type { ContactItem, ProcessStep, Project, ServiceCard, Stat, WhyCard } from '../types'

export const configurableLinks = {
  github: 'https://github.com/MostafaMahmoudegy10',
  linkedin: 'https://www.linkedin.com/in/mostafa-mahmoud-egy10/',
  email: 'mailto:mostafa.mahmoudegy10@gmail.com',
  phone: 'tel:01222199183',
  styleHubGithub: 'https://github.com/MostafaMahmoudegy10/e-commerce',
  styleHubSwagger: 'https://ecommerce-app-e6303c36e118.herokuapp.com/swagger-ui/index.html',
  styleHubMedium: 'https://medium.com/@mostafa.mahmoudegy10/building-stylehub-lessons-from-developing-an-ai-driven-fashion-social-commerce-platform-0c6014f728ee',
  elHabashyGithub: 'https://github.com/MostafaMahmoudegy10/el-habashy',
}

export const copy = {
  en: {
    dir: 'ltr',
    nextLocale: 'AR',
    nav: ['Work', 'Results', 'Services', 'Process', 'Why Me', 'Contact'],
    hero: {
      kicker: 'Software Engineer based in Giza, Egypt',
      name: 'Mostafa Mahmoud',
      title: 'Software Engineer',
      intro: 'I build products, websites, dashboards and business solutions that help ideas become real products.',
      primary: 'View My Work',
      secondary: "Let's Build Something",
      typing: ['Products', 'Websites', 'Dashboards', 'MVPs', 'Business Solutions'],
    },
    projects: {
      eyebrow: 'Featured Work',
      title: 'Product-focused work with clean interfaces and practical engineering.',
      preview: 'Explore project',
      close: 'Close',
      features: 'Inside the project',
      stack: 'Stack',
      highlight: 'Project note',
      links: 'Configurable links',
      screenshots: 'Screenshots',
      featured: 'Featured Project',
      placeholder: 'Ready for your next screenshots and links',
    },
    stats: {
      eyebrow: 'Results',
      title: 'A compact view of the momentum behind the work.',
    },
    services: {
      eyebrow: 'What I Can Help You With',
      title: 'From first idea to a polished digital product.',
    },
    process: {
      eyebrow: 'Process',
      title: 'A clear path from rough idea to something people can use.',
    },
    why: {
      eyebrow: 'Why Work With Me',
      title: 'A mix of engineering discipline and product taste.',
    },
    contact: {
      eyebrow: 'Contact',
      title: "Let's build something useful.",
      copy: 'Have an idea, dashboard, website, MVP, or backend system in mind? Reach out and I will help shape it into a real product.',
      name: 'Your name',
      email: 'Email address',
      message: 'Tell me about your idea',
      send: 'Send Message',
      sent: 'Message prepared. Connect the form to your preferred email service to make it live.',
      phone: '01222199183',
      emailValue: 'mostafa.mahmoudegy10@gmail.com',
    },
    footer: 'Mostafa Mahmoud - Software Engineer building clean digital products.',
  },
  ar: {
    dir: 'rtl',
    nextLocale: 'EN',
    nav: ['الأعمال', 'النتائج', 'الخدمات', 'الخطوات', 'لماذا أنا', 'تواصل'],
    hero: {
      kicker: 'مهندس برمجيات من الجيزة، مصر',
      name: 'مصطفى محمود',
      title: 'مهندس برمجيات',
      intro: 'أبني منتجات ومواقع ولوحات تحكم وحلول أعمال تساعد الأفكار تتحول إلى منتجات حقيقية.',
      primary: 'شاهد الأعمال',
      secondary: 'لنبني شيئًا',
      typing: ['منتجات', 'مواقع', 'لوحات تحكم', 'MVPs', 'حلول أعمال'],
    },
    projects: {
      eyebrow: 'أعمال مميزة',
      title: 'مشاريع مبنية حول تجربة واضحة وهندسة عملية.',
      preview: 'عرض المشروع',
      close: 'إغلاق',
      features: 'داخل المشروع',
      stack: 'التقنيات',
      highlight: 'ملاحظة المشروع',
      links: 'روابط قابلة للتعديل',
      screenshots: 'الصور',
      featured: 'المشروع الأهم',
      placeholder: 'جاهز لإضافة الصور والروابط لاحقًا',
    },
    stats: {
      eyebrow: 'النتائج',
      title: 'نظرة مختصرة على الحركة والإنجاز داخل الأعمال.',
    },
    services: {
      eyebrow: 'كيف أساعدك',
      title: 'من أول فكرة إلى منتج رقمي جاهز.',
    },
    process: {
      eyebrow: 'الخطوات',
      title: 'مسار واضح من فكرة أولية إلى منتج قابل للاستخدام.',
    },
    why: {
      eyebrow: 'لماذا تعمل معي',
      title: 'مزيج من الانضباط الهندسي والذوق في بناء المنتجات.',
    },
    contact: {
      eyebrow: 'تواصل',
      title: 'لنبني شيئًا مفيدًا.',
      copy: 'لديك فكرة أو لوحة تحكم أو موقع أو MVP أو نظام backend؟ تواصل معي وسأساعدك في تحويلها إلى منتج حقيقي.',
      name: 'الاسم',
      email: 'البريد الإلكتروني',
      message: 'احكي لي عن فكرتك',
      send: 'إرسال الرسالة',
      sent: 'تم تجهيز الرسالة. اربط النموذج بخدمة البريد المناسبة ليصبح فعالًا.',
      phone: '01222199183',
      emailValue: 'mostafa.mahmoudegy10@gmail.com',
    },
    footer: 'مصطفى محمود - مهندس برمجيات يبني منتجات رقمية نظيفة.',
  },
} as const

export const sections = ['work', 'results', 'services', 'process', 'why-me', 'contact'] as const

export const projects: Project[] = [
  {
    title: 'StyleHub',
    subtitle: 'Fashion Social Commerce Platform',
    featured: true,
    icon: ShoppingBag,
    description: {
      en: 'A fashion social-commerce platform that connects customers, brands, and models through shopping flows, collaboration workflows, product management, search, notifications, and secure accounts.',
      ar: 'منصة fashion social-commerce تربط العملاء والبراندات والمودلز من خلال تجربة شراء، تعاون، إدارة منتجات، بحث، إشعارات، وحسابات آمنة.',
    },
    features: {
      en: [
        'Customer System',
        'Brand Dashboard',
        'Model Collaboration',
        'Product Management',
        'Notifications',
        'Search',
        'RabbitMQ Events',
        'Secure Authentication',
      ],
      ar: [
        'نظام العملاء',
        'لوحة تحكم البراند',
        'تعاون المودلز',
        'إدارة المنتجات',
        'الإشعارات',
        'البحث',
        'RabbitMQ Events',
        'تسجيل دخول آمن',
      ],
    },
    stack: ['Spring Boot', 'React', 'RabbitMQ', 'PostgreSQL', 'Cloudinary', 'Swagger'],
    links: [
      { label: 'GitHub Link', href: configurableLinks.styleHubGithub },
      { label: 'Swagger Link', href: configurableLinks.styleHubSwagger },
      { label: 'Medium Article', href: configurableLinks.styleHubMedium },
      { label: 'Screenshots', href: configurableLinks.styleHubScreenshots },
    ],
    screenshots: [
      { src: brandDashboard, alt: 'StyleHub brand dashboard performance overview', label: 'Brand Dashboard' },
      { src: brandProducts, alt: 'StyleHub product catalog management', label: 'Product Management' },
      { src: brandCategories, alt: 'StyleHub category builder and explorer', label: 'Category Builder' },
      { src: brandAddProduct, alt: 'StyleHub add product form', label: 'Add Product Flow' },
      { src: brandCollaboration, alt: 'StyleHub model collaboration discovery', label: 'Model Collaboration' },
      { src: modelDashboard, alt: 'StyleHub model dashboard overview', label: 'Model Dashboard' },
      { src: modelAgreement, alt: 'StyleHub agreement submission workspace', label: 'Agreement Workspace' },
      { src: ecommerceHome, alt: 'StyleHub customer mobile home screen', label: 'Customer Home' },
      { src: ecommerceProducts, alt: 'StyleHub customer products screen', label: 'Products Screen' },
      { src: ecommerceShowProduct, alt: 'StyleHub product details mobile screen', label: 'Product Details' },
      { src: ecommerceCart, alt: 'StyleHub cart mobile screen', label: 'Cart Flow' },
      { src: ecommerceCheckout, alt: 'StyleHub checkout mobile screen', label: 'Checkout Flow' },
    ],
    highlight: {
      en: 'The star project: a full product ecosystem with dashboards, collaboration, search, events, and business workflows.',
      ar: 'المشروع الأهم: نظام منتج كامل فيه لوحات تحكم، تعاون، بحث، events، وعمليات أعمال.',
    },
  },
  {
    title: 'El Habashy Auctions',
    subtitle: 'Auction Management Platform',
    icon: PackageCheck,
    description: {
      en: 'An auction management platform for a real business with listing workflows, categories, uploads, admin tools, and production-ready pages.',
      ar: 'منصة مزادات لعمل حقيقي تشمل إدارة العروض، التصنيفات، الرفع، أدوات الإدارة، وصفحات جاهزة للنشر.',
    },
    features: {
      en: ['Auction Management', 'Admin Dashboard', 'Categories', 'Uploads', 'Production Deployment'],
      ar: ['إدارة المزادات', 'لوحة تحكم', 'تصنيفات', 'رفع ملفات', 'نشر للإنتاج'],
    },
    stack: ['Spring Boot', 'MySQL', 'Thymeleaf', 'Bootstrap', 'Cloudinary', 'Heroku'],
    links: [
      { label: 'GitHub Link', href: configurableLinks.elHabashyGithub },
      { label: 'Screenshots', href: configurableLinks.elHabashyScreenshots },
    ],
    screenshots: [
      { src: '/assets/gallery/elhabashy-english-home-14.png', alt: 'El Habashy English landing page', label: 'English Landing' },
      { src: '/assets/gallery/elhabashy-arabic-home-13.png', alt: 'El Habashy Arabic landing page', label: 'Arabic Landing' },
    ],
    highlight: {
      en: 'Built around real business workflows and configured for a practical production release.',
      ar: 'مبني حول احتياجات عمل حقيقي ومجهز لإطلاق عملي.',
    },
  },
  {
    title: 'Business Dashboard Kit',
    subtitle: 'Operations Dashboard Placeholder',
    icon: BarChart3,
    description: {
      en: 'A configurable placeholder for future dashboards with analytics, tables, filters, and operational workflows.',
      ar: 'مكان قابل للتعديل لمشاريع داشبورد قادمة فيها تحليلات وجداول وفلاتر وسير عمل.',
    },
    features: {
      en: ['Analytics', 'Reports', 'Tables', 'Filters'],
      ar: ['تحليلات', 'تقارير', 'جداول', 'فلاتر'],
    },
    stack: ['React', 'Tailwind CSS', 'Charts', 'REST APIs'],
    highlight: {
      en: 'Use this slot for your next dashboard case study.',
      ar: 'استخدم هذا المكان لدراسة حالة الداشبورد القادمة.',
    },
  },
  {
    title: 'MVP Launch System',
    subtitle: 'Idea to Product Placeholder',
    icon: Rocket,
    description: {
      en: 'A placeholder for fast MVP work: landing page, core workflow, dashboard, contact flow, and deployment.',
      ar: 'مكان لمشاريع MVP سريعة: صفحة تعريف، workflow أساسي، dashboard، تواصل، ونشر.',
    },
    features: {
      en: ['Landing Page', 'Core Workflow', 'Dashboard', 'Deployment'],
      ar: ['Landing Page', 'سير عمل أساسي', 'لوحة تحكم', 'نشر'],
    },
    stack: ['React', 'Spring Boot', 'Cloudinary', 'Heroku'],
    highlight: {
      en: 'Designed to be replaced with a real client MVP later.',
      ar: 'مصمم ليتم استبداله بمشروع MVP حقيقي لاحقًا.',
    },
  },
  {
    title: 'Modern Brand Website',
    subtitle: 'Business Website Placeholder',
    icon: Sparkles,
    description: {
      en: 'A placeholder for a clean modern website built for a business, service, or personal brand.',
      ar: 'مكان لموقع حديث ونظيف لبيزنس أو خدمة أو personal brand.',
    },
    features: {
      en: ['Responsive UI', 'Premium Sections', 'Contact Flow', 'SEO Basics'],
      ar: ['واجهة متجاوبة', 'أقسام premium', 'تواصل', 'أساسيات SEO'],
    },
    stack: ['React', 'Tailwind CSS', 'Framer Motion'],
    highlight: {
      en: 'Ready for screenshots, live links, and a case study.',
      ar: 'جاهز لإضافة الصور والروابط ودراسة الحالة.',
    },
  },
]

export const stats: Stat[] = [
  { value: 5, suffix: '+', label: { en: 'Projects', ar: 'مشاريع' } },
  { value: 5, suffix: '+', label: { en: 'Satisfied Clients', ar: 'عملاء راضون' } },
  { value: 100, suffix: '+', label: { en: 'Features Delivered', ar: 'ميزة تم تنفيذها' } },
]

export const services: ServiceCard[] = [
  { icon: Palette, title: 'UI / UX Design', text: 'Design clean modern interfaces before development.' },
  { icon: Rocket, title: 'MVP Development', text: 'Transform ideas into working products quickly.' },
  { icon: Server, title: 'Backend Development', text: 'Build scalable APIs and business logic.' },
  { icon: Code2, title: 'Frontend Development', text: 'Responsive and modern web applications.' },
  { icon: CloudUpload, title: 'Deployment', text: 'Deploy applications to production servers.' },
  { icon: Lightbulb, title: 'Business Building', text: 'Help turn business ideas into real digital products.' },
]

export const processSteps: ProcessStep[] = [
  { icon: Lightbulb, title: 'Idea & Planning', text: 'Clarify the goal, users, business flow, and first version scope.' },
  { icon: Brush, title: 'UI / UX Design', text: 'Shape a polished interface and user journey before coding.' },
  { icon: Rocket, title: 'MVP Development', text: 'Build the smallest useful product with the right foundations.' },
  { icon: Workflow, title: 'Backend & Frontend Integration', text: 'Connect APIs, screens, auth, data, and business rules.' },
  { icon: CheckCircle2, title: 'Testing', text: 'Validate flows, edge cases, responsive layouts, and reliability.' },
  { icon: CloudUpload, title: 'Deployment', text: 'Launch the product with a clean production setup.' },
  { icon: Gauge, title: 'Growth & Improvements', text: 'Improve based on usage, feedback, and new product needs.' },
]

export const whyCards: WhyCard[] = [
  { icon: Search, title: 'Problem Solving', text: 'I focus on the real business problem before choosing the technical path.' },
  { icon: Code2, title: 'Clean Code', text: 'Readable structure, maintainable components, and practical engineering choices.' },
  { icon: Handshake, title: 'Business Understanding', text: 'I care about how the product helps customers, teams, and operations.' },
  { icon: Timer, title: 'Fast Delivery', text: 'Move quickly while keeping the product clear, stable, and useful.' },
  { icon: MessageCircle, title: 'Communication', text: 'Clear updates, simple language, and collaborative decision making.' },
  { icon: Cpu, title: 'Product Thinking', text: 'I think about flows, edge cases, growth, and future improvements.' },
]

export const contactItems: ContactItem[] = [
  { icon: Phone, label: 'Phone', value: '01222199183', href: configurableLinks.phone },
  { icon: Mail, label: 'Email', value: 'mostafa.mahmoudegy10@gmail.com', href: configurableLinks.email },
  { icon: HeartHandshake, label: 'LinkedIn', value: 'Placeholder', href: configurableLinks.linkedin },
  { icon: ArrowUpRight, label: 'GitHub', value: 'Placeholder', href: configurableLinks.github },
]

export const techRows = [
  ['React', 'Tailwind CSS', 'Framer Motion', 'Spring Boot', 'Java', 'PostgreSQL', 'Cloudinary'],
  ['Product Design', 'Dashboards', 'MVPs', 'REST APIs', 'RabbitMQ', 'Heroku', 'Business Websites'],
]
