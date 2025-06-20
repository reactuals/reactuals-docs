import React, { useEffect, useState } from "react";
import { useScrollPosition } from "reactuals";
import { DemoWrapper } from "./DemoWrapper";

export const UseScrollPositionExample = () => {
  const scrollY = useScrollPosition();

  return (
    <div>
      <DemoWrapper>Scroll down then up to see the scroll position.</DemoWrapper>

      <div className="fixed top-16 right-0 w-full z-20 bg-white shadow-md ">
        <div className="flex justify-center w-full items-center gap-4 w-full p-4 text-black font-medium text-xl">
          Scroll Position:{" "}
          <span className="font-mono">{Math.round(scrollY)}px</span>
        </div>
      </div>
    </div>
  );
};
