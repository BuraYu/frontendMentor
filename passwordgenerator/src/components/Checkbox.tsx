interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

import CheckIcon from "../assets/icon-check.svg";

export default function Checkbox({ label, checked, onChange }: CheckboxProps) {
  return (
    <label className="flex gap-4 items-center relative mb-5">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className={`peer appearance-none w-5 h-5 rounded-none border-2 ${
          checked
            ? "bg-neonGreen border-transparent"
            : "border-white bg-darkGrey"
        } transition-all duration-200`}
      />
      <span
        className={`w-5 h-5 flex items-center justify-center absolute ${
          checked ? "inline" : "hidden"
        }`}
      >
        <img src={CheckIcon} alt="Check Icon" />
      </span>
      {label}
    </label>
  );
}
