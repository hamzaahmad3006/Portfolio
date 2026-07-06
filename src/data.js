import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
} from 'react-icons/fa';

import Work1 from './assets/project-1.PNG';
import Work2 from './assets/project-2.PNG';
import Work3 from './assets/project-3.PNG';
import Work4 from './assets/project-4.JPG';
import Work5 from './assets/project-5.JPG';
import Work6 from './assets/project-6.jpg';
import Work7 from './assets/project-7.PNG';
import Work8 from './assets/project-8.png';
import Work9 from './assets/project-9.png';
import Work10 from './assets/project-10.png';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';
import DarkAndLightMode from './components/DarkAndLightMode';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },

  {
    id: 5,
    name: "Mode",
    icon: <DarkAndLightMode />,

  }
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name: ',
    description: 'Hamza',
  },

  {
    id: 2,
    title: 'Last Name: ',
    description: 'Ahmad',
  },

  {
    id: 3,
    title: 'Age: ',
    description: '24 Years',
  },

  {
    id: 4,
    title: 'Nationality: ',
    description: 'Pakistani',
  },

  {
    id: 5,
    title: 'Freelance: ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address: ',
    description: 'Faisalabad',
  },

  {
    id: 7,
    title: 'Phone: ',
    description: '+92 3226075308',
  },
  {
    id: 8,
    title: 'Github: ',
    description: 'hamzaahmad3006',
  },

  {
    id: 9,
    title: 'Email: ',
    description: 'hamzaahmad3006@gmail.com',
  },

  // {
  //   id: 9,
  //   title: 'Skype : ',
  //   description: 'hamza.ahmad',
  // },

  {
    id: 10,
    title: 'Languages: ',
    description: 'Urdu,Punjabi, English',
  },
];

export const stats = [
  {
    id: 1,
    no: '2.5+',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '10+',
    title: 'Completed <br /> Projects',
  },

  // {
  //   id: 3,
  //   no: '2+',
  //   title: 'Happy <br /> Customers',
  // },

  // {
  //   id: 4,
  //   no: '53+',
  //   title: ' Awards <br /> Won',
  // },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2024 - PRESENT',
    title: 'Web & Mobile App Developer at<span> Techloset Solutions </span>',
    desc: 'Working as a Web & Mobile App Developer, building scalable applications using React, React Native, Node.js, and MongoDB, while developing responsive interfaces and optimizing performance for seamless user experiences.',
  },
  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2023 - 2024',
    title: 'React Native App Developer <span> University Project </span>',
    desc: 'Creating cross-platform mobile applications for academic projects with React Native, ensuring seamless performance on both iOS and Android devices.',
  },
  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2021 - 2022',
    title: 'Frontend Developer <span> Academic Work </span>',
    desc: 'Designed and developed user-friendly interfaces using React, focusing on performance, accessibility, and user-centric design.',
  },



  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2025',
    title: 'Bachelor of Science in Computer Science <span> GC University </span>',
    desc: 'Completed a degree in Computer Science with a focus on web and mobile application development, data structures, algorithms, and software engineering principles.',
  },
  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2021',
    title: 'Intermediate in Pre-Engineering <span> Kips College </span>',
    desc: 'Studied core subjects including Mathematics, Physics, and Chemistry, laying the foundation for a career in computer science and technology.',
  },
  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2019',
    title: 'Matriculation in Science <span> Sacred Angels School </span>',
    desc: 'Completed secondary education with a focus on science subjects, developing critical thinking and problem-solving skills.',
  }

];

export const skills = [
  {
    id: 1,
    title: 'HTML',
    percentage: '90',
  },
  {
    id: 2,
    title: 'CSS',
    percentage: '85',
  },
  {
    id: 3,
    title: 'JavaScript',
    percentage: '80',
  },
  {
    id: 4,
    title: 'React.js',
    percentage: '75',
  },
  {
    id: 5,
    title: 'React Native',
    percentage: '70',
  },
  {
    id: 6,
    title: 'Node.js',
    percentage: '80',
  },
  {
    id: 7,
    title: 'Express.js',
    percentage: '78',
  },
  {
    id: 8,
    title: 'MongoDB',
    percentage: '85',
  },
  {
    id: 9,
    title: 'Firebase',
    percentage: '80',
  },
  {
    id: 10,
    title: 'Git & GitHub',
    percentage: '85',
  },
  {
    id: 11,
    title: 'Tailwind',
    percentage: '90',
  },
  {
    id: 12,
    title: 'Redux',
    percentage: '90',
  },

  {
    id: 13,
    title: 'Next.js',
    percentage: '70',
  },
  {
    id: 14,
    title: 'Python',
    percentage: '70',
  },
  {
    id: 15,
    title: 'Machine Learning',
    percentage: '50',
  },
  {
    id: 16,
    title: 'LLM',
    percentage: '80',
  },




];


