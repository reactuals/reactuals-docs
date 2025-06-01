import React from "react";
import { useInputDevice } from "reactuals";
import { DemoWrapper } from "./DemoWrapper";

export function UseInputDeviceExample() {
  const deviceType = useInputDevice();

  const getDeviceMessage = () => {
    switch (deviceType) {
      case "mouse":
        return "Mouse detected! Try clicking or moving the cursor.";
      case "touch":
        return "Touch input detected! Try tapping or swiping.";
      case "keyboard":
        return "Keyboard input detected! Try pressing any key.";
      default:
        return "No input detected yet. Interact with the page to see the device type.";
    }
  };

  return (
    <DemoWrapper>
      <div className="space-y-3">
        <p className="text-lg">
          Current Input Device:{" "}
          <span className="font-bold capitalize">{deviceType}</span>
        </p>
        <p className="text-base">{getDeviceMessage()}</p>
        <div className="flex flex-wrap gap-3 justify-center mt-4">
          <span
            className={`px-3 py-1 rounded-full text-sm ${
              deviceType === "mouse"
                ? "bg-green-500 text-white"
                : "bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300"
            }`}
          >
            Mouse
          </span>
          <span
            className={`px-3 py-1 rounded-full text-sm ${
              deviceType === "touch"
                ? "bg-green-500 text-white"
                : "bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300"
            }`}
          >
            Touch
          </span>
          <span
            className={`px-3 py-1 rounded-full text-sm ${
              deviceType === "keyboard"
                ? "bg-green-500 text-white"
                : "bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300"
            }`}
          >
            Keyboard
          </span>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
          Click, tap, or press a key to see the input device type update.
        </p>
      </div>
    </DemoWrapper>
  );
}
