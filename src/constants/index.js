import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";

export const HERO_CONTENT = `With 6 years of experience as a Software Engineer, I have a strong background in both frontend and backend web development, with expertise in JavaScript, TypeScript, React.js, Node.js, and MySQL. My skill set extends to C#, Python, Java, and PHP, allowing me to tackle diverse technical challenges. I am proficient in CI/CD processes, automation testing, bug fixing, and debugging, ensuring high-quality code delivery. My experience with client interaction for technical requirement gathering, combined with Agile methodologies, enables me to contribute effectively across the entire software development life cycle, driving innovative solutions that enhance business performance.`;

export const ABOUT_TEXT = `I'm a continuous learner who thrives on taking new challenges and enjoys leading teams to success. My passion for growth drives me to embrace and master emerging technologies, ensuring that my skills remain sharp and relevant. I approach every project with a positive attitude and a good sense of humor, which makes collaboration both productive and enjoyable. My adaptability allows me to navigate and excel in diverse situations, fostering a supportive and inclusive environment within my teams.\n\nOutside of coding, I stay active and engage in activities that complement my professional growth. Exploring new technologies keeps me inspired and motivated, enhancing my ability to tackle complex problems. I possess a never-give-up attitude when facing new challenges, always pushing through obstacles to find solutions. Whether leading a project or working through a tough issue, I am committed to contributing effectively and growing as a professional. My friendly nature and willingness to embrace new experiences ensure that I can adapt to any challenge that comes my way, making me a valuable asset to any team or project.`;

export const EXPERIENCES = [
  {
    year: "2021 - 2023",
    role: "Software Engineer",
    company: "Szigony Technologies",
    description: `I developed customer support portals for SAP Ariba clients using SAPUI5, React.js, and PHP. I enhanced performance through code refactoring, worked with REST API microservices, and improved debugging processes, resulting in optimized system efficiency and seamless user experiences.`,
    technologies: ["TypeScript", "PHP", "React.js", "SAPUI5", "Kubernetes"],
  },
  {
    year: "2017 - 2021",
    role: "Software Engineer",
    company: "Kaay Labs",
    description: `I developed an internal application for Mouser Electronics using React.js and Node.js, boosting user satisfaction by 25%. I optimized development cycles with reusable components, coordinated Agile efforts, and worked with CI/CD pipelines, ensuring timely and cost-effective project delivery.`,
    technologies: ["JavaScript", "React.js", "Node.js", "HTML5", "CSS3", "Jenkins"],
  },
  {
    year: "2016 - 2017",
    role: "Junior Software Engineer",
    company: "Kaay Labs",
    description: `As a junior software engineer, I monitored project progress in JIRA, designed and executed test plans, performed Automation Testing, and collaborated with stakeholders to resolve application issues. Additionally, I presented development phase reports via PowerPoint, ensuring project transparency, accountability, and timely achievement of milestones.`,
    technologies: ["Java", "Selenium", "GitHub", "MySQL", "JIRA", "Postman"],
  },
];

export const PROJECTS = [
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
