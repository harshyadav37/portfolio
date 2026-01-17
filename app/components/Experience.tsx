import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';

interface Skill {
  name: string;
  proficiency: number;
  color: string;
  category: string;
  energySpeed: number;
  energySize: number;
  learned: string;
  usedIn: string;
  story: string;
  icon: string;
}

interface RootSkill {
  name: string;
  proficiency: number;
  learned: string;
  story: string;
  icon: string;
}

interface TooltipPosition {
  x: number;
  y: number;
  nodeX: number;
  nodeY: number;
  mouseX?: number;
  mouseY?: number;
}

interface ClickTooltip {
  skill: Skill | RootSkill;
  x: number;
  y: number;
  nodeX: number;
  nodeY: number;
}

const SkillsTree = () => {
  const [hoveredSkill, setHoveredSkill] = useState<Skill | RootSkill | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<Skill | RootSkill | null>(null);
  const [tooltipPos, setTooltipPos] = useState<TooltipPosition>({ x: 0, y: 0, nodeX: 0, nodeY: 0 });
  const [clickTooltip, setClickTooltip] = useState<ClickTooltip | null>(null);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!hoveredSkill || !svgRef.current) return;
    
    const svgRect = svgRef.current.getBoundingClientRect();
    const mouseX = e.clientX - svgRect.left;
    const mouseY = e.clientY - svgRect.top;
    
    setTooltipPos(prev => ({
      ...prev,
      x: e.clientX,
      y: e.clientY,
      mouseX,
      mouseY
    }));
  };

  const handleSkillMouseEnter = (skill: Skill | RootSkill, e: React.MouseEvent<SVGCircleElement>) => {
    if (!svgRef.current) return;
    
    const svgRect = svgRef.current.getBoundingClientRect();
    const nodeX = e.clientX - svgRect.left;
    const nodeY = e.clientY - svgRect.top;
    
    setHoveredSkill(skill);
    setTooltipPos({
      x: e.clientX,
      y: e.clientY,
      nodeX,
      nodeY
    });
    setTooltipVisible(true);
  };

  const handleSkillMouseLeave = () => {
    setTooltipVisible(false);
    setTimeout(() => {
      if (!tooltipVisible) {
        setHoveredSkill(null);
      }
    }, 150);
  };

  const handleSkillClick = (skill: Skill | RootSkill, e: React.MouseEvent<SVGCircleElement>) => {
    if (!svgRef.current) return;
    
    const svgRect = svgRef.current.getBoundingClientRect();
    const nodeX = e.clientX - svgRect.left;
    const nodeY = e.clientY - svgRect.top;
    
    setSelectedSkill(skill);
    setClickTooltip({
      skill: skill,
      x: e.clientX,
      y: e.clientY,
      nodeX,
      nodeY
    });
    
    setTimeout(() => {
      setClickTooltip(null);
    }, 2000);
  };

  const skills: Skill[] = [
    { 
      name: 'React', 
      proficiency: 92, 
      color: '#60a5fa', 
      category: 'frontend',
      energySpeed: 2.5,
      energySize: 3,
      learned: '2021',
      usedIn: 'E-commerce Platform, Admin Dashboard',
      story: 'Built 15+ production apps, mastered hooks and performance optimization',
      icon: '⚛️'
    },
    { 
      name: 'Next.js', 
      proficiency: 88, 
      color: '#3b82f6', 
      category: 'frontend',
      energySpeed: 2.8,
      energySize: 3,
      learned: '2022',
      usedIn: 'Portfolio Sites, SaaS Applications',
      story: 'Specialized in SSR/SSG, optimized Core Web Vitals for multiple projects',
      icon: '▲'
    },
    { 
      name: 'TypeScript', 
      proficiency: 90, 
      color: '#2563eb', 
      category: 'frontend',
      energySpeed: 3,
      energySize: 2.5,
      learned: '2021',
      usedIn: 'Enterprise Applications',
      story: 'Reduced runtime errors by 70% in large codebases with strict typing',
      icon: 'TS'
    },
    { 
      name: 'Tailwind', 
      proficiency: 87, 
      color: '#06b6d4', 
      category: 'frontend',
      energySpeed: 3.5,
      energySize: 2,
      learned: '2022',
      usedIn: 'Rapid UI Development',
      story: 'Created custom design systems, reduced CSS bundle size by 60%',
      icon: '🎨'
    },
    { 
      name: 'Node.js', 
      proficiency: 87, 
      color: '#10b981', 
      category: 'backend',
      energySpeed: 4,
      energySize: 4,
      learned: '2020',
      usedIn: 'REST APIs, Real-time Services',
      story: 'Built scalable microservices handling 10k+ concurrent users',
      icon: '🟢'
    },
    { 
      name: 'Express', 
      proficiency: 85, 
      color: '#059669', 
      category: 'backend',
      energySpeed: 4.2,
      energySize: 4,
      learned: '2020',
      usedIn: 'Backend Services',
      story: 'Developed 20+ APIs with custom middleware and authentication',
      icon: '🚂'
    },
    { 
      name: 'MongoDB', 
      proficiency: 86, 
      color: '#14b8a6', 
      category: 'backend',
      energySpeed: 4.5,
      energySize: 3.5,
      learned: '2020',
      usedIn: 'Document Storage, Analytics',
      story: 'Optimized queries, reduced response time from 2s to 200ms',
      icon: '🍃'
    },
    { 
      name: 'PostgreSQL', 
      proficiency: 83, 
      color: '#0d9488', 
      category: 'backend',
      energySpeed: 4.3,
      energySize: 3.5,
      learned: '2021',
      usedIn: 'Relational Data Systems',
      story: 'Designed complex schemas, implemented efficient indexing strategies',
      icon: '🐘'
    },
    { 
      name: 'REST API', 
      proficiency: 90, 
      color: '#f97316', 
      category: 'backend',
      energySpeed: 4,
      energySize: 3,
      learned: '2020',
      usedIn: 'All Backend Projects',
      story: 'Designed RESTful architectures following industry best practices',
      icon: '🔗'
    },
    { 
      name: 'Docker', 
      proficiency: 78, 
      color: '#8b5cf6', 
      category: 'devops',
      energySpeed: 5,
      energySize: 4,
      learned: '2021',
      usedIn: 'Containerization',
      story: 'Containerized 30+ apps, streamlined deployment processes',
      icon: '🐳'
    },
    { 
      name: 'AWS', 
      proficiency: 75, 
      color: '#7c3aed', 
      category: 'devops',
      energySpeed: 5.2,
      energySize: 4,
      learned: '2022',
      usedIn: 'Cloud Infrastructure',
      story: 'Deployed scalable cloud solutions, managed EC2, S3, Lambda',
      icon: '☁️'
    },
    { 
      name: 'CI/CD', 
      proficiency: 76, 
      color: '#a855f7', 
      category: 'devops',
      energySpeed: 4.8,
      energySize: 3.5,
      learned: '2021',
      usedIn: 'Automated Pipelines',
      story: 'Implemented GitHub Actions, reduced deployment time by 80%',
      icon: '⚙️'
    },
    { 
      name: 'Git', 
      proficiency: 88, 
      color: '#ec4899', 
      category: 'devops',
      energySpeed: 3,
      energySize: 2.5,
      learned: '2019',
      usedIn: 'Version Control',
      story: 'Managed complex branching strategies in team environments',
      icon: '📚'
    },
    { 
      name: 'GSAP', 
      proficiency: 82, 
      color: '#db2777', 
      category: 'creative',
      energySpeed: 2,
      energySize: 2.5,
      learned: '2022',
      usedIn: 'Advanced Animations',
      story: 'Created stunning scroll animations and interactive experiences',
      icon: '✨'
    },
    { 
      name: 'Three.js', 
      proficiency: 75, 
      color: '#be185d', 
      category: 'creative',
      energySpeed: 2.2,
      energySize: 3,
      learned: '2023',
      usedIn: '3D Web Experiences',
      story: 'Built immersive 3D product visualizations and interactive demos',
      icon: '🎮'
    },
  ];

  const roots: RootSkill[] = [
    { name: 'HTML', proficiency: 95, learned: '2018', story: 'Foundation of all web projects', icon: '📝' },
    { name: 'CSS', proficiency: 92, learned: '2018', story: 'Mastered layouts, animations, responsive design', icon: '🎨' },
    { name: 'JavaScript', proficiency: 90, learned: '2019', story: 'Core programming language, ES6+ expert', icon: '⚡' },
    { name: 'Data Structures', proficiency: 85, learned: '2019', story: 'Essential for algorithm optimization', icon: '📊' },
    { name: 'Algorithms', proficiency: 83, learned: '2019', story: 'Problem-solving foundation', icon: '🔍' }
  ];

  const getGlowIntensity = (skill: Skill | RootSkill) => {
    if (selectedSkill?.name === skill.name) return 'url(#ultraGlow)';
    if (hoveredSkill?.name === skill.name) return 'url(#strongGlow)';
    return 'url(#glow)';
  };

  const getBranchOpacity = (skill: Skill | RootSkill) => {
    if (selectedSkill) {
      return selectedSkill.name === skill.name ? 1 : 0.3;
    }
    return hoveredSkill?.name === skill.name ? 1 : 0.8;
  };

  const getNodeScale = (skill: Skill | RootSkill) => {
    if (selectedSkill?.name === skill.name) return 1.4;
    if (hoveredSkill?.name === skill.name) return 1.2;
    return 1;
  };

  return (
    <div ref={containerRef} className="min-h-screen relative overflow-hidden" 
         style={{ background: 'linear-gradient(to bottom, #0f172a 0%, #1e293b 50%, #334155 100%)' }}
         onMouseMove={handleMouseMove}
    >
      <div className="max-w-7xl mx-auto px-4 py-2 relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold text-center mb-2 text-white"
          style={{
            textShadow: '0 0 40px rgba(96, 165, 250, 0.8), 0 0 80px rgba(96, 165, 250, 0.4)'
          }}
        >
          Technical Skills
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center text-cyan-300/70 mb-4 text-xs tracking-widest uppercase"
        >
          Hover to Explore • Click for Detailed Stories
        </motion.p>

        <div className="relative w-full flex justify-center">
          <svg
            ref={svgRef}
            width="800"
            height="900"
            viewBox="0 0 800 900"
            className="w-full max-w-3xl"
            onMouseLeave={() => {
              setTooltipVisible(false);
              setTimeout(() => setHoveredSkill(null), 150);
            }}
          >
            <defs>
              {/* Layered glow filters */}
              <filter id="weakGlow">
                <feGaussianBlur stdDeviation="2" result="blur"/>
                <feMerge>
                  <feMergeNode in="blur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>

              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="blur"/>
                <feMerge>
                  <feMergeNode in="blur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>

              <filter id="strongGlow">
                <feGaussianBlur stdDeviation="8" result="blur"/>
                <feMerge>
                  <feMergeNode in="blur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>

              <filter id="ultraGlow">
                <feGaussianBlur stdDeviation="12" result="blur"/>
                <feMerge>
                  <feMergeNode in="blur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>

              {/* Energy flow gradients */}
              {skills.map(skill => (
                <linearGradient key={skill.name} id={`energyGrad-${skill.name}`} x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor={skill.color} stopOpacity="0.3"/>
                  <stop offset="50%" stopColor={skill.color} stopOpacity="0.7"/>
                  <stop offset="100%" stopColor={skill.color} stopOpacity="1"/>
                </linearGradient>
              ))}

              <linearGradient id="trunkGlow" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.5"/>
                <stop offset="50%" stopColor="#93c5fd" stopOpacity="0.8"/>
                <stop offset="100%" stopColor="#dbeafe" stopOpacity="1"/>
              </linearGradient>

              <radialGradient id="nodeGlow">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="1"/>
                <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.8"/>
                <stop offset="100%" stopColor="#60a5fa" stopOpacity="0"/>
              </radialGradient>
            </defs>

            {/* Glowing base */}
            <motion.rect
              x="0"
              y="820"
              width="800"
              height="80"
              fill="url(#trunkGlow)"
              opacity="0.3"
            />

            {/* Grid floor */}
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.line
                key={`floor${i}`}
                x1={i * 40}
                y1="820"
                x2={400 + (i - 10) * 60}
                y2="900"
                stroke="#60a5fa"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0.15 }}
                animate={{ 
                  pathLength: 1,
                  opacity: 0.15
                }}
                transition={{ duration: 1.5, delay: i * 0.05 }}
              />
            ))}

            {/* Roots */}
            {roots.map((root, i) => {
              const spacing = 120;
              const startX = 400 - (roots.length - 1) * spacing / 2 + i * spacing;
              
              return (
                <motion.g
                  key={root.name}
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: 1
                  }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  <motion.line
                    x1={startX}
                    y1="820"
                    x2="400"
                    y2="750"
                    stroke="#60a5fa"
                    strokeWidth="3"
                    filter="url(#glow)"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                  />
                  
                  <motion.circle
                    cx={startX}
                    cy="820"
                    r="8"
                    fill="none"
                    stroke="#60a5fa"
                    strokeWidth="2"
                    filter={getGlowIntensity(root)}
                    whileHover={{ scale: 1.5, fill: "#60a5fa" }}
                    onMouseEnter={(e) => handleSkillMouseEnter(root, e)}
                    onMouseLeave={handleSkillMouseLeave}
                    onClick={(e) => handleSkillClick(root, e)}
                    className="cursor-pointer"
                    animate={{
                      opacity: [0.6, 1, 0.6],
                      scale: getNodeScale(root)
                    }}
                    transition={{
                      opacity: { duration: 2 + i * 0.3, repeat: Infinity },
                      scale: { duration: 0.3 }
                    }}
                  />
                  <motion.circle
                    cx={startX}
                    cy="820"
                    r="4"
                    fill="#ffffff"
                    opacity="0.9"
                  />

                  {/* Root skill name text */}
                  <motion.text
                    x={startX}
                    y="850"
                    textAnchor="middle"
                    fill="#dbeafe"
                    fontSize="16"
                    fontWeight="500"
                    filter={getGlowIntensity(root)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: getBranchOpacity(root) }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    className="pointer-events-none select-none"
                  >
                    {root.name}
                  </motion.text>
                </motion.g>
              );
            })}

            {/* Main trunk */}
            <motion.g
              animate={{
                opacity: 1
              }}
            >
              <motion.line
                x1="380"
                y1="750"
                x2="350"
                y2="200"
                stroke="url(#trunkGlow)"
                strokeWidth="8"
                strokeLinecap="round"
                filter="url(#strongGlow)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1, ease: "easeOut" }}
              />
              
              <motion.line
                x1="420"
                y1="750"
                x2="450"
                y2="200"
                stroke="url(#trunkGlow)"
                strokeWidth="8"
                strokeLinecap="round"
                filter="url(#strongGlow)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1, ease: "easeOut" }}
              />

              <motion.line
                x1="400"
                y1="750"
                x2="400"
                y2="150"
                stroke="#dbeafe"
                strokeWidth="4"
                strokeLinecap="round"
                filter="url(#glow)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1.2, ease: "easeOut" }}
              />
            </motion.g>

            {/* Energy particles */}
            {skills.map((skill, skillIdx) => {
              const angle = (skillIdx / skills.length) * 360 - 90;
              const angleRad = (angle * Math.PI) / 180;
              const baseRadius = 180;
              const endRadius = 320;
              
              const startX = 400 + Math.cos(angleRad) * baseRadius;
              const startY = 400 + Math.sin(angleRad) * baseRadius;
              const endX = 400 + Math.cos(angleRad) * endRadius;
              const endY = 400 + Math.sin(angleRad) * endRadius;

              const particleCount = skill.category === 'creative' ? 4 : 3;

              return Array.from({ length: particleCount }).map((_, i) => (
                <motion.circle
                  key={`${skill.name}-particle-${i}`}
                  cx={startX}
                  cy={startY}
                  r={skill.energySize}
                  fill={skill.color}
                  filter={getGlowIntensity(skill)}
                  opacity={getBranchOpacity(skill)}
                  animate={{
                    cx: [startX, endX],
                    cy: [startY, endY],
                    opacity: skill.category === 'creative' 
                      ? [0, 0.8, 0.3, 0.9, 0] 
                      : [0, 1, 0.7, 0],
                    scale: skill.category === 'creative'
                      ? [0.5, 1.2, 0.8, 1.5, 0.5]
                      : [0.5, 1.5, 1, 0.5]
                  }}
                  transition={{
                    duration: skill.energySpeed,
                    delay: i * (skill.energySpeed / particleCount) + skillIdx * 0.1,
                    repeat: Infinity,
                    ease: skill.category === 'creative' ? "easeInOut" : "easeOut"
                  }}
                />
              ));
            })}

            {/* Circuit branches */}
            {skills.map((skill, idx) => {
              const angle = (idx / skills.length) * 360 - 90;
              const angleRad = (angle * Math.PI) / 180;
              const baseRadius = 180;
              const endRadius = 320;
              
              const startX = 400 + Math.cos(angleRad) * baseRadius;
              const startY = 400 + Math.sin(angleRad) * baseRadius;
              const endX = 400 + Math.cos(angleRad) * endRadius;
              const endY = 400 + Math.sin(angleRad) * endRadius;
              
              const midX = (startX + endX) / 2;
              const midY = idx % 2 === 0 ? Math.min(startY, endY) : Math.max(startY, endY);

              return (
                <motion.g
                  key={skill.name}
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: getBranchOpacity(skill)
                  }}
                  transition={{ delay: 1.5 + idx * 0.05 }}
                >
                  <motion.path
                    d={`M ${startX} ${startY} L ${midX} ${startY} L ${midX} ${midY} L ${endX} ${midY} L ${endX} ${endY}`}
                    fill="none"
                    stroke={`url(#energyGrad-${skill.name})`}
                    strokeWidth="2.5"
                    filter={getGlowIntensity(skill)}
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 1.5 + idx * 0.05 }}
                  />

                  <motion.circle
                    cx={midX}
                    cy={startY}
                    r="3"
                    fill={skill.color}
                    filter={getGlowIntensity(skill)}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.8 + idx * 0.05 }}
                  />
                  <motion.circle
                    cx={midX}
                    cy={midY}
                    r="3"
                    fill={skill.color}
                    filter={getGlowIntensity(skill)}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.9 + idx * 0.05 }}
                  />
                  <motion.circle
                    cx={endX}
                    cy={midY}
                    r="3"
                    fill={skill.color}
                    filter={getGlowIntensity(skill)}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 2 + idx * 0.05 }}
                  />

                  <motion.g
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 2.2 + idx * 0.05 }}
                  >
                    <motion.circle
                      cx={endX}
                      cy={endY}
                      r="18"
                      fill="url(#nodeGlow)"
                      opacity="0.4"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3]
                      }}
                      transition={{
                        duration: 2 + (idx % 5) * 0.4,
                        repeat: Infinity,
                        delay: idx * 0.15
                      }}
                    />
                    
                    <motion.circle
                      cx={endX}
                      cy={endY}
                      r="12"
                      fill="none"
                      stroke={skill.color}
                      strokeWidth="2.5"
                      filter={getGlowIntensity(skill)}
                      className="cursor-pointer"
                      whileHover={{ scale: 1.3 }}
                      onMouseEnter={(e) => handleSkillMouseEnter(skill, e)}
                      onMouseLeave={handleSkillMouseLeave}
                      onClick={(e) => handleSkillClick(skill, e)}
                      animate={{
                        opacity: [0.7, 1, 0.7],
                        scale: getNodeScale(skill)
                      }}
                      transition={{
                        opacity: { duration: 2 + (idx % 5) * 0.4, repeat: Infinity, delay: idx * 0.15 },
                        scale: { duration: 0.3 }
                      }}
                    />
                    
                    <motion.circle
                      cx={endX}
                      cy={endY}
                      r="5"
                      fill="#ffffff"
                      opacity="0.95"
                      animate={{
                        scale: [1, 1.2, 1]
                      }}
                      transition={{
                        duration: 2 + (idx % 5) * 0.4,
                        repeat: Infinity,
                        delay: idx * 0.15
                      }}
                    />
                  </motion.g>

                  <motion.text
                    x={endX + (Math.cos(angleRad) * 35)}
                    y={endY + (Math.sin(angleRad) * 35)}
                    textAnchor="middle"
                    fill="#dbeafe"
                    fontSize="18"
                    fontWeight="500"
                    filter={getGlowIntensity(skill)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: getBranchOpacity(skill) }}
                    transition={{ delay: 2.5 + idx * 0.05 }}
                    className="pointer-events-none select-none"
                  >
                    {skill.name}
                  </motion.text>
                </motion.g>
              );
            })}

            {/* Central core */}
            <motion.g
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1
              }}
              transition={{ delay: 1.8, duration: 1 }}
            >
              <motion.rect
                x="360"
                y="360"
                width="80"
                height="80"
                fill="none"
                stroke="#60a5fa"
                strokeWidth="3"
                filter="url(#strongGlow)"
                animate={{
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              <motion.rect
                x="370"
                y="370"
                width="60"
                height="60"
                fill="#60a5fa"
                opacity="0.3"
                filter="url(#glow)"
                animate={{
                  opacity: [0.2, 0.5, 0.2],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.circle
                cx="400"
                cy="400"
                r="20"
                fill="#dbeafe"
                filter="url(#strongGlow)"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {[0, 1, 2, 3].map(i => {
                const angle = i * 90;
                const x = 400 + Math.cos((angle - 45) * Math.PI / 180) * 40;
                const y = 400 + Math.sin((angle - 45) * Math.PI / 180) * 40;
                return (
                  <motion.circle
                    key={i}
                    cx={x}
                    cy={y}
                    r="4"
                    fill="#60a5fa"
                    filter="url(#glow)"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.3
                    }}
                  />
                );
              })}
            </motion.g>

            {/* SVG-based tooltip (inside SVG for better positioning) */}
            {hoveredSkill && !selectedSkill && !clickTooltip && tooltipPos.nodeX && tooltipPos.nodeY && (
              <foreignObject
                x={tooltipPos.nodeX + 15}
                y={tooltipPos.nodeY - 70}
                width="200"
                height="100"
                className="pointer-events-none"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 10 }}
                  transition={{ duration: 0.15 }}
                  className="bg-slate-900/95 backdrop-blur-xl rounded-xl border border-cyan-400/50 shadow-2xl overflow-hidden"
                  style={{ 
                    boxShadow: '0 0 30px rgba(96, 165, 250, 0.4), 0 10px 30px rgba(0, 0, 0, 0.5)'
                  }}
                >
                  <div className="p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="text-lg">{hoveredSkill.icon}</div>
                      <h3 className="text-sm font-bold text-cyan-300 flex-1 truncate">
                        {hoveredSkill.name}
                      </h3>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-cyan-400/70">Proficiency</span>
                        <div className="flex items-center gap-1">
                          <div className="w-12 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${hoveredSkill.proficiency}%` }}
                              transition={{ duration: 0.5 }}
                              className="h-full rounded-full"
                              style={{ 
                                background: `linear-gradient(90deg, ${'color' in hoveredSkill ? hoveredSkill.color : '#60a5fa'} 0%, #93c5fd 100%)`
                              }}
                            />
                          </div>
                          <span className="text-xs font-bold text-white tabular-nums">
                            {hoveredSkill.proficiency}%
                          </span>
                        </div>
                      </div>
                      
                      {'category' in hoveredSkill && hoveredSkill.category && (
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-cyan-400/70">Category</span>
                          <span className="text-xs font-semibold text-cyan-300 px-1.5 py-0.5 bg-cyan-500/10 rounded">
                            {hoveredSkill.category}
                          </span>
                        </div>
                      )}
                      
                      {hoveredSkill.learned && (
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-cyan-400/70">Learned</span>
                          <span className="text-xs font-medium text-white">{hoveredSkill.learned}</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="mt-2 pt-2 border-t border-cyan-500/20">
                      <p className="text-[10px] text-cyan-300/60 text-center">
                        Click for more details
                      </p>
                    </div>
                  </div>
                  
                  {/* Tooltip arrow */}
                  <div 
                    className="absolute -bottom-1.5 left-4 w-5 h-3 transform rotate-45"
                    style={{ 
                      backgroundColor: '#0f172a',
                      borderRight: '1px solid rgba(96, 165, 250, 0.5)',
                      borderBottom: '1px solid rgba(96, 165, 250, 0.5)'
                    }}
                  />
                </motion.div>
              </foreignObject>
            )}
          </svg>
        </div>

        {/* Click Tooltip (shows on click before modal opens) */}
        {clickTooltip && (
          <div
            className="fixed z-50 pointer-events-none"
            style={{
              left: `${clickTooltip.x + 15}px`,
              top: `${clickTooltip.y + 15}px`,
              transform: 'translateZ(0)',
              willChange: 'left, top'
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 5 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 5 }}
              transition={{ duration: 0.2 }}
              className="bg-slate-900/95 backdrop-blur-xl px-4 py-3 rounded-lg border border-cyan-400"
              style={{ boxShadow: '0 0 30px rgba(96, 165, 250, 0.6)' }}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl">{clickTooltip.skill.icon}</span>
                <h3 className="text-base font-bold text-cyan-300"
                    style={{ textShadow: '0 0 10px rgba(96, 165, 250, 0.6)' }}>
                  {clickTooltip.skill.name}
                </h3>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-cyan-400/70 text-xs">Proficiency:</span>
                <span className="text-white font-bold text-base">{clickTooltip.skill.proficiency}%</span>
              </div>
              <motion.p 
                className="text-cyan-300/80 text-xs mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Opening detailed view...
              </motion.p>
            </motion.div>
          </div>
        )}

        {/* Skill Story Panel */}
        <AnimatePresence>
          {selectedSkill && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedSkill(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-slate-900/95 backdrop-blur-xl rounded-2xl border-2 border-cyan-400 p-8 max-w-2xl w-full relative"
                style={{ boxShadow: '0 0 100px rgba(96, 165, 250, 0.5)' }}
              >
                <button
                  onClick={() => setSelectedSkill(null)}
                  className="absolute top-4 right-4 text-cyan-400 hover:text-white transition-colors"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12"/>
                  </svg>
                </button>

                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-4xl">{selectedSkill.icon}</span>
                    <motion.h2 
                      className="text-5xl font-bold text-white"
                      style={{ textShadow: '0 0 30px rgba(96, 165, 250, 0.8)' }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      {selectedSkill.name}
                    </motion.h2>
                  </div>
                  {'category' in selectedSkill && selectedSkill.category && (
                    <motion.span 
                      className="inline-block px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {selectedSkill.category}
                    </motion.span>
                  )}
                </div>

                <motion.div 
                  className="space-y-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <div>
                    <h3 className="text-cyan-400 text-sm font-semibold uppercase tracking-wider mb-3">Proficiency Level</h3>
                    <div className="flex items-center gap-4">
                      <div className="flex-1 bg-slate-800 h-4 rounded-full overflow-hidden border border-cyan-400/40">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${selectedSkill.proficiency}%` }}
                          className="h-full relative bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"
                          style={{ boxShadow: '0 0 20px rgba(96, 165, 250, 0.8)' }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
                            animate={{ x: ['-100%', '200%'] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        </motion.div>
                      </div>
                      <span className="text-white font-bold text-2xl tabular-nums min-w-[4rem] text-right">
                        {selectedSkill.proficiency}%
                      </span>
                    </div>
                  </div>

                  {selectedSkill.learned && (
                    <div>
                      <h3 className="text-cyan-400 text-sm font-semibold uppercase tracking-wider mb-2">Learning Journey</h3>
                      <p className="text-slate-300 text-lg">Started in <span className="text-white font-bold">{selectedSkill.learned}</span></p>
                    </div>
                  )}

                  {'usedIn' in selectedSkill && selectedSkill.usedIn && (
                    <div>
                      <h3 className="text-cyan-400 text-sm font-semibold uppercase tracking-wider mb-2">Applied In</h3>
                      <p className="text-slate-300 text-lg">{selectedSkill.usedIn}</p>
                    </div>
                  )}

                  {selectedSkill.story && (
                    <div>
                      <h3 className="text-cyan-400 text-sm font-semibold uppercase tracking-wider mb-2">Experience Story</h3>
                      <p className="text-slate-200 text-lg leading-relaxed">{selectedSkill.story}</p>
                    </div>
                  )}
                </motion.div>

                <motion.div 
                  className="mt-8 pt-6 border-t border-cyan-500/20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <p className="text-cyan-300/60 text-sm text-center">
                    Click outside or press ESC to close
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Info text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="text-center text-cyan-400/60 mt-12 text-sm tracking-wide"
        >
          Hover nodes for info • Click for detailed stories • Energy flow visualizes skill mastery
        </motion.p>
      </div>
    </div>
  );
};

export default SkillsTree;