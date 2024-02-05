import React from "react";
import Link from "next/link";

export const Simgle = () => {
  return (
    <>
      <div className="relative w-full h-[75px] bg-gradient-to-r from-indigo-100 to-blue-50 flex  justify-around items-center">
        <Link href="/Videos">
          <div className="transition delay-150 duration-300 ease-in-out py-2 px-10 me-1 mb-0,5 text-[22px] font-light  text-gray-800 bg-gradient-to-r from-green-300 to-blue-300 rounded-full ">
            Sigles
          </div>
        </Link>
      </div>
    </>
  );
};
