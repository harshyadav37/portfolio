"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    // Extract the section ID from href (e.g., "#home" -> "home")
    const sectionId = href.replace("#", "");
    const element = document.getElementById(sectionId);
    
    if (element) {
      // Smooth scroll to the element
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    } else if (sectionId === "home") {
      // Fallback for home
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full md:w-auto"
    >
      {/* Glass Container */}
      <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 shadow-[0_10px_40px_rgba(0,0,0,0.5)] rounded-full px-5 py-3">
        {/* Noise Overlay */}
        <div className="absolute inset-0 rounded-full bg-noise opacity-10 pointer-events-none" />

        <div className="relative flex items-center justify-between gap-6">
          {/* Logo */}
          <span className="text-white font-semibold text-lg tracking-wide">
            Harsh
          </span>

          {/* Desktop Nav - Only show on large screens */}
          <div className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                whileHover={{ y: -2 }}
                className="px-4 py-2 rounded-full text-slate-200 hover:text-black hover:bg-white transition-all duration-300 cursor-pointer text-sm"
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* Mobile Toggle - Show on medium and smaller screens */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Show on medium and smaller screens */}
      <motion.div
        initial={false}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.3 }}
        className="lg:hidden mt-4 backdrop-blur-xl bg-black/50 border border-white/10 rounded-2xl overflow-hidden"
      >
        <div className="flex flex-col items-center gap-4 py-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-slate-200 hover:text-white text-lg transition cursor-pointer"
            >
              {item.label}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}
