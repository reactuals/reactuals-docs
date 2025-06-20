import React from "react";
import { useToggle } from "reactuals";
import { DemoWrapper } from "./DemoWrapper";

export const UseToggleExample = () => {
  const [isActive, toggleDarkMode] = useToggle(false);

  // Example illustration images (public domain)
  const lightImg =
    "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/2600.png"; // Sun emoji
  const darkImg =
    "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f319.png"; // Crescent moon emoji

  return (
    <DemoWrapper>
      <div
        className={`p-4 ${
          isActive ? "bg-gray-900 text-white" : "bg-yellow-200 text-black"
        }`}
      >
        <div className="flex items-center justify-center mb-4">
          <img
            src={isActive ? darkImg : lightImg}
            alt={isActive ? "Dark mode" : "Light mode"}
            className="w-16 h-16"
          />
        </div>
        <button
          onClick={toggleDarkMode}
          className={`px-4 py-2 rounded-lg transition-colors ${
            isActive ? "bg-yellow-400 text-black" : "bg-gray-800 text-white"
          }`}
        >
          {isActive ? "Active Lights" : "Inactive Lights"}
        </button>

        <div className="mt-4">
          {!isActive
            ? "Lights enabled. Shine bright!"
            : "Light disabled. Enjoy the night view!"}
        </div>
      </div>
    </DemoWrapper>
  );
};
