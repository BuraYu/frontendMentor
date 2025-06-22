import "./App.css";
// import Copy from "./assets/icon-copy.svg";
import { useState } from "react";
import Slider from "rc-slider";

import "rc-slider/assets/index.css";

function App() {
  const [passwordCreate, setPasswordCreated] = useState<boolean>(false);
  // TODO rc-slider is passing values, but not a number? check this
  const [passwordLength, setPasswordLength] = useState<number | any>(10);
  const [isFocused, setIsFocused] = useState(false);

  const handleClick = (): void => {
    setPasswordCreated(false);
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
            P4$5W0rD!
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
                max={32}
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
            <div>Checkboxes</div>
            <div>Password Strength</div>
            <div>
              <span>generate</span>
              <span>icon</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
