import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Full-Stack Developer | Portfolio",
  description: "Premium portfolio showcasing full-stack development expertise, projects, and experience. Crafted with Next.js, React, and modern web technologies.",
  keywords: ["Full-Stack Developer", "React", "Next.js", "TypeScript", "Portfolio"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.com",
    siteName: "Full-Stack Developer Portfolio",
    title: "Full-Stack Developer | Premium Portfolio",
    description: "Explore my projects, skills, and experience as a full-stack developer.",
    images: [
      {
        url: "https://yourportfolio.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Full-Stack Developer | Portfolio",
    description: "Premium portfolio showcasing full-stack development expertise.",
    images: ["https://yourportfolio.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${spaceGrotesk.variable} antialiased bg-slate-950 text-slate-100 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
