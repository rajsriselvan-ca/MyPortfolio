import project1a from "../assets/projects/project-1a.png";
import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";

export const HERO_CONTENT = `I am a full-stack Software Engineer with strong expertise in TypeScript, Python, React.js, Node.js, and SQL, experienced in building scalable SaaS platforms and delivering end-to-end features across modern web architectures. I have hands-on experience integrating Agentic AI workflows and RAG-based solutions into real-world applications, as well as designing secure REST APIs, optimizing backend performance, and developing reusable, high-quality UI components. My background includes leading teams, implementing automation and end-to-end testing pipelines, and driving CI/CD practices to ensure reliable releases. I work effectively in Agile environments, collaborating closely with cross-functional teams and stakeholders to translate complex requirements into intuitive, production-ready software. With a strong focus on system reliability, scalability, and user experience, I consistently deliver impactful engineering outcomes.`;

export const ABOUT_TEXT = `I'm a continuous learner who thrives on taking new challenges and enjoys leading teams to success. My passion for growth drives me to embrace and master emerging technologies, ensuring that my skills remain sharp and relevant. I approach every project with a positive attitude and a good sense of humor, which makes collaboration both productive and enjoyable. My adaptability allows me to navigate and excel in diverse situations, fostering a supportive and inclusive environment within my teams.\n\nOutside of coding, I stay active and engage in activities that complement my professional growth. Exploring new technologies keeps me inspired and motivated, enhancing my ability to tackle complex problems. I possess a never-give-up attitude when facing new challenges, always pushing through obstacles to find solutions. Whether leading a project or working through a tough issue, I am committed to contributing effectively and growing as a professional. My friendly nature and willingness to embrace new experiences ensure that I can adapt to any challenge that comes my way, making me a valuable asset to any team or project.`;

export const EXPERIENCES = [
  {
    year: "2025 - 2025",
    role: "Software Engineer",
    company: "Bounce Insights",
    description: `I built and delivered a market research insights platform using React.js on the frontend and Node.js/Express and Python on the backend, integrating advanced AI capabilities including LLMs and a RAG solution to retrieve insights and generate meaningful outcomes for B2B clients. I developed secure, scalable REST APIs with proper versioning for partner integrations, while optimizing backend performance and data workflows to improve system throughput and reliability. On the frontend, I implemented reusable React components and efficient state management patterns to ensure a responsive, maintainable UI, working closely with design and data science teams to transform complex analytics into intuitive dashboards and visualizations. I also strengthened engineering quality by writing end-to-end tests using Cypress, integrating automated testing into CI/CD pipelines, and leading code reviews to uphold best practices and drive continuous team-wide knowledge sharing.`,
    technologies: ["Agentic AI", "LLMs", "RAG", "Full-Stack", "Cypress", "Firebase"],
  },
  {
    year: "2021 - 2023",
    role: "Software Engineer",
    company: "Szigony Technologies",
    description: `Built and maintained scalable full-stack applications using React.js and Node.js, delivering optimal performance and a seamless user experience. Developed responsive interfaces with Tailwind CSS and Ant Design, adhering to modern UI/UX standards. Optimized RESTful APIs with Redis caching, improving data handling and reducing response times by 30%. Ensured code quality by automating workflows with Selenium and implementing unit tests using Jest. Streamlined deployment processes through CI/CD pipelines with Jenkins and Docker. Designed and managed flexible database schemas with MongoDB and created efficient, maintainable APIs using TypeScript and GraphQL.`,
    technologies: ["TypeScript", "React.js", "Tailwind CSS","GraphQL", "Node.js", "MongoDB"],
  },
  {
    year: "2016 - 2021",
    role: "Software Engineer",
    company: "Kaay Labs",
    description: `Led the development and delivery of a quotes application for Mouser Electronics using React.js and Node.js, enhancing user satisfaction and system stability. Designed and developed scalable, modular applications with a microservice architecture and ensured efficient data integration using SQL. Explored AWS concepts like EC2, S3, and Lambda for cloud-based deployment solutions. Collaborated with clients to gather requirements and delivered scalable solutions while mentoring junior developers and conducting code reviews to maintain high code quality.`,
    technologies: ["Microservices", "React.js", "Node.js ", "AWS", "MySQL", "CI/CD"],
  },
];

export const PROJECTS = [
  {
    title: "WordSmith",
    image: project1a,
    url: "https://wordsmithtracker.netlify.app/",
    description:
      `WordSmith is a vocabulary tracker app is designed for students, professionals, and language learners to expand their vocabulary effectively. Users can set daily word goals, add new words with meanings and sample sentences, and track progress through a visual graphs. The app also provides a personalized library to review and manage learned words, promoting consistent and structured learning.`,
    technologies: ["TypeScript", "GraphQL", "Tailwind CSS", "MongoDB", "React & Node.js"],
  },
  {
    title: "Dev Notes",
    image: project1,
    url: "https://devnotesdone.netlify.app/",
    description:
      `DevNotes helps tech professionals efficiently manage and organize notes and code snippets. By categorizing data like software code, SQL commands, and Git commands, users can quickly store, search, and retrieve information. The app supports updates and deletions, streamlining the process and enhancing productivity.`,
    technologies: ["JavaScript", "React.js", "Node.js", "MySQL", "Cloud Hosting"],
  },
  {
    title: "Lotto Calculator",
    image: project2,
    url: "https://github.com/rajsriselvan-ca/LottoCalculator",
    description:
      "Developed an app using HTML, CSS, and JavaScript that allows users to input a date and receive the next three Irish Lotto draw dates, as well as the previous two. The app is based on the Irish Lotto's draw schedule, which occurs every Wednesday and Saturday evening at 8 PM.",
    technologies: ["HTML", "CSS", "JavaScript", "Git"],
  },
  {
    title: "Tv Retail",
    url: "https://github.com/rajsriselvan-ca/TV_Retail_C-Sharp",
    image: project3,
    description:
      "Developed TV Retail, a C# app for TV sales personnel to order TVs, manage carts, and track inventory. Each order generates a unique transaction ID and date. The app also creates daily sales reports and maintains inventory records, enhancing efficiency in sales and inventory management.",
    technologies: ["C#", "Microsoft Visual Studio"],
  },
];

export const CONTACT = {
  address: "The Malthouse, Dublin 8, Ireland",
  phoneNo: "+353 87 486 3116",
  email: "rajsriselvan.ca@gmail.com",
};
