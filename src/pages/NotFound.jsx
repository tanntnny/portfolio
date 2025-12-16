import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="content">
      <div className="hero-card glass" style={{ textAlign: 'center' }}>
        <div className="eyebrow">404</div>
        <h1 className="headline">Page not found</h1>
        <p className="muted">This route is empty. Use the button below to head back.</p>
        <div className="cta-row" style={{ justifyContent: 'center' }}>
          <Link className="btn btn-primary" to="/">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
