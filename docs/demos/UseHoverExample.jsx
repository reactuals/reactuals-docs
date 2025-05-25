import React from "react";
import { useHover } from "reactuals";
import { DemoWrapper } from "./DemoWrapper";

export const UseHoverExample = () => {
  const [ref, hovered] = useHover();

  return (
    <DemoWrapper>
      <div className="flex flex-col items-center gap-4">
        <div
          ref={ref}
          className={`w-32 h-32 flex items-center justify-center rounded-lg transition-colors duration-200 ${
            hovered ? "bg-blue-200" : "bg-gray-200"
          }`}
        >
          <span className="text-lg font-medium">Hover me!</span>
        </div>
        <p className="text-base text-center">
          Hover state:{" "}
          <span className="font-mono">
            {hovered ? "Hovered" : "Not hovered"}
          </span>
        </p>
      </div>
    </DemoWrapper>
  );
};
