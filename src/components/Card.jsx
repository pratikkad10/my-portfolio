import React from "react";
import { FaHtml5 } from "react-icons/fa";

function Card({ skill }) {
  return (
    <div className="w-50 bg-[rgb(23,31,45)] p-4 rounded-lg text-zinc-50 hover:bg-[rgb(28,38,53)] shadow-[#373a52] hover:border-[0.5px] border-blue-300 hover:shadow-md transition-all delay-75">
      <img className="h-10" src={skill.logo} alt="" />
      <div className="font-semibold text-xl">{skill.name}</div>
      <p className="text-normal leading-tight text-[#D1D5DB]">{skill.text}</p>
    </div>
  );
}

export default Card;
