import React from "react";
import { useEyeDropper } from "reactuals";
import { DemoWrapper } from "./DemoWrapper";

export function UseEyeDropperExample() {
  const { pickColor, isSupported, error, pickedColor, clearError } =
    useEyeDropper();

  const handlePick = async () => {
    const { result } = await pickColor();
    if (result) {
      console.log(`Picked color: ${result.sRGBHex}`);
    }
  };

  return (
    <DemoWrapper>
      <div className="flex flex-col m-auto items-center gap-4 max-w-sm w-full">
        <button
          onClick={handlePick}
          disabled={!isSupported()}
          className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-indigo-600 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Pick Color
        </button>
        {pickedColor && (
          <div className="flex items-center w-full gap-4 bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
            <div
              className="w-20 h-20 rounded-xl border-2 border-gray-300 shadow"
              style={{ backgroundColor: pickedColor }}
            />
            <div>
              Picked Color:
              <p className="text-lg font-medium text-gray-800 dark:text-gray-100">
                {pickedColor}
              </p>
            </div>
          </div>
        )}
        {error && (
          <div className="flex items-center gap-3 bg-red-50 dark:bg-red-900 p-3 rounded-lg">
            <p className="text-md text-red-600 dark:text-red-300 font-medium">
              Error: {error.message}
            </p>
            <button
              onClick={clearError}
              className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 text-sm font-semibold"
            >
              Clear
            </button>
          </div>
        )}
        <div className="text-center mt-2">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Click{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              Pick Color
            </span>{" "}
            to select a color from your screen.
            <br />
            <span className="italic">Supported in Chrome/Edge only.</span>
          </p>
        </div>
      </div>
    </DemoWrapper>
  );
}
