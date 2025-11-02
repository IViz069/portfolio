import * as React from "react";
import ProjectCard from "../components/ProjectCard";
import PageTransition from "../components/PageTransition";
import projectsData from "../data/projects.json";

export default function Projects() {
  return (
    <PageTransition>
      <section className="p-10 bg-gray-900 text-white min-h-screen">
        <h1 className="text-4xl font-bold text-center mb-8">Proyectos</h1>
        <p className="text-center text-gray-400 mb-10 max-w-2xl mx-auto">
          Aquí puedes ver algunos de los proyectos en los que he trabajado, utilizando diferentes tecnologías y enfoques.
        </p>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              repoLink={project.repoLink}
              technologies={project.technologies}
              image={project.image}
            />
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
