import React from "react";
import Card from "./Card";

function Skills() {
  const skills = [
    {
      logo: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
      name: "HTML",
      text: "Semantic Markup",
    },
    {
      logo: "https://img.icons8.com/?size=100&id=3BTBsJs5myRy&format=png&color=000000",
      name: "CSS",
      text: "Modern Layouts",
    },
    {
      logo: "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
      name: "Javascript",
      text: "ES6+, DOM",
    },
    {
      logo: "https://img.icons8.com/?size=100&id=wPohyHO_qO1a&format=png&color=000000",
      name: "React",
      text: "Components, Hooks",
    },
    {
      logo: "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000",
      name: "Node.js",
      text: "Backend Dev",
    },
    {
      logo: "https://img.icons8.com/?size=100&id=x7XMNGh2vdqA&format=png&color=000000",
      name: "Tailwind CSS",
      text: "Utility-First CSS",
    },
    {
      logo: "https://img.icons8.com/?size=100&id=nCj4PvnCO0tZ&format=png&color=000000",
      name: "Typescript",
      text: "Type Safety",
    },
    {
      logo: "https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000",
      name: "MongoDB",
      text: "NoSQL Database",
    },
    {
      logo: "https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png&color=000000",
      name: "MySQL",
      text: "SQL Database",
    },
    {
      logo: "https://img.icons8.com/?size=100&id=38561&format=png&color=000000",
      name: "PostgreSQL",
      text: "Advanced SQL",
    },
    {
      logo: "https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=000000",
      name: "Git&Github",
      text: "Version Control",
    },
  ];

  return (
    <div className="bg-skills text-zinc-50">
      <div>
        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-3xl font-bold mt-1">Full Stack Development Skills</h1>
          <p className="text-xl mt-2 leading-tight">Front-end, Back-end & DevOps Technologies</p>
        </div>
        <div className="cards w-[85%] mx-auto flex flex-wrap gap-6 p-20">
          {skills.map((skill, index) => (
            <Card key={index} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
