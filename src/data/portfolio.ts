import {
  CheckCircle2,
  CloudUpload,
  Code2,
  Brush,
  BarChart3,
  Gauge,
  HeartHandshake,
  Lightbulb,
  Mail,
  MessageCircle,
  PackageCheck,
  Phone,
  Rocket,
  Search,
  Server,
  ShoppingBag,
  Sparkles,
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
    nav: ['Featured Projects', 'Results', 'Services', 'Process', 'Why Me', 'Contact'],
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
      eyebrow: 'Featured Projects',
      title: 'Real projects I\'ve built for businesses. Each project solves real business problems.',
      preview: 'Explore project',
      close: 'Close',
      features: 'Inside the project',
      stack: 'Stack',
      highlight: 'Project note',
      links: 'Project Links',
      screenshots: 'Project Gallery',
      featured: 'Featured Project',
      placeholder: 'Ready for your next screenshots and links',
    },
    stats: {
      eyebrow: 'What I\'ve Built',
      title: 'Real projects, real impact.',
    },
    services: {
      eyebrow: 'What I Can Build For Your Business',
      title: 'Services designed for business outcomes, not just code.',
    },
    process: {
      eyebrow: 'How We Build Your Product',
      title: 'A proven process from idea to growth.',
    },
    why: {
      eyebrow: 'Why Clients Choose To Work With Me',
      title: 'I deliver business value, not just features.',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Have an idea? Let\'s turn it into a real product.',
      copy: 'Let\'s discuss your project, timeline, and goals. I\'ll help you build something that works.',
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
    nav: ['المشاريع المميزة', 'النتائج', 'الخدمات', 'الخطوات', 'لماذا أنا', 'تواصل'],
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
      eyebrow: 'المشاريع المميزة',
      title: 'مشاريع حقيقية بنيتها لعملاء في الأعمال. كل مشروع يحل مشاكل أعمال حقيقية.',
      preview: 'عرض المشروع',
      close: 'إغلاق',
      features: 'داخل المشروع',
      stack: 'التقنيات',
      highlight: 'ملاحظة المشروع',
      links: 'روابط المشروع',
      screenshots: 'معرض المشروع',
      featured: 'المشروع الأهم',
      placeholder: 'جاهز لإضافة الصور والروابط لاحقًا',
    },
    stats: {
      eyebrow: 'ما الذي بنيته',
      title: 'مشاريع حقيقية، تأثير حقيقي.',
    },
    services: {
      eyebrow: 'ما الذي أستطيع بناءه لعملك',
      title: 'خدمات مصممة للنتائج الأعمالية، وليس فقط الكود.',
    },
    process: {
      eyebrow: 'كيف نبني منتجك',
      title: 'عملية مثبتة من الفكرة إلى النمو.',
    },
    why: {
      eyebrow: 'لماذا يختار العملاء العمل معي',
      title: 'أقدم قيمة أعمالية، وليس فقط ميزات.',
    },
    contact: {
      eyebrow: 'تواصل',
      title: 'لديك فكرة؟ لنحولها إلى منتج حقيقي.',
      copy: 'لنناقش مشروعك والمواعيد والأهداف. سأساعدك في بناء شيء يعمل بشكل جيد.',
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
    businessCategory: {
      en: 'Completed Project',
      ar: 'مشروع مكتمل',
    },
    description: {
      en: 'StyleHub is a fashion social-commerce and multi-vendor e-commerce platform that connects customers, fashion brands, and models in one ecosystem. The platform allows customers to discover and buy products, brands to manage their stores and orders, and models to collaborate with brands on fashion campaigns.',
      ar: 'StyleHub منصة fashion social-commerce وتجارة إلكترونية متعددة البائعين تربط العملاء والبراندات والمودلز في نظام واحد. تسمح المنصة للعملاء باكتشاف المنتجات والشراء، والبراندات بإدارة متاجرهم وطلباتهم، والمودلز بالتعاون مع البراندات على حملات أزياء.',
    },
    businessValue: {
      en: 'StyleHub helps fashion businesses sell online, manage products, collaborate with models, track orders, and create a smoother shopping experience for customers.',
      ar: 'تساعد StyleHub عمليات أزياء تبيع أونلاين، إدارة المنتجات، التعاون مع المودلز، تتبع الطلبات، وخلق تجربة شراء أفضل للعملاء.',
    },
    businessProblems: {
      en: ['Limited online presence', 'Manual order management', 'No brand-model collaboration tools', 'Fragmented customer experience'],
      ar: ['حضور أونلاين محدود', 'إدارة طلبات يدوية', 'عدم وجود أدوات تعاون براند-مودل', 'تجربة عملاء غير منسقة'],
    },
    features: {
      en: [
        'Customer shopping experience',
        'Brand dashboard',
        'Model dashboard',
        'Brand/model collaboration workflow',
        'Product catalog',
        'Product variants',
        'Cart & Wishlist',
        'Checkout',
        'Ratings and reviews',
        'Stock management',
        'Full-text search',
        'Notifications',
        'Email system',
        'Secure authentication',
        'Admin-ready backend APIs',
      ],
      ar: [
        'تجربة التسوق للعملاء',
        'لوحة تحكم البراند',
        'لوحة تحكم المودل',
        'سير عمل التعاون براند-مودل',
        'كتالوج المنتجات',
        'متغيرات المنتجات',
        'السلة والمفضلة',
        'الدفع',
        'التقييمات والتعليقات',
        'إدارة المخزون',
        'البحث في النصوص',
        'الإشعارات',
        'نظام البريد',
        'تسجيل دخول آمن',
        'APIs backend جاهزة',
      ],
    },
    stack: ['Spring Boot', 'React', 'RabbitMQ', 'PostgreSQL', 'Cloudinary', 'Swagger', 'JWT Auth', 'Heroku'],
    links: [
      { label: 'GitHub Repository', href: configurableLinks.styleHubGithub },
      { label: 'Swagger Documentation', href: configurableLinks.styleHubSwagger },
      { label: 'Medium Article', href: configurableLinks.styleHubMedium },
    ],
    screenshots: [
      { src: brandDashboard, alt: 'StyleHub brand dashboard performance overview', label: 'Brand Dashboard' },
      { src: brandProducts, alt: 'StyleHub product catalog management', label: 'Product Management' },
      { src: brandCategories, alt: 'StyleHub category builder and explorer', label: 'Category Builder' },
      { src: brandAddProduct, alt: 'StyleHub add product form', label: 'Add Product Flow' },
      { src: brandCollaboration, alt: 'StyleHub model collaboration discovery', label: 'Model Collaboration' },
      { src: modelDashboard, alt: 'StyleHub model dashboard overview', label: 'Model Dashboard' },
      { src: modelAgreement, alt: 'StyleHub agreement submission workspace', label: 'Agreement Workspace' },
      { src: ecommerceHome, alt: 'StyleHub customer mobile home screen', label: 'Mobile App - Home' },
      { src: ecommerceProducts, alt: 'StyleHub customer products screen', label: 'Mobile App - Products' },
      { src: ecommerceShowProduct, alt: 'StyleHub product details mobile screen', label: 'Mobile App - Details' },
      { src: ecommerceCart, alt: 'StyleHub cart mobile screen', label: 'Mobile App - Cart' },
      { src: ecommerceCheckout, alt: 'StyleHub checkout mobile screen', label: 'Mobile App - Checkout' },
    ],
    highlight: {
      en: 'A complete product ecosystem with dashboards for brands and models, customer shopping flows, search, event-driven workflows, and business operations.',
      ar: 'نظام منتج كامل مع لوحات تحكم للبراندات والمودلز، تجارب تسوق للعملاء، بحث، سير عمل محدث الأحداث، وعمليات أعمال.',
    },
  },
  {
    title: 'El Habashy Auctions',
    subtitle: 'Auction Management Platform',
    icon: PackageCheck,
    businessCategory: {
      en: 'Completed Project',
      ar: 'مشروع مكتمل',
    },
    description: {
      en: 'El Habashy Auctions is an auction management website built for a real business to showcase active and previous auctions online. The system helps the business publish auction details, organize categories, upload images, and give visitors a clear way to browse auction opportunities.',
      ar: 'El Habashy Auctions موقع إدارة مزادات مبني لعمل حقيقي لعرض المزادات النشطة والسابقة أونلاين. يساعد النظام العمل على نشر تفاصيل المزادات، تنظيم التصنيفات، رفع الصور، وإعطاء الزوار طريقة واضحة لتصفح فرص المزادات.',
    },
    businessValue: {
      en: 'The platform gives the company a professional online presence, makes it easier for customers to view auctions, understand available categories, and contact the business directly.',
      ar: 'تعطي المنصة الشركة حضوراً احترافياً أونلاين، تسهل على العملاء مشاهدة المزادات، فهم التصنيفات المتاحة، والتواصل مع العمل مباشرة.',
    },
    businessProblems: {
      en: ['No online presence', 'Manual customer inquiries', 'Hard to showcase auctions', 'Limited category organization'],
      ar: ['عدم وجود وجود أونلاين', 'استفسارات عملاء يدوية', 'صعوبة عرض المزادات', 'تنظيم تصنيفات محدود'],
    },
    features: {
      en: ['Public website', 'Auction details pages', 'Active auctions listing', 'Previous auctions archive', 'Category filtering', 'Admin dashboard', 'Auction creation and management', 'Image upload', 'Responsive design', 'Production deployment'],
      ar: ['موقع عام', 'صفحات تفاصيل المزادات', 'قائمة المزادات النشطة', 'أرشيف المزادات السابقة', 'فلترة التصنيفات', 'لوحة تحكم الإدارة', 'إنشاء وإدارة المزادات', 'رفع الصور', 'تصميم متجاوب', 'نشر الإنتاج'],
    },
    stack: ['Spring Boot', 'Thymeleaf', 'MySQL', 'Bootstrap', 'Cloudinary', 'Apache Tomcat', 'Ubuntu VPS'],
    links: [
      { label: 'Live Website', href: 'placeholder' },
      { label: 'GitHub Repository', href: configurableLinks.elHabashyGithub },
    ],
    screenshots: [
      { src: '/assets/gallery/elhabashy-english-home-14.png', alt: 'El Habashy English landing page', label: 'English Landing' },
      { src: '/assets/gallery/elhabashy-arabic-home-13.png', alt: 'El Habashy Arabic landing page', label: 'Arabic Landing' },
    ],
    highlight: {
      en: 'Built around real business workflows and configured for practical production deployment with a professional, user-friendly interface.',
      ar: 'مبني حول سير عمل أعمال حقيقي ومجهز لنشر إنتاج عملي مع واجهة احترافية وودية للمستخدم.',
    },
  },
  {
    title: 'More Projects Coming Soon',
    subtitle: 'Additional Work in Progress',
    icon: Sparkles,
    businessCategory: {
      en: 'Coming Soon',
      ar: 'قريباً',
    },
    description: {
      en: 'More projects are currently being prepared and will be added to this portfolio soon. Each new project will showcase a different business challenge and how I solved it with clean engineering and product thinking.',
      ar: 'مشاريع إضافية قيد التحضير وسيتم إضافتها إلى هذه المحفظة قريباً. كل مشروع جديد سيعرض تحدياً عملياً مختلفاً وكيف حللته بهندسة نظيفة وتفكير منتج-محور.',
    },
    businessValue: {
      en: 'Stay tuned for case studies on landing pages, dashboards, backend systems, and full-product launches.',
      ar: 'ابقى متابعاً لدراسات حالة على صفحات تعريف، لوحات تحكم، أنظمة backend، وإطلاقات منتجات كاملة.',
    },
    businessProblems: {
      en: [],
      ar: [],
    },
    features: {
      en: ['More case studies coming'],
      ar: ['المزيد من دراسات الحالة قادمة'],
    },
    stack: [],
    links: [],
    screenshots: [],
    highlight: {
      en: 'Check back soon for new project showcases.',
      ar: 'تحقق لاحقاً من معارض المشاريع الجديدة.',
    },
  },
]

