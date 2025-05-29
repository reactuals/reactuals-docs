import React from "react";
import { useToggle } from "reactuals";
import { DemoWrapper } from "./DemoWrapper";

export const UseToggleExample = () => {
  const [isDarkMode, toggleDarkMode] = useToggle(false);

  // Example illustration images (public domain)
  const lightImg =
    "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/2600.png"; // Sun emoji
  const darkImg =
    "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f319.png"; // Crescent moon emoji

  return (
    <DemoWrapper
      className={`p-4 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex items-center justify-center mb-4">
        <img
          src={isDarkMode ? darkImg : lightImg}
          alt={isDarkMode ? "Dark mode" : "Light mode"}
          className="w-16 h-16"
        />
      </div>
      <button
        onClick={toggleDarkMode}
        className={`px-4 py-2 rounded-lg transition-colors ${
          isDarkMode ? "bg-yellow-400 text-black" : "bg-gray-800 text-white"
        }`}
      >
        {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
      <div className="mt-4">
        {isDarkMode
          ? "Dark mode is enabled. Enjoy the night view!"
          : "Light mode is enabled. Shine bright!"}
      </div>
    </DemoWrapper>
  );
};
