import { CiMenuBurger } from "react-icons/ci";
import { ImYoutube2 } from "react-icons/im";
import { BsTiktok } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../assets/imagens/logo.png";
import Link from "next/link";

export const Header = () => {
  return (
    <>
      <header className="fixed top-0 w-full h-[75px] bg-[#F3F3F3] flex  justify-between items-center px-3 border border-opacity-10 border-b-[#000] md:px-[10%]">
        <div className="flex items-center">
          <Image
            className=" animate-bounce  w-[51px] lg:w-[90px]"
            src={logo}
            alt="mercury"
          />
          <h1 className=" h-[46px] ml-[0%]">Mercury_Gold</h1>
        </div>
        <div className="flex flex-row justify-start absolute h-0 ml-[14%] space-x-3  ">
          <Link href={"https://www.instagram.com/mercuryo_gold/"}>
            <AiOutlineInstagram />
          </Link>

          <Link
            href={
              "https://www.tiktok.com/@peidao_fino/video/7308383260818558213?q=peidao%20fino&t=1703343870183"
            }
          >
            <BsTiktok />
          </Link>

          <Link href={"https://www.youtube.com/watch?v=vDl_HgSTKAQ"}>
            <ImYoutube2 />
          </Link>
        </div>
        <CiMenuBurger size={24} />
      </header>
    </>
  );
};
