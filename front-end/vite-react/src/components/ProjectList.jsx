function ProjectList() {
      const projects = [
    {
      title: "Project 1",
      description: "Building Backend of a website using Django",
      link: "#"
    },
    {
      title: "Project 2",
      description: "Computer Vision Project",
      link: "#"
    },
    {
      title: "Project 3",
      description: "An E-Commerce web Application using Spring Boot and React",
      link: "#"
    }
    ]
    
    return (
        <section id="projects" className="projects-section">
            <h2>Projects</h2>
            <div className="projects-list">
                {projects.map((project, index) => (
                    <div key={index} className="project-item">
                        <h3>{project.title}</h3>
                        <h3>{project.description}</h3>
                         <a href={project.link} target='_blank' rel='noopener noreferrer'>View Project</a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ProjectList;