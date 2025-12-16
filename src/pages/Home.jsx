import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import Badge from "../components/Badge";
import { useState, useEffect } from "react";

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
      <div style={{ 
        textAlign: 'center', 
        marginBottom: '48px',
        backgroundImage: `radial-gradient(circle, rgba(124, 58, 237, 0.15) 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
        borderRadius: '20px',
        padding: '48px'
      }}>
        <h1 style={{ fontSize: '56px', margin: '0 0 16px 0', fontWeight: '700', letterSpacing: '-0.02em' }}>
          Peraga Puangtong
        </h1>
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginBottom: '16px', flexWrap: 'wrap' }}>
          <span className="tag">Data Science</span>
          <span className="tag">Data Engineering</span>
          <span className="tag">Artificial Intelligence</span>
          <span className="tag">Web Development</span>
        </div>
        <p style={{ fontSize: '18px', color: 'var(--muted)', margin: '0', lineHeight: '1.6', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
          Engineering student at Chulalongkorn University with a strong passion for data science, machine learning, and product development. Experienced in building end-to-end data solutions that drive business insights.
        </p>
      </div>

      {/* Achievements Slideshow */}
      <div id="highlights" style={{ marginBottom: '64px', maxWidth: '1100px', marginLeft: 'auto', marginRight: 'auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '28px', marginBottom: '32px', fontWeight: '600' }}>Highlights</h2>
        
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
      <div id="education" style={{ marginBottom: '64px', maxWidth: '900px', marginLeft: 'auto', marginRight: 'auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '28px', marginBottom: '48px', fontWeight: '600' }}>Education</h2>
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

      <section
        className="hero"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(124, 58, 237, 0.15) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          borderRadius: "20px",
          padding: "48px",
          position: "relative",
        }}
      >
        <div>
          <div className="eyebrow">Data · ML · Strategy</div>
          <h1 className="headline">Hi, I'm Peraga Puangtong</h1>
          <p className="muted">
            Placeholder bio — blend of analytics, ML, and thoughtful UX to move
            metrics forward. Based somewhere on Earth.
          </p>
          <div className="cta-row">
            <a className="btn btn-primary" href="#projects">
              View Projects
            </a>
            <a className="btn btn-ghost" href="#">
              Download Resume
            </a>
          </div>
          <div className="stat-grid">
            <div className="stat">
              <h4>Projects</h4>
              <strong>12+</strong>
            </div>
            <div className="stat">
              <h4>Focus</h4>
              <strong>ML & Analytics</strong>
            </div>
            <div className="stat">
              <h4>Availability</h4>
              <strong>Open</strong>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=80"
            alt="Placeholder workspace"
            style={{ width: "100%", borderRadius: "14px" }}
          />
          <p className="muted" style={{ marginTop: "14px" }}>
            Placeholder visual — add a photo, illustration, or a quick stats
            snapshot.
          </p>
        </div>
      </section>

      <section id="projects">
        <div className="projects-header">
          <h2 className="projects-title">Highlighted Projects</h2>
          <a className="link" href="#">
            See all
          </a>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section id="contact" style={{ marginTop: '64px', padding: '48px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '28px', marginBottom: '16px', fontWeight: '600' }}>Get in Touch</h2>
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
