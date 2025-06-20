import React from "react";
import { useMediaQuery } from "reactuals";
import { DemoWrapper } from "./DemoWrapper";

export const UseMediaQueryExample = () => {
  const isLargeScreen = useMediaQuery("(min-width: 768px)");

  return (
    <DemoWrapper>
      <div className="flex flex-col items-center gap-4 max-w-2xl w-full">
        <p className="text-lg text-center">
          Resize the window to switch between grid and list layouts (breakpoint:
          768px)
        </p>
        <p className="text-base text-center">
          Current Layout:{" "}
          <span className="font-mono">{isLargeScreen ? "Grid" : "List"}</span>
        </p>
        <div
          className={`w-full p-4 bg-gray-100 rounded-lg shadow-md text-black ${
            isLargeScreen ? "grid grid-cols-3 gap-4" : "flex flex-col gap-2"
          }`}
        >
          {["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"].map(
            (item, index) => (
              <div
                key={index}
                className="p-3 bg-white rounded border border-gray-300 text-center"
              >
                {item}
              </div>
            )
          )}
        </div>
        <p className="text-sm text-center text-gray-600">
          Try resizing the browser window to see the layout change dynamically.
        </p>
      </div>
    </DemoWrapper>
  );
};
