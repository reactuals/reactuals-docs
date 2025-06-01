import React from "react";
import { useColorScheme } from "reactuals";
import { DemoWrapper } from "./DemoWrapper";

export function UseColorSchemeExample() {
  const { scheme, toggleScheme, setScheme } = useColorScheme();

  // Button styles with different colors
  const buttonBase =
    "px-4 py-2 rounded-full text-white font-medium shadow transition-colors focus:outline-none focus:ring-2";
  const toggleButton =
    buttonBase +
    " bg-blue-600 hover:bg-blue-700 focus:ring-blue-400 flex items-center gap-2";
  const lightButton =
    buttonBase +
    " bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-300 flex items-center gap-2";
  const darkButton =
    buttonBase +
    " bg-gray-800 hover:bg-gray-900 focus:ring-gray-500 flex items-center gap-2";

  return (
    <DemoWrapper>
      <div className="flex flex-col gap-2.5">
        <p className="text-base">
          Current Theme: <strong>{scheme}</strong>
        </p>
        <div className="flex gap-2.5 flex-wrap justify-center">
          <button onClick={toggleScheme} className={toggleButton}>
            <span role="img" aria-label="toggle">
              🔄
            </span>
            Toggle Theme
          </button>
          <button onClick={() => setScheme("light")} className={lightButton}>
            <span role="img" aria-label="sun">
              ☀️
            </span>
            Set Light
          </button>
          <button onClick={() => setScheme("dark")} className={darkButton}>
            <span role="img" aria-label="moon">
              🌙
            </span>
            Set Dark
          </button>
        </div>
        <p className="text-sm mt-2.5">
          Try changing your system theme or clicking the buttons to see the
          theme update.
        </p>
      </div>
    </DemoWrapper>
  );
}
