import React, { useEffect, useState, useRef } from 'react';
import { personalInfo, stats } from '../data/portfolio';

const ROLES = [
  'Full-Stack Developer',
  '.NET Core Specialist',
  'React Developer',
  'Angular Developer',
  'SQL Developer',
  'Azure Cloud Developer',
];

const HeroSection: React.FC = () => {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = ROLES[roleIdx];
    if (!isDeleting && displayed.length < current.length) {
      timeoutRef.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70);
    } else if (!isDeleting && displayed.length === current.length) {
      timeoutRef.current = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayed.length > 0) {
      timeoutRef.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIdx(p => (p + 1) % ROLES.length);
    }
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [displayed, isDeleting, roleIdx]);

  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      justifyContent: 'center', position: 'relative', overflow: 'hidden',
    }}>
      {/* Grid overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        backgroundImage: `
          linear-gradient(rgba(0,245,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,245,255,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
      }} />

      {/* Radial glow */}
      <div style={{
        position: 'absolute', top: '35%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px', height: '600px',
        background: 'radial-gradient(ellipse, rgba(0,245,255,0.06) 0%, transparent 70%)',
        zIndex: 1, pointerEvents: 'none',
      }} />

      <div className="section-container" style={{
        position: 'relative', zIndex: 2, textAlign: 'center',
        padding: '100px 24px 60px',
      }}>
        {/* Status badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          padding: '6px 16px', marginBottom: '32px',
          border: '1px solid rgba(0,245,255,0.2)',
          borderRadius: '20px', background: 'rgba(0,245,255,0.05)',
          animation: 'fadeInUp 0.6s ease both',
        }}>
          <span style={{
            width: 8, height: 8, borderRadius: '50%',
            background: '#00ff88',
            animation: 'pulse-glow 2s infinite',
            boxShadow: '0 0 6px #00ff88',
          }} />
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.72rem',
            color: 'var(--text-secondary)', letterSpacing: '0.08em',
          }}>AVAILABLE FOR OPPORTUNITIES</span>
        </div>

        {/* Name */}
        <div style={{ animation: 'fadeInUp 0.7s ease 0.1s both' }}>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.85rem',
            color: 'var(--text-muted)', letterSpacing: '0.2em',
            textTransform: 'uppercase', marginBottom: '12px',
          }}>
            &lt; Hello, World /&gt; — I am
          </div>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 8vw, 5.5rem)',
            fontWeight: 900, lineHeight: 1.05,
            letterSpacing: '0.05em', textTransform: 'uppercase',
            background: 'linear-gradient(135deg, #ffffff 0%, #00f5ff 50%, #0080ff 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: 'drop-shadow(0 0 30px rgba(0,245,255,0.3))',
            marginBottom: '0',
          }}>
            {personalInfo.name}
          </h1>
        </div>

        {/* Typewriter role */}
        <div style={{
          marginTop: '16px', marginBottom: '28px',
          animation: 'fadeInUp 0.7s ease 0.2s both',
          minHeight: '42px',
        }}>
          <span style={{
            fontFamily: 'var(--font-display)', fontWeight: 600,
            fontSize: 'clamp(1rem, 3vw, 1.5rem)',
            color: 'var(--cyan)', letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}>
            {displayed}
            <span style={{
              display: 'inline-block', width: '2px', height: '1.2em',
              background: 'var(--cyan)', marginLeft: '2px',
              verticalAlign: 'text-bottom',
              animation: 'blink 1s infinite',
            }} />
          </span>
        </div>

        {/* Bio */}
        <p style={{
          maxWidth: '640px', margin: '0 auto 40px',
          color: 'var(--text-secondary)', fontSize: '1.05rem',
          lineHeight: 1.8, fontWeight: 400,
          animation: 'fadeInUp 0.7s ease 0.3s both',
        }}>
          5+ years building enterprise-grade web applications with
          <span style={{ color: 'var(--cyan)' }}> ASP.NET Core</span>,
          <span style={{ color: 'var(--cyan)' }}> React</span>, and
          <span style={{ color: 'var(--cyan)' }}> Azure Cloud</span>.
        </p>

        {/* CTA buttons */}
        <div style={{
          display: 'flex', gap: '16px', justifyContent: 'center',
          flexWrap: 'wrap', marginBottom: '64px',
          animation: 'fadeInUp 0.7s ease 0.4s both',
        }}>
          <a href="#projects" className="btn-secondary"
            onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
            View Projects
          </a>
          <a href="#contact" className="btn-primary"
            onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
            Get In Touch
          </a>
          <a
            href="https://github.com/amarsh689"
            target="_blank" rel="noreferrer"
            className="btn-primary"
            style={{ gap: '8px' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
        </div>

        {/* Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '16px', maxWidth: '700px', margin: '0 auto',
          animation: 'fadeInUp 0.7s ease 0.5s both',
        }}>
          {stats.map((s, i) => (
            <div key={i} className="glass-card" style={{
              padding: '20px 12px', textAlign: 'center',
            }}>
              <div style={{
                fontFamily: 'var(--font-display)', fontWeight: 800,
                fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                color: 'var(--cyan)',
                textShadow: '0 0 20px rgba(0,245,255,0.5)',
              }}>{s.value}</div>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
                color: 'var(--text-muted)', letterSpacing: '0.08em',
                textTransform: 'uppercase', marginTop: '4px',
              }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div style={{
          marginTop: '60px', display: 'flex', flexDirection: 'column',
          alignItems: 'center', gap: '8px',
          animation: 'fadeInUp 0.7s ease 0.7s both',
        }}>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
            color: 'var(--text-muted)', letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}>SCROLL TO EXPLORE</span>
          <div style={{
            width: '1px', height: '50px',
            background: 'linear-gradient(180deg, var(--cyan), transparent)',
            animation: 'float 2s ease-in-out infinite',
          }} />
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
