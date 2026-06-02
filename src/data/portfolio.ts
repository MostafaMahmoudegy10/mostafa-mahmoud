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
import ecommerceAddCard from '../assets/Ecommerce/Add card Screen.png'
import ecommerceCart from '../assets/Ecommerce/cart screen.png'
import ecommerceCheckout from '../assets/Ecommerce/checkout screen 1.png'
import ecommerceCheckoutTwo from '../assets/Ecommerce/checkout screen 2.png'
import ecommerceCheckoutThree from '../assets/Ecommerce/checkout screen 3.png'
import ecommerceFavourite from '../assets/Ecommerce/favourite screen.png'
import ecommerceFilter from '../assets/Ecommerce/Filter on Product screen.png'
import ecommerceHome from '../assets/Ecommerce/Home screen.png'
import ecommerceProducts from '../assets/Ecommerce/Products screen.png'
import ecommerceProfile from '../assets/Ecommerce/Profile screen.png'
import ecommerceShowProduct from '../assets/Ecommerce/Show product screen.png'
import ecommerceTrackOrderOne from '../assets/Ecommerce/Track order Screen 1.png'
import ecommerceTrackOrderTwo from '../assets/Ecommerce/Track order screen 2.png'
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
  styleHubBrandDashboardPreview: '/assets/gallery/stylehub-brand-dashboard-01.png',
  styleHubModelDashboardPreview: '/assets/gallery/stylehub-model-dashboard-07.png',
  elHabashyLive: 'https://el-habashy-yl93.vercel.app/',
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
      title: 'Real products built to solve business problems.',
      preview: 'View details',
      close: 'Close',
      features: 'What it includes',
      stack: 'Built With',
      highlight: 'Result',
      links: 'Project Links',
      screenshots: 'Project Gallery',
      featured: 'Featured Project',
      placeholder: 'Ready for your next screenshots and links',
    },
    stats: {
      eyebrow: 'Results',
      title: 'What I\'ve Built',
    },
    services: {
      eyebrow: 'Business Services',
      title: 'What Can I Build For Your Business',
    },
    process: {
      eyebrow: 'Product Process',
      title: 'How We Build Your Product',
    },
    why: {
      eyebrow: 'Client Fit',
      title: 'Why Clients Choose To Work With Me',
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
      title: 'منتجات حقيقية مبنية لحل مشاكل أعمال.',
      preview: 'عرض التفاصيل',
      close: 'إغلاق',
      features: 'ماذا يشمل',
      stack: 'تم بناؤه باستخدام',
      highlight: 'النتيجة',
      links: 'روابط المشروع',
      screenshots: 'معرض المشروع',
      featured: 'المشروع الأهم',
      placeholder: 'جاهز لإضافة الصور والروابط لاحقًا',
    },
    stats: {
      eyebrow: 'النتائج',
      title: 'ما الذي بنيته',
    },
    services: {
      eyebrow: 'خدمات للأعمال',
      title: 'ما الذي أستطيع بناءه لعملك',
    },
    process: {
      eyebrow: 'طريقة بناء المنتج',
      title: 'كيف نبني منتجك',
    },
    why: {
      eyebrow: 'لماذا أنا',
      title: 'لماذا يختار العملاء العمل معي',
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
      en: 'StyleHub is a complete fashion commerce product. Customers shop through a mobile app, brands manage products and orders from a dashboard, and models manage collaboration requests from their own workspace.',
      ar: 'StyleHub منتج تجارة أزياء متكامل. العملاء يتسوقون من تطبيق موبايل، البراندات تدير المنتجات والطلبات من لوحة تحكم، والمودلز يديرون طلبات التعاون من مساحة عمل خاصة بهم.',
    },
    businessValue: {
      en: 'It gives a fashion business one connected system for selling products, tracking orders, managing catalogs, and running brand-model collaborations.',
      ar: 'يعطي بزنس الأزياء نظاما واحدا مترابطا للبيع أونلاين، تتبع الطلبات، إدارة الكتالوج، وتنظيم التعاون بين البراندات والمودلز.',
    },
    businessProblems: {
      en: [
        'Customers need a smooth way to browse, buy, and track orders',
        'Brands need one place to manage products, categories, and orders',
        'Models need a clear workspace for requests, agreements, and reviews',
        'The business needs all sides connected in one product',
      ],
      ar: [
        'العميل يحتاج طريقة سهلة للتصفح والشراء وتتبع الطلب',
        'البراند يحتاج مكانا واحدا لإدارة المنتجات والتصنيفات والطلبات',
        'الموديل يحتاج مساحة واضحة للطلبات والاتفاقات والتقييمات',
        'البزنس يحتاج كل الأطراف متصلة في منتج واحد',
      ],
    },
    features: {
      en: [
        'Mobile shopping app',
        'Brand dashboard',
        'Model dashboard',
        'Product catalog management',
        'Order management',
        'Brand-model collaboration',
        'Cart, wishlist & checkout',
        'Order tracking',
        'Ratings and reviews',
        'Search and filters',
        'Notifications',
      ],
      ar: [
        'تطبيق تسوق موبايل',
        'لوحة تحكم البراند',
        'لوحة تحكم المودل',
        'إدارة كتالوج المنتجات',
        'إدارة الطلبات',
        'تعاون البراند والموديل',
        'السلة والمفضلة والدفع',
        'تتبع الطلبات',
        'التقييمات والتعليقات',
        'البحث والفلترة',
        'الإشعارات',
      ],
    },
    stack: ['Spring Boot', 'React', 'RabbitMQ', 'PostgreSQL', 'Cloudinary', 'Swagger', 'JWT Auth', 'Heroku'],
    links: [
      { label: 'Brand Dashboard Preview', href: configurableLinks.styleHubBrandDashboardPreview },
      { label: 'Model Dashboard Preview', href: configurableLinks.styleHubModelDashboardPreview },
      { label: 'GitHub Repository', href: configurableLinks.styleHubGithub },
      { label: 'Swagger Documentation', href: configurableLinks.styleHubSwagger },
      { label: 'Medium Article', href: configurableLinks.styleHubMedium },
    ],
    screenshots: [
      { src: brandDashboard, alt: 'StyleHub brand dashboard performance overview', label: 'Brand Dashboard', orientation: 'desktop' },
      { src: brandProducts, alt: 'StyleHub product catalog management', label: 'Product Management', orientation: 'desktop' },
      { src: brandCategories, alt: 'StyleHub category builder and explorer', label: 'Category Builder', orientation: 'desktop' },
      { src: brandAddProduct, alt: 'StyleHub add product form', label: 'Add Product Flow', orientation: 'desktop' },
      { src: brandCollaboration, alt: 'StyleHub model collaboration discovery', label: 'Model Collaboration', orientation: 'desktop' },
      { src: modelDashboard, alt: 'StyleHub model dashboard overview', label: 'Model Dashboard', orientation: 'desktop' },
      { src: modelAgreement, alt: 'StyleHub agreement submission workspace', label: 'Agreement Workspace', orientation: 'desktop' },
      { src: ecommerceHome, alt: 'StyleHub customer mobile home screen', label: 'Mobile App - Home', orientation: 'mobile' },
      { src: ecommerceProducts, alt: 'StyleHub customer products screen', label: 'Mobile App - Products', orientation: 'mobile' },
      { src: ecommerceFilter, alt: 'StyleHub mobile product filtering screen', label: 'Mobile App - Filters', orientation: 'mobile' },
      { src: ecommerceShowProduct, alt: 'StyleHub product details mobile screen', label: 'Mobile App - Details', orientation: 'mobile' },
      { src: ecommerceFavourite, alt: 'StyleHub customer favourites mobile screen', label: 'Mobile App - Favourites', orientation: 'mobile' },
      { src: ecommerceCart, alt: 'StyleHub cart mobile screen', label: 'Mobile App - Cart', orientation: 'mobile' },
      { src: ecommerceCheckout, alt: 'StyleHub checkout address mobile screen', label: 'Mobile App - Checkout 1', orientation: 'mobile' },
      { src: ecommerceCheckoutTwo, alt: 'StyleHub checkout payment mobile screen', label: 'Mobile App - Checkout 2', orientation: 'mobile' },
      { src: ecommerceCheckoutThree, alt: 'StyleHub checkout confirmation mobile screen', label: 'Mobile App - Checkout 3', orientation: 'mobile' },
      { src: ecommerceAddCard, alt: 'StyleHub add payment card mobile screen', label: 'Mobile App - Add Card', orientation: 'mobile' },
      { src: ecommerceTrackOrderOne, alt: 'StyleHub track order mobile screen', label: 'Mobile App - Track Order 1', orientation: 'mobile' },
      { src: ecommerceTrackOrderTwo, alt: 'StyleHub track order details mobile screen', label: 'Mobile App - Track Order 2', orientation: 'mobile' },
      { src: ecommerceProfile, alt: 'StyleHub profile mobile screen', label: 'Mobile App - Profile', orientation: 'mobile' },
    ],
    highlight: {
      en: 'The project shows the full product journey: mobile shopping for customers, business dashboards for brands, and collaboration tools for models.',
      ar: 'المشروع يوضح رحلة منتج كاملة: تسوق موبايل للعملاء، لوحات تحكم للبراندات، وأدوات تعاون للمودلز.',
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
      en: 'El Habashy Auctions is a business website for publishing current and past auctions. Visitors can browse auctions clearly, and the business can manage auction content, categories, and images from an admin dashboard.',
      ar: 'El Habashy Auctions موقع أعمال لعرض المزادات الحالية والسابقة. الزوار يقدرون يتصفحون المزادات بوضوح، والبزنس يقدر يدير محتوى المزادات والتصنيفات والصور من لوحة تحكم.',
    },
    businessValue: {
      en: 'The platform gives the company a professional online presence and makes it easier for customers to understand available auctions and contact the business.',
      ar: 'تعطي المنصة الشركة حضورا احترافيا أونلاين وتسهل على العملاء فهم المزادات المتاحة والتواصل مع البزنس.',
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
      { label: 'Live Website', href: configurableLinks.elHabashyLive },
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
      ar: 'صفحات تعريف حديثة عالية التحويل مصممة لعرض عملك بشكل احترافي، جذب عملاء محتملين، وزيادة التحويلات.',
    },
    deliverables: {
      en: ['Custom design', 'Responsive layout', 'Modern animations', 'SEO-ready structure', 'Contact forms', 'Fast loading pages'],
      ar: ['تصميم مخصص', 'تخطيط متجاوب', 'حركات حديثة', 'هيكل جاهز للـ SEO', 'نماذج تواصل', 'صفحات سريعة التحميل'],
    },
  },
  {
    icon: BarChart3,
    title: { en: 'Admin Dashboards & Business Systems', ar: 'لوحات تحكم الإدارة ونظم الأعمال' },
    description: {
      en: 'I can build complete dashboards and internal systems that help businesses manage operations more efficiently.',
      ar: 'لوحات تحكم كاملة وأنظمة داخلية تساعد الأعمال على إدارة العمليات بكفاءة أكبر.',
    },
    examples: {
      en: [
        'Admin dashboards',
        'CRM systems',
        'Management systems',
        'Reporting systems',
        'Inventory management',
        'Customer management',
      ],
      ar: [
        'لوحات تحكم إدارية',
        'أنظمة CRM',
        'نظم إدارة',
        'أنظمة تقارير',
        'إدارة المخزون',
        'إدارة العملاء',
      ],
    },
    deliverables: {
      en: ['Authentication', 'Roles & Permissions', 'Analytics', 'CRUD Operations', 'Notifications', 'Search & Filtering'],
      ar: [
        'المصادقة',
        'الأدوار والصلاحيات',
        'التحليلات',
        'عمليات الإضافة والتعديل والحذف',
        'الإشعارات',
        'البحث والفلترة',
      ],
    },
  },
  {
    icon: Lightbulb,
    title: { en: 'MVP Development', ar: 'تطوير MVP' },
    description: {
      en: 'Turn your idea into a real working product quickly. Perfect for startups and new business ideas.',
      ar: 'حوّل فكرتك إلى منتج حقيقي يعمل بسرعة. مناسب للشركات الناشئة وأفكار الأعمال الجديدة.',
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
      en: 'Build tailored web applications based on your business requirements.',
      ar: 'بناء تطبيقات ويب مخصصة حسب متطلبات عملك.',
    },
    examples: {
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
      en: 'Design and build scalable backend systems that power real businesses.',
      ar: 'تصميم وبناء أنظمة خلفية قابلة للتوسع تشغل أعمالا حقيقية.',
    },
    features: {
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
        'قواعد البيانات',
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
      en: 'Launch your product online and prepare it for real users.',
      ar: 'إطلاق منتجك أونلاين وتجهيزه للمستخدمين الحقيقيين.',
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
      en: 'Create a clean and intuitive experience before writing code.',
      ar: 'إنشاء تجربة نظيفة وسهلة قبل كتابة الكود.',
    },
    deliverables: {
      en: ['Wireframes', 'Screens', 'User flows'],
      ar: ['Wireframes', 'شاشات', 'مسارات المستخدم'],
    },
  },
  {
    icon: Code2,
    title: { en: 'Frontend Development', ar: 'تطوير الواجهة الأمامية' },
    description: {
      en: 'Build responsive interfaces and dashboards.',
      ar: 'بناء واجهات متجاوبة ولوحات تحكم.',
    },
    deliverables: {
      en: ['Functional pages', 'Forms', 'Responsive layouts', 'Dashboard screens'],
      ar: ['صفحات تعمل بالكامل', 'نماذج', 'تخطيطات متجاوبة', 'شاشات لوحات تحكم'],
    },
  },
  {
    icon: Server,
    title: { en: 'Backend Development', ar: 'تطوير الخادم' },
    description: {
      en: 'Build APIs, authentication, business logic and database architecture.',
      ar: 'بناء APIs والمصادقة ومنطق الأعمال وبنية قاعدة البيانات.',
    },
    deliverables: {
      en: ['Secure APIs', 'Authentication System', 'Database Structure', 'Documentation'],
      ar: ['APIs آمنة', 'نظام مصادقة', 'هيكل قاعدة بيانات', 'توثيق'],
    },
  },
  {
    icon: CheckCircle2,
    title: { en: 'Integration & Testing', ar: 'التكامل والاختبار' },
    description: {
      en: 'Connect all parts together and verify everything works correctly.',
      ar: 'ربط كل الأجزاء معا والتأكد أن كل شيء يعمل بشكل صحيح.',
    },
    deliverables: {
      en: ['Working product', 'Bug fixes', 'Performance improvements'],
      ar: ['منتج يعمل', 'إصلاحات أخطاء', 'تحسينات أداء'],
    },
  },
  {
    icon: CloudUpload,
    title: { en: 'Deployment', ar: 'النشر' },
    description: {
      en: 'Deploy the project online.',
      ar: 'نشر المشروع أونلاين.',
    },
    deliverables: {
      en: ['Live website', 'Domain setup', 'Production environment'],
      ar: ['موقع مباشر', 'إعداد الدومين', 'بيئة إنتاجية'],
    },
  },
  {
    icon: Gauge,
    title: { en: 'Support & Growth', ar: 'الدعم والنمو' },
    description: {
      en: 'Continue improving the product after launch.',
      ar: 'مواصلة تحسين المنتج بعد الإطلاق.',
    },
    deliverables: {
      en: ['Feature enhancements', 'Technical support', 'Future scalability planning'],
      ar: ['تحسينات الميزات', 'دعم تقني', 'تخطيط للتوسع المستقبلي'],
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