// Your public GitHub profile — used for the "View all on GitHub" call to action.
export const githubProfile = 'https://github.com/hamzaahmad3006';

// Category filter definitions used by the Portfolio page
export const portfolioCategories = [
  { id: 'all', label: 'All Work' },
  { id: 'ai', label: 'AI / LLM' },
  { id: 'web', label: 'Web Apps' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'design', label: 'UI Design' },
];

// Tip: add a `repo: 'https://github.com/you/project'` field to any project
// below and a "Code" button will automatically appear on its card + modal.
export const portfolio = [
  {
    id: 1,
    img: Work10,
    title: 'AI Code Reviewer',
    type: 'AI Agent',
    category: 'ai',
    featured: true,
    description:
      'An AI-powered code review agent that analyses pull requests, flags bugs, and suggests fixes in real time using large language models.',
    tags: ['Next.js', 'LLM', 'OpenAI', 'Tailwind'],
    link: 'https://smart-code-reviewer-agent.vercel.app/',
    repo: null,
  },
  {
    id: 2,
    img: Work9,
    title: 'Project Management Dashboard',
    type: 'SaaS Dashboard',
    category: 'web',
    featured: true,
    description:
      'A full-featured Trello-style project management board with drag-and-drop tasks, boards, and real-time collaboration.',
    tags: ['React', 'Redux', 'Firebase', 'DnD'],
    link: 'https://project-management-system-two.vercel.app/',
  },
  {
    id: 3,
    img: Work8,
    title: 'Podcast Streaming App',
    type: 'Mobile App',
    category: 'mobile',
    featured: true,
    description:
      'A cross-platform podcast application with audio streaming, playlists, and offline downloads built for iOS and Android.',
    tags: ['React Native', 'Expo', 'Firebase'],
    link: 'https://drive.google.com/drive/u/1/folders/1uf_zRWTLdDT7J26SxM5-dFLM4PjWgdlj',
  },
  {
    id: 4,
    img: Work7,
    title: 'Dynamic E-Commerce Store',
    type: 'E-Commerce',
    category: 'web',
    featured: true,
    description:
      'A modern e-commerce storefront with dynamic product pages, cart management, and a responsive checkout flow.',
    tags: ['Next.js', 'Tailwind', 'Stripe'],
    link: 'https://master-dynamic-ecommerce.vercel.app/',
  },
  {
    id: 5,
    img: Work1,
    title: 'Krist Fashion Store',
    type: 'E-Commerce',
    category: 'web',
    description:
      'A fashion e-commerce web app featuring product filtering, wishlists, and Firebase-backed authentication.',
    tags: ['React', 'Firebase', 'Redux'],
    link: 'https://krist-eccommerce.web.app/',
  },
  {
    id: 6,
    img: Work2,
    title: 'Collaborative Notes',
    type: 'Productivity',
    category: 'web',
    description:
      'A real-time collaborative note-taking application with shared workspaces and instant syncing across devices.',
    tags: ['React', 'Firebase'],
    link: 'https://my-store-f723e.firebaseapp.com/',
  },
  {
    id: 7,
    img: Work3,
    title: 'Todo Task Manager',
    type: 'Productivity',
    category: 'web',
    description:
      'A clean and intuitive todo application to manage daily tasks with persistence and status tracking.',
    tags: ['React', 'Firebase'],
    link: 'https://new-todo-app-bb280.web.app/',
  },
  {
    id: 8,
    img: Work4,
    title: 'Startup Landing Page',
    type: 'Landing Page',
    category: 'design',
    description:
      'A pixel-perfect, responsive marketing landing page with smooth scroll animations and modern layout.',
    tags: ['HTML', 'CSS', 'Bootstrap'],
    link: null,
  },
  {
    id: 9,
    img: Work5,
    title: 'Login UI Concept',
    type: 'UI Design',
    category: 'design',
    description:
      'A polished authentication UI concept exploring clean form design, validation states, and micro-interactions.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: null,
  },
  {
    id: 10,
    img: Work6,
    title: 'Agency Website',
    type: 'Website',
    category: 'design',
    description:
      'A creative agency website concept with a bold hero section, service cards, and a responsive grid layout.',
    tags: ['HTML', 'CSS', 'Bootstrap'],
    link: null,
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