export const stats: Stat[] = [
  { value: 5, suffix: '+', label: { en: 'Projects Delivered', ar: 'مشاريع تم تسليمها' } },
  { value: 2, suffix: '+', label: { en: 'Real Business Platforms', ar: 'منصات أعمال حقيقية' } },
  { value: 100, suffix: '+', label: { en: 'Features Implemented', ar: 'ميزة تم تطبيقها' } },
  { value: 5000, suffix: '+', label: { en: 'Lines of Production Code', ar: 'سطور كود الإنتاج' } },
]

export const services: ServiceCard[] = [
  {
    icon: Rocket,
    title: { en: 'Business Landing Pages', ar: 'صفحات تعريف أعمال' },
    description: {
      en: 'Modern high-converting landing pages designed to present your business professionally, generate leads, and increase conversions.',
      ar: 'صفحات تعريف حديثة عالية التحويل مصممة لعرض عملك احترافياً وجيل عملاء محتملين وزيادة التحويلات.',
    },
    deliverables: {
      en: ['Custom design', 'Responsive layout', 'Modern animations', 'SEO-ready structure', 'Contact forms', 'Fast loading'],
      ar: ['تصميم مخصص', 'تصميم متجاوب', 'رسوم متحركة حديثة', 'هيكل جاهز للـ SEO', 'نماذج التواصل', 'تحميل سريع'],
    },
  },
  {
    icon: BarChart3,
    title: { en: 'Admin Dashboards & Business Systems', ar: 'لوحات تحكم الإدارة ونظم الأعمال' },
    description: {
      en: 'Complete dashboards and internal systems that help businesses manage operations more efficiently.',
      ar: 'لوحات تحكم كاملة وأنظمة داخلية تساعد الأعمال على إدارة العمليات بكفاءة أكبر.',
    },
    deliverables: {
      en: [
        'Admin dashboards',
        'CRM systems',
        'Management systems',
        'Reporting systems',
        'Inventory management',
        'Customer management',
        'Authentication & Permissions',
        'Analytics & Search',
      ],
      ar: [
        'لوحات تحكم إدارة',
        'أنظمة CRM',
        'نظم إدارة',
        'أنظمة تقارير',
        'إدارة المخزون',
        'إدارة العملاء',
        'المصادقة والأذونات',
        'تحليلات والبحث',
      ],
    },
  },
  {
    icon: Lightbulb,
    title: { en: 'MVP Development', ar: 'تطوير MVP' },
    description: {
      en: 'Turn your idea into a real working product quickly. Perfect for startups and new business ideas.',
      ar: 'حول فكرتك إلى منتج حقيقي يعمل بسرعة. مثالي للشركات الناشئة والأفكار الأعمالية الجديدة.',
    },
    deliverables: {
      en: [
        'Product planning',
        'Core features',
        'Responsive frontend',
        'Backend APIs',
        'Database',
        'Deployment',
      ],
      ar: [
        'تخطيط المنتج',
        'الميزات الأساسية',
        'واجهة أمامية متجاوبة',
        'APIs الخادم',
        'قاعدة البيانات',
        'النشر',
      ],
    },
  },
  {
    icon: Workflow,
    title: { en: 'Custom Web Applications', ar: 'تطبيقات ويب مخصصة' },
    description: {
      en: 'Tailored web applications built based on your business requirements. Marketplaces, booking systems, e-commerce, and more.',
      ar: 'تطبيقات ويب مخصصة مبنية وفقاً لمتطلبات عملك. أسواق رقمية ونظم حجز وتجارة إلكترونية والمزيد.',
    },
    deliverables: {
      en: [
        'Marketplaces',
        'Booking systems',
        'E-Commerce Platforms',
        'SaaS Products',
        'Internal Business Tools',
      ],
      ar: [
        'أسواق رقمية',
        'نظم الحجز',
        'منصات التجارة الإلكترونية',
        'منتجات SaaS',
        'أدوات أعمال داخلية',
      ],
    },
  },
  {
    icon: Server,
    title: { en: 'Backend Engineering', ar: 'هندسة الخادم' },
    description: {
      en: 'Scalable backend systems that power real businesses. REST APIs, authentication, databases, and integrations.',
      ar: 'أنظمة خادم قابلة للتوسع تشغل الأعمال الحقيقية. APIs وعمليات مصادقة وقواعد بيانات وتكاملات.',
    },
    deliverables: {
      en: [
        'REST APIs',
        'Authentication',
        'Authorization',
        'Databases',
        'Email Systems',
        'Notifications',
        'Integrations',
        'Event Driven Architecture',
      ],
      ar: [
        'REST APIs',
        'المصادقة',
        'التفويض',
        'قواعس البيانات',
        'أنظمة البريد',
        'الإشعارات',
        'التكاملات',
        'البنية الموجهة للأحداث',
      ],
    },
  },
  {
    icon: CloudUpload,
    title: { en: 'Deployment & Launch', ar: 'النشر والإطلاق' },
    description: {
      en: 'Launch your product online and prepare it for real users. VPS setup, domains, production environment, and monitoring.',
      ar: 'أطلق منتجك أونلاين واحضره للمستخدمين الحقيقيين. إعداد VPS والنطاقات والبيئة الإنتاجية والمراقبة.',
    },
    deliverables: {
      en: ['VPS Setup', 'Domain Configuration', 'Production Environment', 'Database Setup', 'Monitoring'],
      ar: ['إعداد VPS', 'إعدادات النطاق', 'البيئة الإنتاجية', 'إعداد قاعدة البيانات', 'المراقبة'],
    },
  },
]

