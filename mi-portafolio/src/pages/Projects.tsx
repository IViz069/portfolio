import * as React from "react";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
    { title: "Apis ASO BBVA", description: "Desarrollo backend con Java y Spring Boot.", repoLink: "#" },
    { title: "Apis Unibanca", description: "React + Tailwind para visualización de datos.", repoLink: "#" },
    { title: "Proyectos Personales APIs", description: "React + Tailwind para visualización de datos.", repoLink: "#" },
    { title: "Proyectos FullStack", description: "React + Tailwind para visualización de datos.", repoLink: "#" },
  ];

  return (
    <section className="p-10 bg-gray-900 text-white min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-6">Proyectos</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
