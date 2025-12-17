import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import Badge from "../components/Badge";
import { useState, useEffect } from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaFileAlt } from 'react-icons/fa';

const Home = () => {
  const achievements = [
    {
      image: "images/aihack2025.jpeg",
      caption: "Winner - AIHack 2025 Hackathon",
      organization: "AIRA & AIFUL Co., Ltd.",
      date: "December 2025",
      badge: "trophy"
    },
    {
      image: "images/geneva2025.jpeg",
      caption: "Bronze Medalist - International Exhibition of Inventions Geneva",
      organization: "Palexpo Geneva, Switzerland (Selected as Thailand representative team)",
      date: "April 2025",
      badge: "bronze_medal"
    },
    {
      image: "images/toi2023.jpeg",
      caption: "Silver Medalist - Thailand Olympiad in Informatics (TOI19)",
      organization: "POSN, Thailand",
      date: "May 2023",
      badge: "silver_medal"
    },
    {
      image: "images/ysc2024.jpeg",
      caption: "Winner - YSC 2024 (Computer Science)",
      organization: "National Science and Technology Development Agency (NSTDA), Thailand",
      date: "June 2024",
      badge: "trophy"
    },
    {
      image: "images/sdnc2023.jpeg",
      caption: "Best Award - Suan Dusit National Conference 2023",
      organization: "Suan Dusit University, Thailand",
      date: "June 2023",
      badge: "star"
    },
    {
      image: "images/ysc2023.jpeg",
      caption: "Honorable Mention - YSC 2023 (Computer Science)",
      organization: "National Science and Technology Development Agency (NSTDA), Thailand",
      date: "November 2023",
      badge: "star"
    },
  ];

  const timeline = [
    {
      title: "High School",
      description: "Princess Chulabhorn Science High School Chonburi, Thailand",
      date: "2021 - 2024"
    },
    {
      title: "University",
      description: "Information and Communication Engineering - Chulalongkorn University, Thailand",
      date: "2024 - Present"
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % achievements.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + achievements.length) % achievements.length);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const getPrevIndex = () => (currentSlide - 1 + achievements.length) % achievements.length;
  const getNextIndex = () => (currentSlide + 1) % achievements.length;

  return (
    <div className="content">
      <div className="intro-grid">
        {/* Left: Profile image and contact actions */}
        <div className="intro-left section-box pattern-box" style={{ alignItems: 'center' }}>
          <img
            className="profile-image"
            src="/images/profile.jpeg"
            alt="Peraga Puangtong portrait"
            onError={(e) => {
              const current = e.currentTarget.src;
              if (current.endsWith('/images/profile.png') || current.includes('profile.png')) {
                e.currentTarget.src = '/images/profile.jpg';
              } else {
                e.currentTarget.src = '/vite.svg';
              }
            }}
          />
          <div className="contact-card" style={{ width: '100%' }}>
            <a href="mailto:puangtong.t@hotmail.com" className="icon-btn icon-btn--expand" aria-label="Email">
              <FaEnvelope size={18} />
              <span className="label">puangtong.t@hotmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/peraga-puangtong-206965372/" className="icon-btn icon-btn--expand" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={18} />
              <span className="label">LinkedIn</span>
            </a>
            <a href="https://github.com/tanntnny" className="icon-btn icon-btn--expand" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <FaGithub size={18} />
              <span className="label">GitHub</span>
            </a>
            <a href="/resume.pdf" className="icon-btn icon-btn--expand" aria-label="Resume" target="_blank" rel="noopener noreferrer">
              <FaFileAlt size={18} />
              <span className="label">Resume</span>
            </a>
          </div>
        </div>

        {/* Right: Name, tags, bio, CTAs with dotted backdrop */}
        <div className="intro-right hero-card intro-card">
          <h1 className="headline" style={{ margin: '0 0 12px 0' }}>Peraga Puangtong</h1>
          <div className="tags" style={{ justifyContent: 'flex-start' }}>
            <span className="tag">Data Science</span>
            <span className="tag">Data Engineering</span>
            <span className="tag">Artificial Intelligence</span>
            <span className="tag">ML Deployment</span>
          </div>
          <p className="muted" style={{ marginTop: '14px', maxWidth: '60ch' }}>
            Engineering student at Chulalongkorn University with a strong passion for data science, machine learning, and product development. Experienced in building end-to-end data solutions that drive business insights.
          </p>
        </div>
      </div>

      {/* Achievements Slideshow */}
      <div id="highlights" className="section-box pattern-box section-constrain" style={{ marginBottom: '64px' }}>
        <h2 className="section-title">Highlights</h2>
        
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '20px', justifyContent: 'center' }}>
          {/* Previous Slide Thumbnail */}
          <div 
            onClick={prevSlide}
            style={{
              width: '200px',
              height: '400px',
              borderRadius: '12px',
              overflow: 'hidden',
              cursor: 'pointer',
              opacity: 0.5,
              transition: 'all 0.3s ease',
              transform: 'scale(0.85)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              position: 'relative'
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '0.5'}
          >
            <img
              src={achievements[getPrevIndex()].image}
              alt={achievements[getPrevIndex()].caption}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(0,0,0,0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <span style={{ fontSize: '32px', color: '#fff' }}>‹</span>
            </div>
          </div>

          {/* Current Slide - Center */}
          <div style={{
            width: '1000px',
            height: '500px',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: 'var(--shadow)',
            position: 'relative',
            background: 'var(--card)',
            transition: 'transform 0.3s ease'
          }}>
            {achievements[currentSlide].badge && (
              <Badge type={achievements[currentSlide].badge} />
            )}
            <img
              src={achievements[currentSlide].image}
              alt={achievements[currentSlide].caption}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.85), transparent)',
              padding: '40px 24px 24px',
              color: '#fff'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div>
                  <p style={{ margin: 0, fontSize: '20px', fontWeight: '600', lineHeight: '1.4' }}>
                    {achievements[currentSlide].caption}
                  </p>
                  <p style={{ margin: '8px 0 0 0', fontSize: '14px', color: '#b3b3b3', fontWeight: '500' }}>
                    {achievements[currentSlide].organization}
                  </p>
                </div>
                <p style={{ margin: 0, fontSize: '13px', color: '#999', fontWeight: '500' }}>
                  {achievements[currentSlide].date}
                </p>
              </div>
            </div>
          </div>

          {/* Next Slide Thumbnail */}
          <div 
            onClick={nextSlide}
            style={{
              width: '200px',
              height: '400px',
              borderRadius: '12px',
              overflow: 'hidden',
              cursor: 'pointer',
              opacity: 0.5,
              transition: 'all 0.3s ease',
              transform: 'scale(0.85)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              position: 'relative'
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '0.5'}
          >
            <img
              src={achievements[getNextIndex()].image}
              alt={achievements[getNextIndex()].caption}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(0,0,0,0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <span style={{ fontSize: '32px', color: '#fff' }}>›</span>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '24px' }}>
          {achievements.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              style={{
                width: currentSlide === index ? '32px' : '10px',
                height: '10px',
                borderRadius: '5px',
                border: 'none',
                background: currentSlide === index ? 'var(--accent)' : 'var(--border)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <p style={{ textAlign: 'center', marginTop: '16px', fontSize: '14px', color: 'var(--muted)' }}>
          Use arrow keys or click thumbnails to navigate
        </p>
      </div>

      {/* Timeline Section */}
      <div id="education" className="section-box pattern-box section-constrain" style={{ marginBottom: '64px' }}>
        <h2 className="section-title" style={{ marginBottom: '24px' }}>Education</h2>
        <div style={{ position: 'relative', paddingLeft: '40px' }}>
          {timeline.map((item, index) => (
            <div key={index} style={{ marginBottom: '32px', position: 'relative' }}>
              {/* Timeline dot */}
              <div style={{
                position: 'absolute',
                left: '-46px',
                top: '6px',
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                background: 'var(--accent)',
                border: '3px solid var(--bg)',
                boxShadow: '0 0 0 2px var(--accent)'
              }} />
              
              {/* Timeline line */}
              {index !== timeline.length - 1 && (
                <div style={{
                  position: 'absolute',
                  left: '-39px',
                  top: '24px',
                  width: '2px',
                  height: 'calc(100% + 32px)',
                  background: 'var(--border)'
                }} />
              )}

              {/* Content card */}
              <div style={{
                padding: '16px 20px',
                borderRadius: '12px',
                border: '1px solid var(--border)',
                background: 'var(--card)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                  <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '600' }}>{item.title}</h3>
                  <span style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: '500' }}>{item.date}</span>
                </div>
                <p style={{ margin: '4px 0 0 0', fontSize: '14px', color: 'var(--muted)' }}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section id="projects" className="section-box pattern-box section-constrain" style={{ marginBottom: '64px' }}>
        <h2 className="projects-title">Highlighted Projects</h2>

        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section id="contact" className="section-box pattern-box section-constrain" style={{ marginTop: '64px', textAlign: 'center' }}>
        <h2 className="section-title" style={{ marginBottom: '16px' }}>Get in Touch</h2>
        <p style={{ fontSize: '16px', color: 'var(--muted)', marginBottom: '24px' }}>
          Have a project or question? Feel free to reach out.
        </p>
        <a href="mailto:your.email@example.com" className="btn btn-primary">
          Send Email
        </a>
      </section>
    </div>
  );
};

export default Home;
