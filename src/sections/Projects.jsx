// Projects.jsx
import CardProject from "../components/CardProject";
import '../styles/projects.css';
import projectsData from "../data/projectsData";


function Projects() {
  return (
    <div className="projects">
      {projectsData.map((project, index) => (
        <CardProject
          key={index}
          img={project.img}
          title={project.title}
          service={project.service}
          description={project.description}
        />
      ))}
    </div>
  );
}

export default Projects;