export const processSteps: ProcessStep[] = [
  {
    icon: MessageCircle,
    title: { en: 'Discovery & Business Understanding', ar: 'الاكتشاف وفهم الأعمال' },
    description: {
      en: 'We discuss your idea, target audience, competitors, and business goals.',
      ar: 'نناقش فكرتك والجمهور المستهدف والمنافسين والأهداف الأعمالية.',
    },
  },
  {
    icon: Lightbulb,
    title: { en: 'Planning & Feature Definition', ar: 'التخطيط وتحديد الميزات' },
    description: {
      en: 'We define the MVP and prioritize features based on business impact.',
      ar: 'نحدد MVP ونحدد أولويات الميزات بناءً على التأثير الأعمالي.',
    },
  },
  {
    icon: Brush,
    title: { en: 'UI / UX Design', ar: 'تصميم الواجهة والتجربة' },
    description: {
      en: 'Create a clean and intuitive experience before writing code. You receive wireframes, screens, and user flows.',
      ar: 'إنشاء تجربة نظيفة وحدسية قبل كتابة الكود. تتلقى النماذج والشاشات وسير تدفق المستخدم.',
    },
  },
  {
    icon: Code2,
    title: { en: 'Frontend Development', ar: 'تطوير الواجهة الأمامية' },
    description: {
      en: 'Build responsive interfaces and dashboards. You receive functional pages, forms, responsive layouts, and dashboard screens.',
      ar: 'بناء واجهات متجاوبة ولوحات تحكم. تتلقى صفحات عاملة ونماذج وتخطيطات متجاوبة وشاشات لوحة التحكم.',
    },
  },
  {
    icon: Server,
    title: { en: 'Backend Development', ar: 'تطوير الخادم' },
    description: {
      en: 'Build APIs, authentication, business logic and database architecture. You receive secure APIs, authentication system, database structure, and documentation.',
      ar: 'بناء APIs والمصادقة ومنطق الأعمال وبنية قاعدة البيانات. تتلقى APIs آمنة ونظام مصادقة وهيكل قاعدة البيانات والتوثيق.',
    },
  },
  {
    icon: CheckCircle2,
    title: { en: 'Integration & Testing', ar: 'التكامل والاختبار' },
    description: {
      en: 'Connect all parts together and verify everything works correctly. You receive a working product, bug fixes, and performance improvements.',
      ar: 'ربط جميع الأجزاء معاً والتحقق من أن كل شيء يعمل بشكل صحيح. تتلقى منتجاً يعمل وإصلاحات الأخطاء وتحسينات الأداء.',
    },
  },
  {
    icon: CloudUpload,
    title: { en: 'Deployment', ar: 'النشر' },
    description: {
      en: 'Deploy the project online. You receive a live website, domain setup, and production environment.',
      ar: 'نشر المشروع أونلاين. تتلقى موقعاً مباشراً وإعداد نطاق وبيئة إنتاجية.',
    },
  },
  {
    icon: Gauge,
    title: { en: 'Support & Growth', ar: 'الدعم والنمو' },
    description: {
      en: 'Continue improving the product after launch. You receive feature enhancements, technical support, and future scalability planning.',
      ar: 'مواصلة تحسين المنتج بعد الإطلاق. تتلقى تحسينات ميزات ودعم تقني وتخطيط لقابلية التوسع في المستقبل.',
    },
  },
]

