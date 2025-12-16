import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
  const { id } = useParams();
  return (
    <div className="content">
      <div className="hero-card glass">
        <div className="eyebrow">Case study</div>
        <h1 className="headline">Project ID: {id}</h1>
        <p className="muted">This is a placeholder. Replace with your full write-up, visuals, and links.</p>
      </div>
    </div>
  );
};
export default ProjectDetails;