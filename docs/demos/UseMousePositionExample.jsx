import React from "react";
import { useMousePosition } from "reactuals";
import { DemoWrapper } from "./DemoWrapper";

export function UseMousePositionExample() {
  const { x, y } = useMousePosition();

  return (
    <DemoWrapper>
      <div className="space-y-5 relative ">
        <p className="text-xl font-semibold text-indigo-700">
          Mouse Position:{" "}
        </p>
        <span className="font-extrabold text-3xl text-pink-600 drop-shadow">
          X: {x}
        </span>
        <span className="mx-4 font-extrabold text-3xl text-cyan-600 drop-shadow">
          Y: {y}
        </span>
      </div>
      <div className="flex justify-center">
        <p className="text-base text-gray-500 dark:text-gray-400 pt-6 m-auto  max-w-lg">
          Move the mouse to see the position update in real-time. The values
          represent the mouse's position relative to the top-left corner of the
          viewport.
        </p>
      </div>
    </DemoWrapper>
  );
}
