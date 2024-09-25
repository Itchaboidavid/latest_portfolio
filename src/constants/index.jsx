import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import sfms from "../assets/sfms.jpg";
import saristore from "../assets/sari_store.png";
import invitation from "../assets/invitation.png";

import { RiReactjsLine } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { DiPhp } from "react-icons/di";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoHtml5 } from "react-icons/bi";
import { BiLogoCss3 } from "react-icons/bi";
import { IoLogoLaravel } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiBootstrapFill } from "react-icons/ri";
import { RiVuejsLine } from "react-icons/ri";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  // { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "DAVID CENTENO",
  greet: "Hello there! 👋🏻",
  description:
    "I am a dedicated full stack developer with a passion for building both the frontend and backend of web applications. As a recent graduate, I am eager to transform ideas into seamless and engaging digital experiences.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "School Form Management System",
    description:
      "A School Form Management System (SFMS) is a digital tool that automates the management and storage of academic and administrative forms in schools, streamlining student records, admissions, attendance, and grading while reducing paperwork and errors.",
    image: sfms,
    githubLink: "https://github.com/Itchaboidavid/Capstone/settings",
  },
  {
    id: 2,
    name: "Sari-Store",
    description:
      "Sari-Store is an Inventory Management System for small convenience stores (sari-sari stores) that helps owners efficiently manage stock and operations. It offers tools to track inventory, monitor sales, and restock products, ensuring smooth store management.",
    image: saristore,
    githubLink: "https://github.com/Itchaboidavid/inventory_management",
  },
  {
    id: 3,
    name: "Graduation Invitation",
    description:
      "This project is a landing page for a graduation invitation that includes key details such as the graduation date, reception location, and celebrant's graduation photos. It features a QR code for guests to easily send gifts",
    image: invitation,
    githubLink: "https://github.com/Itchaboidavid/grad_souvenir",
  },
];

export const BIO = [
  "Carl Frank studied computer science at the University of Technology,from which he graduated in 2010. Following his education, he honed his craft and expertise over the course of 10 years at Tech Innovations Inc., where he immersed himself in the world of frontend development.",
  "In 2021, driven by a shared vision for innovative web solutions and a passion for creating extraordinary user experiences Carl Frank co-founded WebArtistry alongside his creative partner, Jane Doe. Together, they set out to redefine frontend development, infusing their projects with creativity and cutting-edge technology.",
  "As a multi-disciplinary frontend developer, Carl Frank brings a wealth of skills and expertise to his work. From his deep understanding of HTML, CSS, and JavaScript to his proficiency in modern frameworks like React and Vue.js, Carl Frank possesses a versatile skill set that allows him to craft stunning and unforgettable web experiences for his clients and audiences alike.",
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "Less than 1 year",
  },
  {
    icon: <SiMysql className="text-4xl text-blue-500 lg:text-5xl" />,
    name: "MySQL",
    experience: "1 year",
  },
  {
    icon: <DiPhp className="text-4xl text-white lg:text-5xl" />,
    name: "PHP",
    experience: "1 year",
  },
  {
    icon: <RiJavascriptFill className="text-4xl text-orange-600 lg:text-5xl" />,
    name: "JavaScript",
    experience: "1 year",
  },
  {
    icon: <BiLogoHtml5 className="text-4xl text-sky-500 lg:text-5xl" />,
    name: "HTML",
    experience: "2 years",
  },
  {
    icon: <BiLogoCss3 className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "CSS",
    experience: "2 years",
  },
  {
    icon: <IoLogoLaravel className="text-4xl text-red-500 lg:text-5xl" />,
    name: "Laravel",
    experience: "Less than 1 year",
  },
  {
    icon: <RiTailwindCssFill className="text-4xl text-cyan-500 lg:text-5xl" />,
    name: "TailwindCSS",
    experience: "1 year",
  },
  {
    icon: <RiBootstrapFill className="text-4xl text-red-500 lg:text-5xl" />,
    name: "Bootstrap",
    experience: "1 year",
  },
  {
    icon: <RiVuejsLine className="text-4xl text-green-300 lg:text-5xl" />,
    name: "Vue",
    experience: "Less than 1 year",
  },
];

export const EXPERIENCES = [
  {
    title: "IT Field Technician (Ojt/Internship)",
    company: "Picnic Grove Tagaytay",
    duration: "February 2024 - May 2024",
    description:
      "As an IT Field Technician, I performed basic troubleshooting of PCs and provided technical support. My responsibilities included diagnosing hardware and software issues, assisting users with technical problems, and ensuring the efficient operation of IT systems.",
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "Stanford University",
    duration: "September 2020 - July 2024",
    description:
      "Focused on Information Technology with a specialization in Human-Computer Interaction and Software Engineering. Completed a thesis on optimizing IT systems for enhanced user experience. Engaged in various projects involving systems analysis, software development, and IT project management.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.facebook.com/Itchaboidavid",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/Itchaboidavid",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/davidcenteno101700/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
