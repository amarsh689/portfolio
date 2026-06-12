import React, { useState } from 'react';
import { personalInfo } from '../data/portfolio';

const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contacts = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      ),
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      action: copyEmail,
      actionLabel: copied ? 'COPIED!' : 'COPY',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
      ),
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      label: 'LinkedIn',
      value: 'amar-patil-609b2983',
      href: personalInfo.linkedin,
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      label: 'GitHub',
      value: 'amarsh689',
      href: personalInfo.github,
    },
  ];

  return (
    <section id="contact" style={{ padding: '100px 0 60px', position: 'relative', zIndex: 2 }}>
      <div className="section-container">
        <div className="section-title">Get In Touch</div>
        <div className="section-line" />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '48px', alignItems: 'start',
        }}>
          {/* Left */}
          <div>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', color: 'var(--text-primary)',
              marginBottom: '20px', lineHeight: 1.3,
            }}>
              Let's Build Something<br />
              <span style={{ color: 'var(--cyan)' }}>Extraordinary Together</span>
            </h2>
            <p style={{
              color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1rem',
              marginBottom: '36px',
            }}>
              I'm actively looking for new opportunities as a Full-Stack .NET/React Developer.
              Whether you have a project in mind or just want to connect, I'd love to hear from you.
            </p>

            {/* Contact cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {contacts.map((c, i) => (
                <a key={i} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '14px',
                    padding: '14px 18px',
                    background: 'rgba(0,245,255,0.04)',
                    border: '1px solid rgba(0,245,255,0.12)',
                    borderRadius: '8px', color: 'var(--text-primary)',
                    textDecoration: 'none', transition: 'all 0.25s',
                    position: 'relative',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,245,255,0.35)';
                    (e.currentTarget as HTMLElement).style.background = 'rgba(0,245,255,0.08)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,245,255,0.12)';
                    (e.currentTarget as HTMLElement).style.background = 'rgba(0,245,255,0.04)';
                  }}
                >
                  <div style={{ color: 'var(--cyan)' }}>{c.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
                      color: 'var(--text-muted)', letterSpacing: '0.1em',
                      textTransform: 'uppercase', marginBottom: '2px',
                    }}>{c.label}</div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>{c.value}</div>
                  </div>
                  {c.action && (
                    <button onClick={e => { e.preventDefault(); c.action!(); }} style={{
                      background: 'rgba(0,245,255,0.1)',
                      border: '1px solid rgba(0,245,255,0.3)',
                      borderRadius: '4px', color: 'var(--cyan)',
                      fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
                      letterSpacing: '0.1em', padding: '4px 10px',
                      cursor: 'pointer', transition: 'all 0.2s',
                    }}>{c.actionLabel}</button>
                  )}
                  {c.href.startsWith('http') && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--text-muted)">
                      <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Right: CTA card */}
          <div className="glass-card" style={{
            padding: '40px',
            background: 'linear-gradient(135deg, rgba(0,245,255,0.04), rgba(0,128,255,0.04))',
            border: '1px solid rgba(0,245,255,0.2)',
            textAlign: 'center',
          }}>
            <div style={{
              width: 80, height: 80, borderRadius: '50%', margin: '0 auto 24px',
              background: 'rgba(0,245,255,0.08)',
              border: '2px solid rgba(0,245,255,0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '2rem',
              boxShadow: '0 0 30px rgba(0,245,255,0.15)',
            }}>💼</div>

            <h3 style={{
              fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: '1.1rem', color: 'var(--text-primary)',
              marginBottom: '12px', letterSpacing: '0.05em',
            }}>Open to Opportunities</h3>

            <p style={{
              color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.9rem',
              marginBottom: '28px',
            }}>
              Available for full-time roles, contracts, and freelance projects.
              Specializing in .NET Core + React full-stack development.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a href={`mailto:${personalInfo.email}`} className="btn-secondary"
                style={{ justifyContent: 'center' }}>
                Send Message
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer"
                className="btn-primary" style={{ justifyContent: 'center' }}>
                Connect on LinkedIn
              </a>
            </div>

            {/* Status indicator */}
            <div style={{
              marginTop: '24px', paddingTop: '20px',
              borderTop: '1px solid rgba(0,245,255,0.1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
            }}>
              <span style={{
                width: 8, height: 8, borderRadius: '50%', background: '#00ff88',
                boxShadow: '0 0 8px #00ff88',
                display: 'inline-block',
              }} />
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
                color: 'var(--text-muted)', letterSpacing: '0.1em',
              }}>AVAILABLE NOW • RESPONSE WITHIN 24H</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
