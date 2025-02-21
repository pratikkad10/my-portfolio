import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { RiCheckboxCircleFill } from "react-icons/ri";
import personImg from "../assets/p2.jpg"
import personImg2 from "../assets/pk-removebg2.png"

function About() {
  return (
    <div className="bg-about h-screen w-full text-zinc-50 p-10 ">
      <div className="flex items-center justify-center w-[85%] mx-auto gap-20 mt-20">
        <div className="image">
          <div className="h-70 w-70  overflow-hidden   rounded-full shadow-2xl  shadow-blue-400">
            <img src={personImg2} alt="image" />
          
          </div>
        </div>
        <div className="content ">
          <h1 className="text-2xl font-bold">About Me</h1>
          <p className="text-xl py-4 text-[#D1D5DB] text-justify leading-tight">
            As a full stack developer with over a decade of experience, I
            specialize in building end-to-end web applications using modern
            technologies. My expertise spans from crafting responsive frontends
            to designing robust backend systems and managing cloud
            infrastructure.
          </p>
          <div className="flex gap-20 mt-6">
            <div className="left flex flex-col gap-2 justify-center text-xl ">
              <h1 className="text-2xl font-bold ">Skills</h1>
              <div className="text-[#D1D5DB] ">
                <ul className="flex items-center gap-1"><RiCheckboxCircleFill />Html5</ul>
                <ul className="flex items-center gap-1"><RiCheckboxCircleFill />CSS</ul>
                <ul className="flex items-center gap-1"><RiCheckboxCircleFill />Javascript/Typescript</ul>
                <ul className="flex items-center gap-1"><RiCheckboxCircleFill />React/Next.js</ul>
                <ul className="flex items-center gap-1"><RiCheckboxCircleFill />Node.js/Express</ul>
                <ul className="flex items-center gap-1"><RiCheckboxCircleFill />MongoDB/Mysql</ul>
                <ul className="flex items-center gap-1"><RiCheckboxCircleFill />Posgresql</ul>
                <ul className="flex items-center gap-1"><RiCheckboxCircleFill />Git&Github</ul>
              </div>
            </div>
            <div className="right flex flex-col gap-2 text-xl ">
              <h1 className="text-2xl font-bold">Experience</h1>
              <div className="text-[#D1D5DB] ">
                <p className="flex items-center gap-1"><RiCheckboxCircleFill />2+ years</p>
                <p className="flex items-center gap-1"><RiCheckboxCircleFill />10 projects</p>
              </div>
            </div>
          </div>
          <button className="bg-blue-600 hover:bg-blue-300 cursor-pointer transition-all delay-75 py-2 px-4 rounded mt-4">
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
