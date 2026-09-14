import React, { useState } from 'react';
import { experiences } from '../data/portfolio';

const ExperienceSection: React.FC = () => {
  const [activeExp, setActiveExp] = useState(0);
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const currentExp = experiences[activeExp] || experiences[0];

  return (
    <section id="experience" style={{ padding: '100px 0', position: 'relative', zIndex: 2 }}>
      <div className="section-container">
        <div className="section-title">Experience</div>
        <div className="section-line" />

        <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '32px' }}>
          {/* Company selector */}
          <div>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
              color: 'var(--text-muted)', letterSpacing: '0.15em',
              textTransform: 'uppercase', marginBottom: '16px',
            }}>{'SELECT COMPANY'}</div>

            {experiences.map((exp, idx) => (
              <div
                key={idx}
                onClick={() => {
                  setActiveExp(idx);
                  setActiveProject(null);
                }}
                style={{
                  padding: '16px 20px', marginBottom: '8px',
                  cursor: 'pointer', borderRadius: '8px',
                  border: activeExp === idx
                    ? '1px solid rgba(0,245,255,0.4)'
                    : '1px solid rgba(0,245,255,0.08)',
                  background: activeExp === idx
                    ? 'rgba(0,245,255,0.06)'
                    : 'rgba(6,20,45,0.5)',
                  transition: 'all 0.25s',
                  position: 'relative', overflow: 'hidden',
                }}
              >
                {activeExp === idx && (
                  <div style={{
                    position: 'absolute', left: 0, top: 0, bottom: 0,
                    width: '3px',
                    background: 'linear-gradient(180deg, var(--cyan), var(--electric-blue))',
                    boxShadow: '0 0 8px var(--cyan)',
                  }} />
                )}
                <div style={{
                  fontFamily: 'var(--font-display)', fontWeight: 700,
                  fontSize: '0.72rem', letterSpacing: '0.08em',
                  color: activeExp === idx ? 'var(--cyan)' : 'var(--text-primary)',
                  textTransform: 'uppercase',
                }}>{exp.company.split(' ').slice(0, 2).join(' ')}</div>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
                  color: 'var(--text-muted)', marginTop: '4px',
                }}>{exp.period}</div>
                {exp.current && (
                  <span style={{
                    display: 'inline-block', marginTop: '6px',
                    padding: '2px 8px', background: 'rgba(0,255,136,0.1)',
                    border: '1px solid rgba(0,255,136,0.3)',
                    borderRadius: '3px', fontFamily: 'var(--font-mono)',
                    fontSize: '0.58rem', color: '#00ff88', letterSpacing: '0.08em',
                  }}>CURRENT</span>
                )}
              </div>
            ))}
          </div>

          {/* Content panel */}
          <div>
            <div className="glass-card" style={{ padding: '24px', marginBottom: '24px' }}>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
                color: 'var(--text-muted)', marginBottom: '8px',
                letterSpacing: '0.1em',
              }}>
                {currentExp.period} • {currentExp.location}
              </div>
              <div style={{
                fontFamily: 'var(--font-display)', fontWeight: 800,
                fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
                color: 'var(--text-primary)', letterSpacing: '0.05em',
                marginBottom: '4px',
              }}>{currentExp.role}</div>
              <div style={{
                fontFamily: 'var(--font-display)', fontWeight: 600,
                fontSize: '0.9rem', color: 'var(--cyan)',
              }}>{currentExp.company}</div>
              <div style={{
                marginTop: '12px', display: 'flex', gap: '8px',
                flexWrap: 'wrap',
              }}>
                <span className="tag">{currentExp.projects.length} Projects</span>
                {currentExp.current && (
                  <span className="tag" style={{ color: '#00ff88', borderColor: 'rgba(0,255,136,0.3)' }}>
                    Currently Working
                  </span>
                )}
              </div>
            </div>

            <div style={{ marginBottom: '16px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {currentExp.projects.map((proj, i) => (
                <button key={i} onClick={() => setActiveProject(i)} style={{
                  padding: '8px 16px',
                  background: activeProject === i ? 'rgba(0,245,255,0.06)' : 'transparent',
                  border: activeProject === i
                    ? '1px solid var(--cyan)'
                    : '1px solid rgba(0,245,255,0.15)',
                  borderRadius: '5px', cursor: 'pointer',
                  fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
                  color: activeProject === i ? 'var(--cyan)' : 'var(--text-muted)',
                  transition: 'all 0.2s', letterSpacing: '0.05em',
                }}>
                  Project {String(i + 1).padStart(2, '0')}
                </button>
              ))}
            </div>

            {activeProject === null ? (
              <div className="glass-card" style={{ padding: '28px' }}>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
                  color: 'var(--text-muted)', letterSpacing: '0.1em',
                  textTransform: 'uppercase', marginBottom: '12px',
                }}>{'SELECT A PROJECT'}</div>
                <p style={{
                  color: 'var(--text-secondary)', lineHeight: 1.8,
                  fontSize: '0.95rem', marginBottom: '0',
                }}>
                  Tap a project button to open its full details here.
                </p>
              </div>
            ) : currentExp.projects[activeProject] && (() => {
              const proj = currentExp.projects[activeProject];
              return (
                <div className="glass-card" style={{ padding: '28px' }}>
                  <div style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
                    color: 'var(--text-muted)', letterSpacing: '0.1em',
                    textTransform: 'uppercase', marginBottom: '8px',
                  }}>{'// PROJECT'}</div>
                  <h3 style={{
                    fontFamily: 'var(--font-display)', fontWeight: 700,
                    fontSize: 'clamp(0.95rem, 2vw, 1.2rem)',
                    color: 'var(--cyan)', marginBottom: '12px',
                    lineHeight: 1.4,
                  }}>{proj.name}</h3>
                  <p style={{
                    color: 'var(--text-secondary)', lineHeight: 1.8,
                    fontSize: '0.95rem', marginBottom: '20px',
                  }}>{proj.description}</p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
                    {proj.tech.map((t, i) => (
                      <span key={i} className="tag">{t}</span>
                    ))}
                  </div>

                  <div style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
                    color: 'var(--text-muted)', letterSpacing: '0.1em',
                    textTransform: 'uppercase', marginBottom: '12px',
                  }}>{'// KEY CONTRIBUTIONS'}</div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {proj.highlights.map((h, i) => (
                      <li key={i} style={{
                        display: 'flex', alignItems: 'flex-start', gap: '10px',
                        color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7,
                      }}>
                        <span style={{
                          color: 'var(--cyan)', fontFamily: 'var(--font-mono)',
                          fontSize: '0.7rem', flexShrink: 0, marginTop: '2px',
                        }}>▶</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })()}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #experience .section-container > div > div:first-child {
            display: none;
          }
          #experience .section-container > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ExperienceSection;
