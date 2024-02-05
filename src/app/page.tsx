"use client";
import { Streams } from "@/components/Streams";
import capa from "../assets/imagens/capa.png";

import Image from "next/image";
import { Simgle } from "@/components/Simgle";
import Contracapa from "@/components/Contracapa";
import { Release } from "@/components/Release";
import { Player } from "@/components/Players";
export default function Home() {
  return (
    <>
      <div className="relative mt-[75px]"></div>
      <Streams />
      <div className="relative bg-gradient-to-r from-indigo-100 to-blue-50">
        <Image
          className=" w-full z-10 md:px-[10%]     "
          src={capa}
          alt="capa"
        />
      </div>
      <Simgle />
      <Contracapa />
      <Release />
    </>
  );
}
