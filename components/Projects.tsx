"use client";

import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-32 px-6"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-20 text-center">

          <p className="uppercase tracking-[0.35em] text-blue-400 font-semibold">
            Portfolio
          </p>

          <h2 className="mt-4 text-5xl font-black">
            Featured Projects
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-zinc-400">
            A selection of projects that showcase my ability to
            design, develop and deploy modern web applications.
          </p>

        </div>

        <div className="space-y-36">

          {projects.map((project, index) => (

            <ProjectCard
              key={project.title}
              {...project}
              reverse={index % 2 !== 0}
            />

          ))}

        </div>

      </div>
    </section>
  );
}