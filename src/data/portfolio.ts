import {
  CheckCircle2,
  CloudUpload,
  Code2,
  Brush,
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
      eyebrow: 'Results',
      title: 'A compact view of what I\'ve accomplished.',
    },
    services: {
      eyebrow: 'What I Can Build For You',
      title: 'Services and packages I offer to help your business grow.',
    },
    process: {
      eyebrow: 'How We Build Your Product',
      title: 'A clear process from your idea to a working product.',
    },
    why: {
      eyebrow: 'Why Work With Me',
      title: 'A mix of engineering discipline and product thinking.',
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
      eyebrow: 'النتائج',
      title: 'ملخص لما أنجزته حتى الآن.',
    },
    services: {
      eyebrow: 'ما الذي أستطيع بناءه لك',
      title: 'الخدمات والحزم التي أقدمها لمساعدة عملك على النمو.',
    },
    process: {
      eyebrow: 'كيف نبني منتجك',
      title: 'عملية واضحة من فكرتك إلى منتج يعمل فعلاً.',
    },
    why: {
      eyebrow: 'لماذا تعمل معي',
      title: 'مزيج من الانضباط الهندسي والتفكير المنتج-محور.',
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
  { value: 5, suffix: '+', label: { en: 'Total Projects', ar: 'إجمالي المشاريع' } },
  { value: 5, suffix: '+', label: { en: 'Satisfied Customers', ar: 'عملاء راضون' } },
  { value: 100, suffix: '+', label: { en: 'Features Delivered', ar: 'ميزة تم تنفيذها' } },
  { value: 2, suffix: '+', label: { en: 'Real Business Projects', ar: 'مشاريع أعمال حقيقية' } },
]

export const services: ServiceCard[] = [
  {
    icon: Rocket,
    title: { en: 'Landing Page', ar: 'صفحة تعريف' },
    description: {
      en: 'A modern landing page for your business, product, service, or campaign with clean design, responsive layout, animations, and clear call-to-action sections.',
      ar: 'صفحة تعريف حديثة لعملك أو منتجك أو خدمتك أو حملتك بتصميم نظيف، تصميم متجاوب، رسوم متحركة، وأقسام call-to-action واضحة.',
    },
    deliverables: {
      en: ['Hero section', 'About section', 'Services section', 'Contact section', 'Responsive design', 'Smooth animations'],
      ar: ['قسم بطل', 'قسم من نحن', 'قسم الخدمات', 'قسم التواصل', 'تصميم متجاوب', 'رسوم متحركة سلسة'],
    },
  },
  {
    icon: Palette,
    title: { en: 'UI / UX Design', ar: 'تصميم الواجهة والتجربة' },
    description: {
      en: 'Clean and modern interface design that makes your product easier to understand and more attractive to users.',
      ar: 'تصميم واجهة نظيف وحديث يجعل منتجك أسهل في الفهم وأكثر جاذبية للمستخدمين.',
    },
    deliverables: {
      en: ['User-friendly layout', 'Clean sections', 'Modern components', 'Better visual hierarchy', 'Business-focused design'],
      ar: ['تخطيط ودود للمستخدم', 'أقسام نظيفة', 'مكونات حديثة', 'تسلسل بصري أفضل', 'تصميم محور-الأعمال'],
    },
  },
  {
    icon: Code2,
    title: { en: 'Frontend MVP', ar: 'Frontend MVP' },
    description: {
      en: 'A working frontend version of your product idea so you can present it, test it, or show it to potential customers.',
      ar: 'نسخة frontend تعمل من فكرة منتجك حتى تتمكن من عرضها واختبارها وإظهارها للعملاء المحتملين.',
    },
    deliverables: {
      en: ['Responsive frontend', 'Pages and components', 'Dashboard UI', 'Forms', 'API-ready structure'],
      ar: ['frontend متجاوب', 'صفحات ومكونات', 'واجهة لوحة تحكم', 'نماذج', 'بنية جاهزة للـ API'],
    },
  },
  {
    icon: Server,
    title: { en: 'Backend Development', ar: 'تطوير الخادم' },
    description: {
      en: 'A secure and scalable backend system that handles your business logic, data, users, APIs, and integrations.',
      ar: 'نظام خادم آمن وقابل للتوسع يتعامل مع منطق عملك والبيانات والمستخدمين والـ APIs والتكاملات.',
    },
    deliverables: {
      en: ['REST APIs', 'Authentication', 'Database design', 'Business logic', 'Security', 'API documentation'],
      ar: ['REST APIs', 'المصادقة', 'تصميم قاعدة البيانات', 'منطق الأعمال', 'الأمان', 'توثيق API'],
    },
  },
  {
    icon: Workflow,
    title: { en: 'Full Product Development', ar: 'تطوير المنتج الكامل' },
    description: {
      en: 'From idea to launch. I can help turn your business idea into a real working product.',
      ar: 'من الفكرة إلى الإطلاق. أستطيع مساعدتك في تحويل فكرة عملك إلى منتج حقيقي يعمل.',
    },
    deliverables: {
      en: [
        'Understand the idea',
        'Plan the features',
        'Design the UI',
        'Build the frontend',
        'Build the backend',
        'Connect everything',
        'Test the product',
        'Deploy it online',
      ],
      ar: [
        'فهم الفكرة',
        'تخطيط الميزات',
        'تصميم الواجهة',
        'بناء الـ Frontend',
        'بناء الـ Backend',
        'ربط كل شيء',
        'اختبار المنتج',
        'نشره أونلاين',
      ],
    },
  },
  {
    icon: CloudUpload,
    title: { en: 'Deployment & Hosting', ar: 'النشر والاستضافة' },
    description: {
      en: 'Deploy your website or application online and prepare it for real users.',
      ar: 'انشر موقعك أو تطبيقك أونلاين وحضره للمستخدمين الحقيقيين.',
    },
    deliverables: {
      en: ['VPS setup', 'Domain connection', 'Server configuration', 'Database setup', 'Production deployment'],
      ar: ['إعداد VPS', 'ربط النطاق', 'إعدادات الخادم', 'إعداد قاعدة البيانات', 'نشر الإنتاج'],
    },
  },
]

