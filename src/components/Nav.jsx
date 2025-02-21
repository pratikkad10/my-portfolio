import React from "react";

function Nav() {
  return (
    <div 
    className="navbar flex fixed top-6 w-[50%] left-[25%] mx-auto justify-center items-center gap-10 bg-opacity-100 bg-[#0a0909c9] backdrop-blur-xs rounded-4xl h-[3rem] border border-[#323333] text-zinc-50">
      <ul>About</ul>
      <ul>Services</ul>
      <ul>Portfolio</ul>
      <ul>Contact</ul>

      {/* <div>
            <button>Get Started</button>
        </div> */}
    </div>
  );
}

export default Nav;
