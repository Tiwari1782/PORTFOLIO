import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub as faGithubBrand } from "@fortawesome/free-brands-svg-icons";

function Projects() {
  const projects = [
    {
      title: "FarmConnect",
      description:
        "FarmConnect is a revolutionary direct farm-to-consumer marketplace designed to empower farmers by eliminating middlemen and enabling them to sell their crops directly to customers.",
      tech: ["Node.js", "HTML", "CSS", "JS", "SQL"],
      GitLink: "https://github.com/Tiwari1782/FARMCONNECT",
      liveLink: "#",
      featured:  false,
    },
    {
      title:  "F1-RACE-REPLAY",
      description:
        "A Python application for visualizing Formula 1 race telemetry and replaying race events with interactive controls and a graphical interface.",
      tech: ["React", "Firebase", "Tailwind CSS"],
      GitLink: "https://github.com/Tiwari1782/F1-RACE-REPLAY-",
      liveLink:  "#",
      featured: false,
    },
    {
      title: "PING PONG GAME",
      description: 
        "An interactive Ping Pong game built with HTML, CSS, and JavaScript featuring responsive controls and engaging gameplay.",
      tech: ["HTML", "CSS", "JS"],
      GitLink: "https://github.com/Tiwari1782/PONG-GAME---MINI-PROJECT",
      liveLink: "#",
      featured: false,
    },
    {
      title: "Blog Platform",
      description:
        "A blogging platform with markdown support, user authentication, and commenting functionality.",
      tech: ["Next.js", "MongoDB", "NextAuth"],
      GitLink: "#",
      liveLink: "#",
      featured: false,
    },
    {
      title: "Chat Application",
      description:
        "Real-time messaging application with Socket.io, user presence, and message history.",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
      GitLink: "#",
      liveLink: "#",
      featured: false,
    },
    {
      title: "Music Player",
      description:
        "A feature-rich music player with playlist management, search, and playback controls.",
      tech: ["React", "Context API", "Tailwind CSS"],
      GitLink: "#",
      liveLink: "#",
      featured: false,
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-intro">
          <p>Here are some of my recent projects</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card ${project.featured ? "featured" : ""}`}
            >
              <div className="project-card-content">
                {project.featured && (
                  <span className="featured-badge">Featured</span>
                )}

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="tech-stack">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a 
                    href={project.GitLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-outline"
                  >
                    <FontAwesomeIcon icon={faGithubBrand} /> Code
                  </a>
                  <a 
                    href={project.liveLink}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-primary"
                  >
                    <FontAwesomeIcon icon={faExternalLinkAlt} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;