import React from "react";
import Image from "next/image";
import sigles0 from "../../assets/imagens/sigles0.jpeg";

function Contracapa() {
  return (
    <>
      <div className="relative w-full h-auto">
        <Image src={sigles0} alt="sigles0" />
      </div>
    </>
  );
}
export default Contracapa;
