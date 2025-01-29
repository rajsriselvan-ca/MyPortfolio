import project1a from "../assets/projects/project-1a.png";
import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";

export const HERO_CONTENT = `As an experienced Software Engineer, I possess a strong background in both frontend and backend web development, with expertise in JavaScript, TypeScript, React.js, Node.js, and SQL. My skill set extends to Python, Java and PHP enabling me to tackle diverse technical challenges. I am proficient in designing and implementing RESTful APIs and GraphQL endpoints, ensuring seamless communication between systems.

With a solid understanding of CI/CD processes, I am skilled in automation testing and proficient in using Jest for unit testing, ensuring high-quality code delivery. My experience includes bug fixing, debugging, and optimizing performance to maintain robust and scalable applications.

Additionally, I have a proven track record of collaborating with clients to gather technical requirements and working within Agile methodologies to contribute effectively across the entire software development life cycle. My ability to drive innovative solutions has consistently enhanced business performance and user experiences.`;

export const ABOUT_TEXT = `I'm a continuous learner who thrives on taking new challenges and enjoys leading teams to success. My passion for growth drives me to embrace and master emerging technologies, ensuring that my skills remain sharp and relevant. I approach every project with a positive attitude and a good sense of humor, which makes collaboration both productive and enjoyable. My adaptability allows me to navigate and excel in diverse situations, fostering a supportive and inclusive environment within my teams.\n\nOutside of coding, I stay active and engage in activities that complement my professional growth. Exploring new technologies keeps me inspired and motivated, enhancing my ability to tackle complex problems. I possess a never-give-up attitude when facing new challenges, always pushing through obstacles to find solutions. Whether leading a project or working through a tough issue, I am committed to contributing effectively and growing as a professional. My friendly nature and willingness to embrace new experiences ensure that I can adapt to any challenge that comes my way, making me a valuable asset to any team or project.`;

export const EXPERIENCES = [
  {
    year: "2021 - 2023",
    role: "Software Engineer",
    company: "Szigony Technologies",
    description: `Built and maintained scalable full-stack applications using React.js and Node.js, delivering optimal performance and a seamless user experience. Developed responsive interfaces with Tailwind CSS and Ant Design, adhering to modern UI/UX standards. Optimized RESTful APIs with Redis caching, improving data handling and reducing response times by 30%. Ensured code quality by automating workflows with Selenium and implementing unit tests using Jest. Streamlined deployment processes through CI/CD pipelines with Jenkins and Docker. Designed and managed flexible database schemas with MongoDB and created efficient, maintainable APIs using TypeScript and GraphQL.`,
    technologies: ["TypeScript", "React.js", "Tailwind CSS","GraphQL", "Node.js", "MongoDB"],
  },
  {
    year: "2017 - 2021",
    role: "Software Engineer",
    company: "Kaay Labs",
    description: `Led the development and delivery of a quotes application for Mouser Electronics using React.js and Node.js, enhancing user satisfaction and system stability. Designed and developed scalable, modular applications with a microservice architecture and ensured efficient data integration using SQL. Explored AWS concepts like EC2, S3, and Lambda for cloud-based deployment solutions. Collaborated with clients to gather requirements and delivered scalable solutions while mentoring junior developers and conducting code reviews to maintain high code quality.`,
    technologies: ["Microservices", "React.js", "Node.js ", "AWS", "MySQL", "CI/CD"],
  },
  {
    year: "2016 - 2017",
    role: "Junior Software Engineer",
    company: "Kaay Labs",
    description: `Debugged and resolved codebase issues to enhance performance and functionality while implementing new features based on technical and business requirements to ensure timely delivery. Managed user stories and bug tracking in JIRA, maintaining efficient project workflows. Actively participated in Scrum calls, team meetings, and knowledge-sharing sessions to stay updated on best practices and contribute to team collaboration.`,
    technologies: ["Java", "Selenium", "GitHub", "JIRA", "Jenkins", "Postman"],
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
  address: "103 Bohermore, Galway, Ireland",
  phoneNo: "+353 87 486 3116",
  email: "rajsriselvan.ca@gmail.com",
};
