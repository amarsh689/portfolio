import React from 'react';
import { education, certifications } from '../data/portfolio';

const EducationSection: React.FC = () => {
  return (
    <section id="education" style={{ padding: '100px 0', position: 'relative', zIndex: 2 }}>
      <div className="section-container">
        <div className="section-title">Education & Certifications</div>
        <div className="section-line" />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '48px',
        }}>
          {/* Education */}
          <div>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
              color: 'var(--text-muted)', letterSpacing: '0.15em',
              textTransform: 'uppercase', marginBottom: '24px',
            }}>
              {'// ACADEMIC BACKGROUND'}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {education.map((edu, idx) => (
                <div key={idx} className="glass-card" style={{
                  padding: '24px',
                  display: 'flex', alignItems: 'flex-start', gap: '16px',
                }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: '8px', flexShrink: 0,
                    background: 'rgba(0,245,255,0.08)',
                    border: '1px solid rgba(0,245,255,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.4rem',
                  }}>{edu.icon}</div>
                  <div>
                    <div style={{
                      fontFamily: 'var(--font-display)', fontWeight: 700,
                      fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '4px',
                    }}>{edu.degree}</div>
                    <div style={{
                      color: 'var(--cyan)', fontSize: '0.85rem', fontWeight: 600,
                      marginBottom: '4px',
                    }}>{edu.institution}</div>
                    {edu.board && (
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--text-muted)' }}>
                        {edu.board}
                      </div>
                    )}
                    <div style={{
                      fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
                      color: 'var(--text-muted)', letterSpacing: '0.08em',
                    }}>{edu.location}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
              color: 'var(--text-muted)', letterSpacing: '0.15em',
              textTransform: 'uppercase', marginBottom: '24px',
            }}>
              {'// CERTIFICATIONS'}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {certifications.map((cert, idx) => (
                <div key={idx} className="glass-card" style={{
                  padding: '20px 24px',
                  display: 'flex', alignItems: 'center', gap: '16px',
                  position: 'relative', overflow: 'hidden',
                }}>
                  {/* Left accent */}
                  <div style={{
                    position: 'absolute', left: 0, top: 0, bottom: 0, width: '3px',
                    background: idx < 2
                      ? 'linear-gradient(180deg, #00f5ff, #0080ff)'
                      : 'linear-gradient(180deg, #7b2fff, #0080ff)',
                    boxShadow: idx < 2
                      ? '0 0 8px rgba(0,245,255,0.5)'
                      : '0 0 8px rgba(123,47,255,0.5)',
                  }} />

                  <div style={{
                    width: 40, height: 40, borderRadius: '8px', flexShrink: 0,
                    background: 'rgba(0,245,255,0.05)',
                    border: '1px solid rgba(0,245,255,0.15)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.3rem',
                  }}>{cert.icon}</div>

                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontFamily: 'var(--font-display)', fontWeight: 700,
                      fontSize: '0.82rem', color: 'var(--text-primary)', marginBottom: '2px',
                      letterSpacing: '0.03em',
                    }}>{cert.title}</div>
                    <div style={{
                      fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
                      color: 'var(--text-muted)',
                    }}>{cert.issuer}</div>
                  </div>

                  <div style={{
                    fontFamily: 'var(--font-display)', fontWeight: 800,
                    fontSize: '0.78rem', color: 'var(--cyan)',
                    letterSpacing: '0.1em',
                    padding: '4px 10px',
                    border: '1px solid rgba(0,245,255,0.2)',
                    borderRadius: '4px',
                    background: 'rgba(0,245,255,0.05)',
                  }}>{cert.code}</div>
                </div>
              ))}
            </div>

            {/* Languages */}
            <div style={{ marginTop: '32px' }}>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
                color: 'var(--text-muted)', letterSpacing: '0.15em',
                textTransform: 'uppercase', marginBottom: '16px',
              }}>
                {'// LANGUAGES'}
              </div>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {['English', 'Hindi', 'Gujarati'].map((lang, i) => (
                  <div key={i} style={{
                    padding: '8px 20px',
                    background: 'rgba(0,245,255,0.05)',
                    border: '1px solid rgba(0,245,255,0.15)',
                    borderRadius: '20px',
                    fontFamily: 'var(--font-body)', fontWeight: 600,
                    fontSize: '0.85rem', color: 'var(--text-primary)',
                  }}>{lang}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
