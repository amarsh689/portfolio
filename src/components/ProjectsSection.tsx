import React, { useState } from 'react';
import { experiences } from '../data/portfolio';

const allProjects = experiences.flatMap(exp =>
  exp.projects.map(p => ({
    ...p,
    company: exp.company,
    period: exp.period,
  }))
);

const allTags = ['All', '.NET', 'React', 'Azure', 'Mobile', 'Fintech', 'Healthcare'];

const tagFilter: Record<string, string[]> = {
  '.NET': ['ASP.NET', '.NET', 'C#', 'Entity Framework', 'Web API'],
  'React': ['React', 'Redux', 'TypeScript', 'React Native'],
  'Azure': ['Azure', 'AKS', 'SignalR', 'Redis', 'Docker'],
  'Mobile': ['React Native'],
  'Fintech': ['Vault Business', 'Forex', 'Exchange'],
  'Healthcare': ['Meddy', 'Healthcare'],
};

const getProjectColor = (name: string) => {
  if (name.includes('Baithak')) return '#00f5ff';
  if (name.includes('Meddy')) return '#7b2fff';
  if (name.includes('Book My Desk') || name.includes('BMD')) return '#0080ff';
  if (name.includes('Vault')) return '#ff6b35';
  if (name.includes('Notification')) return '#00ff88';
  if (name.includes('Microservice') || name.includes('Container')) return '#ffcc00';
  if (name.includes('ESmart')) return '#ff4488';
  if (name.includes('Yoke') || name.includes('POS')) return '#44ffaa';
  if (name.includes('Client Connect')) return '#aa44ff';
  return '#00f5ff';
};

const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = allProjects.filter(p => {
    if (activeFilter === 'All') return true;
    const keywords = tagFilter[activeFilter] || [];
    return p.tech.some(t => keywords.some(k => t.includes(k))) ||
      p.name.includes(activeFilter);
  });

  return (
    <section id="projects" style={{ padding: '100px 0', position: 'relative', zIndex: 2 }}>
      <div className="section-container">
        <div className="section-title">Projects</div>
        <div className="section-line" />

        <p style={{
          color: 'var(--text-secondary)', marginBottom: '36px',
          maxWidth: '500px', lineHeight: 1.8,
        }}>
          10+ enterprise projects across fintech, healthcare, and workplace productivity.
          Click any project to explore details.
        </p>

        {/* Filter bar */}
        <div style={{
          display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '40px',
        }}>
          {allTags.map(tag => (
            <button key={tag} onClick={() => setActiveFilter(tag)} style={{
              padding: '8px 20px',
              background: activeFilter === tag ? 'rgba(0,245,255,0.08)' : 'transparent',
              border: activeFilter === tag ? '1px solid var(--cyan)' : '1px solid rgba(0,245,255,0.2)',
              borderRadius: '4px', cursor: 'pointer',
              fontFamily: 'var(--font-display)', fontSize: '0.65rem',
              fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
              color: activeFilter === tag ? 'var(--cyan)' : 'var(--text-muted)',
              transition: 'all 0.2s',
              boxShadow: activeFilter === tag ? '0 0 8px rgba(0,245,255,0.2)' : 'none',
            }}>{tag}</button>
          ))}
        </div>

        {/* Projects grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '24px',
        }}>
          {filtered.map((proj, idx) => {
            const color = getProjectColor(proj.name);
            const isExpanded = expanded === proj.name;
            return (
              <div
                key={idx}
                onClick={() => setExpanded(isExpanded ? null : proj.name)}
                className="glass-card"
                style={{
                  padding: '28px',
                  cursor: 'pointer',
                  border: isExpanded
                    ? `1px solid ${color}55`
                    : '1px solid rgba(0,245,255,0.1)',
                  boxShadow: isExpanded
                    ? `0 0 20px ${color}20, inset 0 0 30px ${color}05`
                    : 'none',
                  transition: 'all 0.3s',
                  position: 'relative', overflow: 'hidden',
                }}
              >
                {/* Top accent line */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                  background: `linear-gradient(90deg, ${color}, transparent)`,
                  boxShadow: `0 0 8px ${color}`,
                }} />

                {/* Company badge */}
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
                  color: 'var(--text-muted)', letterSpacing: '0.1em',
                  textTransform: 'uppercase', marginBottom: '10px',
                }}>
                  {proj.company.split(',')[0]} • {proj.period}
                </div>

                {/* Project name */}
                <h3 style={{
                  fontFamily: 'var(--font-display)', fontWeight: 700,
                  fontSize: '0.95rem', letterSpacing: '0.05em',
                  color: isExpanded ? color : 'var(--text-primary)',
                  marginBottom: '10px', lineHeight: 1.4,
                  transition: 'color 0.3s',
                }}>{proj.name}</h3>

                {/* Description */}
                <p style={{
                  color: 'var(--text-secondary)', fontSize: '0.88rem',
                  lineHeight: 1.7, marginBottom: '16px',
                }}>{proj.description}</p>

                {/* Tech tags */}
                <div style={{
                  display: 'flex', flexWrap: 'wrap', gap: '5px',
                  marginBottom: isExpanded ? '20px' : '0',
                }}>
                  {proj.tech.slice(0, isExpanded ? proj.tech.length : 4).map((t, i) => (
                    <span key={i} className="tag" style={{
                      borderColor: `${color}40`, color: `${color}cc`,
                    }}>{t}</span>
                  ))}
                  {!isExpanded && proj.tech.length > 4 && (
                    <span className="tag" style={{ color: 'var(--text-muted)' }}>
                      +{proj.tech.length - 4} more
                    </span>
                  )}
                </div>

                {/* Expanded highlights */}
                {isExpanded && (
                  <div style={{ animation: 'fadeInUp 0.3s ease' }}>
                    <div style={{
                      fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
                      color: 'var(--text-muted)', letterSpacing: '0.1em',
                      textTransform: 'uppercase', marginBottom: '12px',
                      paddingTop: '4px', borderTop: `1px solid ${color}20`,
                    }}>{/* Highlights */}</div>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {proj.highlights.map((h, i) => (
                        <li key={i} style={{
                          display: 'flex', alignItems: 'flex-start', gap: '8px',
                          color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.6,
                        }}>
                          <span style={{ color, flexShrink: 0, marginTop: '3px', fontSize: '0.6rem' }}>◆</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Expand hint */}
                <div style={{
                  position: 'absolute', bottom: '16px', right: '16px',
                  fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
                  color: 'var(--text-muted)', letterSpacing: '0.05em',
                }}>
                  {isExpanded ? 'COLLAPSE ▲' : 'EXPAND ▼'}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
