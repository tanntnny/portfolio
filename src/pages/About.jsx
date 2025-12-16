import React from 'react';

const About = () => {
  return (
    <div className="content">
      <div className="hero-card glass">
        <div className="eyebrow">About</div>
        <h1 className="headline">Placeholder bio and values</h1>
        <p className="muted">
          Use this space to describe your journey, strengths, and the kind of work you enjoy. Mention recent wins,
          teams you've partnered with, and the impact you delivered. Keep it concise and outcomes-focused.
        </p>
        <div className="stat-grid">
          <div className="stat">
            <h4>Expertise</h4>
            <strong>Data · ML · Product</strong>
          </div>
          <div className="stat">
            <h4>Location</h4>
            <strong>Remote-friendly</strong>
          </div>
          <div className="stat">
            <h4>Interests</h4>
            <strong>Analytics & AI</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
