import { ServiceMap } from "@/types/service";

export const services: ServiceMap = {
  "web-development/custom-web-applications": {
    slug: "web-development/custom-web-applications",
    parentService: "web-development",
    title: "Custom Web Applications",
    description: "Build secure, scalable, and high-performing web applications tailored to your business goals. From MVPs to enterprise-grade platforms, we deliver solutions that drive innovation and efficiency.",
    headerImage: "/images/services/custom-web-apps.jpg",
    metaDescription: "Expert custom web application development services. We design, build, and scale tailor-made applications with modern technologies to accelerate your digital transformation.",
    features: [
      { title: "Tailored Solutions", description: "Applications uniquely designed for your workflows and business goals.", icon: "customize" },
      { title: "Scalable Architecture", description: "Built to handle growth and evolving business needs seamlessly.", icon: "scale" },
      { title: "Modern Tech Stack", description: "React, Next.js, Node.js, GraphQL, and more for reliable performance.", icon: "stack" },
      { title: "Seamless Integration", description: "Integrates effortlessly with APIs, third-party tools, and legacy systems.", icon: "integrate" },
      { title: "Security by Design", description: "Data security and compliance embedded into every layer of development.", icon: "security" }
    ],
    process: {
      title: "Our Proven Development Process",
      description: "We follow agile, iterative practices to ensure high-quality delivery on time and within budget.",
      steps: [
        { title: "Discovery & Requirement Analysis", description: "Workshops to gather business needs, define KPIs, and establish goals." },
        { title: "Architecture & UX Design", description: "Design scalable system architecture and intuitive UI/UX prototypes." },
        { title: "Agile Development", description: "Incremental feature delivery with regular demos and client feedback." },
        { title: "Quality Assurance", description: "Automated and manual testing covering performance, security, and usability." },
        { title: "Deployment & Support", description: "CI/CD-driven deployment, monitoring, and ongoing maintenance." },
        { title: "Continuous Improvement", description: "Post-launch updates, performance optimization, and feature enhancements." }
      ]
    },
    technologies: [
      { name: "React.js", description: "Fast, SEO-friendly, and scalable frontend solutions.", icon: "react" },
      { name: "Angular", description: "Modern backend frameworks for APIs and microservices.", icon: "node" },
      { name: "Vue.js", description: "Efficient data fetching with flexible APIs.", icon: "graphql" },
      { name: "Node.js", description: "Reliable databases for structured and unstructured data.", icon: "database" },
      { name: "PostgreSQL", description: "Containerization for scalable and resilient deployments.", icon: "docker" },
      { name: "MongoDB", description: "Flexible NoSQL database for dynamic data storage.", icon: "mongodb" }
    ],
    benefits: [
      { title: "Faster Time-to-Market", description: "Agile delivery helps you launch quicker and stay ahead of competition.", icon: "speed" },
      { title: "Future-Proof Technology", description: "We leverage modern frameworks ensuring long-term maintainability.", icon: "future" },
      { title: "Improved ROI", description: "Custom solutions reduce operational costs and boost efficiency.", icon: "roi" },
      { title: "Dedicated Support", description: "We provide 24/7 support and continuous optimization.", icon: "support" }
    ],
    faqs: [
      { question: "How much does a custom web application cost?", answer: "The cost depends on complexity, features, and timelines. We provide flexible engagement models — fixed cost or dedicated team." },
      { question: "Do you support scaling after MVP launch?", answer: "Yes, we specialize in building MVPs that evolve into enterprise-grade platforms." },
      { question: "Who owns the source code?", answer: "You retain 100% ownership of the source code and IP rights after project completion." },
      { question: "Can you integrate with our existing systems?", answer: "Absolutely. We specialize in smooth integrations with CRMs, ERPs, payment gateways, and third-party APIs." }
    ],
    relatedServices: [
      "web-development/cms-development",
      "web-development/progressive-web-apps",
      "web-development/api-development"
    ]
  },
  "web-development/cms-development": {
  slug: "web-development/cms-development",
  parentService: "web-development",
  title: "CMS Development",
  description: "Empower your business with robust, scalable, and easy-to-manage content management systems. From custom CMS solutions to popular platforms, we build systems that streamline content workflows and drive digital growth.",
  headerImage: "/images/services/cms-development.jpg",
  metaDescription: "Expert CMS development services. We specialize in custom and open-source CMS platforms like WordPress, Drupal, and headless CMS solutions to simplify content management and enhance digital experiences.",
  features: [
    { title: "Custom CMS Solutions", description: "Tailored CMS platforms designed to match your exact business needs.", icon: "customize" },
    { title: "Headless CMS", description: "Decoupled architecture for delivering content across web, mobile, and IoT.", icon: "headless" },
    { title: "SEO-Friendly", description: "Built-in SEO optimizations to boost visibility and search rankings.", icon: "seo" },
    { title: "User-Friendly Interfaces", description: "Intuitive dashboards enabling easy content updates without coding.", icon: "dashboard" },
    { title: "Scalability & Performance", description: "Optimized for speed, uptime, and growing content demands.", icon: "scale" }
  ],
  process: {
    title: "Our CMS Development Process",
    description: "We deliver CMS solutions through a proven process ensuring efficiency, scalability, and ease of use.",
    steps: [
      { title: "Requirement Gathering", description: "Identify business goals, workflows, and content needs." },
      { title: "Platform Selection", description: "Choose the right CMS — WordPress, Drupal, or custom headless — based on requirements." },
      { title: "Design & Development", description: "Develop responsive, secure, and feature-rich CMS platforms." },
      { title: "Integration", description: "Connect with CRMs, ERPs, analytics, and third-party tools." },
      { title: "Testing & QA", description: "Comprehensive testing for performance, security, and usability." },
      { title: "Deployment & Training", description: "Launch and provide training for seamless content management." }
    ]
  },
  technologies: [
    { name: "WordPress", description: "The most popular CMS for blogs, business websites, and eCommerce.", icon: "wordpress" },
    { name: "Drupal", description: "Enterprise-grade CMS with strong security and scalability.", icon: "drupal" },
    { name: "Joomla", description: "Flexible CMS for medium to large-scale websites and communities.", icon: "joomla" },
    { name: "Contentful", description: "Headless CMS for omnichannel content delivery.", icon: "contentful" },
    { name: "Strapi", description: "Open-source headless CMS with powerful APIs and customization.", icon: "strapi" },
    { name: "Sanity", description: "Real-time headless CMS for structured content management.", icon: "sanity" }
  ],
  benefits: [
    { title: "Easy Content Management", description: "Update content quickly without relying on developers.", icon: "ease" },
    { title: "Cost Efficiency", description: "Save time and money with ready-to-use CMS platforms.", icon: "roi" },
    { title: "Future-Proof", description: "Headless CMS ensures adaptability for new devices and channels.", icon: "future" },
    { title: "Enhanced Collaboration", description: "Multiple users can manage, edit, and approve content seamlessly.", icon: "collaboration" }
  ],
  faqs: [
    { question: "Which CMS platform do you recommend?", answer: "It depends on your needs. WordPress is great for SMEs, Drupal for enterprises, and headless CMS like Contentful or Strapi for omnichannel experiences." },
    { question: "Can you migrate our existing site to a new CMS?", answer: "Yes, we provide hassle-free CMS migration with zero data loss." },
    { question: "Do you provide CMS training?", answer: "Absolutely. We train your team to manage and update content efficiently." },
    { question: "Can CMS integrate with third-party tools?", answer: "Yes, we ensure smooth integration with CRMs, ERPs, analytics, and other platforms." }
  ],
  relatedServices: [
    "web-development/custom-web-applications",
    "web-development/api-development",
    "web-development/progressive-web-apps"
  ]
},
  "web-development/progressive-web-apps": {
  slug: "web-development/progressive-web-apps",
  parentService: "web-development",
  title: "Progressive Web Apps (PWA)",
  description: "Deliver app-like experiences on the web with Progressive Web Apps. PWAs combine the best of web and mobile apps, offering speed, reliability, and offline capabilities that keep your users engaged.",
  headerImage: "/images/services/progressive-web-apps.jpg",
  metaDescription: "Expert Progressive Web App development services. Build fast, reliable, and installable PWAs using React, Angular, Vue.js, and modern web technologies.",
  features: [
    { title: "App-Like Experience", description: "PWAs deliver native-like performance with smooth interactions.", icon: "mobile" },
    { title: "Offline Access", description: "Users can access key features and content without an internet connection.", icon: "offline" },
    { title: "Cross-Platform", description: "One codebase works seamlessly across desktop and mobile devices.", icon: "cross" },
    { title: "Faster Load Times", description: "Optimized caching and service workers ensure instant loading.", icon: "speed" },
    { title: "Installable on Devices", description: "PWAs can be added to home screens and launch like native apps.", icon: "install" }
  ],
  process: {
    title: "Our PWA Development Process",
    description: "We follow an agile and structured approach to build scalable and high-performing Progressive Web Apps.",
    steps: [
      { title: "Requirement Analysis", description: "Understand business goals, target users, and feature expectations." },
      { title: "UI/UX Design", description: "Create intuitive, responsive, and mobile-first designs." },
      { title: "PWA Development", description: "Build scalable PWAs using modern frameworks and service workers." },
      { title: "Integration", description: "Seamlessly integrate with APIs, backends, and third-party services." },
      { title: "Testing & QA", description: "Ensure smooth performance across browsers, devices, and offline scenarios." },
      { title: "Deployment & Support", description: "Deploy PWAs with CI/CD pipelines and provide ongoing updates." }
    ]
  },
  technologies: [
    { name: "React.js", description: "Popular library for building fast, interactive PWAs.", icon: "react" },
    { name: "Angular", description: "Robust framework with built-in PWA support and tooling.", icon: "angular" },
    { name: "Vue.js", description: "Lightweight and flexible framework for scalable PWAs.", icon: "vue" },
    { name: "Workbox", description: "Google's library for managing caching and offline experiences.", icon: "workbox" },
    { name: "Lighthouse", description: "Tool for auditing PWA performance, accessibility, and SEO.", icon: "lighthouse" },
    { name: "TypeScript", description: "Strongly-typed language for building scalable, maintainable PWAs.", icon: "typescript" }
  ],
  benefits: [
    { title: "Higher Engagement", description: "PWAs improve retention with push notifications and offline features.", icon: "engagement" },
    { title: "Lower Development Costs", description: "One PWA works across multiple platforms, reducing time and cost.", icon: "cost" },
    { title: "SEO Advantage", description: "PWAs are crawlable and indexable, unlike traditional native apps.", icon: "seo" },
    { title: "Future-Ready", description: "Built on modern web standards, PWAs adapt to evolving technologies.", icon: "future" }
  ],
  faqs: [
    { question: "Do PWAs work on iOS and Android?", answer: "Yes, PWAs run on all modern browsers and can be installed on iOS and Android devices." },
    { question: "Can a PWA replace a native mobile app?", answer: "In many cases, yes. PWAs provide native-like experiences with offline access, push notifications, and installability." },
    { question: "Do PWAs improve SEO?", answer: "Yes, since PWAs are built on web technologies, they can be indexed by search engines." },
    { question: "Can PWAs integrate with existing backends?", answer: "Absolutely. We build PWAs that integrate seamlessly with APIs, CRMs, and enterprise systems." }
  ],
  relatedServices: [
    "web-development/custom-web-applications",
    "web-development/cms-development",
    "web-development/api-development"
  ]
},
  "web-development/api-development": {
  slug: "web-development/api-development",
  parentService: "web-development",
  title: "API Development",
  description: "Enable seamless communication between your applications with secure, scalable, and high-performing APIs. We design and build RESTful and GraphQL APIs that power modern applications and integrate systems efficiently.",
  headerImage: "/images/services/api-development.jpg",
  metaDescription: "Expert API development services. We build RESTful and GraphQL APIs using Node.js, Express, and modern frameworks to ensure secure, scalable, and efficient integrations.",
  features: [
    { title: "Custom API Solutions", description: "APIs tailored to your unique business workflows and integration needs.", icon: "customize" },
    { title: "REST & GraphQL APIs", description: "Flexible architectures to support different use cases and client requirements.", icon: "api" },
    { title: "Secure by Design", description: "Authentication, authorization, and encryption embedded from the start.", icon: "security" },
    { title: "High Performance", description: "Optimized for speed, low latency, and high throughput.", icon: "performance" },
    { title: "Seamless Integrations", description: "Connect effortlessly with third-party tools, CRMs, ERPs, and legacy systems.", icon: "integrate" }
  ],
  process: {
    title: "Our API Development Process",
    description: "We follow a structured, agile-driven process to build reliable, scalable, and secure APIs.",
    steps: [
      { title: "Requirement Analysis", description: "Identify business needs, data sources, and integration goals." },
      { title: "API Design", description: "Define endpoints, data models, and security protocols." },
      { title: "Development", description: "Build RESTful or GraphQL APIs using modern frameworks and best practices." },
      { title: "Testing & QA", description: "Ensure APIs are secure, reliable, and performant under real-world conditions." },
      { title: "Deployment", description: "Deploy APIs with CI/CD pipelines for quick and reliable releases." },
      { title: "Monitoring & Maintenance", description: "Provide post-launch monitoring, scaling, and continuous improvements." }
    ]
  },
  technologies: [
    { name: "Node.js", description: "Lightweight, fast, and scalable runtime for building APIs.", icon: "node" },
    { name: "Express.js", description: "Minimal and flexible Node.js framework for RESTful APIs.", icon: "express" },
    { name: "GraphQL", description: "Flexible query language for APIs enabling efficient data fetching.", icon: "graphql" },
    { name: "Postman", description: "Collaboration platform for designing, testing, and documenting APIs.", icon: "postman" },
    { name: "Swagger / OpenAPI", description: "Industry-standard for API documentation and design.", icon: "swagger" },
    { name: "MongoDB / PostgreSQL", description: "Reliable databases for API-driven applications.", icon: "database" }
  ],
  benefits: [
    { title: "Faster Integrations", description: "APIs enable quick connections with internal and external systems.", icon: "speed" },
    { title: "Scalable Solutions", description: "Built to handle growing traffic and evolving business needs.", icon: "scale" },
    { title: "Enhanced Security", description: "APIs secured with OAuth, JWT, and encryption standards.", icon: "security" },
    { title: "Future-Proof", description: "APIs designed for flexibility and adaptability with new technologies.", icon: "future" }
  ],
  faqs: [
    { question: "Do you build both REST and GraphQL APIs?", answer: "Yes, we specialize in building both RESTful and GraphQL APIs depending on your needs." },
    { question: "Can you integrate APIs with legacy systems?", answer: "Absolutely. We build APIs that bridge modern applications with older systems seamlessly." },
    { question: "Do you provide API documentation?", answer: "Yes, we deliver complete API documentation using Swagger or Postman collections." },
    { question: "How do you ensure API security?", answer: "We implement industry best practices such as OAuth2, JWT authentication, rate limiting, and encryption." }
  ],
  relatedServices: [
    "web-development/custom-web-applications",
    "web-development/cms-development",
    "web-development/progressive-web-apps"
  ]
},
  "mobile-apps/ios-development": {
  slug: "mobile-apps/ios-development",
  parentService: "mobile-apps",
  title: "iOS Development",
  description: "Build high-performance, secure, and feature-rich iOS applications tailored for iPhone, iPad, and Apple Watch. From startups to enterprises, we deliver apps that align with your business goals and provide seamless user experiences.",
  headerImage: "/images/services/ios-development.jpg",
  metaDescription: "Expert iOS app development services. We design, build, and scale custom iOS applications using Swift, Objective-C, and modern Apple frameworks for unmatched user experiences.",
  features: [
    { title: "Native Performance", description: "Apps built with Swift and Objective-C for superior performance and reliability.", icon: "performance" },
    { title: "User-Centric Design", description: "Intuitive and engaging UI/UX tailored for Apple's Human Interface Guidelines.", icon: "design" },
    { title: "Seamless Integrations", description: "Integration with APIs, third-party tools, and Apple services like Siri, ARKit, and HealthKit.", icon: "integrate" },
    { title: "App Store Compliance", description: "Development aligned with Apple's guidelines for smooth App Store approvals.", icon: "compliance" },
    { title: "Security First", description: "Advanced security practices for data protection and compliance with privacy standards.", icon: "security" }
  ],
  process: {
    title: "Our Proven iOS Development Process",
    description: "We follow an agile and structured approach to deliver scalable and user-friendly iOS applications.",
    steps: [
      { title: "Requirement Analysis", description: "Understand your business objectives, target audience, and app requirements." },
      { title: "UI/UX Design", description: "Craft wireframes and interactive prototypes aligned with Apple's design principles." },
      { title: "Native App Development", description: "Build robust, scalable apps using Swift, Objective-C, and modern iOS frameworks." },
      { title: "Testing & QA", description: "Comprehensive manual and automated testing to ensure performance and security." },
      { title: "App Store Deployment", description: "Assist with App Store submission, compliance checks, and approvals." },
      { title: "Support & Maintenance", description: "Post-launch support, performance optimization, and feature updates." }
    ]
  },
  technologies: [
    { name: "Swift", description: "Apple's powerful and intuitive language for building iOS apps.", icon: "swift" },
    { name: "Objective-C", description: "Reliable language for maintaining and scaling legacy iOS applications.", icon: "objc" },
    { name: "Xcode", description: "Apple's official IDE for developing, testing, and deploying iOS apps.", icon: "xcode" },
    { name: "SwiftUI", description: "Modern UI framework for building responsive and interactive interfaces.", icon: "swiftui" },
    { name: "Core Data", description: "Efficient local data management and persistence solution for iOS apps.", icon: "coredata" },
    { name: "ARKit", description: "Framework for creating immersive augmented reality experiences.", icon: "arkit" }
  ],
  benefits: [
    { title: "Premium User Experience", description: "Deliver smooth and engaging experiences that iOS users expect.", icon: "ux" },
    { title: "Faster Time-to-Market", description: "Agile development ensures quick rollout and early user feedback.", icon: "speed" },
    { title: "Scalability", description: "Apps built to scale with your growing business and user base.", icon: "scale" },
    { title: "Ongoing Support", description: "Continuous monitoring, updates, and enhancements post-launch.", icon: "support" }
  ],
  faqs: [
    { question: "Do you build apps for both iPhone and iPad?", answer: "Yes, we create universal iOS apps optimized for iPhone, iPad, and even Apple Watch." },
    { question: "Can you help with App Store publishing?", answer: "Absolutely. We handle compliance, app submission, and approval assistance." },
    { question: "Do you provide post-launch support?", answer: "Yes, we offer ongoing maintenance, updates, and performance monitoring." },
    { question: "Can you integrate third-party APIs in iOS apps?", answer: "Yes, we specialize in smooth integrations with APIs, payment gateways, CRMs, and more." }
  ],
  relatedServices: [
    "mobile-apps/android-development",
    "mobile-apps/cross-platform-development",
    "mobile-apps/ui-ux-design"
  ]
},
  "mobile-apps/android-development": {
  slug: "mobile-apps/android-development",
  parentService: "mobile-apps",
  title: "Android Development",
  description: "Build secure, scalable, and feature-rich Android applications optimized for smartphones, tablets, and wearables. We deliver custom Android solutions that combine intuitive design with high performance to meet your business goals.",
  headerImage: "/images/services/android-development.jpg",
  metaDescription: "Expert Android app development services. We design, build, and scale custom Android applications using Kotlin, Java, Jetpack, and modern Google frameworks for exceptional performance.",
  features: [
    { title: "Native Performance", description: "Apps developed with Kotlin and Java for seamless performance and reliability.", icon: "performance" },
    { title: "Modern UI/UX", description: "Designs aligned with Google's Material Design for intuitive user experiences.", icon: "design" },
    { title: "Wide Device Compatibility", description: "Optimized for smartphones, tablets, TVs, and wearables.", icon: "devices" },
    { title: "Seamless Integrations", description: "Integration with APIs, CRMs, ERPs, payment gateways, and third-party services.", icon: "integrate" },
    { title: "App Store Compliance", description: "Developed following Google Play guidelines for smooth approvals.", icon: "compliance" }
  ],
  process: {
    title: "Our Android Development Process",
    description: "We follow an agile and proven approach to build scalable and user-friendly Android applications.",
    steps: [
      { title: "Requirement Analysis", description: "Gather business objectives, target users, and feature requirements." },
      { title: "UI/UX Design", description: "Craft engaging, mobile-first designs with Material Design principles." },
      { title: "App Development", description: "Build robust, scalable apps using Kotlin, Java, and Android Jetpack." },
      { title: "Testing & QA", description: "Thorough testing across devices for performance, security, and usability." },
      { title: "Deployment", description: "Publish apps to Google Play Store with compliance and optimization." },
      { title: "Support & Maintenance", description: "Provide ongoing updates, bug fixes, and feature enhancements." }
    ]
  },
  technologies: [
    { name: "Kotlin", description: "Modern, concise, and official language for Android development.", icon: "kotlin" },
    { name: "Java", description: "Reliable and widely used language for Android applications.", icon: "java" },
    { name: "Android Studio", description: "Official IDE for building, testing, and debugging Android apps.", icon: "androidstudio" },
    { name: "Jetpack", description: "Set of Android libraries for faster, high-quality app development.", icon: "jetpack" },
    { name: "Firebase", description: "Google's platform for backend services like authentication, analytics, and push notifications.", icon: "firebase" },
    { name: "SQLite / Room", description: "Efficient local databases for managing structured app data.", icon: "database" }
  ],
  benefits: [
    { title: "Wider Reach", description: "Access the world's largest mobile user base with Android apps.", icon: "reach" },
    { title: "Faster Time-to-Market", description: "Agile methodology ensures quicker development and deployment.", icon: "speed" },
    { title: "Scalable Solutions", description: "Apps built to grow with your business and user base.", icon: "scale" },
    { title: "Continuous Support", description: "Post-launch updates, monitoring, and performance optimization.", icon: "support" }
  ],
  faqs: [
    { question: "Do you develop apps for all Android devices?", answer: "Yes, we create apps optimized for smartphones, tablets, TVs, and wearables." },
    { question: "Can you publish apps on Google Play Store?", answer: "Yes, we handle the complete publishing process including compliance checks." },
    { question: "Do you provide support after launch?", answer: "Absolutely. We offer maintenance, updates, and feature enhancements." },
    { question: "Can you integrate APIs in Android apps?", answer: "Yes, we specialize in integrating third-party APIs, CRMs, ERPs, and payment gateways." }
  ],
  relatedServices: [
    "mobile-apps/ios-development",
    "mobile-apps/cross-platform-development",
    "mobile-apps/ui-ux-design"
  ]
},
  "mobile-apps/cross-platform": {
  slug: "mobile-apps/cross-platform",
  parentService: "mobile-apps",
  title: "Cross-Platform Mobile App Development",
  description: "Develop high-performance mobile apps that run seamlessly on both iOS and Android using a single codebase. Save time, reduce costs, and ensure consistent user experiences across platforms.",
  headerImage: "/images/services/cross-platform-mobile-app-development.png",
  metaDescription: "Expert cross-platform mobile app development services. Build cost-effective, scalable apps with React Native, Flutter, and Xamarin to reach users across iOS and Android.",
  features: [
    { title: "Single Codebase", description: "Write once, deploy everywhere — faster time-to-market with reduced development effort.", icon: "code" },
    { title: "Native-Like Experience", description: "High-performance apps with smooth UI and near-native functionality.", icon: "mobile" },
    { title: "Cost Efficiency", description: "Lower development and maintenance costs compared to separate native apps.", icon: "savings" },
    { title: "Scalable Architecture", description: "Easily maintain and scale your app as your business grows.", icon: "scale" },
    { title: "Seamless Integrations", description: "Integration with APIs, third-party services, and native device features.", icon: "integrate" }
  ],
  process: {
    title: "Our Cross-Platform Development Process",
    description: "We follow a proven agile methodology to deliver high-quality, cross-platform apps on time and within budget.",
    steps: [
      { title: "Requirement Analysis", description: "Understand business needs, target audience, and app objectives." },
      { title: "UI/UX Design", description: "Design intuitive interfaces optimized for both iOS and Android." },
      { title: "Cross-Platform Development", description: "Build using React Native, Flutter, or Xamarin for efficient delivery." },
      { title: "Testing & QA", description: "Rigorous functional, performance, and device-specific testing." },
      { title: "Deployment", description: "Publish apps on App Store and Google Play with CI/CD pipelines." },
      { title: "Support & Maintenance", description: "Regular updates, bug fixes, and feature enhancements post-launch." }
    ]
  },
  technologies: [
    { name: "React Native", description: "Cross-platform apps with near-native performance and fast development.", icon: "react" },
    { name: "Flutter", description: "Google's UI toolkit for building beautiful, high-performance apps.", icon: "flutter" },
    { name: "Xamarin", description: "Microsoft-backed framework for enterprise-grade cross-platform apps.", icon: "xamarin" },
    { name: "Ionic", description: "Hybrid apps with a focus on performance and flexibility.", icon: "ionic" }
  ],
  benefits: [
    { title: "Wider Reach", description: "Target both iOS and Android users with a single app.", icon: "reach" },
    { title: "Faster Development", description: "Accelerated timelines with shared code and resources.", icon: "speed" },
    { title: "Lower Costs", description: "Cut expenses on development, testing, and maintenance.", icon: "cost" },
    { title: "Consistent Experience", description: "Uniform design and features across platforms.", icon: "consistency" }
  ],
  faqs: [
    { question: "Why choose cross-platform development?", answer: "It helps you save time, reduce costs, and deliver consistent user experiences across iOS and Android." },
    { question: "Which framework is best: React Native or Flutter?", answer: "Both are excellent. React Native offers a mature ecosystem, while Flutter provides beautiful UI and high performance. We help choose based on your project needs." },
    { question: "Can you integrate native features?", answer: "Yes, we integrate native modules for camera, GPS, push notifications, payments, and more." },
    { question: "Will the app be accepted on App Store & Play Store?", answer: "Absolutely. We follow Apple and Google guidelines to ensure smooth approvals." }
  ],
  relatedServices: [
    "mobile-apps/ios-development",
    "mobile-apps/android-development",
    "web-development/api-development"
  ]
}, 
  "mobile-apps/maintenance": {
  slug: "mobile-apps/maintenance",
  parentService: "mobile-apps",
  title: "App Maintenance & Support",
  description: "Ensure your mobile apps remain secure, up-to-date, and high-performing with our dedicated maintenance and support services. From bug fixes to feature upgrades, we keep your apps running smoothly.",
  headerImage: "/images/services/application-maintenance.jpg",
  metaDescription: "Reliable mobile app maintenance and support services. Keep your apps updated, secure, and optimized with 24/7 monitoring, bug fixes, and feature enhancements.",
  features: [
    { title: "Proactive Monitoring", description: "Real-time tracking to identify and resolve issues before they affect users.", icon: "monitor" },
    { title: "Regular Updates", description: "Stay ahead with OS upgrades, security patches, and performance improvements.", icon: "update" },
    { title: "Bug Fixing & Optimization", description: "Swift resolution of bugs, crashes, and performance bottlenecks.", icon: "bug" },
    { title: "Feature Enhancements", description: "Continuous addition of new features to meet evolving business needs.", icon: "features" },
    { title: "24/7 Support", description: "Dedicated support team available round-the-clock for critical issues.", icon: "support" }
  ],
  process: {
    title: "Our App Maintenance Process",
    description: "We follow a structured approach to ensure uninterrupted app performance and long-term value.",
    steps: [
      { title: "App Audit & Analysis", description: "Assess app health, performance metrics, and improvement areas." },
      { title: "Maintenance Planning", description: "Define a roadmap for updates, bug fixes, and feature rollouts." },
      { title: "Monitoring & Bug Fixing", description: "24/7 monitoring and quick resolution of reported issues." },
      { title: "Performance Optimization", description: "Improve speed, responsiveness, and resource utilization." },
      { title: "Upgrades & Enhancements", description: "Add new functionalities and support for latest OS versions." },
      { title: "Reporting & Support", description: "Regular reports on app stability, updates, and performance." }
    ]
  },
  technologies: [
    { name: "Firebase Crashlytics", description: "Real-time crash reporting and diagnostics.", icon: "firebase" },
    { name: "New Relic", description: "Comprehensive app performance monitoring and analytics.", icon: "newrelic" },
    { name: "Jira", description: "Efficient issue tracking and project management.", icon: "jira" },
    { name: "Postman", description: "API testing and monitoring for app integrations.", icon: "postman" },
    { name: "Appium", description: "Automated testing framework for consistent quality assurance.", icon: "appium" }
  ],
  benefits: [
    { title: "Higher User Retention", description: "Deliver smooth user experiences to keep customers engaged.", icon: "retention" },
    { title: "Cost Efficiency", description: "Prevent major breakdowns with proactive monitoring and updates.", icon: "savings" },
    { title: "Future-Proof Apps", description: "Stay compatible with evolving devices and OS versions.", icon: "future" },
    { title: "Business Continuity", description: "Minimize downtime and safeguard app availability.", icon: "continuity" }
  ],
  faqs: [
    { question: "Do you support apps built by other developers?", answer: "Yes, we take over existing apps and provide maintenance, bug fixes, and improvements." },
    { question: "Can you handle OS version upgrades?", answer: "Absolutely. We ensure compatibility with the latest iOS and Android versions." },
    { question: "What are your support models?", answer: "We offer flexible models — hourly, monthly retainer, or dedicated support teams." },
    { question: "Do you provide 24/7 support?", answer: "Yes, our team provides round-the-clock monitoring and support for critical issues." }
  ],
  relatedServices: [
    "mobile-apps/ios-development",
    "mobile-apps/android-development",
    "mobile-apps/cross-platform"
  ]
},
  "cloud-solutions/strategy": {
  slug: "cloud-solutions/strategy",
  parentService: "cloud-solutions",
  title: "Cloud Strategy & Consulting",
  description: "Unlock the full potential of cloud computing with a tailored strategy that aligns with your business goals. We help you plan, adopt, and optimize cloud solutions for scalability, cost efficiency, and innovation.",
  headerImage: "/images/services/cloud-strategy.jpg",
  metaDescription: "Expert cloud strategy and consulting services. Define the right cloud roadmap, optimize costs, and ensure secure, scalable adoption across AWS, Azure, and Google Cloud.",
  features: [
    { title: "Tailored Cloud Roadmap", description: "Custom strategies designed to fit your unique business needs and industry.", icon: "roadmap" },
    { title: "Cost Optimization", description: "Reduce cloud spend with efficient architecture and usage strategies.", icon: "cost" },
    { title: "Multi-Cloud Expertise", description: "Advisory across AWS, Azure, and Google Cloud for maximum flexibility.", icon: "cloud" },
    { title: "Security & Compliance", description: "Ensure compliance with GDPR, HIPAA, and industry-specific regulations.", icon: "security" },
    { title: "Scalability Planning", description: "Future-proof cloud solutions that grow with your business.", icon: "scale" }
  ],
  process: {
    title: "Our Cloud Consulting Process",
    description: "We provide a structured, business-first approach to cloud adoption and optimization.",
    steps: [
      { title: "Assessment & Discovery", description: "Analyze current infrastructure, workloads, and business objectives." },
      { title: "Cloud Readiness Evaluation", description: "Identify gaps and opportunities for cloud adoption." },
      { title: "Strategy Roadmap", description: "Define migration, modernization, and governance plans." },
      { title: "Architecture Design", description: "Create secure, scalable, and cost-optimized cloud architectures." },
      { title: "Implementation Guidance", description: "Support migration and integration with minimal downtime." },
      { title: "Ongoing Advisory", description: "Continuous improvements, cost monitoring, and performance optimization." }
    ]
  },
  technologies: [
    { name: "AWS", description: "Comprehensive cloud platform with global reach and scalability.", icon: "aws" },
    { name: "Microsoft Azure", description: "Enterprise-grade cloud solutions for applications and infrastructure.", icon: "azure" },
    { name: "Google Cloud Platform", description: "Smart, AI-driven cloud services with strong analytics capabilities.", icon: "gcp" },
    { name: "Terraform", description: "Infrastructure as Code for automated cloud provisioning.", icon: "terraform" },
    { name: "Kubernetes", description: "Container orchestration for scalable and resilient applications.", icon: "kubernetes" }
  ],
  benefits: [
    { title: "Reduced Costs", description: "Maximize ROI with optimized cloud resource allocation.", icon: "savings" },
    { title: "Faster Innovation", description: "Leverage modern cloud technologies for rapid experimentation.", icon: "speed" },
    { title: "Increased Security", description: "Embed best-in-class security practices across cloud environments.", icon: "shield" },
    { title: "Scalable Growth", description: "Ensure your infrastructure grows in line with business demand.", icon: "growth" }
  ],
  faqs: [
    { question: "Why do I need a cloud strategy?", answer: "A defined cloud strategy ensures you maximize benefits while minimizing risks, costs, and downtime." },
    { question: "Do you support multi-cloud strategies?", answer: "Yes, we help design strategies across AWS, Azure, and Google Cloud for flexibility and resilience." },
    { question: "Can you help with compliance?", answer: "Absolutely. We ensure adherence to industry standards like GDPR, HIPAA, and ISO 27001." },
    { question: "Do you also execute the migration?", answer: "Yes, we provide both consulting and hands-on implementation support if required." }
  ],
  relatedServices: [
    "cloud-solutions/migration",
    "cloud-solutions/devops",
    "web-development/api-development"
  ]
},
  "cloud-solutions/infrastructure": {
  slug: "cloud-solutions/infrastructure",
  parentService: "cloud-solutions",
  title: "Cloud Infrastructure Management",
  description: "Manage and optimize your cloud infrastructure for maximum performance, scalability, and security. We ensure your cloud environments are resilient, cost-efficient, and aligned with your business objectives.",
  headerImage: "/images/services/cloud-infrastructure.jpg",
  metaDescription: "Comprehensive cloud infrastructure management services. Monitor, optimize, and secure your AWS, Azure, and Google Cloud environments with expert 24/7 support.",
  features: [
    { title: "24/7 Monitoring", description: "Proactive monitoring to detect and resolve issues instantly.", icon: "monitor" },
    { title: "Scalability & Load Balancing", description: "Ensure your infrastructure adapts seamlessly to traffic spikes.", icon: "scale" },
    { title: "Cost Optimization", description: "Optimize resource usage and reduce unnecessary cloud spend.", icon: "savings" },
    { title: "Security & Compliance", description: "Protect data and meet regulatory standards with advanced controls.", icon: "security" },
    { title: "Disaster Recovery", description: "Robust backup and recovery strategies for business continuity.", icon: "recovery" }
  ],
  process: {
    title: "Our Infrastructure Management Approach",
    description: "We follow a structured framework to deliver reliable, secure, and cost-optimized cloud infrastructure.",
    steps: [
      { title: "Assessment & Planning", description: "Evaluate current cloud infrastructure and define optimization goals." },
      { title: "Setup & Configuration", description: "Provision cloud resources with best practices in security and scalability." },
      { title: "Monitoring & Management", description: "Continuous monitoring with proactive issue resolution." },
      { title: "Security & Compliance", description: "Implement policies to safeguard workloads and ensure compliance." },
      { title: "Optimization", description: "Regular audits to optimize performance, costs, and resource utilization." },
      { title: "Support & Reporting", description: "Provide 24/7 support and detailed infrastructure health reports." }
    ]
  },
  technologies: [
    { name: "AWS EC2 & S3", description: "Compute and storage services for scalable infrastructure.", icon: "aws" },
    { name: "Azure Virtual Machines", description: "Flexible infrastructure for enterprise-grade applications.", icon: "azure" },
    { name: "Google Cloud Compute Engine", description: "Scalable compute services on Google Cloud.", icon: "gcp" },
    { name: "Terraform", description: "Infrastructure as Code for automated resource provisioning.", icon: "terraform" },
    { name: "Ansible", description: "Configuration management and automated deployments.", icon: "ansible" }
  ],
  benefits: [
    { title: "Improved Reliability", description: "Ensure always-on availability with robust infrastructure.", icon: "uptime" },
    { title: "Lower Costs", description: "Eliminate waste and optimize resource utilization.", icon: "cost" },
    { title: "Enhanced Security", description: "Protect applications with built-in cloud security measures.", icon: "shield" },
    { title: "Scalable Growth", description: "Expand infrastructure seamlessly as business demands increase.", icon: "growth" }
  ],
  faqs: [
    { question: "Do you support multi-cloud infrastructure?", answer: "Yes, we manage infrastructures across AWS, Azure, and Google Cloud." },
    { question: "Can you ensure high availability?", answer: "Absolutely. We implement auto-scaling, load balancing, and failover strategies." },
    { question: "Do you provide disaster recovery solutions?", answer: "Yes, we design and implement DR strategies to ensure business continuity." },
    { question: "Will you optimize costs regularly?", answer: "Yes, we perform continuous audits to reduce unnecessary cloud spending." }
  ],
  relatedServices: [
    "cloud-solutions/strategy",
    "cloud-solutions/migration",
    "cloud-solutions/devops"
  ]
},
  "cloud-solutions/devops": {
  slug: "cloud-solutions/devops",
  parentService: "cloud-solutions",
  title: "DevOps & Automation",
  description: "Accelerate software delivery with DevOps and automation practices that streamline development, testing, and deployment. We help you build CI/CD pipelines, automate workflows, and ensure faster, more reliable releases.",
  headerImage: "/images/services/devops-automation.jpg",
  metaDescription: "Expert DevOps and automation services. Build CI/CD pipelines, automate infrastructure, and optimize cloud operations for faster, more secure software delivery.",
  features: [
    { title: "CI/CD Pipelines", description: "Automated build, test, and deployment workflows for faster delivery.", icon: "cicd" },
    { title: "Infrastructure as Code", description: "Manage cloud infrastructure with Terraform, Ansible, and more.", icon: "iac" },
    { title: "Automated Testing", description: "Ensure quality with automated unit, integration, and regression tests.", icon: "testing" },
    { title: "Monitoring & Logging", description: "Gain real-time visibility into system health and performance.", icon: "monitor" },
    { title: "Cloud Automation", description: "Automate provisioning, scaling, and deployment across AWS, Azure, and GCP.", icon: "cloud" }
  ],
  process: {
    title: "Our DevOps & Automation Process",
    description: "We implement DevOps best practices to create a culture of collaboration, automation, and continuous improvement.",
    steps: [
      { title: "Assessment & Planning", description: "Evaluate current processes and identify automation opportunities." },
      { title: "CI/CD Setup", description: "Implement automated pipelines for builds, testing, and deployment." },
      { title: "Infrastructure Automation", description: "Adopt Infrastructure as Code for consistency and scalability." },
      { title: "Monitoring & Security", description: "Set up proactive monitoring and integrate security practices." },
      { title: "Release Management", description: "Enable faster, more reliable releases with minimal downtime." },
      { title: "Continuous Optimization", description: "Regular improvements for efficiency, cost savings, and scalability." }
    ]
  },
  technologies: [
    { name: "Jenkins", description: "Popular CI/CD automation server.", icon: "jenkins" },
    { name: "GitHub Actions", description: "Automated workflows integrated with GitHub repositories.", icon: "github" },
    { name: "Terraform", description: "Infrastructure as Code for cloud provisioning.", icon: "terraform" },
    { name: "Docker", description: "Containerization for consistent deployments.", icon: "docker" },
    { name: "Kubernetes", description: "Orchestrating containers for scalability and resilience.", icon: "kubernetes" }
  ],
  benefits: [
    { title: "Faster Time-to-Market", description: "Deliver features and fixes to customers quicker.", icon: "speed" },
    { title: "Reduced Errors", description: "Automation minimizes manual mistakes and increases reliability.", icon: "accuracy" },
    { title: "Improved Collaboration", description: "Bridges the gap between development and operations teams.", icon: "team" },
    { title: "Scalable Delivery", description: "Support rapid growth with automated cloud-native workflows.", icon: "scale" }
  ],
  faqs: [
    { question: "What is DevOps?", answer: "DevOps is a set of practices that combine software development and IT operations to shorten the development lifecycle and deliver high-quality software continuously." },
    { question: "Do you set up CI/CD pipelines?", answer: "Yes, we design and implement automated CI/CD pipelines tailored to your workflows." },
    { question: "Can you manage multi-cloud automation?", answer: "Absolutely. We automate deployments across AWS, Azure, and Google Cloud environments." },
    { question: "Will automation reduce costs?", answer: "Yes, automation streamlines operations, reduces manual effort, and optimizes infrastructure costs." }
  ],
  relatedServices: [
    "cloud-solutions/strategy",
    "cloud-solutions/migration",
    "cloud-solutions/infrastructure"
  ]
}, 
  "cloud-solutions/security": {
  slug: "cloud-solutions/security",
  parentService: "cloud-solutions",
  title: "Cloud Security & Compliance",
  description: "Protect your cloud infrastructure with enterprise-grade security solutions. We help organizations safeguard sensitive data, ensure regulatory compliance, and defend against evolving cyber threats.",
  headerImage: "/images/services/cloud-security.jpg",
  metaDescription: "Expert cloud security and compliance services. Protect your data, meet regulatory requirements, and secure your cloud infrastructure with modern security practices.",
  
  features: [
    {
      title: "Data Protection",
      description: "Encryption, access controls, and monitoring to keep your data safe.",
      icon: "shield"
    },
    {
      title: "Compliance Readiness",
      description: "Stay aligned with GDPR, HIPAA, ISO 27001, and other regulatory standards.",
      icon: "compliance"
    },
    {
      title: "Threat Detection",
      description: "Proactive monitoring and AI-driven alerts against cyber attacks.",
      icon: "alert"
    },
    {
      title: "Identity & Access Management",
      description: "Secure authentication and role-based access control across your systems.",
      icon: "lock"
    },
    {
      title: "Continuous Security Audits",
      description: "Regular assessments to identify vulnerabilities and ensure compliance.",
      icon: "audit"
    }
  ],

  process: {
    title: "Our Cloud Security Approach",
    description: "We implement a layered security framework that aligns with your business and compliance needs.",
    steps: [
      {
        title: "Assessment & Risk Analysis",
        description: "Identify risks, compliance gaps, and existing security posture."
      },
      {
        title: "Security Architecture Design",
        description: "Define cloud-native security controls tailored to your infrastructure."
      },
      {
        title: "Implementation",
        description: "Deploy encryption, IAM, monitoring, and compliance automation tools."
      },
      {
        title: "Testing & Validation",
        description: "Penetration tests, audits, and compliance verification."
      },
      {
        title: "Ongoing Monitoring",
        description: "24/7 monitoring, threat intelligence, and vulnerability management."
      },
      {
        title: "Compliance Reporting",
        description: "Automated reports to demonstrate adherence to regulations."
      }
    ]
  },

  technologies: [
    {
      name: "AWS Security Hub",
      description: "Centralized security visibility and compliance checks.",
      icon: "aws"
    },
    {
      name: "Azure Security Center",
      description: "Unified cloud-native security management for Azure workloads.",
      icon: "azure"
    },
    {
      name: "Google Cloud Security Command Center",
      description: "Threat detection and data protection for Google Cloud.",
      icon: "gcp"
    },
    {
      name: "Okta",
      description: "Identity and access management for secure authentication.",
      icon: "okta"
    },
    {
      name: "HashiCorp Vault",
      description: "Secure secret management and data encryption.",
      icon: "vault"
    },
    {
      name: "Splunk",
      description: "Security information and event management (SIEM) platform.",
      icon: "splunk"
    }
  ],

  benefits: [
    {
      title: "Regulatory Compliance",
      description: "Easily meet global compliance frameworks with automated checks.",
      icon: "law"
    },
    {
      title: "Reduced Risk Exposure",
      description: "Mitigate vulnerabilities and prevent data breaches.",
      icon: "risk"
    },
    {
      title: "Operational Efficiency",
      description: "Streamlined security processes with automation and monitoring.",
      icon: "efficiency"
    },
    {
      title: "Business Continuity",
      description: "Secure backups and disaster recovery to protect operations.",
      icon: "continuity"
    }
  ],

  faqs: [
    {
      question: "Do you support compliance certifications like ISO 27001 or HIPAA?",
      answer: "Yes, we provide full support in aligning cloud infrastructure with ISO 27001, HIPAA, GDPR, SOC 2, and other compliance standards."
    },
    {
      question: "Can you monitor my multi-cloud environment?",
      answer: "Absolutely. We secure AWS, Azure, GCP, and hybrid cloud setups with centralized monitoring and reporting."
    },
    {
      question: "How do you handle incident response?",
      answer: "We implement 24/7 monitoring and provide rapid response plans to contain, investigate, and resolve security incidents."
    },
    {
      question: "Will I still own my data?",
      answer: "Yes, you retain complete ownership of your data. Our role is to secure and protect it against threats."
    }
  ],

  relatedServices: [
    "cloud-solutions/strategy",
    "cloud-solutions/migration",
    "cloud-solutions/infrastructure"
  ]
}, 
  "ai/machine-learning": {
  slug: "services/ai/machine-learning",
  parentService: "ai",
  title: "AI & Machine Learning Solutions",
  description: "Unlock the power of artificial intelligence with tailored machine learning solutions. From predictive models to intelligent automation, we help businesses drive smarter decisions and efficiency.",
  headerImage: "/images/services/machine-learning.jpg",
  metaDescription: "AI & Machine Learning development services. Build predictive models, automation tools, and AI-driven solutions tailored to your business needs.",
  
  features: [
    {
      title: "Predictive Analytics",
      description: "Leverage ML models to forecast trends, customer behavior, and business outcomes.",
      icon: "predict"
    },
    {
      title: "Natural Language Processing",
      description: "Enhance customer interactions with chatbots, sentiment analysis, and text insights.",
      icon: "nlp"
    },
    {
      title: "Computer Vision",
      description: "Image recognition, defect detection, and visual automation for real-world use cases.",
      icon: "vision"
    },
    {
      title: "Custom ML Models",
      description: "Tailored algorithms built for your unique data and objectives.",
      icon: "ml"
    },
    {
      title: "Automation & Optimization",
      description: "Streamline workflows with AI-powered automation and optimization engines.",
      icon: "automation"
    }
  ],

  process: {
    title: "Our AI/ML Implementation Process",
    description: "From strategy to deployment, we ensure end-to-end AI transformation.",
    steps: [
      { title: "Business Need Identification", description: "Define AI opportunities and measurable KPIs." },
      { title: "Data Preparation", description: "Clean, structure, and prepare datasets for modeling." },
      { title: "Model Development", description: "Build, train, and optimize machine learning models." },
      { title: "Integration", description: "Embed AI models into business workflows or applications." },
      { title: "Testing & Validation", description: "Validate model accuracy, performance, and reliability." },
      { title: "Deployment & Monitoring", description: "Deploy models at scale with continuous monitoring." }
    ]
  },

  technologies: [
    { name: "TensorFlow", description: "End-to-end machine learning framework.", icon: "tensorflow" },
    { name: "PyTorch", description: "Deep learning framework for flexible model building.", icon: "pytorch" },
    { name: "Scikit-learn", description: "ML library for classical algorithms.", icon: "scikit" },
    { name: "AWS SageMaker", description: "Managed service for building and deploying ML models.", icon: "aws" },
    { name: "Google Vertex AI", description: "Unified ML platform for Google Cloud.", icon: "gcp" },
    { name: "Azure ML", description: "Machine learning services on Microsoft Azure.", icon: "azure" }
  ],

  benefits: [
    { title: "Smarter Decisions", description: "AI insights help predict outcomes and improve decision-making.", icon: "decision" },
    { title: "Competitive Advantage", description: "Leverage AI to innovate and differentiate in the market.", icon: "advantage" },
    { title: "Operational Efficiency", description: "Automate repetitive tasks and optimize processes.", icon: "efficiency" },
    { title: "Scalable Solutions", description: "ML models designed to grow with your business needs.", icon: "scale" }
  ],

  faqs: [
    { question: "Do you build custom AI models?", answer: "Yes, we design and train models specifically for your industry and data." },
    { question: "Can you integrate AI into existing systems?", answer: "Absolutely. We embed ML models seamlessly into your existing workflows and apps." },
    { question: "What data do you need?", answer: "We typically need structured or unstructured data relevant to the use case, which we preprocess for training." },
    { question: "Do you support post-deployment monitoring?", answer: "Yes, we provide monitoring and retraining to maintain model accuracy." }
  ],

  relatedServices: [
    "services/ai/generative-ai",
    "services/ai/data-engineering",
    "services/ai/analytics"
  ]
},

"ai/generative-ai": {
  slug: "services/ai/generative-ai",
  parentService: "ai",
  title: "Generative AI Services",
  description: "Harness the creativity of AI with generative solutions. From AI-driven content creation to synthetic data generation, we empower businesses to innovate faster and smarter.",
  headerImage: "/images/services/generative-ai.jpg",
  metaDescription: "Generative AI services for businesses. Build AI-powered chatbots, content generation tools, and synthetic data solutions to accelerate innovation.",
  
  features: [
    { title: "AI Chatbots & Assistants", description: "Build intelligent conversational bots for customer engagement.", icon: "chat" },
    { title: "Content Generation", description: "Generate blogs, marketing copy, and reports with AI.", icon: "content" },
    { title: "Image & Video Generation", description: "Create AI-generated visuals and videos for branding and marketing.", icon: "media" },
    { title: "Synthetic Data Creation", description: "Generate artificial datasets to enhance ML training.", icon: "data" },
    { title: "Custom AI Models", description: "Train LLMs fine-tuned to your specific domain.", icon: "ai" }
  ],

  process: {
    title: "How We Deliver Generative AI",
    description: "We build safe, ethical, and scalable generative AI solutions for businesses.",
    steps: [
      { title: "Use Case Identification", description: "Identify where generative AI can create business value." },
      { title: "Model Selection", description: "Choose LLMs or diffusion models best suited to the use case." },
      { title: "Customization & Training", description: "Fine-tune models with proprietary or domain-specific data." },
      { title: "Integration & Deployment", description: "Embed AI models into applications and workflows." },
      { title: "Testing & Validation", description: "Ensure content quality, ethical compliance, and scalability." },
      { title: "Monitoring & Support", description: "Ongoing updates to maintain relevance and performance." }
    ]
  },

  technologies: [
    { name: "OpenAI", description: "LLMs for text, code, and reasoning tasks.", icon: "openai" },
    { name: "Anthropic Claude", description: "AI assistant for safe, helpful generative tasks.", icon: "claude" },
    { name: "Hugging Face", description: "Transformers and open-source generative models.", icon: "huggingface" },
    { name: "Stable Diffusion", description: "AI-powered image generation models.", icon: "stablediffusion" },
    { name: "MidJourney", description: "Creative AI for generating stunning visuals.", icon: "midjourney" },
    { name: "LangChain", description: "Framework for building generative AI applications.", icon: "langchain" }
  ],

  benefits: [
    { title: "Faster Content Creation", description: "Reduce production time with AI-powered automation.", icon: "speed" },
    { title: "Innovation at Scale", description: "Experiment with new ideas without resource constraints.", icon: "innovation" },
    { title: "Cost Savings", description: "Lower operational costs by automating creative tasks.", icon: "savings" },
    { title: "Personalized Experiences", description: "Deliver unique customer experiences with AI-driven personalization.", icon: "personalize" }
  ],

  faqs: [
    { question: "What is Generative AI used for?", answer: "It can generate text, images, videos, code, and more for business and creative applications." },
    { question: "Can we train AI on our company data?", answer: "Yes, we can fine-tune models using your proprietary datasets for domain-specific use cases." },
    { question: "How do you ensure ethical AI use?", answer: "We implement safeguards, bias detection, and compliance checks to ensure responsible AI." },
    { question: "Can this integrate into existing apps?", answer: "Yes, we can integrate generative AI into your existing workflows or build new applications." }
  ],

  relatedServices: [
    "services/ai/machine-learning",
    "services/ai/data-engineering",
    "services/ai/analytics"
  ]
},

"ai/data-engineering": {
  slug: "services/ai/data-engineering",
  parentService: "ai",
  title: "Data Engineering & Management",
  description: "Build a strong data foundation with modern engineering and management solutions. We design pipelines, warehouses, and governance systems that empower analytics and AI.",
  headerImage: "/images/services/data-engineering.jpg",
  metaDescription: "Data engineering and management services. Build scalable pipelines, warehouses, and governance systems for analytics and AI-driven decisions.",
  
  features: [
    { title: "Data Pipeline Development", description: "Build ETL/ELT pipelines to move and process data at scale.", icon: "pipeline" },
    { title: "Data Warehousing", description: "Design cloud data warehouses for analytics and BI.", icon: "warehouse" },
    { title: "Big Data Processing", description: "Handle massive datasets with distributed processing frameworks.", icon: "bigdata" },
    { title: "Data Governance", description: "Implement standards, quality checks, and compliance measures.", icon: "governance" },
    { title: "Real-time Data Streaming", description: "Enable instant insights with streaming pipelines.", icon: "stream" }
  ],

  process: {
    title: "Our Data Engineering Workflow",
    description: "We ensure clean, structured, and scalable data management for AI and analytics.",
    steps: [
      { title: "Data Discovery", description: "Assess existing data sources, formats, and availability." },
      { title: "Architecture Design", description: "Design scalable pipelines, warehouses, and governance systems." },
      { title: "Pipeline Development", description: "Build automated ETL/ELT pipelines for structured flow." },
      { title: "Data Integration", description: "Unify data from multiple sources into a single source of truth." },
      { title: "Validation & Quality", description: "Ensure data accuracy, consistency, and compliance." },
      { title: "Monitoring & Scaling", description: "Automated monitoring and on-demand scaling for high performance." }
    ]
  },

  technologies: [
    { name: "Apache Spark", description: "Distributed big data processing.", icon: "spark" },
    { name: "Apache Kafka", description: "Streaming data pipelines for real-time use cases.", icon: "kafka" },
    { name: "Snowflake", description: "Cloud-native data warehouse.", icon: "snowflake" },
    { name: "BigQuery", description: "Google's scalable data warehouse solution.", icon: "bigquery" },
    { name: "Airflow", description: "Workflow orchestration for ETL pipelines.", icon: "airflow" },
    { name: "dbt", description: "Data transformation and modeling framework.", icon: "dbt" }
  ],

  benefits: [
    { title: "Reliable Data", description: "Ensure data quality and governance for trusted insights.", icon: "trust" },
    { title: "Scalable Infrastructure", description: "Pipelines designed to grow with data volume and velocity.", icon: "scale" },
    { title: "Improved Analytics", description: "Enable advanced BI and AI use cases with a strong foundation.", icon: "analytics" },
    { title: "Compliance Ready", description: "Built-in governance to meet industry standards.", icon: "compliance" }
  ],

  faqs: [
    { question: "Do you handle both structured and unstructured data?", answer: "Yes, we design pipelines for relational, NoSQL, logs, images, and more." },
    { question: "Which cloud platforms do you support?", answer: "We support AWS, Azure, GCP, and hybrid cloud setups." },
    { question: "Do you provide real-time data streaming?", answer: "Yes, we build real-time pipelines using Kafka, Spark Streaming, and Flink." },
    { question: "Can you migrate legacy systems?", answer: "Yes, we migrate on-premise databases and ETL workflows to modern cloud platforms." }
  ],

  relatedServices: [
    "services/ai/machine-learning",
    "services/ai/generative-ai",
    "services/ai/analytics"
  ]
},
"ai/analytics": {
  slug: "services/ai/analytics",
  parentService: "ai",
  title: "Business Intelligence & Analytics",
  description: "Turn raw data into actionable insights with advanced analytics and BI solutions. We help organizations make data-driven decisions with interactive dashboards and predictive reporting.",
  headerImage: "/images/services/analytics.jpg",
  metaDescription: "Business Intelligence & Analytics services. Build dashboards, reports, and predictive analytics solutions to drive smarter decisions.",
  
  features: [
    { title: "Interactive Dashboards", description: "Real-time visualization of KPIs and metrics.", icon: "dashboard" },
    { title: "Predictive Analytics", description: "Forecast trends, risks, and customer behaviors.", icon: "predict" },
    { title: "Self-Service BI", description: "Empower teams to analyze data without technical barriers.", icon: "selfservice" },
    { title: "Data Storytelling", description: "Translate complex data into intuitive insights.", icon: "story" },
    { title: "Mobile BI", description: "Access insights anytime, anywhere, with mobile-friendly dashboards.", icon: "mobile" }
  ],

  process: {
    title: "Our BI & Analytics Process",
    description: "We design and deliver analytics solutions tailored to decision-making needs.",
    steps: [
      { title: "Requirement Gathering", description: "Identify KPIs, metrics, and reporting needs." },
      { title: "Data Integration", description: "Unify data sources into a central warehouse." },
      { title: "Dashboard & Report Design", description: "Create user-friendly, interactive visualizations." },
      { title: "Advanced Analytics", description: "Implement predictive and prescriptive models." },
      { title: "Testing & Validation", description: "Ensure data accuracy, relevance, and usability." },
      { title: "Ongoing Support", description: "Optimize dashboards and add new insights as needed." }
    ]
  },

  technologies: [
    { name: "Power BI", description: "Business analytics and reporting tool.", icon: "powerbi" },
    { name: "Tableau", description: "Data visualization and BI platform.", icon: "tableau" },
    { name: "Looker", description: "Google Cloud BI and embedded analytics.", icon: "looker" },
    { name: "Qlik Sense", description: "Interactive dashboards and analytics.", icon: "qlik" },
    { name: "Google Data Studio", description: "Lightweight reporting and dashboarding tool.", icon: "datastudio" },
    { name: "Superset", description: "Open-source BI visualization platform.", icon: "superset" }
  ],

  benefits: [
    { title: "Data-Driven Decisions", description: "Access insights that guide strategic choices.", icon: "decision" },
    { title: "Increased Transparency", description: "Real-time visibility into business operations.", icon: "visibility" },
    { title: "Cost Optimization", description: "Identify inefficiencies and reduce operational costs.", icon: "cost" },
    { title: "Faster Insights", description: "Enable quick, on-demand analytics for teams.", icon: "speed" }
  ],

  faqs: [
    { question: "Do you create custom dashboards?", answer: "Yes, we design dashboards specific to your KPIs and workflows." },
    { question: "Which BI platforms do you support?", answer: "We support Power BI, Tableau, Looker, Qlik, Google Data Studio, and more." },
    { question: "Can you integrate BI with existing tools?", answer: "Absolutely, we integrate with CRMs, ERPs, and cloud data warehouses." },
    { question: "Do you provide predictive analytics?", answer: "Yes, we implement models that forecast trends and risks." }
  ],

  relatedServices: [
    "services/ai/machine-learning",
    "services/ai/generative-ai",
    "services/ai/data-engineering"
  ]
}, 

  "ai/computer-vision-nlp": {
  slug: "ai/computer-vision-nlp",
  parentService: "ai",
  title: "Computer Vision & NLP",
  description: "Leverage advanced AI technologies like Computer Vision and Natural Language Processing to transform unstructured data into actionable insights. From image recognition to conversational AI, we deliver solutions that make businesses smarter and more efficient.",
  headerImage: "/images/services/computer-vision-nlp.jpg",
  metaDescription: "Computer Vision & NLP services. Build AI-powered solutions for image recognition, text analysis, chatbots, and automation to unlock actionable business insights.",
  
  features: [
    {
      title: "Image Recognition",
      description: "Automate visual tasks such as object detection, defect identification, and facial recognition.",
      icon: "vision"
    },
    {
      title: "Text & Document Analysis",
      description: "Extract insights from documents, contracts, and unstructured text with NLP.",
      icon: "text"
    },
    {
      title: "Chatbots & Virtual Assistants",
      description: "Deploy conversational AI for customer support, sales, and internal workflows.",
      icon: "chat"
    },
    {
      title: "Speech-to-Text & Translation",
      description: "Convert audio into text, enable multi-language support, and improve accessibility.",
      icon: "voice"
    },
    {
      title: "Sentiment Analysis",
      description: "Understand customer opinions, feedback, and emotions through NLP-driven analysis.",
      icon: "sentiment"
    }
  ],

  process: {
    title: "Our Approach to Computer Vision & NLP",
    description: "We combine deep learning and natural language technologies to deliver reliable, scalable solutions.",
    steps: [
      { title: "Use Case Identification", description: "Identify business challenges that can be solved with CV/NLP." },
      { title: "Data Collection & Labeling", description: "Gather and preprocess images, text, and speech datasets." },
      { title: "Model Development", description: "Train and fine-tune computer vision and NLP models." },
      { title: "Integration", description: "Embed AI models into applications, workflows, or cloud systems." },
      { title: "Testing & Validation", description: "Evaluate model accuracy, reliability, and business impact." },
      { title: "Deployment & Monitoring", description: "Scale solutions with continuous monitoring and retraining." }
    ]
  },

  technologies: [
    { name: "OpenCV", description: "Computer vision library for image and video processing.", icon: "opencv" },
    { name: "TensorFlow", description: "Deep learning framework for CV and NLP models.", icon: "tensorflow" },
    { name: "PyTorch", description: "Flexible framework for advanced vision and NLP tasks.", icon: "pytorch" },
    { name: "spaCy", description: "Industrial-strength NLP library for text analysis.", icon: "spacy" },
    { name: "NLTK", description: "Linguistic toolkit for natural language processing.", icon: "nltk" },
    { name: "Transformers (Hugging Face)", description: "Pretrained models for vision and language tasks.", icon: "huggingface" }
  ],

  benefits: [
    { title: "Automation at Scale", description: "Reduce manual work with AI-driven image and text processing.", icon: "automation" },
    { title: "Smarter Interactions", description: "Enhance customer experiences with chatbots and conversational AI.", icon: "chat" },
    { title: "Faster Insights", description: "Quickly extract intelligence from visual and textual data.", icon: "insight" },
    { title: "Competitive Edge", description: "Innovate faster by adopting cutting-edge AI technologies.", icon: "advantage" }
  ],

  faqs: [
    { question: "Can you process both images and text together?", answer: "Yes, we build multi-modal AI solutions that combine vision and language for advanced insights." },
    { question: "Do you create custom chatbots?", answer: "Absolutely. We design domain-specific chatbots integrated with your existing systems." },
    { question: "What industries benefit from CV & NLP?", answer: "Industries like healthcare, retail, finance, manufacturing, and logistics widely use these solutions." },
    { question: "Do you support multiple languages?", answer: "Yes, we support multilingual NLP for global businesses." }
  ],

  relatedServices: [
    "services/ai/machine-learning",
    "services/ai/generative-ai",
    "services/ai/analytics"
  ]
}, 

  "ecommerce/custom": {
  "slug": "ecommerce/custom",
  "parentService": "ecommerce",
  "title": "Custom Ecommerce Development",
  "description": "Design and build tailor-made ecommerce platforms that align with your brand, streamline operations, and deliver seamless shopping experiences. From startups to enterprise retailers, we create solutions that boost sales and customer satisfaction.",
  "headerImage": "/images/services/custom-ecommerce.jpg",
  "metaDescription": "Expert custom ecommerce development services. We build scalable online stores with modern frameworks, secure integrations, and optimized user experiences.",
  "features": [
    { "title": "Tailor-Made Solutions", "description": "Fully customized ecommerce platforms built around your business model.", "icon": "customize" },
    { "title": "Seamless Integrations", "description": "Payment gateways, CRMs, ERPs, shipping, and third-party APIs integrated effortlessly.", "icon": "integrate" },
    { "title": "Mobile-First Design", "description": "Responsive, fast, and intuitive shopping experiences across all devices.", "icon": "mobile" },
    { "title": "Scalable & Secure", "description": "Enterprise-grade architecture to handle growth, traffic spikes, and data security.", "icon": "security" },
    { "title": "Advanced Features", "description": "Multi-vendor support, subscription models, AI-powered recommendations, and more.", "icon": "features" }
  ],
  "process": {
    "title": "Our Ecommerce Development Process",
    "description": "We use proven ecommerce frameworks and agile practices to deliver high-performing online stores.",
    "steps": [
      { "title": "Requirement Analysis", "description": "Workshops to understand business goals, product catalog, and customer journey." },
      { "title": "UX/UI Design", "description": "User-friendly designs optimized for conversion and engagement." },
      { "title": "Custom Development", "description": "Feature-rich ecommerce platform tailored to your workflows." },
      { "title": "Integration & Payment Setup", "description": "Smooth integration with payment gateways, logistics, and external tools." },
      { "title": "Testing & Launch", "description": "Quality checks covering performance, usability, and security before going live." },
      { "title": "Support & Optimization", "description": "Ongoing maintenance, feature upgrades, and performance tuning." }
    ]
  },
  "technologies": [
    { "name": "React.js", "description": "Dynamic and fast frontend development for ecommerce storefronts.", "icon": "react" },
    { "name": "Next.js", "description": "SEO-friendly and scalable ecommerce platforms.", "icon": "next" },
    { "name": "Node.js", "description": "Powerful backend for APIs and business logic.", "icon": "node" },
    { "name": "GraphQL", "description": "Flexible data fetching for personalized shopping experiences.", "icon": "graphql" },
    { "name": "PostgreSQL", "description": "Robust database management for product catalogs and orders.", "icon": "database" },
    { "name": "MongoDB", "description": "Flexible NoSQL database for dynamic ecommerce requirements.", "icon": "mongodb" }
  ],
  "benefits": [
    { "title": "Higher Conversions", "description": "Optimized design and checkout flows increase sales.", "icon": "conversion" },
    { "title": "Custom Branding", "description": "A unique online store that reflects your brand identity.", "icon": "branding" },
    { "title": "Scalable Growth", "description": "Platforms that grow with your expanding product lines and traffic.", "icon": "growth" },
    { "title": "Operational Efficiency", "description": "Automation reduces manual work and streamlines business processes.", "icon": "efficiency" },
    { "title": "Dedicated Support", "description": "Round-the-clock support and regular enhancements.", "icon": "support" }
  ],
  "faqs": [
    { "question": "Can you build multi-vendor marketplaces?", "answer": "Yes, we specialize in developing B2B, B2C, and multi-vendor marketplace solutions." },
    { "question": "Do you integrate with logistics and payment providers?", "answer": "Absolutely, we integrate with all major gateways and shipping providers." },
    { "question": "Can you migrate our existing store?", "answer": "Yes, we provide hassle-free migration services from existing platforms." },
    { "question": "Is SEO included in ecommerce development?", "answer": "Yes, all stores are SEO-optimized for better rankings and visibility." }
  ],
  "relatedServices": [
    "ecommerce/shopify",
    "ecommerce/woocommerce",
    "ecommerce/magento"
  ]
},

"ecommerce/shopify": {
  "slug": "ecommerce/shopify",
  "parentService": "ecommerce",
  "title": "Shopify Development",
  "description": "Launch and scale your online store quickly with expert Shopify development. We build custom themes, apps, and integrations to maximize your store's performance and help you stand out in a competitive market.",
  "headerImage": "/images/services/shopify.jpg",
  "metaDescription": "Professional Shopify development services. Custom themes, app integrations, and performance optimization for your online store.",
  "features": [
    { "title": "Custom Shopify Themes", "description": "Unique, brand-aligned designs for your store.", "icon": "theme" },
    { "title": "App Integrations", "description": "Seamless integration with Shopify apps and external tools.", "icon": "apps" },
    { "title": "Store Optimization", "description": "Faster load times, mobile-first, and conversion-focused UX.", "icon": "speed" },
    { "title": "Migration Support", "description": "Smooth migration from other platforms to Shopify.", "icon": "migration" }
  ],
  "process": {
    "title": "Our Shopify Development Approach",
    "description": "We follow a proven workflow to ensure your Shopify store launches quickly and scales effortlessly.",
    "steps": [
      { "title": "Theme Design", "description": "Crafting pixel-perfect Shopify themes aligned with your brand." },
      { "title": "Custom App Development", "description": "Extending store functionality with bespoke Shopify apps." },
      { "title": "Integration", "description": "Connecting with payment gateways, shipping providers, and marketing tools." },
      { "title": "Testing & Launch", "description": "Ensuring smooth checkout and flawless performance." },
      { "title": "Ongoing Optimization", "description": "Continuous improvements to maximize conversions and sales." }
    ]
  },
  "benefits": [
    { "title": "Faster Launch", "description": "Get your online store live in weeks, not months.", "icon": "speed" },
    { "title": "Extensible Platform", "description": "Leverage Shopify apps and APIs to add powerful features.", "icon": "plugin" },
    { "title": "Low Maintenance", "description": "Hosted platform with minimal overheads.", "icon": "maintenance" },
    { "title": "Global Scalability", "description": "Easily scale your store to serve customers worldwide.", "icon": "global" }
  ],
  "faqs": [
    { "question": "Do you create custom Shopify themes?", "answer": "Yes, we design and develop themes tailored to your brand." },
    { "question": "Can you build private Shopify apps?", "answer": "Absolutely, we develop apps to extend your store's functionality." },
    { "question": "Do you help with SEO for Shopify stores?", "answer": "Yes, we ensure your store is optimized for search visibility." }
  ],
  "technologies": [
    { "name": "Shopify Liquid", "description": "Custom theme and template development.", "icon": "liquid" },
    { "name": "Shopify Apps", "description": "Extending functionality with apps and APIs.", "icon": "apps" }
  ],
  "relatedServices": [
    "ecommerce/custom",
    "ecommerce/woocommerce",
    "ecommerce/magento"
  ]
},

"ecommerce/woocommerce": {
  "slug": "ecommerce/woocommerce",
  "parentService": "ecommerce",
  "title": "WooCommerce Development",
  "description": "Flexible and cost-effective ecommerce solutions using WooCommerce. We create custom stores, plugins, and integrations tailored to your business needs, with the power of WordPress as the foundation.",
  "headerImage": "/images/services/woocommerce.jpg",
  "metaDescription": "WooCommerce development services. Custom themes, plugins, and integrations for scalable online stores.",
  "features": [
    { "title": "Custom WooCommerce Stores", "description": "Tailor-made stores that suit your business needs.", "icon": "store" },
    { "title": "Plugin Development", "description": "Custom plugins to extend store functionality.", "icon": "plugin" },
    { "title": "Payment & Shipping Setup", "description": "Seamless checkout experiences with global payment and logistics providers.", "icon": "checkout" },
    { "title": "Maintenance & Support", "description": "Ongoing store management and optimization.", "icon": "support" }
  ],
  "process": {
    "title": "WooCommerce Development Process",
    "description": "Our proven approach ensures cost-effective and scalable WooCommerce solutions.",
    "steps": [
      { "title": "Business Analysis", "description": "Understanding store requirements and product catalog." },
      { "title": "Theme & Plugin Setup", "description": "Customizing themes and developing required plugins." },
      { "title": "Integration", "description": "Payment, shipping, and third-party tool setup." },
      { "title": "Testing & Optimization", "description": "Ensuring fast performance and smooth checkout experience." },
      { "title": "Launch & Support", "description": "Deployment and continuous monitoring." }
    ]
  },
  "benefits": [
    { "title": "Cost-Effective", "description": "Affordable setup with minimal licensing costs.", "icon": "cost" },
    { "title": "Highly Customizable", "description": "Thousands of plugins and custom development options.", "icon": "customize" },
    { "title": "SEO-Friendly", "description": "Built-in WordPress SEO features for higher visibility.", "icon": "seo" },
    { "title": "Community Support", "description": "Large community with constant updates and enhancements.", "icon": "community" }
  ],
  "faqs": [
    { "question": "Do you provide WooCommerce plugin development?", "answer": "Yes, we develop custom plugins for unique business needs." },
    { "question": "Can you migrate my WordPress site to WooCommerce?", "answer": "Yes, we provide smooth migration services to WooCommerce." },
    { "question": "Do you handle hosting and maintenance?", "answer": "Yes, we provide full hosting, maintenance, and support packages." }
  ],
  "technologies": [
    { "name": "WordPress", "description": "Content and ecommerce management.", "icon": "wordpress" },
    { "name": "WooCommerce", "description": "Powerful ecommerce plugin for WordPress.", "icon": "woocommerce" }
  ],
  "relatedServices": [
    "ecommerce/custom",
    "ecommerce/shopify",
    "ecommerce/magento"
  ]
},

"ecommerce/magento": {
  "slug": "ecommerce/magento",
  "parentService": "ecommerce",
  "title": "Magento & BigCommerce Development",
  "description": "Enterprise-grade ecommerce development with Magento and BigCommerce. We deliver robust, scalable, and feature-rich online stores tailored for high-growth businesses and global retailers.",
  "headerImage": "/images/services/magento-bigcommerce.jpg",
  "metaDescription": "Magento & BigCommerce development services. Build scalable, customizable, and secure online stores for enterprise ecommerce.",
  "features": [
    { "title": "Enterprise-Grade Ecommerce", "description": "Scalable platforms designed for high-volume businesses.", "icon": "enterprise" },
    { "title": "Custom Extensions", "description": "Feature-rich extensions for unique business needs.", "icon": "extension" },
    { "title": "Multi-Store Setup", "description": "Manage multiple stores, currencies, and languages with ease.", "icon": "multistore" },
    { "title": "Security & Compliance", "description": "PCI-compliant and security-first ecommerce solutions.", "icon": "security" }
  ],
  "process": {
    "title": "Magento & BigCommerce Development Process",
    "description": "We bring enterprise-level precision to every ecommerce project.",
    "steps": [
      { "title": "Requirement Discovery", "description": "Defining features, integrations, and scalability goals." },
      { "title": "Architecture Design", "description": "Robust system design for multi-store and global expansion." },
      { "title": "Custom Development", "description": "Building features, extensions, and tailored workflows." },
      { "title": "Integration", "description": "Seamless API, ERP, CRM, and third-party integrations." },
      { "title": "Testing & Launch", "description": "Performance, load, and security testing before launch." },
      { "title": "Ongoing Support", "description": "Enterprise-level support and continuous optimization." }
    ]
  },
  "benefits": [
    { "title": "Enterprise Scalability", "description": "Built to handle large product catalogs and global traffic.", "icon": "scale" },
    { "title": "Global Expansion", "description": "Multi-language, multi-currency, and region-specific setups.", "icon": "global" },
    { "title": "Customizability", "description": "Flexible frameworks to meet unique enterprise needs.", "icon": "customize" },
    { "title": "Advanced Analytics", "description": "Insightful dashboards and integrations with BI tools.", "icon": "analytics" }
  ],
  "faqs": [
    { "question": "Do you provide Magento 2 development?", "answer": "Yes, we specialize in Magento 2 development and migration." },
    { "question": "Can you integrate Magento/BigCommerce with ERP/CRM?", "answer": "Absolutely, we provide custom integrations with enterprise systems." },
    { "question": "Do you provide performance optimization for large stores?", "answer": "Yes, we specialize in optimizing Magento and BigCommerce for high traffic." }
  ],
  "technologies": [
    { "name": "Magento", "description": "Customizable enterprise ecommerce framework.", "icon": "magento" },
    { "name": "BigCommerce", "description": "Flexible SaaS-based enterprise ecommerce platform.", "icon": "bigcommerce" }
  ],
  "relatedServices": [
    "ecommerce/custom",
    "ecommerce/shopify",
    "ecommerce/woocommerce"
  ]
},

  "ecommerce/marketplace": {
  "slug": "ecommerce/marketplace",
  "parentService": "ecommerce",
  "title": "Marketplace & Headless Commerce",
  "description": "Build powerful online marketplaces and headless commerce solutions that provide ultimate flexibility, scalability, and omnichannel experiences. Whether it's a B2B, B2C, or multi-vendor platform, we create systems that adapt to evolving retail trends.",
  "headerImage": "/images/services/marketplace-headless.jpg",
  "metaDescription": "Marketplace and headless commerce development services. Scalable multi-vendor platforms and API-first commerce solutions for modern retailers.",
  "features": [
    { "title": "Multi-Vendor Marketplaces", "description": "Enable multiple vendors to sell on a single platform with independent dashboards.", "icon": "vendors" },
    { "title": "Headless Architecture", "description": "API-driven commerce that decouples frontend and backend for ultimate flexibility.", "icon": "headless" },
    { "title": "Omnichannel Experiences", "description": "Sell across web, mobile, social, and in-store seamlessly.", "icon": "omnichannel" },
    { "title": "Scalable Infrastructure", "description": "Enterprise-ready architecture that handles growth and traffic surges.", "icon": "scale" },
    { "title": "Advanced Monetization", "description": "Commission models, subscriptions, and vendor-based pricing options.", "icon": "monetization" }
  ],
  "process": {
    "title": "Our Marketplace & Headless Commerce Process",
    "description": "We build scalable ecosystems for sellers and buyers with modern API-first development.",
    "steps": [
      { "title": "Business Discovery", "description": "Identifying your marketplace model (B2B, B2C, or hybrid) and target audience." },
      { "title": "System Architecture", "description": "Designing scalable headless commerce platforms with APIs at the core." },
      { "title": "Custom Development", "description": "Building vendor dashboards, order management, and flexible product catalogs." },
      { "title": "Integration Layer", "description": "Connecting with payments, shipping, inventory, and third-party apps." },
      { "title": "Testing & Go-Live", "description": "Ensuring performance, security, and vendor-buyer satisfaction." },
      { "title": "Continuous Growth", "description": "Ongoing upgrades, analytics, and marketplace feature expansion." }
    ]
  },
  "technologies": [
    { "name": "React.js", "description": "Modern, scalable frontends for headless commerce.", "icon": "react" },
    { "name": "Next.js", "description": "SEO-friendly and API-driven ecommerce frontends.", "icon": "next" },
    { "name": "Node.js", "description": "Backend services for real-time order and vendor management.", "icon": "node" },
    { "name": "GraphQL", "description": "Flexible data fetching for headless and omnichannel apps.", "icon": "graphql" },
    { "name": "PostgreSQL", "description": "Robust transactional data handling for multi-vendor commerce.", "icon": "database" },
    { "name": "ElasticSearch", "description": "High-performance product search and filtering for large catalogs.", "icon": "search" }
  ],
  "benefits": [
    { "title": "Future-Proof Commerce", "description": "API-first approach that adapts to any device or channel.", "icon": "future" },
    { "title": "Faster Innovation", "description": "Launch new customer experiences without backend changes.", "icon": "innovation" },
    { "title": "Global Scalability", "description": "Easily expand into new markets, currencies, and languages.", "icon": "global" },
    { "title": "Better Customer Experience", "description": "Deliver personalized, consistent experiences across channels.", "icon": "experience" }
  ],
  "faqs": [
    { "question": "What is headless commerce?", "answer": "Headless commerce decouples the frontend from the backend, giving businesses flexibility to deliver unique customer experiences across channels." },
    { "question": "Can you build both B2B and B2C marketplaces?", "answer": "Yes, we specialize in multi-vendor, B2B, B2C, and hybrid marketplace platforms." },
    { "question": "Will my marketplace be scalable?", "answer": "Absolutely. We design platforms that handle thousands of vendors and millions of products." },
    { "question": "Do you integrate third-party tools?", "answer": "Yes, we integrate with CRMs, ERPs, shipping providers, and marketing tools." }
  ],
  "relatedServices": [
    "ecommerce/custom",
    "ecommerce/magento",
    "ecommerce/optimization"
  ]
},

"ecommerce/optimization": {
  "slug": "ecommerce/optimization",
  "parentService": "ecommerce",
  "title": "Ecommerce Optimization",
  "description": "Maximize sales, improve user experience, and increase conversions with our ecommerce optimization services. We fine-tune every part of your online store — from performance to checkout flows — to boost ROI and customer satisfaction.",
  "headerImage": "/images/services/ecommerce-optimization.jpg",
  "metaDescription": "Ecommerce optimization services. Improve conversions, site performance, SEO, and customer experience to maximize your online store's ROI.",
  "features": [
    { "title": "Conversion Rate Optimization (CRO)", "description": "Streamline purchase journeys to reduce cart abandonment.", "icon": "conversion" },
    { "title": "Performance Tuning", "description": "Faster load times for better SEO and user satisfaction.", "icon": "performance" },
    { "title": "Mobile Experience", "description": "Optimized designs and checkout flows for mobile-first users.", "icon": "mobile" },
    { "title": "SEO Optimization", "description": "Boost search rankings and organic traffic with proven strategies.", "icon": "seo" },
    { "title": "Analytics & Insights", "description": "Actionable insights with advanced tracking and reporting.", "icon": "analytics" }
  ],
  "process": {
    "title": "Our Ecommerce Optimization Process",
    "description": "We analyze, test, and refine your ecommerce platform to deliver measurable growth.",
    "steps": [
      { "title": "Audit & Analysis", "description": "Comprehensive audit of performance, UX, and SEO." },
      { "title": "Strategy & Roadmap", "description": "Defining CRO, performance, and marketing improvements." },
      { "title": "Implementation", "description": "Applying design, code, and content enhancements." },
      { "title": "A/B Testing", "description": "Experimenting with variations to find the best-performing setup." },
      { "title": "Tracking & Analytics", "description": "Measuring KPIs like conversion rate, AOV, and retention." },
      { "title": "Continuous Improvement", "description": "Ongoing testing and optimization for long-term growth." }
    ]
  },
  "technologies": [
    { "name": "Google Analytics", "description": "Advanced ecommerce tracking and insights.", "icon": "analytics" },
    { "name": "Hotjar", "description": "Heatmaps and session recordings for UX optimization.", "icon": "ux" },
    { "name": "Google Tag Manager", "description": "Flexible tracking implementation for ecommerce KPIs.", "icon": "tags" },
    { "name": "A/B Testing Tools", "description": "Platforms like Optimizely and VWO for CRO testing.", "icon": "abtest" },
    { "name": "SEO Tools", "description": "Tools like Ahrefs, SEMrush, and ScreamingFrog for SEO improvements.", "icon": "seo" }
  ],
  "benefits": [
    { "title": "Increased Conversions", "description": "Optimized checkout and UX boost sales.", "icon": "sales" },
    { "title": "Better User Experience", "description": "Faster, smoother shopping experience across devices.", "icon": "experience" },
    { "title": "Higher ROI", "description": "Improved site performance leads to higher revenue.", "icon": "roi" },
    { "title": "Data-Driven Decisions", "description": "Analytics-backed insights to guide continuous growth.", "icon": "data" }
  ],
  "faqs": [
    { "question": "How do you measure ecommerce optimization success?", "answer": "We track KPIs like conversion rates, bounce rates, average order value (AOV), and revenue uplift." },
    { "question": "Do you optimize for mobile users?", "answer": "Yes, mobile-first optimization is a key focus of our services." },
    { "question": "Will optimization help with SEO?", "answer": "Absolutely. Improved performance and SEO strategies boost organic visibility." },
    { "question": "Is optimization a one-time service?", "answer": "No, we provide continuous optimization to ensure sustained growth." }
  ],
  "relatedServices": [
    "ecommerce/custom",
    "ecommerce/shopify",
    "ecommerce/marketplace"
  ]
}, 

 "design/strategy": {
  "slug": "design/strategy",
  "parentService": "design",
  "title": "Design Strategy & Research",
  "description": "We help businesses uncover user needs and align design goals with business objectives. Through research-driven insights, we create strategies that ensure your digital products are user-friendly, innovative, and impactful.",
  "headerImage": "/images/services/design-strategy.jpg",
  "metaDescription": "Comprehensive design strategy & research services. We align user needs with business goals through research, journey mapping, and UX strategy.",
  "features": [
    { "title": "User-Centric Approach", "description": "Design strategies built around real user behaviors and needs.", "icon": "user" },
    { "title": "Market Research", "description": "Competitor analysis and trend mapping to stay ahead.", "icon": "research" },
    { "title": "Journey Mapping", "description": "Detailed mapping of customer journeys for better engagement.", "icon": "journey" },
    { "title": "Data-Driven Insights", "description": "Leverage research and analytics for informed design decisions.", "icon": "data" },
    { "title": "Business Alignment", "description": "Ensure design supports your brand vision and growth goals.", "icon": "align" }
  ],
  "process": {
    "title": "Our Design Strategy Process",
    "description": "A structured process that transforms insights into actionable design plans.",
    "steps": [
      { "title": "Research & Discovery", "description": "User interviews, surveys, and competitor analysis." },
      { "title": "Persona Creation", "description": "Develop realistic user personas to guide design." },
      { "title": "Journey Mapping", "description": "Visualize customer interactions across all touchpoints." },
      { "title": "Design Roadmap", "description": "Create a clear strategy that aligns business and user needs." }
    ]
  },
  "technologies": [
    { "name": "Figma", "description": "Collaborative design and prototyping platform.", "icon": "figma" },
    { "name": "Miro", "description": "Whiteboarding tool for brainstorming and journey mapping.", "icon": "miro" },
    { "name": "Notion", "description": "Organized knowledge base for research and documentation.", "icon": "notion" }
  ],
  "benefits": [
    { "title": "Clarity of Vision", "description": "Define the right path before investing in development.", "icon": "clarity" },
    { "title": "Reduced Risks", "description": "Identify usability issues early through research.", "icon": "shield" },
    { "title": "Higher Engagement", "description": "Designs that truly resonate with your target audience.", "icon": "engage" }
  ],
  "faqs": [
    { "question": "Why is design strategy important?", "answer": "It aligns user needs, business objectives, and technology to reduce risks and improve adoption." },
    { "question": "Do you conduct user interviews?", "answer": "Yes, we use qualitative and quantitative research methods to collect actionable insights." }
  ],
  "relatedServices": [
    "design/wireframing",
    "design/product-design"
  ]
},

"design/wireframing": {
  "slug": "design/wireframing",
  "parentService": "design",
  "title": "Wireframing & Prototyping",
  "description": "Bring your ideas to life quickly with wireframes and prototypes that validate design concepts before development begins. We help you visualize and test user flows for a seamless experience.",
  "headerImage": "/images/services/wireframing.jpg",
  "metaDescription": "Wireframing and prototyping services for web and mobile. Visualize workflows, test user journeys, and validate ideas before development.",
  "features": [
    { "title": "Low & High Fidelity Wireframes", "description": "From rough sketches to detailed layouts.", "icon": "wireframe" },
    { "title": "Clickable Prototypes", "description": "Interactive designs to test flows with real users.", "icon": "prototype" },
    { "title": "User Testing Ready", "description": "Prototypes built to collect meaningful feedback.", "icon": "test" },
    { "title": "Iterative Approach", "description": "Fast iterations based on feedback and usability tests.", "icon": "loop" }
  ],
  "process": {
    "title": "Our Wireframing & Prototyping Process",
    "description": "We translate ideas into user journeys that can be tested and validated.",
    "steps": [
      { "title": "Requirement Gathering", "description": "Understand business goals and user flows." },
      { "title": "Wireframing", "description": "Create low-fidelity sketches and structures." },
      { "title": "Prototyping", "description": "Build interactive models for validation." },
      { "title": "Usability Testing", "description": "Validate design decisions with real users." }
    ]
  },
  "technologies": [
    { "name": "Figma", "description": "Interactive wireframes and prototypes.", "icon": "figma" },
    { "name": "Sketch", "description": "Design tool for wireframes and UI design.", "icon": "sketch" },
    { "name": "InVision", "description": "Clickable prototypes for collaboration and testing.", "icon": "invision" }
  ],
  "benefits": [
    { "title": "Cost Savings", "description": "Identify issues early before development costs increase.", "icon": "savings" },
    { "title": "Better Communication", "description": "Align stakeholders with visual prototypes.", "icon": "communication" },
    { "title": "Faster Iterations", "description": "Quickly refine designs based on feedback.", "icon": "speed" }
  ],
  "faqs": [
    { "question": "Do you create both low and high fidelity wireframes?", "answer": "Yes, we start with low fidelity and evolve into detailed high fidelity prototypes." },
    { "question": "Can we test prototypes with real users?", "answer": "Absolutely. Our prototypes are built to simulate real product flows." }
  ],
  "relatedServices": [
    "design/strategy",
    "design/product-design"
  ]
},

"design/ui-design": {
  "slug": "design/ui-design",
  "parentService": "design",
  "title": "Web & Mobile Design",
  "description": "Delivering responsive, modern, and visually appealing designs for both web and mobile platforms. Our designs prioritize usability, accessibility, and brand identity.",
  "headerImage": "/images/services/web-mobile-design.jpg",
  "metaDescription": "Web and mobile design services. Create visually stunning, responsive, and user-friendly designs across devices.",
  "features": [
    { "title": "Responsive Layouts", "description": "Pixel-perfect designs for all screen sizes.", "icon": "responsive" },
    { "title": "Modern Aesthetics", "description": "Clean, trendy designs that reflect your brand.", "icon": "design" },
    { "title": "Accessibility Standards", "description": "WCAG-compliant designs for inclusivity.", "icon": "accessibility" },
    { "title": "Cross-Platform Consistency", "description": "Seamless experience across web and mobile.", "icon": "sync" }
  ],
  "process": {
    "title": "Our Design Workflow",
    "description": "A structured process that ensures your digital presence looks great everywhere.",
    "steps": [
      { "title": "Research & Inspiration", "description": "Explore trends and understand brand aesthetics." },
      { "title": "Wireframing", "description": "Define layouts and flows for each screen." },
      { "title": "Visual Design", "description": "Craft modern and visually appealing UI." },
      { "title": "Responsive Testing", "description": "Validate designs across devices and resolutions." }
    ]
  },
  "technologies": [
    { "name": "Figma", "description": "Design and prototype responsive layouts.", "icon": "figma" },
    { "name": "Adobe XD", "description": "UI/UX design for web and mobile apps.", "icon": "xd" },
    { "name": "Zeplin", "description": "Handoff tool for developer collaboration.", "icon": "zeplin" }
  ],
  "benefits": [
    { "title": "Stronger Brand Identity", "description": "Designs that reflect your unique business personality.", "icon": "brand" },
    { "title": "Improved Usability", "description": "Seamless experiences that reduce friction.", "icon": "usability" },
    { "title": "Higher Conversions", "description": "Engaging designs that boost user actions.", "icon": "conversion" }
  ],
  "faqs": [
    { "question": "Do you design for both iOS and Android?", "answer": "Yes, we follow platform guidelines to ensure native feel for each OS." },
    { "question": "Can you redesign existing websites or apps?", "answer": "Yes, we specialize in modernizing outdated designs." }
  ],
  "relatedServices": [
    "design/wireframing",
    "design/product-design"
  ]
},

"design/product-design": {
  "slug": "design/product-design",
  "parentService": "design",
  "title": "Product Design & Usability Testing",
  "description": "From concept to launch, we design products that solve real user problems. Through usability testing, we validate ideas and ensure your product delivers maximum value.",
  "headerImage": "/images/services/product-design.jpg",
  "metaDescription": "Full-cycle product design & usability testing. We craft user-centered products and validate them with real users to ensure market success.",
  "features": [
    { "title": "End-to-End Design", "description": "From ideation to launch, we cover the full product lifecycle.", "icon": "cycle" },
    { "title": "User-Centered", "description": "Every design decision revolves around user needs.", "icon": "user" },
    { "title": "Usability Testing", "description": "Validate design flows with real user feedback.", "icon": "test" },
    { "title": "Iterative Approach", "description": "Rapid iterations for continuous improvements.", "icon": "iteration" }
  ],
  "process": {
    "title": "Our Product Design Approach",
    "description": "We blend creativity with research to deliver products that succeed in the market.",
    "steps": [
      { "title": "Ideation & Concepting", "description": "Brainstorm and visualize innovative solutions." },
      { "title": "Prototyping", "description": "Build interactive prototypes to test flows." },
      { "title": "Usability Testing", "description": "Gather feedback from real users to validate." },
      { "title": "Final Design & Handoff", "description": "Prepare polished assets for development." }
    ]
  },
  "technologies": [
    { "name": "Figma", "description": "Interactive design and testing.", "icon": "figma" },
    { "name": "Maze", "description": "Usability testing and analytics.", "icon": "maze" },
    { "name": "Hotjar", "description": "User behavior insights and heatmaps.", "icon": "hotjar" }
  ],
  "benefits": [
    { "title": "Validated Designs", "description": "Minimize risks with tested solutions.", "icon": "validate" },
    { "title": "Delightful UX", "description": "Products users love to use every day.", "icon": "delight" },
    { "title": "Market Success", "description": "Designs that improve adoption and retention.", "icon": "market" }
  ],
  "faqs": [
    { "question": "Do you run usability tests during design?", "answer": "Yes, we involve users early and often in the design process." },
    { "question": "Can you help with product redesigns?", "answer": "Absolutely. We can audit and revamp existing products for better usability." }
  ],
  "relatedServices": [
    "design/strategy",
    "design/wireframing",
    "design/web-mobile-design"
  ]
}




};
