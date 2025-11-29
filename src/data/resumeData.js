const resumeData = {
  name: "Guru Sai Pranay",
  title: "Senior Software Engineer | Front-End Developer",
  email: "gurusaipranay123@gmail.com",
  phone: "+1 (814) 844-1090",
  location: "West Hartford, Connecticut",
  linkedin: "https://linkedin.com/in/pranay-dev",
  github: "https://github.com/pranay-dev",
  
  introduction: "Highly skilled Senior Software Engineer with 4+ years of experience designing and developing scalable, user-friendly web and mobile applications. Expertise in modern front-end technologies including React.js, Next.js, TypeScript, and cloud deployment on AWS and Azure. Passionate about creating intuitive user experiences and driving continuous innovation.",
  
  professionalSummary: [
    "4+ years of experience designing and developing highly interactive, scalable, and user-friendly web and mobile applications",
    "Expertise in modern front-end technologies, including HTML5, CSS3, JavaScript (ES6+), and TypeScript",
    "Proficient in React.js, Next.js, React Native for creating high-performance single-page applications (SPAs)",
    "Strong command over state management using Redux, Context API ensuring maintainable and scalable front-end architecture",
    "Cloud deployment expertise in AWS and Azure for hosting and scaling applications",
    "Deep understanding of DevOps practices, working with Git, Jenkins, Docker, and Kubernetes for CI/CD",
    "Effective communicator and team player, collaborating with cross-functional teams to deliver high-quality user experiences",
  ],
  
  technicalSkills: {
    programmingLanguages: ["HTML5", "CSS3", "JavaScript (ES6+)", "JSX", "TypeScript", "Python", "Java"],
    frameworks: ["React.js", "Next.js", "React Native", "Redux", "Angular", "Express.js", "Node.js"],
    styling: ["Material-UI", "Styled Components", "Tailwind CSS", "Bootstrap", "SASS"],
    testing: ["Cypress", "Jest", "RTL", "Enzyme", "Jasmine"],
    devOps: ["Git", "GitHub", "Jenkins", "Azure DevOps", "Docker", "Kubernetes"],
    cloud: ["AWS (S3, CloudFront, Amplify, Lambda)", "Azure (App Service, Static Web Apps)"],
    databases: ["MySQL", "MongoDB", "Redis", "PostgreSQL"],
    apis: ["RESTful APIs", "GraphQL", "WebSockets", "JWT Authentication", "OAuth 2.0"],
    design: ["Figma", "Adobe XD", "Photoshop", "Material Design"],
    tools: ["VS Code", "WebStorm", "Chrome DevTools", "Postman", "JIRA", "Confluence"],
  },
  
  experience: [
    {
      role: "Senior Software Engineer",
      company: "US Bank",
      location: "Minneapolis, MN",
      duration: "Sep 2023 – Nov 2024",
      responsibilities: [
        "Crafted semantic, accessible layouts with HTML5, CSS3, SASS, and TailwindCSS implementing Responsive & Adaptive Design",
        "Developed high-performance web applications using React.js and Next.js (SSR) to deliver fast, server-side rendered content",
        "Configured client-side routing with React Router and managed global state using Redux and Saga",
        "Deployed containerized applications using Docker and orchestrated them with Kubernetes for scalable environments",
        "Integrated Headless CMS (Contentful) into the dashboard to manage dynamic content efficiently",
        "Implemented Microfrontend Architecture for a modular and scalable dashboard application",
        "Deployed and managed cloud infrastructure on AWS—including S3, CloudFront, AWS Amplify, Lambda, and Secrets Manager",
      ],
      technologies: ["React.js", "Next.js", "TypeScript", "Redux", "Saga", "Docker", "Kubernetes", "AWS", "GraphQL", "Material-UI"],
    },
    {
      role: "Software Engineer",
      company: "Government of Singapore Investment Corporation",
      location: "Singapore",
      duration: "Apr 2022 – Aug 2023",
      responsibilities: [
        "Developed responsive and accessible UIs using HTML5, CSS3, SASS, ensuring device compatibility",
        "Built and optimized React Components using Javascript and Typescript to improve modularity and reusability",
        "Implemented Redux and Saga for state management, and used Reselect optimizing data flow and application performance",
        "Developed a GraphQL API using Express.js & Apollo Server for efficient banking transactions",
        "Used Webpack Module Federation to enable independent deployment of dashboard modules",
        "Conducted Lighthouse audits to enhance performance, SEO, and accessibility of web applications",
      ],
      technologies: ["React", "TypeScript", "Redux", "Saga", "GraphQL", "Docker", "Azure", "Webpack", "Jest"],
    },
    {
      role: "Software Engineer",
      company: "DBS Bank",
      location: "Singapore",
      duration: "Sep 2020 – Feb 2022",
      responsibilities: [
        "Developed responsive UI components using React, TypeScript, and Styled Components",
        "Built cross-platform mobile apps with React Native, leveraging React Native CLI and Expo",
        "Implemented Redux, Saga and Context API for state management",
        "Developed RESTful APIs using Node.js, Express.js",
        "Optimized front-end performance using code splitting, lazy loading, and React Router",
      ],
      technologies: ["React", "React Native", "TypeScript", "Redux", "Node.js", "Express.js", "GraphQL"],
    },
  ],
  
  education: [
    {
      degree: "Masters in Business Analytics",
      institution: "University of Hartford",
      location: "West Hartford, Connecticut",
      duration: "Jan 2024 – Dec 2025",
    },
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "PRIST University",
      duration: "2016 – 2020",
      gpa: "6.81 CGPA",
    },
  ],
  
  projects: [
    {
      title: "Enterprise Banking Dashboard",
      description: "Developed a comprehensive banking dashboard with real-time transaction monitoring, user management, and analytics. Implemented microfrontend architecture for modular deployment and scalability.",
      technologies: ["React.js", "Next.js", "TypeScript", "Redux", "GraphQL", "Material-UI", "Docker", "AWS"],
      highlights: [
        "Implemented SSR with Next.js for improved SEO and performance",
        "Built reusable component library with Storybook",
        "Achieved 95+ Lighthouse performance score",
        "Integrated JWT authentication and OAuth 2.0",
      ],
    },
    {
      title: "Cross-Platform Mobile Banking App",
      description: "Built a feature-rich mobile banking application using React Native with seamless user experience across iOS and Android platforms. Integrated biometric authentication and real-time notifications.",
      technologies: ["React Native", "TypeScript", "Redux", "Node.js", "Express.js", "MongoDB", "WebSockets"],
      highlights: [
        "Implemented secure biometric authentication",
        "Real-time push notifications using WebSockets",
        "Offline-first architecture with data synchronization",
        "Published on both App Store and Google Play",
      ],
    },
    {
      title: "E-Commerce Platform with Headless CMS",
      description: "Created a modern e-commerce platform with headless CMS integration for dynamic content management. Implemented advanced features like product recommendations, cart management, and payment gateway integration.",
      technologies: ["Next.js", "React", "Contentful", "Stripe API", "Tailwind CSS", "Vercel"],
      highlights: [
        "Integrated Contentful headless CMS for content management",
        "Implemented Stripe payment gateway",
        "Built PWA with offline capabilities",
        "Optimized for Core Web Vitals",
      ],
    },
  ],
};

export default resumeData;
