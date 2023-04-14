import React from "react";

function Analytics() {
  return (
    <div className=" py-16 px-4 bg-white">
      <div className="max-w-[1240] mx-auto grid gap-3 sm:grid-cols-2">
        {/* demo image  */}
        <img
          className="w-[500px] mx-auto py-4"
          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/social-media-marketing-design-template-e8d39290c07ad95d217358f9290b99e1_screen.jpg?ts=1648536576"
          alt="/"
        />
        <div className="flex flex-col gap-3 justify-center">
          <p className="uppercase text-[#00df9a] font-bold">
            Data Analytics Dashboard
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p className="text-[#2b2b2b]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
            nesciunt fuga, fugiat sed tenetur, dolore quisquam sit atque autem,
            quia natus. Dolore ipsam officia aperiam quae in laudantium mollitia
            quasi.
          </p>
          <button className="btn bg-[#000300] w-[150px] rounded-md mx-auto sm:mx-0 py-2 mt-4 font-medium text-white hover:bg-[#2b2b2b] duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
