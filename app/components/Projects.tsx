'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from './ui/Card';
import { Badge, BadgeGroup } from './ui/Badge';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with real-time inventory management, payment processing, and advanced analytics.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=500&h=300&fit=crop',
    technologies: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Stripe'],
    link: '#',
    github: 'https://github.com',
  },
  {
    title: 'SaaS Dashboard',
    description: 'Real-time analytics dashboard for SaaS businesses with interactive charts, user management, and API integrations.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
    technologies: ['React', 'Node.js', 'MongoDB', 'Chart.js', 'WebSockets'],
    link: '#',
    github: 'https://github.com',
  },
  {
    title: 'AI Content Generator',
    description: 'AI-powered tool that generates high-quality content using GPT-4. Features user authentication, subscription management, and credits system.',
    image: 'https://images.unsplash.com/photo-1677442d019cecf8f69a4a1e7ea5e3c5?w=500&h=300&fit=crop',
    technologies: ['Next.js', 'OpenAI API', 'Tailwind CSS', 'Prisma', 'Firebase'],
    link: '#',
    github: 'https://github.com',
  },
  {
    title: 'Social Media App',
    description: 'Full-stack social platform with real-time messaging, notifications, and media sharing capabilities.',
    image: 'https://images.unsplash.com/photo-1611606063065-cb49f5421ae0?w=500&h=300&fit=crop',
    technologies: ['React Native', 'Firebase', 'Node.js', 'Express', 'Socket.io'],
    link: '#',
    github: 'https://github.com',
  },
  {
    title: 'Project Management Tool',
    description: 'Collaborative project management tool with real-time updates, task automation, and team collaboration features.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
    technologies: ['Vue.js', 'Django', 'PostgreSQL', 'Redis', 'Docker'],
    link: '#',
    github: 'https://github.com',
  },
  {
    title: 'Weather App',
    description: 'Beautiful weather application with real-time forecasts, location-based services, and interactive maps.',
    image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=500&h=300&fit=crop',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'OpenWeather API'],
    link: '#',
    github: 'https://github.com',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Showcasing my best work across different technologies and industries
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="group h-full"
            >
              <Card hover className="h-full flex flex-col overflow-hidden">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden rounded-lg mb-6 bg-slate-800">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <motion.a
                      href={project.link}
                      whileHover={{ scale: 1.1 }}
                      className="p-3 bg-purple-600 hover:bg-purple-700 rounded-full text-white transition-colors"
                      aria-label="View project"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="p-3 bg-slate-700 hover:bg-slate-600 rounded-full text-white transition-colors"
                      aria-label="View code"
                    >
                      <Github size={20} />
                    </motion.a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-slate-100 mb-3">{project.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <BadgeGroup items={project.technologies} variant="primary" />
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <motion.a
                      href={project.link}
                      whileHover={{ x: 5 }}
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Demo <ArrowRight size={16} />
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 5 }}
                      className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      Code <ArrowRight size={16} />
                    </motion.a>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <motion.a
            href="/projects"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-purple-500/50 hover:border-purple-400 text-purple-400 hover:text-purple-300 font-medium transition-all duration-300"
          >
            View All Projects <ArrowRight size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
