"use client";
import { Streams } from "@/components/Streams";
import capa from "../assets/imagens/capa.png";

import Image from "next/image";
import { Simgle } from "@/components/Simgle";
import Contracapa from "@/components/Contracapa";
import { Release } from "@/components/Release";

export default function Home() {
  return (
    <>
      <div className="relative mt-[75px]"></div>
      <Streams />
      <Image className="relative w-full h-auto     " src={capa} alt="capa" />
      <Simgle />
      <Contracapa />
      <Release />
    </>
  );
}
