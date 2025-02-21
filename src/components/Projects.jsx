import React from "react";
import ProjectCard from "./ProjectCard";

function Projects() {
  const Projects = [
    {
      name: "random project",
      image: "https://stock.adobe.com/search?k=landing+page",
      link: "netlify-link",
    },
    {
        name: "random project",
        image: "Home-image",
        link: "netlify-link",
    },
    {
        name: "random project",
        image: "Home-image",
        link: "netlify-link",
    }
  ];

  return (
    <div className="bg-projects text-zinc-50 ">
      <div className="w-[85%] mx-auto p-4">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold">Featured Projects</h1>
          <p className="text-xl leading-tight mt-2">Full stack applications I've developed</p>
        </div>

        <div className="project flex">
          {Projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
