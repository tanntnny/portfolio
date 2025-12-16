import { Link } from 'react-router-dom';
import { FaStar, FaGraduationCap, FaFolder, FaEnvelope, FaFileAlt } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  const navItems = [
    { icon: FaStar, label: 'Highlights', path: '#highlights' },
    { icon: FaGraduationCap, label: 'Education', path: '#education' },
    { icon: FaFolder, label: 'Projects', path: '#projects' },
    { icon: FaEnvelope, label: 'Contact', path: '#contact' },
    { icon: FaFileAlt, label: 'Resume', path: '/resume.pdf', external: true }
  ];

  const navLinkStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 12px',
    borderRadius: '12px',
    transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    cursor: 'pointer',
    position: 'relative'
  };

  const labelStyle = {
    whiteSpace: 'nowrap',
    fontSize: '14px',
    fontWeight: '500'
  };

  return (
    <header className="navbar">
      <div className="nav-inner glass">
        <Link to="/" className="brand">
          tanntnny
        </Link>

        <nav className="nav-links" style={{ display: 'flex', gap: '8px' }}>
          {navItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <a
                key={idx}
                href={item.path}
                className={`nav-link`}
                style={navLinkStyle}
                onMouseEnter={() => setHoveredLink(idx)}
                onMouseLeave={() => setHoveredLink(null)}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
              >
                <Icon size={20} />
                {hoveredLink === idx && (
                  <span style={labelStyle}>
                    {item.label}
                  </span>
                )}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;