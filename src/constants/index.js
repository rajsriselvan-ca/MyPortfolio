import project1a from "../assets/projects/project-1a.png";
import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";

export const HERO_ROLES = [
  "Software Engineer",
  "Full-Stack Developer",
  "AI Engineer",
  "Team Lead & Mentor",
  "Product Engineer",
];

export const HERO_CONTENT = `AI Software Engineer with deep expertise in TypeScript, React, Node.js, Python, SQL and NoSQL, building scalable SaaS platforms and AI-powered products from scratch. I ship production-grade LLM and RAG pipelines using LangChain/ LangGraph, design secure REST APIs and craft reusable UI systems end-to-end. I lead system design and architect microservices and event-driven systems with Kafka, deploy containerised workloads with Docker and Kubernetes, and leverage AWS cloud solutions — Lambda, EC2, S3, SQS, DynamoDB and CloudWatch — to build reliable, scalable infrastructure. I drive CI/CD, automate testing, lead code reviews and bring strong product thinking to every feature, owning the full cycle from blank canvas to deployed, maintainable software.`;

export const ABOUT_TEXT = `I'm a continuous learner who thrives on new challenges and enjoys leading teams to success. My passion for growth pushes me to embrace and master emerging technologies, keeping my skills sharp and relevant. I approach every project with a positive attitude and a sense of humour, which makes collaboration both productive and enjoyable. My adaptability lets me navigate diverse situations and foster supportive, inclusive teams.\n\nOutside of coding I stay active and explore ideas that complement my professional growth. Exploring new technologies keeps me inspired and sharpens my problem-solving. I have a never-give-up mindset and push through obstacles to find solutions, whether I'm leading a project or untangling a tough issue. My friendly nature and curiosity make me a reliable contributor to any team.`;

export const EXPERIENCES = [
  {
    year: "2025",
    role: "Software Engineer",
    company: "Bounce Insights",
    location: "Dublin, Ireland",
    description: `Built and delivered a market-research insights platform with React on the frontend and Node.js, Express and Python on the backend. Integrated LLM and RAG pipelines that surfaced meaningful insights for B2B clients, designed versioned REST APIs for partner integrations and tuned backend workflows for throughput and reliability. Shipped reusable React components and clean state patterns, partnered with design and data science to turn complex analytics into intuitive dashboards, and raised the engineering bar with Cypress end-to-end tests, automated CI/CD and consistent code reviews.`,
    technologies: ["Agentic AI", "LLMs", "RAG", "Full-Stack", "Cypress", "Firebase"],
    accent: "from-indigo-500 via-purple-500 to-pink-500",
  },
  {
    year: "2021 — 2023",
    role: "Software Engineer",
    company: "Szigony Technologies",
    location: "Bangalore, India",
    description: `Built and maintained scalable full-stack apps with React and Node.js, delivering strong performance and a seamless user experience. Crafted responsive interfaces with Tailwind CSS and Ant Design that aligned with modern UI/UX standards. Optimised REST APIs with Redis caching, cutting response times by ~30%. Hardened quality with Jest unit tests and Selenium automation, and streamlined releases through Jenkins and Docker CI/CD. Designed flexible MongoDB schemas and built maintainable APIs in TypeScript and GraphQL.`,
    technologies: ["TypeScript", "React.js", "Tailwind CSS", "GraphQL", "Node.js", "MongoDB"],
    accent: "from-emerald-500 via-teal-500 to-cyan-500",
  },
  {
    year: "2016 — 2021",
    role: "Software Engineer",
    company: "Kaay Labs",
    location: "Chennai, India",
    description: `Led the development and delivery of a quoting application for Mouser Electronics in React and Node.js, lifting user satisfaction and system stability. Designed scalable, modular services on a microservice architecture with efficient SQL data integration, and explored AWS EC2, S3 and Lambda for cloud deployment. Partnered directly with clients to gather requirements, mentored junior developers and ran code reviews to keep the bar high.`,
    technologies: ["Microservices", "React.js", "Node.js", "AWS", "MySQL", "CI/CD"],
    accent: "from-amber-500 via-orange-500 to-rose-500",
  },
];

export const PROJECTS = [
  {
    title: "WordSmith",
    image: project1a,
    url: "https://wordsmithtracker.netlify.app/",
    description:
      `A vocabulary tracker for students, professionals and language learners. Users set daily word goals, capture new words with meanings and example sentences, and track progress through visual graphs. A personalised library lets them review and manage learned words for consistent, structured learning.`,
    technologies: ["TypeScript", "GraphQL", "Tailwind CSS", "MongoDB", "React & Node.js"],
    accent: "from-indigo-500 to-fuchsia-500",
  },
  {
    title: "Dev Notes",
    image: project1,
    url: "https://devnotesdone.netlify.app/",
    description:
      `A workspace for tech professionals to organise notes and code snippets. Categorise by software code, SQL or Git commands, then store, search and retrieve in seconds. Full create / update / delete flow keeps the process fast and friction-free.`,
    technologies: ["JavaScript", "React.js", "Node.js", "MySQL", "Cloud Hosting"],
    accent: "from-emerald-500 to-sky-500",
  },
  {
    title: "Lotto Calculator",
    image: project2,
    url: "https://github.com/rajsriselvan-ca/LottoCalculator",
    description:
      "A lightweight HTML/CSS/JavaScript app — input a date and instantly see the next three Irish Lotto draw dates plus the previous two, mapped to the official Wednesday / Saturday 8 PM schedule.",
    technologies: ["HTML", "CSS", "JavaScript", "Git"],
    accent: "from-amber-500 to-rose-500",
  },
  {
    title: "TV Retail",
    url: "https://github.com/rajsriselvan-ca/TV_Retail_C-Sharp",
    image: project3,
    description:
      "A C# desktop app for TV sales staff: place orders, manage carts and track inventory with a unique transaction ID and date for every sale. Generates daily sales reports and keeps inventory records up to date.",
    technologies: ["C#", "Microsoft Visual Studio"],
    accent: "from-slate-600 to-indigo-500",
  },
];

export const CONTACT = {
  address: "The Malthouse, Dublin 8, Ireland",
  phones: ["+353 87 486 3116", "+91 901 999 0703"],
  email: "rajsriselvan.ca@gmail.com",
};
