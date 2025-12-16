import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  return (
    <article className="project-card">
      <div className="project-thumb">
        <img src={project.image} alt={project.title} />
      </div>

      <div className="project-body">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>

        <div className="tags">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>

        <div className="card-actions">
          <Link to={`/project/${project.id}`} className="link">
            Case study
            <FaExternalLinkAlt size={14} />
          </Link>

          <div style={{ display: 'flex', gap: '10px' }}>
            {project.github && (
              <a href={project.github} className="link" aria-label="GitHub">
                <FaGithub size={16} />
              </a>
            )}
            {project.demo && (
              <a href={project.demo} className="link" aria-label="Live demo">
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