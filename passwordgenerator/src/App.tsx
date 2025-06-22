import "./App.css";
// import Copy from "./assets/icon-copy.svg";
import { useState } from "react";
import Slider from "rc-slider";
import CheckIcon from "./assets/icon-check.svg";

import "rc-slider/assets/index.css";
import RightArrow from "./components/icons/RightArrow";

type CharOptions = {
  upper?: boolean;
  lower?: boolean;
  number?: boolean;
  symbol?: boolean;
};

function App() {
  const [passwordCreate, setPasswordCreated] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [passwordLength, setPasswordLength] = useState<number | any>(10);
  const [isFocused, setIsFocused] = useState(false);
  const [checked, setChecked] = useState({
    upper: true,
    lower: false,
    number: false,
    symbol: true,
  });
  const [passwordStrength, setPasswordStrength] = useState<string>("");
  const [strength, setStrength] = useState<number>(0);

  function randomString(length: number, options: CharOptions): void {
    const sets = {
      uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      lowercase: "abcdefghijklmnopqrstuvwxyz",
      numbers: "0123456789",
      symbols: "!@#$%^&*()_+[]{}|;:,.<>?/~`-=",
    };
    console.log(options);
    let availableChars = "";

    if (options.upper) availableChars += sets.uppercase;
    if (options.lower) availableChars += sets.lowercase;
    if (options.number) availableChars += sets.numbers;
    if (options.symbol) availableChars += sets.symbols;

    if (!availableChars) {
      throw new Error("At least one character type must be selected.");
    }

    let result = "";
    for (let i = 0; i < length; i++) {
      const randomChar = availableChars.charAt(
        Math.floor(Math.random() * availableChars.length)
      );
      result += randomChar;
    }

    setPassword(result);
    console.log(result);
  }

  const toggleCheckbox = (key: keyof typeof checked) => {
    setChecked((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };
  // TODO fix this
  const handleClick = (): void => {
    passwordStrenghtChecker(passwordLength);
    console.log(passwordLength);
    setPasswordCreated(true);
    randomString(passwordLength, checked);
  };

  const strengthColors = ["bg-red", "bg-orange", "bg-yellow", "bg-neonGreen"];

  const passwordStrenghtChecker = (length: number) => {
    if (length < 8) {
      setPasswordStrength("Weak");
      setStrength(1);
      return;
    }

    let score = 0;

    if (checked.upper) score++;
    if (checked.lower) score++;
    if (checked.number) score++;
    if (checked.symbol) score++;

    if (length >= 12) score++;
    if (length >= 16) score++;

    if (score <= 2) {
      setPasswordStrength("Fair");
      setStrength(2);
    } else if (score === 3 || score === 4) {
      setPasswordStrength("Strong");
      setStrength(3);
    } else {
      setPasswordStrength("Very Strong");
      setStrength(4);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center flex-col bg-veryDarkGrey">
      <h1 className="font-jetbrains text-2xl text-grey mb-8">
        Password Generator
      </h1>
      <div className="max-w-[540px] w-full">
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
            className="fill-[#A4FFAF] hover:fill-white transition duration-300 cursor"
          >
            <path d="M20.341 3.091 17.909.659A2.25 2.25 0 0 0 16.319 0H8.25A2.25 2.25 0 0 0 6 2.25V4.5H2.25A2.25 2.25 0 0 0 0 6.75v15A2.25 2.25 0 0 0 2.25 24h10.5A2.25 2.25 0 0 0 15 21.75V19.5h3.75A2.25 2.25 0 0 0 21 17.25V4.682a2.25 2.25 0 0 0-.659-1.591ZM12.469 21.75H2.53a.281.281 0 0 1-.281-.281V7.03a.281.281 0 0 1 .281-.281H6v10.5a2.25 2.25 0 0 0 2.25 2.25h4.5v1.969a.282.282 0 0 1-.281.281Zm6-4.5H8.53a.281.281 0 0 1-.281-.281V2.53a.281.281 0 0 1 .281-.281H13.5v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.282.282 0 0 1-.281.281Zm.281-12h-3v-3h.451c.075 0 .147.03.2.082L18.667 4.6a.283.283 0 0 1 .082.199v.451Z" />
          </svg>
        </div>
        <div className="bg-darkGrey font-jetbrains">
          <div className="flex flex-col gap-8 px-8 py-6">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-almostWhite">Characters Length</span>
                {/* TODO remove onClick */}
                <span className="text-neonGreen text-2xl" onClick={handleClick}>
                  {passwordLength}
                </span>
              </div>
              <Slider
                min={4}
                max={20}
                defaultValue={10}
                onChange={(value) => setPasswordLength(value)}
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
            <div className="text-white text-lg">
              <div className="mb-5">
                <label
                  className="flex gap-4 items-center relative"
                  onChange={() => toggleCheckbox("upper")}
                >
                  <input
                    type="checkbox"
                    checked={checked.upper}
                    className={`peer appearance-none w-5 h-5 rounded-none border-2 ${
                      checked.upper
                        ? "bg-neonGreen border-transparent"
                        : "border-white bg-darkGrey"
                    }   transition-all duration-200`}
                  />
                  <span
                    className={`w-5 h-5 flex items-center justify-center absolute ${
                      checked.upper ? "inline" : "hidden"
                    }`}
                  >
                    <img src={CheckIcon} alt="Check Icon" />
                  </span>
                  Include Uppercase Letters
                </label>
              </div>
              <div className="mb-5">
                <label
                  className="flex gap-4 items-center relative"
                  onChange={() => toggleCheckbox("lower")}
                >
                  <input
                    type="checkbox"
                    checked={checked.lower}
                    className={`peer appearance-none w-5 h-5 rounded-none border-2 ${
                      checked.lower
                        ? "bg-neonGreen border-transparent"
                        : "border-white bg-darkGrey"
                    }   transition-all duration-200`}
                  />
                  <span
                    className={`w-5 h-5 flex items-center justify-center absolute ${
                      checked.lower ? "inline" : "hidden"
                    }`}
                  >
                    <img src={CheckIcon} alt="Check Icon" />
                  </span>
                  Include Lowercase Letters
                </label>
              </div>
              <div className="mb-5">
                <label
                  className="flex gap-4 items-center relative"
                  onChange={() => toggleCheckbox("number")}
                >
                  <input
                    type="checkbox"
                    checked={checked.number}
                    className={`peer appearance-none w-5 h-5 rounded-none border-2 ${
                      checked.number
                        ? "bg-neonGreen border-transparent"
                        : "border-white bg-darkGrey"
                    }   transition-all duration-200`}
                  />
                  <span
                    className={`w-5 h-5 flex items-center justify-center absolute ${
                      checked.number ? "inline" : "hidden"
                    }`}
                  >
                    <img src={CheckIcon} alt="Check Icon" />
                  </span>
                  Include Number
                </label>
              </div>
              <div>
                <label
                  className="flex gap-4 items-center relative"
                  onChange={() => toggleCheckbox("symbol")}
                >
                  <input
                    type="checkbox"
                    checked={checked.symbol}
                    className={`peer appearance-none w-5 h-5 rounded-none border-2 ${
                      checked.symbol
                        ? "bg-neonGreen border-transparent"
                        : "border-white bg-darkGrey"
                    }   transition-all duration-200`}
                  />
                  <span
                    className={`w-5 h-5 flex items-center justify-center absolute ${
                      checked.symbol ? "inline" : "hidden"
                    }`}
                  >
                    <img src={CheckIcon} alt="Check Icon" />
                  </span>
                  Include Symbols
                </label>
              </div>
            </div>
            <div className="bg-veryDarkGrey py-6 px-8 flex justify-between items-center">
              <span className="text-grey text-xl">STRENGTH</span>
              <div className="flex gap-2">
                {/* min height for span or non-breaking space character */}
                <span className="text-white text-2xl mr-2 font-bold">
                  {passwordStrength ? passwordStrength.toUpperCase() : "\u00A0"}
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
            <div
              className="group bg-neonGreen border border-transparent hover:bg-veryDarkGrey hover:text-neonGreen hover:border-neonGreen transition duration-300 px-[177px] py-5 flex items-center cursor-pointer"
              onClick={() => handleClick()}
            >
              <span className="text-lg mr-6">GENERATE</span>
              <RightArrow className="text-[#24232C] group-hover:text-[#A4FFAF] transition-colors duration-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
