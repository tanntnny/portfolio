import { Link } from 'react-router-dom';
import { FaStar, FaGraduationCap, FaFolder, FaEnvelope, FaFileAlt } from 'react-icons/fa';

const Navbar = () => {
  const navItems = [
    { icon: FaStar, label: 'Highlights', path: '#highlights' },
    { icon: FaGraduationCap, label: 'Education', path: '#education' },
    { icon: FaFolder, label: 'Projects', path: '#projects' },
    { icon: FaEnvelope, label: 'Contact', path: '#contact' },
    { icon: FaFileAlt, label: 'Resume', path: '/resume.pdf', external: true }
  ];

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
                className="icon-btn icon-btn--expand"
                aria-label={item.label}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
              >
                <Icon size={18} />
                <span className="label">{item.label}</span>
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;