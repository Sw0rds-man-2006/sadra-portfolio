import React from "react";

const projects = [
  {
    title: "Task Manager",
    description:
      "A simple task manager web app for daily schedules and reminders.",
    githubLink: "https://github.com/Err0rGuy/TaskManager.git",
  },
  {
    title: "Online Barber Shop",
    description:
      "A barber shop website with booking features and service listings.",
    githubLink: "https://github.com/Err0rGuy/BarberShop.git",
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
