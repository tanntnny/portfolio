import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { FaTag, FaCalendar } from 'react-icons/fa';
import projects from '../data/projects';
import Badge from '../components/Badge';

const formatType = (type) =>
  type
    .split('_')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');

const formatDate = (date) => {
  if (!date) return '';
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return date;
  return parsed.toLocaleDateString(undefined, { month: 'short', year: 'numeric' });
};

const ProjectDetails = () => {
  const { id } = useParams();
  const [markdown, setMarkdown] = useState('');
  const [loading, setLoading] = useState(true);
  
  const project = projects.find(p => p.id === id);
  const assetUrl = (path) => {
    if (!path) return '';
    if (/^https?:\/\//i.test(path)) return path;
    const base = import.meta.env.BASE_URL || '/';
    const trimmedBase = base.endsWith('/') ? base : `${base}/`;
    const trimmedPath = path.startsWith('/') ? path.slice(1) : path;
    return `${trimmedBase}${trimmedPath}`;
  };

  useEffect(() => {
    if (project?.detailFile) {
      setLoading(true);
      fetch(assetUrl(project.detailFile))
        .then(res => res.text())
        .then(text => {
          setMarkdown(text);
          setLoading(false);
        })
        .catch(() => {
          setMarkdown('# Error\n\nCould not load project details.');
          setLoading(false);
        });
    } else {
      setMarkdown('# Project Not Found');
      setLoading(false);
    }
  }, [id, project]);

  if (!project) {
    return (
      <div className="content">
        <div className="hero-card glass">
          <h1 className="headline">Project Not Found</h1>
          <p className="muted">The project you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="content">
      <div className="section-box pattern-box section-constrain" style={{ position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '24px' }}>
          {project.badge && (
            <div style={{ position: 'relative', width: '100%' }}>
              <Badge type={project.badge} />
            </div>
          )}
        </div>
        <h1 className="headline" style={{ marginBottom: '24px' }}>{project.title}</h1>
        
        <div className="project-meta" style={{ marginBottom: '24px' }}>
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
        
        {project.cover && (
          <img 
            src={assetUrl(project.cover)} 
            alt={project.title}
            style={{ 
              width: '100%', 
              borderRadius: '12px', 
              marginBottom: '32px',
              maxHeight: '400px',
              objectFit: 'cover'
            }}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        )}

        {loading ? (
          <p className="muted">Loading project details...</p>
        ) : (
          <div className="markdown-content">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                img: ({ node, ...props }) => (
                  <img
                    {...props}
                    style={{
                      width: '100%',
                      borderRadius: '12px',
                      margin: '24px 0',
                      maxHeight: '500px',
                      objectFit: 'cover'
                    }}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                ),
                a: ({ node, ...props }) => (
                  <a {...props} target="_blank" rel="noopener noreferrer" />
                )
              }}
            >
              {markdown}
            </ReactMarkdown>
          </div>
        )}

        <div style={{ display: 'flex', gap: '12px', marginTop: '32px', paddingTop: '32px', borderTop: '1px solid var(--border)' }}>
          {project.github && project.github !== '#' && (
            <a href={project.github} className="btn btn-ghost" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          )}
          {project.demo && project.demo !== '#' && (
            <a href={project.demo} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;