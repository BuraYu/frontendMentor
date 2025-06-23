import "./App.css";
// import Copy from "./assets/icon-copy.svg";
import { useState } from "react";
import Slider from "rc-slider";
import CheckIcon from "./assets/icon-check.svg";

import "rc-slider/assets/index.css";
import RightArrow from "./components/icons/RightArrow";
import PasswordDisplay from "./components/PasswordDisplay";

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
  const handleClick = (): void => {
    if (
      checked.upper === false &&
      checked.lower === false &&
      checked.number === false &&
      checked.symbol === false
    ) {
      // TODO add animation?
      console.log("select option");
    } else {
      passwordStrenghtChecker(passwordLength);
      setPasswordCreated(true);
      randomString(passwordLength, checked);
    }
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
    if (length >= 14) score++;
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
    <div className="h-screen flex justify-center items-center flex-col bg-veryDarkGrey relative">
      <h1 className="font-jetbrains text-2xl text-grey mb-8">
        Password Generator
      </h1>
      <div className="max-w-[540px] w-full">
        <PasswordDisplay password={password} passwordCreate={passwordCreate} />
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
                <label className="flex gap-4 items-center relative">
                  <input
                    type="checkbox"
                    checked={checked.upper}
                    onChange={() => toggleCheckbox("upper")}
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
                <label className="flex gap-4 items-center relative">
                  <input
                    type="checkbox"
                    checked={checked.lower}
                    onChange={() => toggleCheckbox("lower")}
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
                <label className="flex gap-4 items-center relative">
                  <input
                    type="checkbox"
                    checked={checked.number}
                    onChange={() => toggleCheckbox("number")}
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
                <label className="flex gap-4 items-center relative">
                  <input
                    type="checkbox"
                    checked={checked.symbol}
                    onChange={() => toggleCheckbox("symbol")}
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
