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
      <svg
        width="21"
        height="24"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-[#A4FFAF] hover:fill-white transition duration-300 cursor-pointer"
        onClick={() => navigator.clipboard.writeText(password)}
      >
        <path d="M20.341 3.091L17.909.659A2.25 2.25 0 0016.319 0H8.25A2.25 2.25 0 006 2.25V4.5H2.25A2.25 2.25 0 000 6.75v15A2.25 2.25 0 002.25 24h10.5A2.25 2.25 0 0015 21.75V19.5h3.75A2.25 2.25 0 0021 17.25V4.682a2.25 2.25 0 00-.659-1.591Z" />
      </svg>
    </div>
  );
}
