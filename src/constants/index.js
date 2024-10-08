import {
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
 NetFlix,
  ShoppingApp,
  tutor,
  chegg,
} from "../assets";

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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Home Tutor",
    company_name: "Self Employed",
    icon: tutor,
    iconBg: "#383E56",
    date: "Jan 2016 - July 2022",
    points: [
      "Provided private tutoring to students in classes 9th to 12th, creating personalized lesson plans and study strategies tailored to individual learning styles.",
      "Designed engaging and interactive lessons to foster a deep understanding of core subjects, ensuring students could apply concepts confidently.",
      "Demonstrated excellent communication and teaching skills, effectively helping students grasp and master complex concepts.",
      "Utilized regular assessments, feedback, and adaptive teaching methods to ensure continuous improvement.",
    ],
  },
  {
    title: "Freelancing",
    company_name: "Chegg",
    icon: chegg,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - Jul 2024 ",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];



const projects = [
  {
    name: "NetflixGPT—The-Beginning",
    description:
      "I aimed to create a scalable, responsive platform with seamless user authentication and efficient data management. By utilizing Firebase for secure login, TMDB API for data handling, and GPT-powered search, I enhanced the user experience while ensuring stability and security through bug resolution.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "geminiapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: NetFlix,
    source_code_link: "https://netflix-gpt-the-beginning-bf8gdecm1-mohits-projects-57d4123e.vercel.app/",
  },
  {
    name: "ShoppingApp",
    description:
      "I aimed to develop a robust backend that supports comprehensive product management and user account functionalities. By utilizing Node.js, Express.js, and MongoDB, I implemented essential features like product CRUD operations and efficient search capabilities, ensuring a seamless user experience and optimal platform performance.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "expressjs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: ShoppingApp,
    source_code_link: "https://shoppingapp-1-waj4.onrender.com/",
  },
];

export { services, technologies, experiences, projects };
