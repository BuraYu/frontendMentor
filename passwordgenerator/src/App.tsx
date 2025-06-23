import "./App.css";
import { useState } from "react";
import SliderControl from "./components/SliderControl";
import PasswordDisplay from "./components/PasswordDisplay";
import Checkbox from "./components/Checkbox";
import StrengthIndicator from "./components/StrengthIndicator";
import GenerateButton from "./components/GenerateButton";
import { Toaster } from "react-hot-toast";

type CharOptions = {
  upper?: boolean;
  lower?: boolean;
  number?: boolean;
  symbol?: boolean;
};

function App() {
  const [passwordCreate, setPasswordCreated] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState<number>(10);
  const [isFocused, setIsFocused] = useState(false);
  const [checked, setChecked] = useState({
    upper: true,
    lower: false,
    number: false,
    symbol: true,
  });
  const [passwordStrength, setPasswordStrength] = useState("");
  const [strength, setStrength] = useState(0);

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
      alert("Please select at least one option.");
      return;
    }

    let result = "";
    for (let i = 0; i < length; i++) {
      const randomChar = availableChars.charAt(
        Math.floor(Math.random() * availableChars.length)
      );
      result += randomChar;
    }
    setPassword(result);
  }

  const toggleCheckbox = (key: keyof typeof checked) => {
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleClick = () => {
    if (
      !checked.upper &&
      !checked.lower &&
      !checked.number &&
      !checked.symbol
    ) {
      alert("Please select at least one option.");
      return;
    }
    passwordStrenghtChecker(passwordLength);
    setPasswordCreated(true);
    randomString(passwordLength, checked);
  };

  const passwordStrenghtChecker = (length: number) => {
    let score = 0;
    if (checked.upper) score++;
    if (checked.lower) score++;
    if (checked.number) score++;
    if (checked.symbol) score++;
    if (length >= 12) score++;
    if (length >= 14) score++;
    if (length >= 16) score++;

    if (length < 8) {
      setPasswordStrength("Weak");
      setStrength(1);
    } else if (score <= 2) {
      setPasswordStrength("Fair");
      setStrength(2);
    } else if (score <= 4) {
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
        <Toaster position="top-center" />

        <div className="bg-darkGrey font-jetbrains">
          <div className="flex flex-col gap-8 px-8 py-6">
            <SliderControl
              value={passwordLength}
              setValue={setPasswordLength}
              isFocused={isFocused}
              setIsFocused={setIsFocused}
            />
            <div className="text-white text-lg">
              <Checkbox
                label="Include Uppercase Letters"
                checked={checked.upper}
                onChange={() => toggleCheckbox("upper")}
              />
              <Checkbox
                label="Include Lowercase Letters"
                checked={checked.lower}
                onChange={() => toggleCheckbox("lower")}
              />
              <Checkbox
                label="Include Numbers"
                checked={checked.number}
                onChange={() => toggleCheckbox("number")}
              />
              <Checkbox
                label="Include Symbols"
                checked={checked.symbol}
                onChange={() => toggleCheckbox("symbol")}
              />
            </div>
            <StrengthIndicator strength={strength} label={passwordStrength} />
            <GenerateButton onClick={handleClick} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
