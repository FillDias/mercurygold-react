"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface MenuProps {
  fecharMenu: () => void;
  className?: string;
}

export const Menu = ({ fecharMenu, className }: MenuProps) => {
  const url = usePathname();
  const verifyUrl = (index: number) => {
    if (url === "/" && index === 0) return "underline";
    if (url === "/videos" && index === 1) return "underline";
  };
  return (
    <>
      <div
        className={`transition-all duration-300 ease-linear flex flex-col justify-center p-[42px] w-[100vw] h-[calc(100vh-75px)] fixed bg-[#E8E7E7] z-10 gap-[64px] md:px-[20%] ${className}`}
      >
        <Link
          onClick={fecharMenu}
          className={`${verifyUrl(0)} text-[24px]`}
          href={"/"}
        >
          Home
        </Link>

        <Link
          onClick={fecharMenu}
          className={`${verifyUrl(1)} text-[24px]`}
          href={"/Videos"}
        >
          VIDEOS
        </Link>
      </div>
    </>
  );
};
export default Menu;
