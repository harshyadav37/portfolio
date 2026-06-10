// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';
// import { Card } from './ui/Card';

// import { Github, ExternalLink, ArrowRight } from 'lucide-react';

// const projects = [
//   {
//     title: 'Fitzone',
//     description: 'A full-featured e-commerce platform with real-time inventory management, payment processing, and advanced analytics.',
//     image: '/assets/gym.png',
//     technologies: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Stripe'],
//     link: '#',
//     github: 'https://github.com',
//   },
//   {
//     title: 'Croose',
//     description: 'Real-time analytics dashboard for SaaS businesses with interactive charts, user management, and API integrations.',
//     image: '/assets/Croose.png',
//     technologies: ['React', 'Node.js', 'MongoDB', 'Chart.js', 'WebSockets'],
//     link: '#',
//     github: 'https://github.com',
//   },
//   {
//     title: 'Ordiio',
//     description: 'AI-powered tool that generates high-quality content using GPT-4. Features user authentication, subscription management, and credits system.',
//     image: '/assets/Ordiio.png',
//     technologies: ['Next.js', 'OpenAI API', 'Tailwind CSS', 'Prisma', 'Firebase'],
//     link: '#',
//     github: 'https://github.com',
//   },
//   {
//     title: 'Social Media App',
//     description: 'Full-stack social platform with real-time messaging, notifications, and media sharing capabilities.',
//     image: 'https://images.unsplash.com/photo-1611606063065-cb49f5421ae0?w=500&h=300&fit=crop',
//     technologies: ['React Native', 'Firebase', 'Node.js', 'Express', 'Socket.io'],
//     link: '#',
//     github: 'https://github.com',
//   },
//   {
//     title: 'Project Management Tool',
//     description: 'Collaborative project management tool with real-time updates, task automation, and team collaboration features.',
//     image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
//     technologies: ['Vue.js', 'Django', 'PostgreSQL', 'Redis', 'Docker'],
//     link: '#',
//     github: 'https://github.com',
//   },
//   {
//     title: 'Weather App',
//     description: 'Beautiful weather application with real-time forecasts, location-based services, and interactive maps.',
//     image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=500&h=300&fit=crop',
//     technologies: ['React', 'TypeScript', 'Tailwind CSS', 'OpenWeather API'],
//     link: '#',
//     github: 'https://github.com',
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

// export const Projects: React.FC = () => {
//   return (
//     <section id="projects" className="section-padding relative overflow-hidden">
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
//             <span className="gradient-text">Featured Projects</span>
//           </h2>
//           <p className="text-slate-400 text-lg max-w-2xl mx-auto">
//             Showcasing my best work across different technologies and industries
//           </p>
//         </motion.div>

//         {/* Projects Grid */}
//         <motion.div
//           className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >
//           {projects.map((project, index) => (
//             <motion.div
//               key={project.title}
//               variants={itemVariants}
//               className="group h-full"
//             >
//               <Card hover className="h-full flex flex-col overflow-hidden">
//                 {/* Project Image */}
//                 <div className="relative h-48 overflow-hidden rounded-lg mb-6 bg-slate-800">
//                   <motion.img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-full object-cover"
//                     whileHover={{ scale: 1.1 }}
//                     transition={{ duration: 0.5 }}
//                   />
//                   <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
//                     <motion.a
//                       href={project.link}
//                       whileHover={{ scale: 1.1 }}
//                       className="p-3 bg-purple-600 hover:bg-purple-700 rounded-full text-white transition-colors"
//                       aria-label="View project"
//                     >
//                       <ExternalLink size={20} />
//                     </motion.a>
//                     <motion.a
//                       href={project.github}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       whileHover={{ scale: 1.1 }}
//                       className="p-3 bg-slate-700 hover:bg-slate-600 rounded-full text-white transition-colors"
//                       aria-label="View code"
//                     >
//                       <Github size={20} />
//                     </motion.a>
//                   </div>
//                 </div>

//                 {/* Project Content */}
//                 <div className="flex-1 flex flex-col">
//                   <h3 className="text-xl font-bold text-slate-100 mb-3">{project.title}</h3>
//                   <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
//                     {project.description}
//                   </p>

//                   {/* Technologies */}
//                   <div className="mb-6">
//                     {/* <BadgeGroup items={project.technologies} variant="primary" /> */}
//                   </div>

//                   {/* Links */}
//                   <div className="flex gap-3">
//                     <motion.a
//                       href={project.link}
//                       whileHover={{ x: 5 }}
//                       className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
//                     >
//                       Demo <ArrowRight size={16} />
//                     </motion.a>
//                     <motion.a
//                       href={project.github}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       whileHover={{ x: 5 }}
//                       className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
//                     >
//                       Code <ArrowRight size={16} />
//                     </motion.a>
//                   </div>
//                 </div>
//               </Card>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* View All Projects CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           className="text-center mt-16"
//         >
//           <motion.a
//             href="/projects"
//             whileHover={{ scale: 1.05 }}
//             className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-purple-500/50 hover:border-purple-400 text-purple-400 hover:text-purple-300 font-medium transition-all duration-300"
//           >
//             View All Projects <ArrowRight size={20} />
//           </motion.a>
//         </motion.div>
//       </div>
//     </section>
//   );
// };





"use client";
import React, { useState } from "react";
import { projects } from "../../app/constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="work"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-500 mb-4 pt-4 line-clamp-3">
                {project.description}
              </p>
              <div className="mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Container */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <div className="bg-gray-900 rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl overflow-hidden relative">
            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseModal}
                className="text-white text-3xl font-bold hover:text-purple-500"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col">
              <div className="w-full flex justify-center bg-gray-900 px-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="lg:w-full w-[95%] object-contain rounded-xl shadow-2xl"
                />
              </div>
              <div className="lg:p-8 p-6">
                <h3 className="lg:text-3xl font-bold text-white mb-4 text-md">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-400 mb-6 lg:text-base text-xs">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-gray-800 hover:bg-purple-800 text-gray-400 lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-purple-600 hover:bg-purple-800 text-white lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;