import { carrent, jobit, tripguide } from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "Computer Science Lab Assistant",
    company_name: "Langara College",
    icon: `${import.meta.env.BASE_URL}assets/langara.png`,
    iconBg: "#E6DEDD",
    date: "Sep 2024 - Present",
    points: [
      "Collaborate with instructors to design and review lab exercises and weekly assignments for computer science courses.",
      "Support students during lab hours by promoting critical thinking and guiding them through problem-solving strategies.",
      "Evaluate lab submissions and assignments with a focus on code readability, design, and best practices.",
      "Provide one-on-one academic support at the Computer Science Help Center across multiple courses and technical levels.",
    ],
  },
  {
    title: "Information Technology Field Technician",
    company_name: "Kelly Services (Canada), Ltd.",
    icon: `${import.meta.env.BASE_URL}assets/kelly.jpeg`,
    iconBg: "#E6DEDD",
    date: "Feb 2024 - Present",
    points: [
      "Install and configure new hardware and relocate existing equipment to meet client requirements with minimal disruption.",
      "Upgrade systems and troubleshoot hardware issues by assessing needs and implementing necessary improvements.",
      "Contribute to large-scale IT projects, including PC and server updates and printer integration into network environments.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Smart4 Sistemas e Tecnologia",
    icon: `${import.meta.env.BASE_URL}assets/smart4.png`,
    iconBg: "#00B5E2",
    date: "Jun 2021 - Sep 2022",
    points: [
      "Developed and maintained systems for public agencies using Java and the ZK framework for frontend development.",
      "Implemented new features, modified existing functionalities, and fixed bugs to improve system performance.",
      "Managed system databases using SQL queries and SQLyog, creating new tables and updating data to support new features.",
      "Ensured data integrity by implementing corrections and maintaining consistent database operations.",
      "Worked in a remote environment, collaborating with the team to deliver reliable and efficient software solutions."
    ],
  }
];

const education = [
  {
    institution: "Langara College",
    duration: "2024 - 2026",
    degree: "Degree of Computer Science",
    image: `${import.meta.env.BASE_URL}assets/langara.png`,
  },
  {
    institution: "University Area 1",
    duration: "2016 - 2021",
    degree: "Bachelor of Computer Engineering",
    image: `${import.meta.env.BASE_URL}assets/area1.png`,
  },
  {
    institution: "Sartre COC",
    duration: "2012 - 2014",
    degree: "High School",
    image: `${import.meta.env.BASE_URL}assets/sartre.jpeg`,
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "AI Chatbot",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: `${import.meta.env.BASE_URL}assets/aichatbot.png`,
    source_code_link: "https://github.com/FelipeFJBrito/aichatbot",
  },
  {
    name: "Portfolio",
    description:
      "A place to explore my background, learn about my work and skills, and find ways to connect with me, feel free to reach out and connect.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "motion",
        color: "pink-text-gradient",
      },
    ],
    image: `${import.meta.env.BASE_URL}assets/portfolio.png`,
    source_code_link: "https://github.com/FelipeFJBrito/portfolio/tree/main",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { experiences, education, projects };
