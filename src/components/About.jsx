import React from "react";
import bg from "../assets/bg4.jpg";
import { Color } from "../assets/assets";

const About = () => {
  return (
    <div id="about" className="w-screen h-scree">
      

      <div style={{ backgroundImage: `url(${bg})` }} className="pt-15 flex flex-col flex-1/2 gap-5 p-5  bg-cover bg-center">
        <h1 className="raleway font-semibold text-4xl lg:text-7xl text-blue-800">
          About Me
        </h1>
        <p className="text-lg lg:text-2xl sm:w-120 lg:w-200 font-light josefin">
          I’m a passionate Frontend Developer with a strong  interest in
          building modern, responsive, and user-friendly 
          web applications. I enjoy turning ideas into interactive digital 
          experiences using technologies like React.js, JavaScript, and
          Tailwind CSS.
        </p>
        <p className="text-lg lg:text-2xl sm:w-120 lg:w-200 font-light josefin">
          I have worked on multiple frontend projects that helped  me
          improve my skills in UI design, responsive layouts,  and
          component-based development. I’m continuously learning new 
          technologies and exploring better ways to create clean and 
          efficient user experiences.
        </p>
        <div className="flex gap-5">
          <div className="">
            <h1
              className="text-4xl md:text-6xl  font-bold text-blue-500"
            >
              5+
            </h1>
            <p className="text-sm md:text-xl">Technologies mastered</p>
          </div>
          <div className="">
            <h1
              className="text-4xl md:text-6xl  font-bold text-blue-500"
            >
              10+
            </h1>
            <p className="text-sm md:text-xl">Projects completed</p>
          </div>
        </div>
        <button
          className="w-fit text-lg lg:text-2xl border border-blue-500 px-5 hover:bg-blue-500 hover:text-black font-bold text-nowrap py-1"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default About;
