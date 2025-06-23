import RightArrow from "./icons/RightArrow";

interface GenerateButtonProps {
  onClick: () => void;
}

export default function GenerateButton({ onClick }: GenerateButtonProps) {
  return (
    <div
      className="group bg-neonGreen border border-transparent hover:bg-veryDarkGrey hover:text-neonGreen hover:border-neonGreen transition duration-300 px-[177px] py-5 flex items-center cursor-pointer"
      onClick={onClick}
    >
      <span className="text-lg mr-6">GENERATE</span>
      <RightArrow className="text-[#24232C] group-hover:text-[#A4FFAF] transition-colors duration-300" />
    </div>
  );
}
