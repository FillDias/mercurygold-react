import { FaDeezer } from "react-icons/fa";
import { AiFillApple } from "react-icons/ai";
import { BsSpotify } from "react-icons/bs";
import React, { useState } from "react";
import Link from "next/link";

export const Streams = () => {
  return (
    <>
      <div className="relative w-full h-[75px] bg-[#f1eeee] flex  justify-around items-center ">
        <Link
          href={
            "https://open.spotify.com/track/0FZNmwLOX8auI8dIYhrCd7?si=aLqAy3u1R82SGyIJsVydCA"
          }
        >
          <BsSpotify className="motion-safe:animate-pulse text-[30px] md:text-[44px]" />
        </Link>

        <Link
          href={
            "https://music.apple.com/br/album/a-porta-da-noite-single/1676130585"
          }
        >
          <AiFillApple className="motion-safe:animate-pulse text-[30px] md:text-[44px] " />
        </Link>

        <Link
          href={
            "https://music.apple.com/br/album/a-porta-da-noite-single/1676130585"
          }
        >
          <FaDeezer className="motion-safe:animate-pulse text-[30px] md:text-[44px]" />
        </Link>
      </div>
    </>
  );
};
