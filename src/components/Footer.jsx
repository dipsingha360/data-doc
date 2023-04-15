import React from "react";
import {
  FaGithubSquare,
  FaDribbbleSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 grid lg:grid-cols-3 gap-8, text-gray-300">
      <div className=" pr-4">
        <h1 className="w-full text-4xl uppercase font-bold text-[#00df9a]">
          Data.
        </h1>
        <p className="py-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
          nesciunt fuga, fugiat sed tenetur, dolore quisquam sit atque autem,
          quia natus. Dolore ipsam officia aperiam quae in laudantium mollitia
          quasi.
        </p>
        <div className="flex md:w-[75%] my-6 justify-between">
          <FaGithubSquare size={35} />
          <FaDribbbleSquare size={35} />
          <FaFacebookSquare size={35} />
          <FaInstagramSquare size={35} />
          <FaTwitterSquare size={35} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h1 className="font-medium text-gray-400 upper">Solutions</h1>
          <ul>
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Insights</li>
          </ul>
        </div>
        <div>
          <h1 className="font-medium text-gray-400 upper">Supports</h1>
          <ul>
            <li className="py-2 text-sm">Pricing</li>
            <li className="py-2 text-sm">Documentation</li>
            <li className="py-2 text-sm">Guides</li>
            <li className="py-2 text-sm">API Status</li>
          </ul>
        </div>
        <div>
          <h1 className="font-medium text-gray-400 upper">Companys</h1>
          <ul>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Blog</li>
            <li className="py-2 text-sm">Jobs</li>
            <li className="py-2 text-sm">Carrers</li>
          </ul>
        </div>
        <div>
          <h1 className="font-medium text-gray-400 upper">Legals</h1>
          <ul>
            <li className="py-2 text-sm">Claim</li>
            <li className="py-2 text-sm">Policy</li>
            <li className="py-2 text-sm">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
