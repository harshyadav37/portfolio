"use client";
import { useState, useEffect } from "react";
import ExperienceCertificate from "../../public/assets/experienceCertificate.png";

const skills = [
  { name: "React.js", level: 90 },
  { name: "Next.js", level: 85 },
  { name: "Node.js", level: 82 },
  { name: "MongoDB", level: 78 },
  { name: "Tailwind CSS", level: 88 },
  { name: "REST APIs", level: 85 },
];

const highlights = [
  { icon: "⚡", title: "Frontend Engineering", desc: "Built responsive, accessible UIs using React & Next.js with pixel-perfect attention to detail." },
  { icon: "🛠", title: "Backend Systems", desc: "Designed and maintained RESTful APIs with Node.js, Express, and MongoDB under production load." },
  { icon: "🔗", title: "Full Stack Delivery", desc: "Shipped end-to-end features solo — from DB schema to deployed UI — across multiple client projects." },
  { icon: "🚀", title: "Performance & Optimization", desc: "Applied lazy loading, code splitting, and caching strategies to cut load times significantly." },
];

function AnimatedBar({ level, color }) {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setWidth(level), 300);
    return () => clearTimeout(t);
  }, [level]);
  return (
    <div className="exp__bar-track">
      <div className="exp__bar-fill" style={{ width: `${width}%`, background: color }} />
    </div>
  );
}

function CertificateModal({ onClose }) {
  return (
    <div className="exp__modal-backdrop  clip-path-custom-2" onClick={onClose}>
      <div className="exp__modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="exp__modal-close" onClick={onClose} aria-label="Close">✕</button>

        <div className="exp__cert-wrapper">
          <div className="exp__cert-border-outer">
            <div className="exp__cert-border-inner">
              <div className="exp__cert-header">
                <div className="exp__cert-logo-row">

                    <img
                      src={ExperienceCertificate.src}
                      alt="IndoriCoders Logo"
                      className="exp__cert-logo-img"
                    />
                
                </div>
                <div className="exp__cert-badge">EXPERIENCE CERTIFICATE</div>
              </div>

              <div className="exp__cert-divider" />

              <div className="exp__cert-body">
                <p className="exp__cert-to">This is to certify that</p>
                <h2 className="exp__cert-name">Full Stack Developer</h2>
                <p className="exp__cert-detail">
                  has successfully completed <strong>8 months of professional experience</strong> as a Full
                  Stack Developer at <span className="exp__cert-accent">IndoriCoders Pvt. Ltd.</span>,
                  demonstrating exceptional skills in modern web technologies.
                </p>
                <div className="exp__cert-tags">
                  {["React.js","Next.js","Node.js","MongoDB","REST APIs","Tailwind CSS"].map((tag) => (
                    <span key={tag} className="exp__cert-tag">{tag}</span>
                  ))}
                </div>
                <div className="exp__cert-dates">
                  <div className="exp__cert-date-col">
                    <p className="exp__cert-label">From</p>
                    <p className="exp__cert-value">JUNE 2025</p>
                  </div>
                  <div className="exp__cert-star">✦</div>
                  <div className="exp__cert-date-col">
                    <p className="exp__cert-label">To</p>
                    <p className="exp__cert-value">DECEMBER 2025</p>
                  </div>
                </div>
              </div>

              <div className="exp__cert-divider" />

              <div className="exp__cert-footer">
                <div className="exp__cert-sig-col">
                  <div className="exp__cert-sig-line" />
                  <p className="exp__cert-sig-name">Authorized Signatory</p>
                  <p className="exp__cert-sig-role">IndoriCoders Pvt. Ltd.</p>
                </div>
                <div className="exp__cert-seal">
                  <div className="exp__cert-seal-inner">
                    <span className="exp__cert-seal-text">VERIFIED</span>
                    <span className="exp__cert-seal-icon">✓</span>
                  </div>
                </div>
              </div>

              <p className="exp__cert-note">Issued in good faith · Certificate No: IC/FS/2024/0081</p>
            </div>
          </div>
        </div>

        <button className="exp__cert-download-btn">↓ &nbsp;Download Certificate</button>
      </div>
    </div>
  );
}

