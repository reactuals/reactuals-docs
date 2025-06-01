import React, { useRef } from "react";
import { useFullscreen } from "reactuals";
import { DemoWrapper } from "./DemoWrapper";

export function UseFullscreenExample() {
  const ref = useRef(null);
  const { isFullscreen, enter, exit } = useFullscreen(ref);

  return (
    <DemoWrapper>
      <div className="p-6 max-w-xl mx-auto dark:bg-gray-800 rounded-2xl border border-gray-200 shadow-md text-gray-900 dark:text-gray-100">
        <div
          ref={ref}
          className="h-64 bg-gray-200 dark:bg-gray-700 flex items-center flex-col justify-center rounded-md mb-4"
        >
          <p className="text-lg font-medium">
            {isFullscreen ? "Fullscreen Active!" : "Content Area"}
          </p>
          <button onClick={isFullscreen ? exit : enter} className="btn">
            {isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
          </button>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-5 pt-5">
          Click the button to toggle fullscreen mode for the content area.
        </p>
      </div>
    </DemoWrapper>
  );
}
