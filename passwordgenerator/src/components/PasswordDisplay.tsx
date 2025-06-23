import CopyIcon from "./icons/CopyIcon";

interface PasswordDisplayProps {
  password: string;
  passwordCreate: boolean;
}

export default function PasswordDisplay({
  password,
  passwordCreate,
}: PasswordDisplayProps) {
  return (
    <div className="bg-darkGrey mb-6 px-8 py-3 flex justify-between items-center">
      <span
        className={`text-3xl text-almostWhite ${
          passwordCreate ? "opacity-100" : "opacity-20"
        }`}
      >
        {password || "P4$5W0rD!"}
      </span>
      <CopyIcon className="text-[#A4FFAF] hover:text-[#FFF] transition-colors duration-300" />
    </div>
  );
}
