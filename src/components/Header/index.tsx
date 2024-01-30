"use client";
import React, { useState } from "react";
import Menu from "../Menu";
import Image from "next/image";
import logo from "../../assets/imagens/logo.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ImYoutube2 } from "react-icons/im";
import { BsTiktok } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";

export const Header = () => {
  const [aberto, setAberto] = useState<boolean>(false);
  const url = usePathname();

  const verifyUrl = (index: number) => {
    if (url === "/" && index === 0) return "underline";
    if (url === "/videos" && index === 1) return "underline";
  };

  return (
    <>
      <header className="fixed top-0 w-full h-[75px] bg-[#f1fafa] flex  justify-between items-center px-3 border border-opacity-10 border-b-[#2e2d2d] md:px-[10%]">
        <div className="flex items-center">
          <Image
            className=" animate-bounce  w-[51px] lg:w-[90px]"
            src={logo}
            alt="mercury"
          />
        </div>
        <h1 className=" h-[46px] mr-[48%]">Mercury_Gold</h1>
        <div className="hidden lg:flex gap-[64px] mr-2">
          <Link className={`${verifyUrl(0)} text-[24px]`} href={"/"}>
            HOME
          </Link>
          <Link className={`${verifyUrl(1)} text-[24px]`} href={"/videos"}>
            VIDEOS
          </Link>
        </div>
        {!aberto ? (
          <AiOutlineMenu
            className="lg:hidden"
            onClick={() => {
              setAberto(true);
            }}
            size={29}
          />
        ) : (
          <AiOutlineClose
            className="lg:hidden"
            onClick={() => {
              setAberto(false);
            }}
            size={29}
          />
        )}

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
      </header>
      <Menu
        className={`${
          aberto ? "top-[75px] opacity-100" : "top-[-1000px] opacity-0"
        } lg:hidden`}
        fecharMenu={() => {
          setAberto(false);
        }}
      />
    </>
  );
};
