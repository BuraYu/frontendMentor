import Slider from "rc-slider";
import "rc-slider/assets/index.css";


interface SliderControlProps {
  value: number;
  setValue: (val: number) => void;
  isFocused: boolean;
  setIsFocused: (val: boolean) => void;
}

export default function SliderControl({
  value,
  setValue,
  isFocused,
  setIsFocused,
}: SliderControlProps) {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <span className="text-almostWhite">Character Length</span>
        <span className="text-neonGreen text-2xl">{value}</span>
      </div>
      <Slider
        min={4}
        max={20}
        defaultValue={10}
        value={value}
        onChange={(val) => setValue(val as number)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        styles={{
          handle: {
            borderColor: "#A4FFAF",
            boxShadow: "none",
            height: 16,
            width: 16,
            marginTop: -5,
            backgroundColor: isFocused ? "black" : "white",
          },
          track: {
            backgroundColor: "#A4FFAF",
            borderRadius: "0",
            height: 8,
          },
          rail: {
            backgroundColor: "#111",
            borderRadius: "0",
            height: 8,
          },
        }}
      />
    </div>
  );
}
