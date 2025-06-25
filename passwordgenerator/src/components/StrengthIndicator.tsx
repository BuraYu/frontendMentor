interface StrengthIndicatorProps {
  strength: number;
  label: string;
}

export default function StrengthIndicator({
  strength,
  label,
}: StrengthIndicatorProps) {
  const strengthColors = ["bg-red", "bg-orange", "bg-yellow", "bg-neonGreen"];

  return (
    <div className="bg-veryDarkGrey py-6 px-8 flex justify-between items-center flex-col md:flex-row">
      <span className="text-grey text-xl">STRENGTH</span>
      <div className="flex gap-2 items-center">
        <span className="text-white text-2xl mr-2 font-bold">
          {label ? label.toUpperCase() : "Password".toUpperCase()}
        </span>
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className={`w-3 h-7 border-2 ${
              i < strength
                ? `${strengthColors[strength - 1]} border-transparent`
                : "border-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
