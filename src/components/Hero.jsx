import React from "react";
import Typed from "react-typed";

function Hero() {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px]  h-screen mx-auto flex flex-col justify-center items-center">
        <p className="text-[#00df9a] font-medium p-2 sm:text-2xl text-xl">
          Growing with data analytics
        </p>
        <h1 className="sm:text-7xl text-5xl font-bold">
          Grow with <span className="text-[#00df9a]">Data Doc</span>
        </h1>
        <div className="flex items-center justify-center gap-3 py-4">
          <p className="sm:text-4xl md:5xl text-xl font-medium">
            Fast, Flexible,financing for
          </p>
          <Typed
            className="sm:text-4xl md:5xl text-xl text-gray-500 font-bold"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="text-xl sm:2xl text-gray-500 pl-4">
          Monitor your data analytics to increase revenue for BTB,BTC, and SASS
          platforms.
        </p>
        <button className="btn bg-[#00df9a] w-[150px] rounded-md mx-auto py-2 mt-4 font-medium text-[#000300] hover:bg-[#00ac77] duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Hero;
