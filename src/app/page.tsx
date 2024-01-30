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
      <Image className="relative w-full h-auto     " src={capa} alt="capa" />
      <Simgle />
      <Contracapa />
      <Release />

      <div className="p-3 md:px-[10%] bg-[#f1fafa]">
        <Player url="https://www.youtube.com/embed/vDl_HgSTKAQ?si=auqCgicYuGtH66sS" />
      </div>
    </>
  );
}
