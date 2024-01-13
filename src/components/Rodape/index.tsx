import Image from "next/image";
import cof from "../../assets/imagens/cof.png";
export const Rodape = () => {
  return (
    <>
      <footer className="relative w-full flex  items-center h-[75px] bg-[#F3F3F3] md:px-[2%] lg:px-[10%] ">
        <Image src={cof} alt="cof" width={70} height={70} />
        <div className="p-3">
          <p className="text-sm text-[#363535] text-left">
            &copy; 2024 ©Mercury_Gold
          </p>
          <p className="text-[10px] text-[#363535] text-right">
            {" "}
            Todos os direitos reservados
          </p>
        </div>
      </footer>
    </>
  );
};
export default Rodape;