export default function ExperiencePage() {
  const [showCert, setShowCert] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <>
      <div className="exp__page">
        {/* ── Hero ── */}
        <section className="exp__hero">
          <div className="exp__hero-glow" />
          <div className="exp__hero-inner">
            <span className="exp__eyebrow">Professional Experience</span>
            <h1 className="exp__hero-title">
              8 Months Building <br />
              <span className="exp__hero-accent">Production-Grade</span> Web Apps
            </h1>
            <p className="exp__hero-sub">
              Full Stack Developer at IndoriCoders Pvt. Ltd. — shipping features
              across the entire stack with React, Next.js, Node.js & MongoDB.
            </p>
            <div className="exp__hero-actions">
              <button className="exp__btn-primary" onClick={() => setShowCert(true)}>
                <span className="exp__btn-icon">🏅</span> View Certificate
              </button>
              <a href="#exp-section" className="exp__btn-ghost">Explore Work ↓</a>
            </div>
          </div>
          <div className="exp__hero-card-wrap">
            <div className="exp__tenure-card">
              <div className="exp__tenure-header">
                <div className="exp__company-logo">IC</div>
                <div>
                  <p className="exp__company-name">IndoriCoders Pvt. Ltd.</p>
                  <p className="exp__company-role">Full Stack Developer</p>
                </div>
                <span className="exp__tenure-badge">Completed</span>
              </div>
              <div className="exp__tenure-meta">
                {[
                  { icon:"📅", label:"Duration",    val:"Jun 2025 – Dec 2025" },
                  { icon:"⏳", label:"Total Exp",   val:"7 Months" },
                  { icon:"📍", label:"Location",    val:"Indore, M.P." },
                  { icon:"💼", label:"Type",        val:"Full-Time" },
                ].map(({ icon, label, val }) => (
                  <div key={label} className="exp__meta-item">
                    <span className="exp__meta-icon">{icon}</span>
                    <div>
                      <p className="exp__meta-label">{label}</p>
                      <p className="exp__meta-val">{val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── What I Did ── */}
        <section id="exp-section" className="exp__section">
          <p className="exp__section-eye">Responsibilities</p>
          <h2 className="exp__section-title">What I Worked On</h2>
          <div className="exp__highlights-grid">
            {highlights.map((h) => (
              <div key={h.title} className="exp__highlight-card">
                <span className="exp__highlight-icon">{h.icon}</span>
                <h3 className="exp__highlight-title">{h.title}</h3>
                <p className="exp__highlight-desc">{h.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Skills ── */}
        <section className="exp__section exp__alt-bg">
          <p className="exp__section-eye">Technical Stack</p>
          <h2 className="exp__section-title">Skills Honed at IndoriCoders</h2>
          <div className="exp__skills-grid">
            {skills.map((s, i) => (
              <div key={s.name} className="exp__skill-row">
                <div className="exp__skill-meta">
                  <span className="exp__skill-name">{s.name}</span>
                  <span className="exp__skill-pct">{s.level}%</span>
                </div>
                {mounted && <AnimatedBar level={s.level} color={`hsl(${250 + i * 10}, 70%, 65%)`} />}
              </div>
            ))}
          </div>
        </section>

        {/* ── Timeline ── */}
        <section className="exp__section">
          <p className="exp__section-eye">Journey</p>
          <h2 className="exp__section-title">7-Month Timeline</h2>
          <div className="exp__timeline">
            {[
              { month:"Jun 2025", title:"Joined as Mern Stack Developer",   desc:"Onboarded, set up dev environment, contributed to UI components." },
              { month:"Jul–Aug",  title:"First Production Features",        desc:"Built user auth flows with JWT and dynamic dashboard pages in Next.js." },
              { month:"Sep–Oct",  title:"Backend Ownership",                desc:"Designed REST APIs in Node.js + Express, integrated MongoDB with Mongoose." },
              { month:"Nov–Dec",  title:"Full Stack Projects",              desc:"Delivered two client projects end-to-end — from DB design to Vercel deployment." },
              { month:"Jan 2026", title:"Certificate Awarded",              desc:"Completed 7 months, received experience certificate with outstanding rating." },
            ].map((item, i) => (
              <div key={i} className="exp__timeline-item">
                <div className="exp__timeline-dot" />
                <div className="exp__timeline-content">
                  <span className="exp__timeline-month">{item.month}</span>
                  <h4 className="exp__timeline-ttl">{item.title}</h4>
                  <p className="exp__timeline-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="exp__section exp__cta-section">
          <div className="exp__cta-box">
            <h2 className="exp__cta-title">Want to see the certificate?</h2>
            <p className="exp__cta-sub">
              Official experience certificate from IndoriCoders Pvt. Ltd.
              confirming 8 months of full-stack development.
            </p>
            <button className="exp__btn-primary exp__btn-large" onClick={() => setShowCert(true)}>
              <span className="exp__btn-icon">🏅</span> Open Experience Certificate
            </button>
          </div>
        </section>
      </div>

      {showCert && <CertificateModal onClose={() => setShowCert(false)} />}

      <style>{`
        /* ── All styles scoped under exp__ prefix — zero leakage ── */

        .exp__page {
          min-height: 100vh;
          background: #05050f;
          color: #e0e0f0;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          overflow-x: hidden;
          box-sizing: border-box;
        }
        .exp__page *, .exp__page *::before, .exp__page *::after {
          box-sizing: border-box;
        }

        /* Hero */
        .exp__hero {
          position: relative;
          min-height: 100vh;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 3rem;
          padding: 6rem 5% 4rem;
          overflow: hidden;
        }
        .exp__hero-glow {
          position: absolute; top: -200px; left: -200px;
          width: 700px; height: 700px; border-radius: 50%;
          background: radial-gradient(circle, rgba(124,101,246,0.18) 0%, transparent 70%);
          pointer-events: none;
        }
        .exp__eyebrow {
          display: inline-block;
          font-size: 11px; font-weight: 700; letter-spacing: 3px;
          text-transform: uppercase; color: #7c65f6;
          background: rgba(124,101,246,0.12);
          border: 1px solid rgba(124,101,246,0.3);
          border-radius: 20px; padding: 5px 14px;
          margin-bottom: 1.25rem;
        }
        .exp__hero-title {
          font-size: clamp(2rem, 4vw, 3.4rem);
          font-weight: 800; line-height: 1.1;
          letter-spacing: -1.5px; color: #fff;
          margin: 0 0 1.25rem;
        }
        .exp__hero-accent {
          background: linear-gradient(135deg, #7c65f6, #a78bfa, #c4b5fd);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .exp__hero-sub {
          font-size: 16px; line-height: 1.75; color: #8888aa;
          max-width: 480px; margin: 0 0 2rem;
        }
        .exp__hero-actions { display: flex; gap: 14px; flex-wrap: wrap; }

        /* Buttons */
        .exp__btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 13px 24px; border-radius: 10px;
          background: linear-gradient(135deg, #7c65f6, #a78bfa);
          color: #fff; font-weight: 600; font-size: 15px;
          border: none; cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 4px 20px rgba(124,101,246,0.35);
          font-family: inherit;
        }
        .exp__btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(124,101,246,0.5); }
        .exp__btn-large { padding: 15px 32px; font-size: 16px; }
        .exp__btn-ghost {
          display: inline-flex; align-items: center;
          padding: 13px 24px; border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.12);
          color: #a0a0bf; font-weight: 500; font-size: 15px;
          text-decoration: none;
          transition: border-color 0.2s, color 0.2s;
        }
        .exp__btn-ghost:hover { border-color: rgba(124,101,246,0.5); color: #c4b5fd; }
        .exp__btn-icon { font-size: 16px; }

        /* Tenure card */
        .exp__hero-card-wrap { display: flex; justify-content: center; }
        .exp__tenure-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(124,101,246,0.25);
          border-radius: 20px; padding: 2rem;
          width: 100%; max-width: 400px;
          backdrop-filter: blur(10px);
          box-shadow: 0 0 40px rgba(124,101,246,0.08);
        }
        .exp__tenure-header { display: flex; align-items: center; gap: 14px; margin-bottom: 1.5rem; }
        .exp__company-logo {
          width: 50px; height: 50px; border-radius: 12px;
          background: linear-gradient(135deg, #7c65f6, #a78bfa);
          display: flex; align-items: center; justify-content: center;
          font-weight: 800; color: #fff; font-size: 16px; flex-shrink: 0;
        }
        .exp__company-name { font-weight: 700; color: #fff; font-size: 15px; margin: 0; }
        .exp__company-role { font-size: 13px; color: #7c65f6; margin: 2px 0 0; }
        .exp__tenure-badge {
          margin-left: auto; flex-shrink: 0;
          font-size: 11px; font-weight: 700;
          background: rgba(124,101,246,0.15); color: #a78bfa;
          border: 1px solid rgba(124,101,246,0.3);
          border-radius: 20px; padding: 4px 10px; letter-spacing: 0.5px;
        }
        .exp__tenure-meta { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .exp__meta-item { display: flex; align-items: flex-start; gap: 10px; }
        .exp__meta-icon { font-size: 18px; margin-top: 2px; }
        .exp__meta-label { font-size: 10px; color: #5a5a7a; text-transform: uppercase; letter-spacing: 1px; margin: 0; }
        .exp__meta-val { font-size: 13px; color: #c0c0e0; font-weight: 600; margin: 4px 0 0; }

        /* Sections */
        .exp__section { padding: 5rem 5%; max-width: 1200px; margin: 0 auto; }
        .exp__alt-bg { max-width: 100%; background: rgba(255,255,255,0.015); }
        .exp__section-eye {
          font-size: 11px; font-weight: 700; letter-spacing: 3px;
          text-transform: uppercase; color: #7c65f6; margin: 0 0 0.5rem;
        }
        .exp__section-title {
          font-size: clamp(1.6rem, 3vw, 2.4rem);
          font-weight: 800; letter-spacing: -1px; color: #fff; margin: 0 0 2.5rem;
        }

        /* Highlights */
        .exp__highlights-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.25rem; }
        .exp__highlight-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(124,101,246,0.15);
          border-radius: 16px; padding: 1.75rem;
          transition: border-color 0.2s, transform 0.2s;
        }
        .exp__highlight-card:hover { border-color: rgba(124,101,246,0.4); transform: translateY(-3px); }
        .exp__highlight-icon { font-size: 28px; display: block; margin-bottom: 12px; }
        .exp__highlight-title { font-size: 16px; font-weight: 700; color: #fff; margin: 0 0 8px; }
        .exp__highlight-desc { font-size: 13px; color: #7878a0; line-height: 1.65; margin: 0; }

        /* Skills */
        .exp__skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; max-width: 1200px; margin: 0 auto; }
        .exp__skill-row { }
        .exp__skill-meta { display: flex; justify-content: space-between; margin-bottom: 8px; }
        .exp__skill-name { font-size: 14px; font-weight: 600; color: #c0c0e0; }
        .exp__skill-pct { font-size: 13px; color: #7c65f6; font-weight: 700; }
        .exp__bar-track { height: 6px; background: rgba(255,255,255,0.07); border-radius: 6px; overflow: hidden; }
        .exp__bar-fill { height: 100%; border-radius: 6px; transition: width 1.2s cubic-bezier(0.23,1,0.32,1); }

        /* Timeline */
        .exp__timeline { position: relative; padding-left: 2rem; }
        .exp__timeline::before {
          content: ''; position: absolute; left: 7px; top: 0; bottom: 0;
          width: 2px; background: linear-gradient(to bottom, #7c65f6, transparent);
        }
        .exp__timeline-item { display: flex; gap: 1.5rem; margin-bottom: 2.5rem; position: relative; }
        .exp__timeline-dot {
          position: absolute; left: -1.75rem; top: 4px;
          width: 14px; height: 14px; border-radius: 50%;
          background: linear-gradient(135deg, #7c65f6, #a78bfa);
          border: 2px solid #05050f; flex-shrink: 0;
          box-shadow: 0 0 12px rgba(124,101,246,0.5);
        }
        .exp__timeline-month {
          font-size: 11px; font-weight: 700; letter-spacing: 1px;
          text-transform: uppercase; color: #7c65f6; display: block; margin-bottom: 4px;
        }
        .exp__timeline-ttl { font-size: 15px; font-weight: 700; color: #fff; margin: 0 0 6px; }
        .exp__timeline-desc { font-size: 13px; color: #7878a0; line-height: 1.65; margin: 0; }

        /* CTA */
        .exp__cta-section { display: flex; justify-content: center; }
        .exp__cta-box {
          text-align: center;
          background: linear-gradient(135deg, rgba(124,101,246,0.12), rgba(167,139,250,0.06));
          border: 1px solid rgba(124,101,246,0.25);
          border-radius: 24px; padding: 4rem 3rem;
          max-width: 600px; width: 100%;
        }
        .exp__cta-title { font-size: 2rem; font-weight: 800; color: #fff; letter-spacing: -1px; margin: 0 0 1rem; }
        .exp__cta-sub { font-size: 15px; color: #7878a0; line-height: 1.7; margin: 0 0 2rem; }

        /* Responsive */
        @media (max-width: 768px) {
          .exp__hero { grid-template-columns: 1fr; padding-top: 4rem; min-height: auto; gap: 2rem; }
          .exp__hero-card-wrap { display: none; }
        }

        /* ── Modal & Certificate ── */
        .exp__modal-backdrop {
          position: fixed; inset: 0;
          background: rgba(5,5,15,0.85);
          backdrop-filter: blur(6px);
          display: flex; align-items: center; justify-content: center;
          z-index: 9999; padding: 1rem;
        }
        .exp__modal-box {
          background: #0d0d1a;
          border: 1px solid rgba(124,101,246,0.3);
          border-radius: 16px;
          max-width: 640px; width: 100%;
          padding: 2rem; position: relative;
          box-shadow: 0 0 60px rgba(124,101,246,0.2);
          animation: expModalIn 0.3s cubic-bezier(.16,1,.3,1);
          max-height: 90vh; overflow-y: auto;
          font-family: 'Inter', -apple-system, sans-serif;
        }
        @keyframes expModalIn {
          from { opacity:0; transform:scale(0.92) translateY(16px); }
          to   { opacity:1; transform:scale(1) translateY(0); }
        }
        .exp__modal-close {
          position: absolute; top: 1rem; right: 1rem;
          background: rgba(255,255,255,0.06); border: none;
          color: #a0a0bf; border-radius: 50%;
          width: 32px; height: 32px;
          cursor: pointer; font-size: 14px;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.2s, color 0.2s;
          font-family: inherit;
        }
        .exp__modal-close:hover { background: rgba(255,255,255,0.12); color: #fff; }

        .exp__cert-wrapper { font-family: 'Georgia', serif; }
        .exp__cert-border-outer {
          border: 2px solid #7c65f6; border-radius: 12px; padding: 4px;
          background: linear-gradient(135deg, #7c65f6 0%, #a78bfa 50%, #7c65f6 100%);
        }
        .exp__cert-border-inner { background: #0a0a18; border-radius: 9px; padding: 1.75rem 2rem; }
        .exp__cert-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem; flex-wrap: wrap; gap: 8px; }
        .exp__cert-logo-row { display: flex; align-items: center; gap: 12px; }
        .exp__cert-logo {
          width: 48px; height: 48px; border-radius: 10px;
          background: linear-gradient(135deg,#7c65f6,#a78bfa);
          display: flex; align-items: center; justify-content: center;
          font-family: 'Inter', sans-serif; font-weight: 800; color: #fff; font-size: 16px;
        }
        .exp__cert-company { font-family: 'Inter', sans-serif; font-weight: 700; color: #fff; font-size: 15px; margin: 0; }
        .exp__cert-company-sub { font-family: 'Inter', sans-serif; font-size: 11px; color: #7c7ca0; margin: 0; }
        .exp__cert-badge {
          font-family: 'Inter', sans-serif; font-size: 10px; font-weight: 700;
          letter-spacing: 2px; color: #a78bfa;
          border: 1px solid rgba(167,139,250,0.4); border-radius: 20px; padding: 4px 12px;
        }
        .exp__cert-divider { height: 1px; background: linear-gradient(90deg,transparent,rgba(124,101,246,0.5),transparent); margin: 1rem 0; }
        .exp__cert-body { text-align: center; }
        .exp__cert-to { font-family: 'Inter', sans-serif; font-size: 12px; color: #7c7ca0; letter-spacing: 2px; text-transform: uppercase; margin: 0 0 6px; }
        .exp__cert-name { font-size: 28px; font-weight: 700; color: #fff; margin: 0 0 14px; letter-spacing: -0.5px; }
        .exp__cert-detail { font-size: 13px; color: #a0a0bf; line-height: 1.7; margin: 0 0 16px; }
        .exp__cert-accent { color: #a78bfa; font-weight: 600; }
        .exp__cert-tags { display: flex; flex-wrap: wrap; gap: 6px; justify-content: center; margin-bottom: 18px; }
        .exp__cert-tag {
          font-family: 'Inter', sans-serif; font-size: 11px;
          background: rgba(124,101,246,0.15); color: #a78bfa;
          border: 1px solid rgba(124,101,246,0.3); border-radius: 20px; padding: 3px 10px;
        }
        .exp__cert-dates { display: flex; align-items: center; justify-content: center; gap: 24px; }
        .exp__cert-date-col { text-align: center; }
        .exp__cert-label { font-family: 'Inter', sans-serif; font-size: 10px; color: #7c7ca0; letter-spacing: 2px; text-transform: uppercase; margin: 0; }
        .exp__cert-value { font-family: 'Inter', sans-serif; font-size: 16px; font-weight: 700; color: #fff; margin: 4px 0 0; }
        .exp__cert-star { color: #7c65f6; font-size: 20px; }
        .exp__cert-footer { display: flex; justify-content: space-between; align-items: flex-end; }
        .exp__cert-sig-line { width: 120px; height: 1px; background: rgba(160,160,191,0.4); margin-bottom: 6px; }
        .exp__cert-sig-name { font-family: 'Inter', sans-serif; font-size: 12px; color: #a0a0bf; margin: 0; }
        .exp__cert-sig-role { font-family: 'Inter', sans-serif; font-size: 10px; color: #7c7ca0; margin: 4px 0 0; }
        .exp__cert-seal {
          width: 60px; height: 60px; border-radius: 50%;
          border: 2px solid #7c65f6;
          display: flex; align-items: center; justify-content: center;
        }
        .exp__cert-seal-inner { text-align: center; }
        .exp__cert-seal-text { display: block; font-family: 'Inter', sans-serif; font-size: 7px; letter-spacing: 2px; color: #7c65f6; font-weight: 700; }
        .exp__cert-seal-icon { display: block; color: #7c65f6; font-size: 18px; }
        .exp__cert-note { font-family: 'Inter', sans-serif; font-size: 10px; color: #3a3a5c; text-align: center; margin: 12px 0 0; }
        .exp__cert-download-btn {
          display: block; width: 100%; margin-top: 1.25rem;
          padding: 12px; border-radius: 10px;
          background: linear-gradient(135deg, #7c65f6, #a78bfa);
          color: #fff; font-family: 'Inter', sans-serif; font-weight: 600; font-size: 14px;
          border: none; cursor: pointer;
          transition: opacity 0.2s, transform 0.15s;
        }
        .exp__cert-download-btn:hover { opacity: 0.9; transform: translateY(-1px); }
      `}</style>
    </>
  );
}