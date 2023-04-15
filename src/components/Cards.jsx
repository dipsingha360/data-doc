import React from "react";
import { FaUserShield, FaUserFriends, FaUsers } from "react-icons/fa";

function Cards() {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-16 sm:gap-10">
        <div className="single w-full rounded-lg border border-[#00df9a]/20 shadow-lg flex flex-col hover:scale-105 duration-300 lg:my-8">
          <FaUserShield
            className=" text-[#00df9a] mx-auto mt-[-1.9rem]"
            size={50}
          />
          <h2 className="font-bold text-2xl text-center py-6 uppercase ">
            Single User
          </h2>
          <p className="text-center font-bold text-4xl py-4 text-[#00ac77]">
            $149
          </p>
          <div className="text-center  font-medium text-xl">
            <p className="border-b mx-8 mt-4">500 GB Storage</p>
            <p className="border-b mx-8 mt-4">1 Grand User</p>
            <p className="border-b mx-8 mt-4">Send up to 2 GB</p>
          </div>
          <button className="btn bg-[#00df9a] w-[150px] rounded-md mx-auto py-2 m-4 font-medium text-[#000300] hover:bg-[#00ac77] duration-300">
            Start Trial
          </button>
        </div>

        <div className="double w-full rounded-lg border border-[#00df9a]/20 bg-gray-100 shadow-lg flex flex-col hover:scale-105 duration-300">
          <FaUserFriends
            className=" text-[#00df9a] mx-auto mt-[-1.9rem]"
            size={50}
          />
          <h2 className="font-bold text-2xl text-center py-6 uppercase ">
            Double User
          </h2>
          <p className="text-center font-bold text-4xl py-4 text-[#00ac77]">
            $250
          </p>
          <div className="text-center  font-medium text-xl">
            <p className="border-b mx-8 mt-4">1200 GB Storage</p>
            <p className="border-b mx-8 mt-4">2 Grand User</p>
            <p className="border-b mx-8 mt-4">Send up to 6 GB</p>
          </div>
          <button className="btn bg-[#000300] w-[150px] rounded-md mx-auto py-2 m-4 font-medium text-white hover:bg-[#2a2a2a] duration-300">
            Start Trial
          </button>
        </div>

        <div className="triple w-full rounded-lg border border-[#00df9a]/20 shadow-lg flex flex-col hover:scale-105 duration-300 lg:my-8">
          <FaUsers className=" text-[#00df9a] mx-auto mt-[-1.9rem]" size={50} />
          <h2 className="font-bold text-2xl text-center py-6 uppercase ">
            Tripple Users
          </h2>
          <p className="text-center font-bold text-4xl py-4 text-[#00ac77]">
            $399
          </p>
          <div className="text-center  font-medium text-xl">
            <p className="border-b mx-8 mt-4">2000 GB Storage</p>
            <p className="border-b mx-8 mt-4">3 Grand User</p>
            <p className="border-b mx-8 mt-4">Send up to 10 GB</p>
          </div>
          <button className="btn bg-[#00df9a] w-[150px] rounded-md mx-auto py-2 m-4 font-medium text-[#000300] hover:bg-[#00ac77] duration-300">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
