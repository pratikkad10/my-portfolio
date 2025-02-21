import React from "react";

function Home() {
  return (
    <div className="bg-home ">
      <div className="text-zinc-50  w-1/2 mx-auto flex flex-col justify-center h-screen p-12">
        <h1 className="text-5xl font-bold leading-[3.2rem]">Full Stack Web Development Solutions</h1>
        <p className="text-xl my-6 leading-[2rem] ">
          Building scalable web applications with modern technologies from
          frontend to backend.
        </p>
        <div>
          <button className="font-semibold hover:bg-blue-300 transition-all delay-75  bg-blue-600 rounded-md px-4 py-2 cursor-pointer">Explore Portfolio</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
