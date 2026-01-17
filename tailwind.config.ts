import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        secondary: "hsl(var(--secondary))",
        "secondary-foreground": "hsl(var(--secondary-foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
        destructive: "hsl(var(--destructive))",
        "destructive-foreground": "hsl(var(--destructive-foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        popover: "hsl(var(--popover))",
        "popover-foreground": "hsl(var(--popover-foreground))",
        // Custom premium colors
        slate: {
          950: "#03071e",
          900: "#0f3460",
          850: "#16213e",
          800: "#1a1f3a",
          700: "#2d3561",
        },
        cyan: {
          400: "#06d6d6",
          500: "#00d9d9",
        },
        purple: {
          400: "#c77dff",
          500: "#b645d1",
          600: "#a239a3",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        inter: ["var(--font-inter)", "sans-serif"],
        grotesk: ["var(--font-space-grotesk)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "glass-effect": "backdrop-filter: blur(10px)",
        "glow-effect": "radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.15) 0%, transparent 65%)",
        "glow-cyan": "radial-gradient(circle at 50% 50%, rgba(6, 214, 214, 0.1) 0%, transparent 65%)",
      },
      boxShadow: {
        glow: "0 0 20px rgba(147, 51, 234, 0.3)",
        "glow-sm": "0 0 10px rgba(147, 51, 234, 0.2)",
        "glow-lg": "0 0 40px rgba(147, 51, 234, 0.4)",
        "glow-cyan": "0 0 20px rgba(6, 214, 214, 0.3)",
        "glass": "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        "glass-sm": "0 4px 16px 0 rgba(31, 38, 135, 0.25)",
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-in-out",
        "fade-in-up": "fade-in-up 0.6s ease-out",
        "fade-in-down": "fade-in-down 0.6s ease-out",
        "slide-in-left": "slide-in-left 0.5s ease-out",
        "slide-in-right": "slide-in-right 0.5s ease-out",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "slide-up": "slide-up 0.6s ease-out",
        "shimmer": "shimmer 2s infinite",
        "gradient-shift": "gradient-shift 3s ease infinite",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-down": {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(147, 51, 234, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(147, 51, 234, 0.6)" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      backdropFilter: {
        none: "none",
        blur: "blur(10px)",
        "blur-md": "blur(12px)",
        "blur-lg": "blur(16px)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      spacing: {
        "128": "32rem",
      },
      transitionDuration: {
        "2000": "2000ms",
        "3000": "3000ms",
      },
    },
  },
  plugins: [
    require("tailwindcss/plugin")(function ({ addUtilities }: { addUtilities: (utilities: Record<string, any>) => void }) {
      addUtilities({
        ".glass": {
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          borderRadius: "0.75rem",
        },
        ".glass-light": {
          background: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(4px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        },
        ".glass-dark": {
          background: "rgba(0, 0, 0, 0.3)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        },
        ".gradient-text": {
          backgroundImage: "linear-gradient(to right, #06d6d6, #c77dff, #3b82f6)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        },
        ".text-glow": {
          textShadow: "0 0 20px rgba(147, 51, 234, 0.5)",
        },
      });
    }),
  ],
};

export default config;