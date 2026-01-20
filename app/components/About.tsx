// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';
// import { BadgeGroup } from './ui/Badge';
// import { Card } from './ui/Card';
// import { Code2, Database, Zap, Globe, Palette, Terminal } from 'lucide-react';

// const skillCategories = [
//   {
//     category: 'Frontend',
//     icon: Palette,
//     skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'React Query'],
//   },
//   {
//     category: 'Backend',
//     icon: Database,
//     skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'GraphQL', 'REST APIs'],
//   },
//   {
//     category: 'Tools & DevOps',
//     icon: Terminal,
//     skills: ['Git', 'Docker', 'GitHub Actions', 'Vercel', 'AWS', 'VSCode'],
//   },
//   {
//     category: 'Performance',
//     icon: Zap,
//     skills: ['Web Vitals', 'SEO', 'Optimization', 'Caching', 'Testing', 'CI/CD'],
//   },
// ];

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.5 },
//   },
// };

// export const About: React.FC = () => {
//   return (
//     <section id="about" className="section-padding relative overflow-hidden">
//       <div className="container-custom">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="mb-16 text-center"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">
//             <span className="gradient-text">About Me</span>
//           </h2>
//           <p className="text-slate-400 text-lg max-w-2xl mx-auto">
//             Full-stack developer with 5+ years of experience building scalable web applications
//           </p>
//         </motion.div>

//         {/* About Content */}
//         <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
//           {/* Left Content */}
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="space-y-6"
//           >
//             <motion.div variants={itemVariants}>
//               <h3 className="text-2xl font-bold text-slate-100 mb-4">Who I Am</h3>
//               <p className="text-slate-300 leading-relaxed">
//                 I'm a passionate full-stack developer dedicated to creating beautiful, performant, and user-centric web experiences. With expertise in modern JavaScript frameworks and cloud technologies, I help startups and enterprises build scalable solutions.
//               </p>
//             </motion.div>

//             <motion.div variants={itemVariants}>
//               <h3 className="text-2xl font-bold text-slate-100 mb-4">What I Do</h3>
//               <p className="text-slate-300 leading-relaxed">
//                 I specialize in architecting and developing end-to-end web applications. From responsive UI design to API development, database optimization, and deployment strategies—I handle it all with a focus on clean code and best practices.
//               </p>
//             </motion.div>

//             <motion.div variants={itemVariants}>
//               <h3 className="text-2xl font-bold text-slate-100 mb-4">My Passion</h3>
//               <p className="text-slate-300 leading-relaxed">
//                 Solving complex problems through elegant code. I'm constantly learning new technologies and best practices to stay at the forefront of web development.
//               </p>
//             </motion.div>
//           </motion.div>

//           {/* Right Content - Stats or Image */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="grid grid-cols-2 gap-6"
//           >
//             {[
//               { label: 'Projects', value: '50+' },
//               { label: 'Experience', value: '5+ yrs' },
//               { label: 'Clients', value: '30+' },
//               { label: 'Technologies', value: '25+' },
//             ].map((stat, index) => (
//               <Card key={index} delay={index * 0.1} className="text-center">
//                 <h4 className="text-4xl font-bold gradient-text mb-2">{stat.value}</h4>
//                 <p className="text-slate-400 text-sm">{stat.label}</p>
//               </Card>
//             ))}
//           </motion.div>
//         </div>

//         {/* Skills Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <h3 className="text-3xl font-bold mb-12 text-center">
//             <span className="gradient-text">My Skills</span>
//           </h3>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {skillCategories.map((category, index) => {
//               const Icon = category.icon;
//               return (
//                 <Card
//                   key={category.category}
//                   delay={index * 0.1}
//                   className="hover:border-purple-500/50"
//                 >
//                   <div className="flex items-center gap-3 mb-6">
//                     <div className="text-cyan-400">
//                       <Icon size={24} />
//                     </div>
//                     <h4 className="font-bold text-lg text-slate-100">{category.category}</h4>
//                   </div>
//                   <BadgeGroup items={category.skills} variant="secondary" />
//                 </Card>
//               );
//             })}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };


"use client";

import React from "react";
import Aboutoage from "./ui/Aboutoage";
import TracingBeamDemo from "./ui/Tracingbeam";

const About = () => {
  return (
    <section id="about">
      <TracingBeamDemo />
      <Aboutoage />
    </section>
  );
};

export default About;

