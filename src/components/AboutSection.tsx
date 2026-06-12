import React from 'react';
import { personalInfo } from '../data/portfolio';

const AboutSection: React.FC = () => {
  return (
    <section id="about" style={{ padding: '100px 0', position: 'relative', zIndex: 2 }}>
      <div className="section-container">
        <div className="section-title">About Me</div>
        <div className="section-line" />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '48px', alignItems: 'center',
        }}>
          {/* Left: Avatar + decorative */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{
              position: 'relative', width: '280px', height: '280px',
            }}>
              {/* Rotating rings */}
              <div style={{
                position: 'absolute', inset: '-20px',
                border: '1px solid rgba(0,245,255,0.15)',
                borderRadius: '50%',
                animation: 'rotate 20s linear infinite',
              }}>
                <div style={{
                  position: 'absolute', top: 0, left: '50%',
                  transform: 'translateX(-50%)',
                  width: 8, height: 8,
                  borderRadius: '50%', background: 'var(--cyan)',
                  boxShadow: '0 0 10px var(--cyan)',
                }} />
              </div>
              <div style={{
                position: 'absolute', inset: '-40px',
                border: '1px solid rgba(0,128,255,0.1)',
                borderRadius: '50%', borderStyle: 'dashed',
                animation: 'rotate 30s linear infinite reverse',
              }} />
              {/* Avatar core */}
              <div style={{
                width: '280px', height: '280px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(0,245,255,0.1), rgba(0,128,255,0.05))',
                border: '2px solid rgba(0,245,255,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                position: 'relative', overflow: 'hidden',
                boxShadow: '0 0 40px rgba(0,245,255,0.15)',
              }}>
                <div style={{
                  fontFamily: 'var(--font-display)', fontWeight: 900,
                  fontSize: '5rem', color: 'var(--cyan)',
                  textShadow: '0 0 30px rgba(0,245,255,0.5)',
                  letterSpacing: '-0.02em',
                }}>AP</div>
                {/* Inner glow */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'radial-gradient(circle at 30% 30%, rgba(0,245,255,0.08), transparent 60%)',
                }} />
              </div>
            </div>
          </div>

          {/* Right: Bio */}
          <div>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.75rem',
              color: 'var(--text-muted)', letterSpacing: '0.15em',
              textTransform: 'uppercase', marginBottom: '12px',
            }}>{/*WHO AM I*/}</div>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: 'var(--text-primary)',
              marginBottom: '20px', lineHeight: 1.3,
            }}>
              Building the <span style={{ color: 'var(--cyan)' }}>Future</span> of<br />
              Enterprise Software
            </h2>
            <p style={{
              color: 'var(--text-secondary)', lineHeight: 1.9,
              fontSize: '1rem', marginBottom: '24px',
            }}>
              {personalInfo.bio}
            </p>

            {/* Info grid */}
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr',
              gap: '12px', marginBottom: '28px',
            }}>
              {[
                { label: 'Location', value: personalInfo.location },
                { label: 'Experience', value: '4+ Years' },
                { label: 'Email', value: personalInfo.email },
                { label: 'Phone', value: personalInfo.phone },
              ].map((item, i) => (
                <div key={i} style={{
                  padding: '12px 16px',
                  background: 'rgba(0,245,255,0.03)',
                  border: '1px solid rgba(0,245,255,0.08)',
                  borderRadius: '8px',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
                    color: 'var(--text-muted)', letterSpacing: '0.1em',
                    textTransform: 'uppercase', marginBottom: '4px',
                  }}>{item.label}</div>
                  <div style={{
                    fontSize: '0.88rem', color: 'var(--text-primary)',
                    fontWeight: 600,
                  }}>{item.value}</div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="btn-primary"
                style={{ fontSize: '0.7rem', padding: '10px 20px' }}>
                LinkedIn
              </a>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="btn-primary"
                style={{ fontSize: '0.7rem', padding: '10px 20px' }}>
                GitHub
              </a>
              <a href={`mailto:${personalInfo.email}`} className="btn-secondary"
                style={{ fontSize: '0.7rem', padding: '10px 20px' }}>
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
