'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart ,Instagram } from 'lucide-react';

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/harshyadav37', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/harsh-yadav-a8a90826b/', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://www.instagram.com/harshyadav89_/', label: 'Instagram' },
  // { icon: Mail, href: 'mailto:hello@example.com', label: 'Email' },
];

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
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

  return (
    <footer className="w-full bg-slate-950 border-t border-white/5">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-12"
      >
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <motion.div variants={itemVariants} className="space-y-3">
            <h3 className="text-2xl font-bold gradient-text">{'<Dev />'}</h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Full-stack developer crafting beautiful digital experiences with modern web technologies.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-slate-100 font-semibold mb-5">Quick Links</h4>
            <nav className="flex flex-col space-y-3">
              {footerLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  whileHover={{ x: 6 }}
                  className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                >
                  → {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-slate-100 font-semibold mb-5">Connect</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-xl bg-white/5 hover:bg-purple-500/20 
                               text-slate-400 hover:text-purple-400 
                               transition-all duration-300"
                    aria-label={link.label}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-slate-400 text-sm text-center md:text-left"
        >
          <p className="flex flex-wrap items-center justify-center gap-2">
            Made with
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="text-red-500"
            >
              <Heart size={16} fill="currentColor" />
            </motion.span>
            and Next.js • © {currentYear}
          </p>

          <a
            href="#top"
            className="hover:text-cyan-400 transition-colors duration-300"
          >
            Back to top ↑
          </a>
        </motion.div>
      </motion.div>
    </footer>
  );
};
