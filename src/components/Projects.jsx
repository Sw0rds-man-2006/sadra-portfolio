import React from "react";

const projects = [
  {
    title: "Web Portfolio",
    description:
      "A personal portfolio website showcasing my skills, projects, and experience.",
    githubLink: "https://github.com/username/web-portfolio",
  },
  {
    title: "E-commerce Website",
    description:
      "An e-commerce website with features like product listing, cart, and user authentication.",
    githubLink: "https://github.com/username/e-commerce-website",
  },
];

const Projects = () => {
  return (
    <section className="w-full max-w-[800px] bg-neutral-900 rounded-xl shadow-xl p-8 fade-in-left">
      <h2 className="text-white text-xl font-semibold mb-6 text-center">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="flex flex-col bg-neutral-800 rounded-lg border border-neutral-700 p-6"
          >
            <span className="text-yellow-400 font-semibold text-lg mb-3">
              {project.title}
            </span>
            <p className="text-white text-sm mb-3">{project.description}</p>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 text-sm mt-4 hover:underline"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
