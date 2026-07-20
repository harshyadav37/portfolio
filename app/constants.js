import mongodbLogo from '../public/assets/mongodb.png';
import mysqlLogo from '../public/assets/mysql.png';
import nodejsLogo from '../public/assets/nodejs.png';   
import firebaseLogo from '../public/assets/firebase.png';
import htmlLogo from '../public/assets/html.png';
import cssLogo from '../public/assets/css.png';
import sassLogo from '../public/assets/sass.png'; 
import cLogo from '../public/assets/c.png';
import cppLogo from '../public/assets/cpp.png';
import javaLogo from '../public/assets/java.png';
import pythonLogo from '../public/assets/python.png';
import typescriptLogo from '../public/assets/typescript.png';
import gitLogo from '../public/assets/git.png';
import githubLogo from '../public/assets/github.png';
import vscodeLogo from '../public/assets/vscode.png';
import postmanLogo from '../public/assets/postman.png';
import mcLogo from '../public/assets/mc.png';
import figmaLogo from '../public/assets/figma.png';
import netlifyLogo from '../public/assets/netlify.png';
import vercelLogo from '../public/assets/vercel.png';
import postgreLogo from '../public/assets/postgre.png';
import csharpLogo from '../public/assets/csharp.png';
import javascriptLogo from '../public/assets/javascript.png';
import reactjsLogo from '../public/assets/reactjs.png';
import angularLogo from '../public/assets/angular.png';
import reduxLogo from '../public/assets/redux.png';
import nextjsLogo from '../public/assets/nextjs.png';
import tailwindcssLogo from '../public/assets/tailwindcss.png';
import gsapLogo from '../public/assets/gsap.png';
import materialuiLogo from '../public/assets/materialui.png';
import bootstrapLogo from '../public/assets/bootstrap.png';
import springbootLogo from '../public/assets/springboot.png';
import expressjsLogo from '../public/assets/express.png';


// project
import ordiio from '../public/assets/ordiio.png';
import travelAI from "../public/assets/TravelAI.png";
import fitzone from "../public/assets/Fitzone.png";
import ethica from "../public/assets/Ethica.png";
import croose from "../public/assets/Croose.png";

// eduction
import jnvlogo from "../public/assets/jnv_logo.png";
import ipslogo from "../public/assets/ips_logo.jpg"



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

//  jhfhgfkkmnxbkjlnjkbl
  export const education = [
    {
      id: 0,
      img: ipslogo,
      school: "IPS Academy, Indore",
      date: "Sept 2023 - July 2027",
      grade: "Final Year",
      desc: "Pursuing a B.Tech in Computer Science & Engineering with a specialization in Artificial Intelligence and Machine Learning. Alongside academics, I am a Full-Stack Developer with experience in building scalable web applications using modern technologies, focusing on creating user-friendly, efficient, and innovative digital solutions.",
      degree: "Bachelor of Technology (B.Tech) in Computer Science & Engineering (AI & ML)",
    },
    {
      id: 1,
      img: jnvlogo,
      school: "Jawahar Navodaya Vidyalaya, Khandwa",
      date: "Sept 2022 - Aug 2023",
      grade: "75.2%",
      desc: "I completed my class 12 education from Jawahar Navodaya Vidyalaya, Khandwa, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "XII - with (Computer Science)",
    },
    {
      id: 2,
      img: jnvlogo,
      school: "Jawahar Navodaya Vidyalaya, Khandwa",
      date: "Apr 2020 - March 2021",
      grade: "85%",
      desc: "I completed my class 12 education from Jawahar Navodaya Vidyalaya, Khandwa, under the CBSE board, where I studied Science with Computer.",
      degree: "(X) - CBSE ",
    },
   
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Ordiio",
      description:  "**Ordiio** is an AI-powered music licensing platform that helps creators discover, customize, and license high-quality music for films, advertisements, podcasts, and digital content. It offers intelligent music search, streamlined licensing, and a seamless experience for finding the perfect soundtrack while ensuring copyright compliance and commercial usage rights." ,
      image: ordiio,
      tags: ["HTML", "CSS", "JavaScript", "Next.js", "API"],
      github: "https://github.com/ankushsss/Ordio_App",
      webapp: "https://www.ordiio.com/",
    },
    {
      id: 1,
      title: "Ethica",
      description:"**Ethica** is a privacy-first social networking platform that enables users to connect through communities, messaging, video calls, and personalized feeds. It focuses on user privacy, secure interactions, ethical content recommendations, and a smooth experience across all devices.",
      image: ethica,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/harshyadav37/Ethica",
      webapp: "https://ethica-01.onrender.com/",
    },
    {
      id: 2,
      title: "FitZone",
      description:"**FitZone** is a fitness-focused web application that provides personalized workout plans, nutrition guidance, and progress tracking. It aims to make fitness accessible and enjoyable for users of all levels.",
      image: fitzone,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      github: "https://github.com/harshyadav37/Gym-frontend",
      webapp: "https://gym-frontend-a4io.onrender.com/",
    },
    {
      id: 3,
      title: "TravelAI",
      description:"**TravelAI** is an AI-powered travel platform that helps users discover destinations, create personalized itineraries, and book travel experiences with ease. It offers smart recommendations, secure payments, transparent pricing, and multilingual support for a seamless travel planning experience.",
      image: travelAI,
      tags: ["HTML", "CSS", "JavaScript", "Next.js", "API","firebase","nodejs","express"],
      github: "https://github.com/harshyadav37/TravelAi-frontend",
      webapp: "https://github.com/harshyadav37/TravelAi-frontend",
    },
    {
      id: 4,
      title: "Croose",
      description:"**Croose** is a business management platform that leverages WhatsApp to help businesses manage customer interactions, automate communication, track leads, and streamline operations through a centralized and user-friendly interface.",
      image: croose,
      tags: ["JavaScript", "Next.js", "tailwindcss","API", "HTML", "CSS"],
      github: "https://github.com/ankushsss/Croose_app",
      webapp: "https://croose-app.vercel.app/",
    },
   
  ];  