export const whyCards: WhyCard[] = [
  {
    icon: Search,
    title: { en: 'Business Mindset', ar: 'عقلية الأعمال' },
    text: { en: 'I focus on solving business problems, not only writing code.', ar: 'أركز على حل مشاكل الأعمال، وليس فقط كتابة الكود.' },
  },
  {
    icon: Workflow,
    title: { en: 'End-to-End Development', ar: 'التطوير من البداية إلى النهاية' },
    text: { en: 'From idea to deployment, everything can be handled in one place.', ar: 'من الفكرة إلى النشر، كل شيء يمكن التعامل معه في مكان واحد.' },
  },
  {
    icon: Rocket,
    title: { en: 'Scalable Solutions', ar: 'حلول قابلة للتوسع' },
    text: { en: 'I build systems that can grow with your business.', ar: 'أبني أنظمة تستطيع أن تنمو مع عملك.' },
  },
  {
    icon: MessageCircle,
    title: { en: 'Clear Communication', ar: 'التواصل الواضح' },
    text: { en: 'Regular updates and transparent progress throughout the project.', ar: 'تحديثات منتظمة وتقدم شفاف طوال المشروع.' },
  },
  {
    icon: Sparkles,
    title: { en: 'Modern Technologies', ar: 'تقنيات حديثة' },
    text: { en: 'Using modern tools and best practices to build reliable products.', ar: 'استخدام الأدوات الحديثة وأفضل الممارسات لبناء منتجات موثوقة.' },
  },
  {
    icon: HeartHandshake,
    title: { en: 'Long-Term Partnership', ar: 'شراكة طويلة الأمد' },
    text: { en: 'My goal is not only delivering a project, but helping businesses grow and improve over time.', ar: 'هدفي ليس فقط تسليم المشروع، بل مساعدة الأعمال على النمو والتحسن بمرور الوقت.' },
  },
]

export const contactItems: ContactItem[] = [
  { icon: Phone, label: { en: 'Call Me', ar: 'اتصل بي' }, value: '01222199183', href: configurableLinks.phone },
  { icon: Mail, label: { en: 'Send Email', ar: 'أرسل بريد' }, value: 'mostafa.mahmoudegy10@gmail.com', href: configurableLinks.email },
  { icon: Code2, label: { en: 'View GitHub', ar: 'اعرض جيت هاب' }, value: 'GitHub', href: configurableLinks.github },
  { icon: HeartHandshake, label: { en: 'LinkedIn', ar: 'لينكدإن' }, value: 'LinkedIn', href: configurableLinks.linkedin },
]

export const techRows = [
  ['React', 'Tailwind CSS', 'Framer Motion', 'Spring Boot', 'Java', 'PostgreSQL', 'Cloudinary'],
  ['Product Design', 'Dashboards', 'MVPs', 'REST APIs', 'RabbitMQ', 'Heroku', 'Business Websites'],
]
