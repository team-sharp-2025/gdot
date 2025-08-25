import { ServicePageClient } from "./ServicePageClient";

const serviceData = {
  "web-development": {
    title: "Web Development",
    icon: "Code",
    gradient: "from-blue-500 to-blue-600",
    description:
      "We build modern, responsive web applications using cutting-edge technologies that drive business growth and user engagement.",
    longDescription:
      "Our web development services encompass the complete lifecycle of creating robust, scalable, and high-performance web applications. We leverage modern frameworks and best practices to deliver solutions that not only meet current needs but also adapt to future requirements.",
    subServices: [
      {
        title: "Custom Web Applications",
        description:
          "Tailored web solutions designed specifically for your business needs and workflows.",
      },
      {
        title: "Progressive Web Apps (PWA)",
        description:
          "Modern web applications that provide native app-like experiences across all devices.",
      },
      {
        title: "API Development",
        description:
          "RESTful and GraphQL APIs that power your applications and enable seamless integrations.",
      },
      {
        title: "Performance Optimization",
        description:
          "Speed optimization and performance tuning to ensure lightning-fast user experiences.",
      },
    ],
    techStack: {
      frontend: [
        "React",
        "Next.js",
        "Vue.js",
        "Angular",
        "TypeScript",
        "Tailwind CSS",
      ],
      backend: ["Node.js", "Python", "Java", "PHP", "Go", "Ruby on Rails"],
      database: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase"],
      cloud: ["AWS", "Azure", "Google Cloud", "Vercel", "Netlify"],
    },
    process: [
      {
        step: 1,
        title: "Discovery & Planning",
        description:
          "We analyze your requirements, define project scope, and create a detailed development roadmap.",
        icon: "📋",
      },
      {
        step: 2,
        title: "Design & Prototyping",
        description:
          "Create wireframes, mockups, and interactive prototypes to visualize the final product.",
        icon: "🎨",
      },
      {
        step: 3,
        title: "Development",
        description:
          "Build the application using modern technologies and best practices for code quality.",
        icon: "💻",
      },
      {
        step: 4,
        title: "Testing & QA",
        description:
          "Comprehensive testing including unit tests, integration tests, and user acceptance testing.",
        icon: "🔍",
      },
      {
        step: 5,
        title: "Deployment",
        description:
          "Deploy to production with CI/CD pipelines and monitor performance and stability.",
        icon: "🚀",
      },
      {
        step: 6,
        title: "Maintenance",
        description:
          "Ongoing support, updates, and maintenance to ensure optimal performance.",
        icon: "🛠️",
      },
    ],
    faqs: [
      {
        question: "How long does it take to develop a custom web application?",
        answer:
          "Development time varies based on complexity. A simple website takes 2-4 weeks, while complex applications can take 3-6 months. We provide detailed timelines during the planning phase.",
      },
      {
        question: "Do you provide ongoing maintenance and support?",
        answer:
          "Yes, we offer comprehensive maintenance packages including regular updates, security patches, performance monitoring, and technical support.",
      },
      {
        question: "Can you integrate with existing systems?",
        answer:
          "Absolutely! We specialize in integrating new web applications with existing systems, databases, and third-party services through APIs and custom connectors.",
      },
      {
        question: "What technologies do you use for web development?",
        answer:
          "We use modern, industry-standard technologies including React, Next.js, Node.js, Python, and various cloud platforms. Technology choice depends on your specific requirements.",
      },
      {
        question: "Do you provide hosting and domain services?",
        answer:
          "Yes, we can handle hosting setup, domain registration, SSL certificates, and ongoing server management as part of our comprehensive web development services.",
      },
    ],
  },
  "mobile-apps": {
    title: "Mobile App Development",
    icon: "Smartphone",
    gradient: "from-purple-500 to-purple-600",
    description:
      "Native and cross-platform mobile applications for iOS and Android with exceptional user experiences.",
    longDescription:
      "We create mobile applications that users love and businesses rely on. Our mobile development expertise spans native iOS and Android development, as well as cross-platform solutions that maximize reach while minimizing development costs.",
    subServices: [
      {
        title: "iOS Development",
        description:
          "Native iOS applications built with Swift and SwiftUI for optimal performance and user experience.",
      },
      {
        title: "Android Development",
        description:
          "Native Android applications using Kotlin and modern Android development practices.",
      },
      {
        title: "React Native",
        description:
          "Cross-platform mobile apps that work seamlessly on both iOS and Android platforms.",
      },
      {
        title: "Flutter Apps",
        description:
          "High-performance cross-platform applications with beautiful native interfaces.",
      },
    ],
    techStack: {
      native: ["Swift", "Kotlin", "Objective-C", "Java"],
      crossPlatform: ["React Native", "Flutter", "Xamarin", "Ionic"],
      backend: ["Node.js", "Firebase", "AWS Amplify", "GraphQL"],
      tools: ["Xcode", "Android Studio", "VS Code", "Figma"],
    },
    process: [
      {
        step: 1,
        title: "Market Research",
        description:
          "Analyze target audience, competitors, and market trends to define app strategy.",
        icon: "📊",
      },
      {
        step: 2,
        title: "UI/UX Design",
        description:
          "Create intuitive, engaging user interfaces following platform-specific design guidelines.",
        icon: "📱",
      },
      {
        step: 3,
        title: "Development",
        description:
          "Build the app using native or cross-platform technologies based on requirements.",
        icon: "🔨",
      },
      {
        step: 4,
        title: "Testing",
        description:
          "Comprehensive testing across multiple devices, screen sizes, and OS versions.",
        icon: "🧪",
      },
      {
        step: 5,
        title: "App Store Submission",
        description:
          "Prepare and submit to Apple App Store and Google Play Store with optimization.",
        icon: "📤",
      },
      {
        step: 6,
        title: "Launch & Support",
        description:
          "Monitor performance, gather user feedback, and provide ongoing updates.",
        icon: "🎉",
      },
    ],
    faqs: [
      {
        question: "Should I choose native or cross-platform development?",
        answer:
          "Native development offers best performance and platform-specific features, while cross-platform reduces development time and cost. We'll recommend based on your specific needs and budget.",
      },
      {
        question: "How long does it take to develop a mobile app?",
        answer:
          "Simple apps take 2-3 months, while complex applications can take 6-12 months. Timeline depends on features, platforms, and complexity.",
      },
      {
        question: "Do you handle app store submissions?",
        answer:
          "Yes, we handle the entire app store submission process including store optimization, metadata preparation, and compliance requirements.",
      },
      {
        question: "Can you update existing mobile apps?",
        answer:
          "Absolutely! We can maintain, update, and enhance existing mobile applications regardless of the original development team.",
      },
      {
        question: "What about app maintenance and updates?",
        answer:
          "We provide ongoing maintenance including bug fixes, feature updates, OS compatibility, and performance optimization.",
      },
    ],
  },
  "cloud-solutions": {
    title: "Cloud Solutions",
    icon: "Cloud",
    gradient: "from-green-500 to-green-600",
    description:
      "Scalable cloud infrastructure, migration services, and serverless architectures for modern businesses.",
    longDescription:
      "We help businesses leverage the power of cloud computing to scale efficiently, reduce costs, and improve performance. Our cloud solutions span infrastructure setup, migration, and ongoing optimization.",
    subServices: [
      {
        title: "Cloud Migration",
        description:
          "Seamless migration of existing infrastructure and applications to cloud platforms.",
      },
      {
        title: "Serverless Architecture",
        description:
          "Build scalable applications without managing servers using cloud-native services.",
      },
      {
        title: "DevOps Integration",
        description:
          "Implement CI/CD pipelines and automation for faster, more reliable deployments.",
      },
      {
        title: "Cloud Security",
        description:
          "Comprehensive security measures including IAM, encryption, and compliance frameworks.",
      },
    ],
    techStack: {
      platforms: ["AWS", "Azure", "Google Cloud", "Digital Ocean"],
      containers: ["Docker", "Kubernetes", "ECS", "GKE"],
      serverless: ["AWS Lambda", "Azure Functions", "Cloud Functions"],
      monitoring: ["CloudWatch", "Azure Monitor", "Stackdriver", "Datadog"],
    },
    process: [
      {
        step: 1,
        title: "Assessment",
        description:
          "Evaluate current infrastructure and identify migration opportunities and challenges.",
        icon: "🔍",
      },
      {
        step: 2,
        title: "Strategy Planning",
        description:
          "Design cloud architecture and migration roadmap based on business requirements.",
        icon: "📋",
      },
      {
        step: 3,
        title: "Migration",
        description:
          "Execute migration with minimal downtime using proven methodologies and tools.",
        icon: "🔄",
      },
      {
        step: 4,
        title: "Optimization",
        description:
          "Fine-tune performance, costs, and security for optimal cloud operations.",
        icon: "⚡",
      },
      {
        step: 5,
        title: "Monitoring",
        description:
          "Implement comprehensive monitoring and alerting for proactive issue resolution.",
        icon: "📊",
      },
      {
        step: 6,
        title: "Ongoing Management",
        description:
          "Provide continuous support, updates, and optimization for cloud infrastructure.",
        icon: "🛠️",
      },
    ],
    faqs: [
      {
        question: "How much can I save with cloud migration?",
        answer:
          "Cloud migration typically reduces infrastructure costs by 20-40% while improving scalability and performance. Exact savings depend on your current setup and usage patterns.",
      },
      {
        question: "Which cloud platform should I choose?",
        answer:
          "We recommend based on your specific needs. AWS offers the most services, Azure integrates well with Microsoft products, and Google Cloud excels in AI/ML. We're certified in all major platforms.",
      },
      {
        question: "How long does cloud migration take?",
        answer:
          "Migration timelines vary from 2-6 months depending on complexity. We use phased approaches to minimize business disruption.",
      },
      {
        question: "What about data security in the cloud?",
        answer:
          "Cloud platforms offer enterprise-grade security. We implement additional security measures including encryption, IAM, and compliance frameworks to ensure data protection.",
      },
      {
        question: "Do you provide ongoing cloud management?",
        answer:
          "Yes, we offer comprehensive cloud management services including monitoring, optimization, cost management, and 24/7 support.",
      },
    ],
  },
  "ai-ml": {
    title: "AI & Machine Learning",
    icon: "Brain",
    gradient: "from-orange-500 to-orange-600",
    description:
      "Intelligent solutions powered by advanced AI, machine learning, and data science capabilities.",
    longDescription:
      "Transform your business with cutting-edge AI technology. We develop intelligent solutions that automate processes, provide insights, and create competitive advantages through machine learning and artificial intelligence.",
    subServices: [
      {
        title: "ML Model Development",
        description:
          "Custom machine learning models tailored to your specific business problems and data.",
      },
      {
        title: "Natural Language Processing",
        description:
          "Text analysis, chatbots, and language understanding systems for better user interactions.",
      },
      {
        title: "Computer Vision",
        description:
          "Image and video analysis solutions for automation, quality control, and insights.",
      },
      {
        title: "Predictive Analytics",
        description:
          "Data-driven forecasting and predictive modeling for business intelligence and decision making.",
      },
    ],
    techStack: {
      languages: ["Python", "R", "Julia", "Scala"],
      frameworks: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras"],
      platforms: ["AWS SageMaker", "Azure ML", "Google AI", "Databricks"],
      tools: ["Jupyter", "MLflow", "Weights & Biases", "DVC"],
    },
    process: [
      {
        step: 1,
        title: "Problem Definition",
        description:
          "Understand business objectives and define clear, measurable AI/ML goals.",
        icon: "🎯",
      },
      {
        step: 2,
        title: "Data Collection",
        description:
          "Gather, clean, and prepare high-quality data for model training and validation.",
        icon: "📊",
      },
      {
        step: 3,
        title: "Model Development",
        description:
          "Design, train, and validate machine learning models using appropriate algorithms.",
        icon: "🧠",
      },
      {
        step: 4,
        title: "Testing & Validation",
        description:
          "Rigorous testing to ensure model accuracy, reliability, and performance.",
        icon: "✅",
      },
      {
        step: 5,
        title: "Deployment",
        description:
          "Deploy models to production with monitoring and continuous learning capabilities.",
        icon: "🚀",
      },
      {
        step: 6,
        title: "Monitoring & Optimization",
        description:
          "Continuous monitoring, retraining, and optimization for sustained performance.",
        icon: "📈",
      },
    ],
    faqs: [
      {
        question: "How much data do I need for AI/ML projects?",
        answer:
          "Data requirements vary by project type. Simple models might need thousands of samples, while complex deep learning models require millions. We can work with your existing data and suggest augmentation strategies.",
      },
      {
        question: "How accurate will my AI model be?",
        answer:
          "Accuracy depends on data quality, problem complexity, and model type. We set realistic expectations and continuously improve models through iteration and feedback.",
      },
      {
        question: "Can AI replace human decision-making?",
        answer:
          "AI augments human decision-making by providing insights and automating routine tasks. We design systems that work alongside humans, not replace them.",
      },
      {
        question: "How long does it take to develop an AI solution?",
        answer:
          "Simple AI solutions take 2-4 weeks, while complex systems can take 3-6 months. Timeline depends on data availability, problem complexity, and integration requirements.",
      },
      {
        question: "What about AI ethics and bias?",
        answer:
          "We implement ethical AI practices including bias detection, fairness testing, and transparent model explanations to ensure responsible AI development.",
      },
    ],
  },
  "ui-ux-design": {
    title: "UI/UX Design",
    icon: "Palette",
    gradient: "from-pink-500 to-pink-600",
    description:
      "User-centered design that creates intuitive, engaging, and conversion-optimized digital experiences.",
    longDescription:
      "We design interfaces that users love to interact with. Our user-centered approach combines research, creativity, and technical expertise to create digital experiences that drive engagement and conversions.",
    subServices: [
      {
        title: "User Research",
        description:
          "Comprehensive user research including interviews, surveys, and behavioral analysis.",
      },
      {
        title: "Wireframing & Prototyping",
        description:
          "Interactive wireframes and prototypes to visualize and test design concepts early.",
      },
      {
        title: "Visual Design",
        description:
          "Beautiful, consistent visual designs that align with your brand and user expectations.",
      },
      {
        title: "Usability Testing",
        description:
          "Rigorous testing to ensure designs meet user needs and business objectives.",
      },
    ],
    techStack: {
      design: ["Figma", "Sketch", "Adobe XD", "InVision"],
      prototyping: ["Framer", "Principle", "Protopie", "Axure"],
      research: [
        "Hotjar",
        "Google Analytics",
        "UserTesting",
        "Optimal Workshop",
      ],
      collaboration: ["Miro", "Notion", "Slack", "Zeplin"],
    },
    process: [
      {
        step: 1,
        title: "Discovery",
        description:
          "Understand business goals, user needs, and project requirements through research.",
        icon: "🔍",
      },
      {
        step: 2,
        title: "User Research",
        description:
          "Conduct user interviews, surveys, and analysis to inform design decisions.",
        icon: "👥",
      },
      {
        step: 3,
        title: "Information Architecture",
        description:
          "Organize content and functionality to create intuitive user flows and navigation.",
        icon: "🗂️",
      },
      {
        step: 4,
        title: "Wireframing",
        description:
          "Create low-fidelity wireframes to establish layout and content structure.",
        icon: "📝",
      },
      {
        step: 5,
        title: "Visual Design",
        description:
          "Develop high-fidelity designs with colors, typography, and visual elements.",
        icon: "🎨",
      },
      {
        step: 6,
        title: "Prototyping & Testing",
        description:
          "Build interactive prototypes and conduct usability testing for validation.",
        icon: "🧪",
      },
    ],
    faqs: [
      {
        question: "How long does the design process take?",
        answer:
          "Design projects typically take 4-8 weeks depending on complexity. We provide detailed timelines and regular updates throughout the process.",
      },
      {
        question: "Do you provide design systems?",
        answer:
          "Yes, we create comprehensive design systems including component libraries, style guides, and documentation for consistent design across platforms.",
      },
      {
        question: "Can you redesign existing applications?",
        answer:
          "Absolutely! We can redesign existing applications to improve usability, modernize the interface, and enhance user experience.",
      },
      {
        question: "Do you handle responsive design?",
        answer:
          "Yes, we design for all screen sizes and devices, ensuring optimal user experience across desktop, tablet, and mobile platforms.",
      },
      {
        question: "What about accessibility in design?",
        answer:
          "We follow WCAG guidelines and accessibility best practices to ensure our designs are usable by people with disabilities.",
      },
    ],
  },
  ecommerce: {
    title: "Ecommerce Solutions",
    icon: "ShoppingCart",
    gradient: "from-red-500 to-red-600",
    description:
      "Complete ecommerce platforms that drive sales and provide seamless shopping experiences.",
    longDescription:
      "From online stores to marketplace solutions, we build comprehensive ecommerce platforms that convert visitors into customers. Our solutions are scalable, secure, and optimized for maximum sales performance.",
    subServices: [
      {
        title: "Online Stores",
        description:
          "Custom ecommerce websites built with modern platforms and optimized for conversions.",
      },
      {
        title: "Marketplace Platforms",
        description:
          "Multi-vendor marketplace solutions that connect buyers and sellers seamlessly.",
      },
      {
        title: "Payment Integration",
        description:
          "Secure payment processing with multiple payment gateways and methods.",
      },
      {
        title: "Inventory Management",
        description:
          "Comprehensive inventory tracking, order management, and fulfillment systems.",
      },
    ],
    techStack: {
      platforms: ["Shopify", "WooCommerce", "Magento", "Custom Solutions"],
      frontend: ["React", "Vue.js", "Next.js", "Progressive Web Apps"],
      backend: ["Node.js", "PHP", "Python", "Java"],
      payments: ["Stripe", "PayPal", "Square", "Razorpay"],
    },
    process: [
      {
        step: 1,
        title: "Business Analysis",
        description:
          "Understand your business model, target audience, and ecommerce requirements.",
        icon: "📊",
      },
      {
        step: 2,
        title: "Platform Selection",
        description:
          "Choose the right ecommerce platform based on your business needs and budget.",
        icon: "🛒",
      },
      {
        step: 3,
        title: "Design & UX",
        description:
          "Create conversion-optimized designs that guide users to purchase.",
        icon: "🎨",
      },
      {
        step: 4,
        title: "Development",
        description:
          "Build the ecommerce platform with secure payment processing and inventory management.",
        icon: "💻",
      },
      {
        step: 5,
        title: "Testing & Launch",
        description:
          "Comprehensive testing including payment flows, security, and performance optimization.",
        icon: "🚀",
      },
      {
        step: 6,
        title: "Optimization",
        description:
          "Continuous optimization for conversions, performance, and user experience.",
        icon: "📈",
      },
    ],
    faqs: [
      {
        question: "Which ecommerce platform should I choose?",
        answer:
          "We recommend based on your business size, budget, and requirements. Shopify is great for small-medium businesses, while custom solutions offer maximum flexibility for large enterprises.",
      },
      {
        question: "How long does it take to build an ecommerce site?",
        answer:
          "Simple stores take 4-6 weeks, while complex marketplaces can take 3-6 months. Timeline depends on features, customization, and integration requirements.",
      },
      {
        question: "Do you handle payment gateway integration?",
        answer:
          "Yes, we integrate multiple payment gateways including Stripe, PayPal, and local payment methods to provide customers with preferred payment options.",
      },
      {
        question: "What about mobile commerce?",
        answer:
          "All our ecommerce solutions are mobile-optimized and many include Progressive Web App features for app-like experiences on mobile devices.",
      },
      {
        question: "Can you integrate with existing systems?",
        answer:
          "Absolutely! We can integrate ecommerce platforms with existing ERP, CRM, accounting, and inventory management systems for seamless operations.",
      },
    ],
  },
};

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = serviceData[params.slug as keyof typeof serviceData];

  if (!service) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Service Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The service you're looking for doesn't exist.
          </p>
          <a href="/services" className="text-orange-500 hover:text-orange-600">
            Back to Services
          </a>
        </div>
      </div>
    );
  }

  return <ServicePageClient service={service} />;
}

// Generate static params for all service pages
export function generateStaticParams() {
  return [
    { slug: "web-development" },
    { slug: "mobile-apps" },
    { slug: "cloud-solutions" },
    { slug: "ai-ml" },
    { slug: "ui-ux-design" },
    { slug: "ecommerce" },
  ];
}
