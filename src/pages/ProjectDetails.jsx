import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { FaTag, FaCalendar, FaDownload } from 'react-icons/fa';
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

const formatDateRange = (start_date, end_date) => {
  if (!start_date) return '';
  const startStr = formatDate(start_date);
  if (!end_date) return startStr;
  const endStr = formatDate(end_date);
  return `${startStr} - ${endStr}`;
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
        <h1 className="headline" style={{ marginBottom: '24px' }}>{project.title}</h1>
        
        <div className="project-meta" style={{ marginBottom: '24px' }}>
          {project.badge && <Badge type={project.badge} />}
          {project.type && (
            <div className="project-type" aria-label={`Project type: ${formatType(project.type)}`}>
              <FaTag size={12} />
              <span>{formatType(project.type)}</span>
            </div>
          )}
          {project.start_date && (
            <div className="project-date" aria-label={`Project date: ${formatDateRange(project.start_date, project.end_date)}`}>
              <FaCalendar size={12} />
              <span>{formatDateRange(project.start_date, project.end_date)}</span>
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
              aspectRatio: '16 / 9',
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
                img: ({ node, alt, ...props }) => (
                  <div style={{ margin: '24px 0' }}>
                    <img
                      {...props}
                      alt={alt}
                      style={{
                        width: '100%',
                        borderRadius: '12px',
                        objectFit: 'contain',
                        display: 'block'
                      }}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    {alt && (
                      <p style={{
                        marginTop: '8px',
                        fontSize: '14px',
                        color: 'var(--muted)',
                        textAlign: 'center',
                        fontStyle: 'italic',
                        lineHeight: '1.5'
                      }}>
                        {alt}
                      </p>
                    )}
                  </div>
                ),
                a: ({ node, href, children, ...props }) => {
                  // Check if link text starts with "download:" for download buttons
                  const isDownload = children && children.toString().toLowerCase().startsWith('download:');
                  if (isDownload) {
                    const buttonText = children.toString().replace(/^download:\s*/i, '');
                    return (
                      <a
                        href={href}
                        download
                        style={{ 
                          display: 'inline-flex', 
                          alignItems: 'center', 
                          gap: '6px',
                          padding: '6px 12px',
                          fontSize: '14px',
                          fontWeight: '600',
                          color: 'var(--accent)',
                          textDecoration: 'none',
                          border: '1px solid var(--accent)',
                          borderRadius: '8px',
                          background: 'rgba(124, 58, 237, 0.08)',
                          transition: 'all 0.2s ease'
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.background = 'rgba(124, 58, 237, 0.16)';
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.background = 'rgba(124, 58, 237, 0.08)';
                        }}
                      >
                        <FaDownload size={12} />
                        {buttonText}
                      </a>
                    );
                  }
                  return <a href={href} {...props} target="_blank" rel="noopener noreferrer">{children}</a>;
                }
              }}
            >
              {markdown}
            </ReactMarkdown>
          </div>
        )}

        <div style={{ display: 'flex', gap: '12px', marginTop: '32px', paddingTop: '32px', borderTop: '1px solid var(--border)', flexWrap: 'wrap' }}>
          {project.github && project.github !== '#' && (
            <a href={project.github} className="btn btn-ghost" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          )}
          {project.demo && project.demo !== '#' && (
            <a href={project.demo} className="btn btn-ghost" target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;