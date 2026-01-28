"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/experience" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

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
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <motion.div
                  key={item.href}
                  whileHover={{ y: -2 }}
                  className="cursor-pointer"
                >
                  <Link
                    href={item.href}
                    className={`px-4 py-2 rounded-full transition-all duration-300 text-sm ${
                      isActive
                        ? "bg-white text-black font-semibold"
                        : "text-slate-200 hover:text-black hover:bg-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              );
            })}
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
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`text-lg transition cursor-pointer ${
                  isActive
                    ? "text-white font-semibold"
                    : "text-slate-200 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </motion.div>
    </motion.nav>
  );
}
