import React, { useState } from "react";
import { useWindowResize } from "reactuals";
import { DemoWrapper } from "./DemoWrapper";

export const UseWindowResizeExample = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useWindowResize(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  });

  return (
    <DemoWrapper>
      <p className="text-lg text-center text-gray-800 mb-4 dark:text-gray-400 ">
        Resize the window to see the dimensions update:
      </p>
      <div className="flex gap-8 bg-gray-50 p-4 rounded-lg border border-gray-200 justify-center">
        <div className="flex flex-col items-center gap-1">
          <span className="text-sm text-gray-500 font-medium">Width:</span>
          <span className="text-2xl font-bold text-blue-600 font-mono">
            {windowSize.width}px
          </span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-sm text-gray-500 font-medium">Height:</span>
          <span className="text-2xl font-bold text-blue-600 font-mono">
            {windowSize.height}px
          </span>
        </div>
      </div>
    </DemoWrapper>
  );
};
