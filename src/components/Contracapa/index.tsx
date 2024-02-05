import React from "react";
import Image from "next/image";
import sigles0 from "../../assets/imagens/sigles0.jpeg";

function Contracapa() {
  return (
    <>
      <div className="relative w-full  h-auto  bg-gradient-to-r from-indigo-100 to-blue-50  ">
        <Image
          className="w-full z-10 md:px-[10%] "
          src={sigles0}
          alt="sigles0"
        />
      </div>
    </>
  );
}
export default Contracapa;
