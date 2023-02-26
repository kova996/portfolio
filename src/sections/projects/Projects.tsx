import "./Projects.css";

const Projects: React.FC = () => {
    const projects = ["a","b","c","d","e","f"];
  return (
    <div className="projects">
      <div className="projects-heading">
        <h1 className="projects-title">
            Projects
        </h1>
        <p className="projects-summary">
            You can become better if you put some additional work in things you like so here are some of the projects I've worked on...
        </p>
      </div>
      <div className="projects-list">
        {projects.map((el, idx)=>{
            return <div className="project-card">
                {el}
            </div>
        })}
        
      </div>
    </div>
  );
};

export default Projects;
