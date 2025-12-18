import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt, FaTag, FaCalendar } from 'react-icons/fa';
import Badge from './Badge';

const formatType = (type) =>
  type
    .split('_')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');

const formatDate = (date) => {
  if (!date) return '';
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return date; // fallback to raw string if invalid
  return parsed.toLocaleDateString(undefined, { month: 'short', year: 'numeric' });
};

const ProjectCard = ({ project }) => {
  const [description, setDescription] = useState('');
  const navigate = useNavigate();
  const assetUrl = (path) => {
    if (!path) return '';
    if (/^https?:\/\//i.test(path)) return path;
    const base = import.meta.env.BASE_URL || '/';
    const trimmedBase = base.endsWith('/') ? base : `${base}/`;
    const trimmedPath = path.startsWith('/') ? path.slice(1) : path;
    return `${trimmedBase}${trimmedPath}`;
  };

  useEffect(() => {
    if (project.descriptionFile) {
      fetch(assetUrl(project.descriptionFile))
        .then(res => res.text())
        .then(text => setDescription(text))
        .catch(() => setDescription('No description available.'));
    }
  }, [project.descriptionFile]);

  const handleCardClick = () => {
    navigate(`/project/${project.id}`);
  };

  return (
    <article className="project-card" onClick={handleCardClick} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter') handleCardClick(); }}>
      <div className="project-thumb">
        {project.badge && <Badge type={project.badge} />}
        <img
          src={assetUrl(project.cover)}
          alt={project.title}
          onError={(e) => {
            e.currentTarget.src = 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1600&q=80';
          }}
        />
      </div>

      <div className="project-body">
        <h3 className="project-title">{project.title}</h3>

        <div className="project-meta">
          {project.type && (
            <div className="project-type" aria-label={`Project type: ${formatType(project.type)}`}>
              <FaTag size={12} />
              <span>{formatType(project.type)}</span>
            </div>
          )}
          {project.date && (
            <div className="project-date" aria-label={`Project date: ${formatDate(project.date)}`}>
              <FaCalendar size={12} />
              <span>{formatDate(project.date)}</span>
            </div>
          )}
        </div>

        <p className="project-desc">{description || 'Loading...'}</p>

        <div className="tags">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>

        <div className="card-actions">
          <div style={{ display: 'flex', gap: '10px' }}>
            {project.github && project.github !== '#' && (
              <a href={project.github} className="link" aria-label="GitHub" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                <FaGithub size={16} />
              </a>
            )}
            {project.demo && project.demo !== '#' && (
              <a href={project.demo} className="link" aria-label="Live demo" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                <FaExternalLinkAlt size={14} />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;