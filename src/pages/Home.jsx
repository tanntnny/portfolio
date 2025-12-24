import projects from "../data/projects";
import achievements from "../data/achievements";
import ProjectCard from "../components/ProjectCard";
import AchievementCarousel from "../components/AchievementCarousel";
import Badge from "../components/Badge";
import { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaFileAlt } from 'react-icons/fa';

const Home = () => {
  const timeline = [
    {
      title: "High School",
      description: "Princess Chulabhorn Science High School Chonburi, Thailand",
      date: "2021 - 2024",
      logo: "public/images/pcshschon.png"
    },
    {
      title: "University",
      description: "Information and Communication Engineering - Chulalongkorn University, Thailand",
      date: "2024 - Present",
      logo: "public/images/chula.png"
    },
  ];

  // Removed unused local slideshow logic in favor of AchievementCarousel component

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

              {/* Content card with logo */}
              <div className="edu-card">
                <img
                  className="edu-logo"
                  src={item.logo || "/images/logos/placeholder-institute.svg"}
                  alt={`${item.title} logo`}
                  onError={(e) => { e.currentTarget.src = '/vite.svg'; }}
                />
                <div className="edu-content">
                  <div className="edu-header">
                    <h3 className="edu-title">{item.title}</h3>
                    <span className="edu-date">{item.date}</span>
                  </div>
                  <p className="edu-desc">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div id="skills" className="section-box pattern-box section-constrain" style={{ marginBottom: '64px' }}>
        <h2 className="section-title">Skills</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {/* Programming Languages */}
          <div className="hero-card" style={{ padding: '20px', background: 'var(--card)', border: '1px solid var(--border)' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: 'var(--text)' }}>Programming Languages</h3>
            <div className="tags">
              <span className="tag">Python</span>
              <span className="tag">Java</span>
              <span className="tag">C++</span>
              <span className="tag">C</span>
              <span className="tag">JavaScript</span>
              <span className="tag">TypeScript</span>
              <span className="tag">SQL</span>
              <span className="tag">HTML/CSS</span>
            </div>
          </div>

          {/* AI/ML & Data Science */}
          <div className="hero-card" style={{ padding: '20px', background: 'var(--card)', border: '1px solid var(--border)' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: 'var(--text)' }}>AI/ML & Data Science</h3>
            <div className="tags">
              <span className="tag">Numpy</span>
              <span className="tag">Pandas</span>
              <span className="tag">Sklearn</span>
              <span className="tag">TensorFlow</span>
              <span className="tag">PyTorch</span>
              <span className="tag">Transformers</span>
              <span className="tag">HF</span>
              <span className="tag">Peft</span>
            </div>
          </div>

          {/* Frameworks & Tools */}
          <div className="hero-card" style={{ padding: '20px', background: 'var(--card)', border: '1px solid var(--border)' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: 'var(--text)' }}>Frameworks & Tools</h3>
            <div className="tags">
              <span className="tag">React</span>
              <span className="tag">Node.js</span>
              <span className="tag">FastAPI</span>
              <span className="tag">BeautifulSoup</span>
              <span className="tag">Docker</span>
            </div>
          </div>
        </div>
      </div>

      <section id="achievements" className="section-box pattern-box section-constrain" style={{ marginBottom: '64px' }}>
        <h2 className="section-title">Achievements</h2>
        <AchievementCarousel items={achievements} />
      </section>

      <section id="projects" className="section-box pattern-box section-constrain" style={{ marginBottom: '64px' }}>
        <h2 className="projects-title">Projects</h2>

        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
