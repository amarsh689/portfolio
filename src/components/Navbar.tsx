import React, { useState, useEffect } from 'react';

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navItems.map(n => n.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      padding: '16px 32px',
      background: scrolled
        ? 'rgba(2, 5, 16, 0.95)'
        : 'transparent',
      borderBottom: scrolled ? '1px solid rgba(0,245,255,0.1)' : 'none',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      transition: 'all 0.3s',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}>
      {/* Logo */}
      <div style={{
        fontFamily: 'var(--font-display)', fontSize: '1.1rem',
        fontWeight: 800, color: 'var(--cyan)',
        letterSpacing: '0.15em', cursor: 'pointer',
        textShadow: '0 0 20px rgba(0,245,255,0.5)',
      }} onClick={() => scrollTo('#hero')}>
        AP<span style={{ color: 'var(--text-primary)' }}>.</span>DEV
      </div>

      {/* Desktop Nav */}
      <ul style={{
        display: 'flex', listStyle: 'none', gap: '32px', alignItems: 'center',
      }} className="desktop-nav">
        {navItems.map(item => (
          <li key={item.label}>
            <button
              onClick={() => scrollTo(item.href)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: 'var(--font-display)', fontSize: '0.68rem',
                fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase',
                color: active === item.href.replace('#', '')
                  ? 'var(--cyan)' : 'var(--text-secondary)',
                transition: 'all 0.2s', padding: '4px 0',
                borderBottom: active === item.href.replace('#', '')
                  ? '1px solid var(--cyan)' : '1px solid transparent',
                textShadow: active === item.href.replace('#', '')
                  ? '0 0 10px rgba(0,245,255,0.5)' : 'none',
              }}
            >{item.label}</button>
          </li>
        ))}
      </ul>

      {/* Hire Me btn */}
      <a href="mailto:amarpatil689@gmail.com" className="btn-secondary"
        style={{ fontSize: '0.65rem', padding: '8px 18px', display: 'none' }}
        id="hire-btn">
        Hire Me
      </a>

      {/* Mobile burger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          background: 'none', border: 'none', cursor: 'pointer',
          color: 'var(--cyan)', fontSize: '1.4rem', display: 'none',
        }}
        className="burger-btn"
        aria-label="Menu"
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0,
          background: 'rgba(2, 5, 16, 0.98)',
          borderBottom: '1px solid rgba(0,245,255,0.2)',
          padding: '20px 32px', backdropFilter: 'blur(20px)',
        }}>
          {navItems.map(item => (
            <div key={item.label} style={{ padding: '12px 0', borderBottom: '1px solid rgba(0,245,255,0.05)' }}>
              <button
                onClick={() => scrollTo(item.href)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontFamily: 'var(--font-display)', fontSize: '0.75rem',
                  fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: 'var(--text-primary)', width: '100%', textAlign: 'left',
                }}
              >{item.label}</button>
            </div>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .burger-btn { display: block !important; }
        }
        @media (min-width: 900px) {
          #hire-btn { display: inline-flex !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
