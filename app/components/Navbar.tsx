"use client";
import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const handleMenuItemClick = (sectionId:string) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isScrolled ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="text-white py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-semibold cursor-pointer">
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">Harsh</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">Yadav</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#8245ec] ${
                activeSection === item.id ? "text-[#8245ec]" : ""
              }`}
            >
              <button className="cursor-pointer" onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/harshyadav37"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/harsh-yadav-a8a90826b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-white ${
                  activeSection === item.id ? "text-[#8245ec]" : ""
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex space-x-4">
              <a
                href="https://github.com/codingmastr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/tarun-kaushik-553b441a4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;























// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { Menu, X } from "lucide-react";
// import { usePathname } from "next/navigation";

// const navItems = [
//   { label: "Home", href: "/" },
//   { label: "About", href: "/about" },
//   { label: "Projects", href: "/projects" },
//   { label: "Skills", href: "/experience" },
//   { label: "Contact", href: "/contact" },
// ];

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const pathname = usePathname();

//   return (
//     <motion.nav
//       initial={{ y: -80, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       className="w-full md:w-auto"
//     >
//       {/* Glass Container */}
//       <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 shadow-[0_10px_40px_rgba(0,0,0,0.5)] rounded-full px-5 py-3">
//         {/* Noise Overlay */}
//         <div className="absolute inset-0 rounded-full bg-noise opacity-10 pointer-events-none" />

//         <div className="relative flex items-center justify-between gap-6">
//           {/* Logo */}
//           <span className="text-white font-semibold text-lg tracking-wide">
//             Harsh
//           </span>

//           {/* Desktop Nav - Only show on large screens */}
//           <div className="hidden lg:flex items-center gap-2">
//             {navItems.map((item) => {
//               const isActive = pathname === item.href;
//               return (
//                 <motion.div
//                   key={item.href}
//                   whileHover={{ y: -2 }}
//                   className="cursor-pointer"
//                 >
//                   <Link
//                     href={item.href}
//                     className={`px-4 py-2 rounded-full transition-all duration-300 text-sm ${
//                       isActive
//                         ? "bg-white text-black font-semibold"
//                         : "text-slate-200 hover:text-black hover:bg-white"
//                     }`}
//                   >
//                     {item.label}
//                   </Link>
//                 </motion.div>
//               );
//             })}
//           </div>

//           {/* Mobile Toggle - Show on medium and smaller screens */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="lg:hidden text-white"
//             aria-label="Toggle menu"
//           >
//             {isOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu - Show on medium and smaller screens */}
//       <motion.div
//         initial={false}
//         animate={{
//           opacity: isOpen ? 1 : 0,
//           height: isOpen ? "auto" : 0,
//         }}
//         transition={{ duration: 0.3 }}
//         className="lg:hidden mt-4 backdrop-blur-xl bg-black/50 border border-white/10 rounded-2xl overflow-hidden"
//       >
//         <div className="flex flex-col items-center gap-4 py-6">
//           {navItems.map((item) => {
//             const isActive = pathname === item.href;
//             return (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 onClick={() => setIsOpen(false)}
//                 className={`text-lg transition cursor-pointer ${
//                   isActive
//                     ? "text-white font-semibold"
//                     : "text-slate-200 hover:text-white"
//                 }`}
//               >
//                 {item.label}
//               </Link>
//             );
//           })}
//         </div>
//       </motion.div>
//     </motion.nav>
//   );
// }
