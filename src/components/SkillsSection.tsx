import React, { useState } from 'react';
import { skills } from '../data/portfolio';

const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  return (
    <section id="skills" style={{
      padding: '100px 0', position: 'relative', zIndex: 2,
      background: 'linear-gradient(180deg, transparent 0%, rgba(0,245,255,0.02) 50%, transparent 100%)',
    }}>
      {/* Background grid accent */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: 'radial-gradient(ellipse at 50% 50%, rgba(0,245,255,0.03) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-title">Tech Stack</div>
        <div className="section-line" />

        <p style={{
          color: 'var(--text-secondary)', marginBottom: '48px',
          maxWidth: '500px', fontSize: '1rem', lineHeight: 1.7,
        }}>
          A comprehensive toolkit built over 4+ years of enterprise development.
          Hover to explore each category.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '20px',
        }}>
          {skills.map((cat, idx) => (
            <div
              key={idx}
              className="glass-card"
              onMouseEnter={() => setActiveCategory(idx)}
              onMouseLeave={() => setActiveCategory(null)}
              style={{
                padding: '24px',
                cursor: 'default',
                border: activeCategory === idx
                  ? '1px solid rgba(0,245,255,0.35)'
                  : '1px solid rgba(0,245,255,0.1)',
                boxShadow: activeCategory === idx
                  ? '0 0 20px rgba(0,245,255,0.15), inset 0 0 30px rgba(0,245,255,0.03)'
                  : 'none',
                transform: activeCategory === idx ? 'translateY(-4px)' : 'none',
                transition: 'all 0.3s ease',
              }}
            >
              {/* Header */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: '12px',
                marginBottom: '16px',
              }}>
                <span style={{ fontSize: '1.4rem' }}>{cat.icon}</span>
                <div>
                  <div style={{
                    fontFamily: 'var(--font-display)', fontWeight: 700,
                    fontSize: '0.75rem', letterSpacing: '0.12em',
                    color: 'var(--cyan)', textTransform: 'uppercase',
                  }}>{cat.category}</div>
                </div>
                <div style={{
                  marginLeft: 'auto', fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem', color: 'var(--text-muted)',
                  background: 'rgba(0,245,255,0.05)', padding: '2px 8px',
                  borderRadius: '3px', border: '1px solid rgba(0,245,255,0.1)',
                }}>
                  {cat.items.length} skills
                </div>
              </div>

              {/* Progress bar */}
              <div style={{
                height: '2px', background: 'rgba(0,245,255,0.1)',
                borderRadius: '1px', marginBottom: '16px', overflow: 'hidden',
              }}>
                <div style={{
                  height: '100%', borderRadius: '1px',
                  background: 'linear-gradient(90deg, var(--cyan), var(--electric-blue))',
                  width: activeCategory === idx ? '100%' : '0%',
                  transition: 'width 0.6s ease',
                  boxShadow: '0 0 8px rgba(0,245,255,0.5)',
                }} />
              </div>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {cat.items.map((item, i) => (
                  <span key={i} className="tag" style={{
                    animationDelay: `${i * 0.05}s`,
                    opacity: activeCategory === idx ? 1 : 0.7,
                    transition: 'opacity 0.3s',
                  }}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech cloud footer */}
        <div style={{
          marginTop: '60px', textAlign: 'center',
          padding: '40px', borderTop: '1px solid rgba(0,245,255,0.08)',
        }}>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
            color: 'var(--text-muted)', letterSpacing: '0.15em',
            textTransform: 'uppercase', marginBottom: '20px',
          }}>{/* CERTIFICATIONS */}</div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            {[
              { code: 'AZ-104', name: 'Azure Administrator' },
              { code: 'AZ-204', name: 'Azure Developer' },
              { code: 'REACT', name: 'Frontend Certified' },
              { code: '.NET', name: 'App Development' },
            ].map((cert, i) => (
              <div key={i} style={{
                padding: '12px 24px',
                background: 'rgba(0,245,255,0.05)',
                border: '1px solid rgba(0,245,255,0.2)',
                borderRadius: '6px',
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px',
              }}>
                <span style={{
                  fontFamily: 'var(--font-display)', fontWeight: 800,
                  fontSize: '0.85rem', color: 'var(--cyan)',
                  letterSpacing: '0.1em',
                }}>{cert.code}</span>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
                  color: 'var(--text-muted)',
                }}>{cert.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
