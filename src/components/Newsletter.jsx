import React from "react";

function Newsletter() {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            What tips & tricks to optimized your flow?
          </h1>
          <p>Sign up to out newsletter and stay up to date.</p>
        </div>
        <div className="my-4 flex flex-col gap-3">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between w-full">
            <input
              type="search"
              placeholder="Enter email"
              className="p-2 rounded-md flex w-full text-[#000d00] outline-none outline-1 focus:outline-[#00df9a] duration-300"
            />
            <button className="btn bg-[#00df9a] w-[150px] rounded-md mx-auto py-2 font-medium text-[#000300] hover:bg-[#00ac77] duration-300">
              Notify Me
            </button>
          </div>
          <p>
            We care about the protection of your data. Read our{" "}
            <span className="underline text-[#00df9a] cursor-pointer">
              Privacy Policy.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
