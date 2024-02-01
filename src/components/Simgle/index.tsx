import React from "react";
import { Link } from "react-router-dom";

export const Simgle = () => {
  return (
    <>
      <div className="relative w-full h-[75px] bg-[#F3F3F3] flex  justify-around items-center">
        <button
          type="button"
          className="transition delay-150 duration-300 ease-in-out py-2 px-10 me-1 mb-0,5 text-[22px] font-light  text-gray-800 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-full "
        >
          Sigles
        </button>
      </div>
    </>
  );
};
