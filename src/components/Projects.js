import React from "react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack web app for online shopping with payment integration.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    link: "https://yourprojectlink.com",
  },
  {
    title: "OCR Document Processing System",
    description: "A microservices-based OCR system for document recognition and classification.",
    techStack: ["Spring Boot", "Kafka", "PostgreSQL", "WebSockets"],
    link: "https://yourprojectlink.com",
  },
  {
    title: "Real-time Messaging App",
    description: "A chat application with WebSockets for real-time communication.",
    techStack: ["React", "Firebase", "WebSockets"],
    link: "https://yourprojectlink.com",
  },
];

const Projects = () => {
  return (
    <div className="p-6 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-400 mt-2">{project.description}</p>
            <div className="mt-3">
              <span className="text-sm font-semibold text-gray-300">Tech Stack:</span>
              <ul className="flex flex-wrap mt-1">
                {project.techStack.map((tech, idx) => (
                  <li key={idx} className="bg-gray-700 text-xs px-2 py-1 rounded-full mr-2 mt-2">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block text-blue-400 hover:text-blue-300 mt-3 text-sm font-semibold"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