export const processSteps: ProcessStep[] = [
  {
    icon: MessageCircle,
    title: { en: 'Discovery Call', ar: 'جلسة الاكتشاف' },
    description: {
      en: 'We discuss your idea, business goals, users, and the main problem you want to solve.',
      ar: 'نناقش فكرتك والأهداف الأعمال والمستخدمين والمشكلة الرئيسية التي تريد حلها.',
    },
  },
  {
    icon: Lightbulb,
    title: { en: 'Feature Planning', ar: 'تخطيط الميزات' },
    description: {
      en: 'We define the important features for the first version and decide what should be included in the MVP.',
      ar: 'نحدد الميزات المهمة للنسخة الأولى ونقرر ما يجب أن يتضمنه MVP.',
    },
  },
  {
    icon: Brush,
    title: { en: 'UI / UX Design', ar: 'تصميم الواجهة والتجربة' },
    description: {
      en: 'I create a clean user-friendly design so the product is easy to use and visually attractive.',
      ar: 'أنشئ تصميماً نظيفاً ودوداً للمستخدم حتى يكون المنتج سهل الاستخدام وجذاباً بصرياً.',
    },
  },
  {
    icon: Code2,
    title: { en: 'Frontend Development', ar: 'تطوير الواجهة الأمامية' },
    description: {
      en: 'I build the frontend pages, dashboards, forms, and user flows.',
      ar: 'أبني صفحات الـ Frontend ولوحات التحكم والنماذج وسير العمل للمستخدم.',
    },
  },
  {
    icon: Server,
    title: { en: 'Backend Development', ar: 'تطوير الخادم' },
    description: {
      en: 'I build the APIs, authentication, database, business logic, and integrations.',
      ar: 'أبني الـ APIs والمصادقة وقاعدة البيانات ومنطق الأعمال والتكاملات.',
    },
  },
  {
    icon: CheckCircle2,
    title: { en: 'Testing & Improvements', ar: 'الاختبار والتحسينات' },
    description: {
      en: 'I test the main flows, fix issues, improve performance, and make the experience smoother.',
      ar: 'أختبر الـ flows الرئيسية، أصلح المشاكل، أحسّن الأداء، وأجعل التجربة أسلس.',
    },
  },
  {
    icon: CloudUpload,
    title: { en: 'Deployment', ar: 'النشر' },
    description: {
      en: 'The project is deployed online with domain, server, database, and production setup.',
      ar: 'ينشر المشروع أونلاين مع النطاق والخادم وقاعدة البيانات وإعدادات الإنتاج.',
    },
  },
  {
    icon: Gauge,
    title: { en: 'Support & Growth', ar: 'الدعم والنمو' },
    description: {
      en: 'After launch, we can improve the product, add new features, and grow it based on user feedback.',
      ar: 'بعد الإطلاق، نستطيع تحسين المنتج وإضافة ميزات جديدة ونموه بناءً على ملاحظات المستخدمين.',
    },
  },
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
  { icon: Phone, label: { en: 'Call Me', ar: 'اتصل بي' }, value: '01222199183', href: configurableLinks.phone },
  { icon: Mail, label: { en: 'Send Email', ar: 'أرسل بريد' }, value: 'mostafa.mahmoudegy10@gmail.com', href: configurableLinks.email },
  { icon: Code2, label: { en: 'View GitHub', ar: 'اعرض جيت هاب' }, value: 'GitHub', href: configurableLinks.github },
  { icon: HeartHandshake, label: { en: 'LinkedIn', ar: 'لينكدإن' }, value: 'LinkedIn', href: configurableLinks.linkedin },
]

export const techRows = [
  ['React', 'Tailwind CSS', 'Framer Motion', 'Spring Boot', 'Java', 'PostgreSQL', 'Cloudinary'],
  ['Product Design', 'Dashboards', 'MVPs', 'REST APIs', 'RabbitMQ', 'Heroku', 'Business Websites'],
]
