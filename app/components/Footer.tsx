'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com',
    label: 'GitHub',
  },
  {
    icon: Linkedin,
    href: 'https://linkedin.com',
    label: 'LinkedIn',
  },
  {
    icon: Twitter,
    href: 'https://twitter.com',
    label: 'Twitter',
  },
  {
    icon: Mail,
    href: 'mailto:hello@example.com',
    label: 'Email',
  },
];

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <footer className="relative bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950 border-t border-white/10">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5"
          animate={{
            x: [0, 30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5"
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="container-custom relative z-10 py-16 md:py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Top Section */}
          <div className="grid md:grid-cols-3 gap-12">
            {/* Brand */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold gradient-text mb-3">{'<Dev />'}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Full-stack developer crafting beautiful digital experiences with modern web technologies.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-slate-100 font-semibold mb-6">Quick Links</h4>
              <nav className="space-y-3">
                {footerLinks.map((link) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    whileHover={{ x: 4 }}
                    className="block text-slate-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    → {link.label}
                  </motion.a>
                ))}
              </nav>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-slate-100 font-semibold mb-6">Connect</h4>
              <div className="flex gap-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 rounded-lg bg-white/5 hover:bg-purple-500/20 text-slate-400 hover:text-purple-400 transition-all duration-300"
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
            className="flex flex-col md:flex-row items-center justify-between gap-4 text-slate-400 text-sm"
          >
            <p className="flex items-center gap-2">
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
              and Next.js • © {currentYear} All rights reserved.
            </p>
            <a
              href="#top"
              className="inline-flex items-center gap-2 hover:text-cyan-400 transition-colors duration-300"
            >
              Back to top ↑
            </a>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};
