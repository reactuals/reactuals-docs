import React, { useEffect, useState } from "react";
import { useScrollPosition } from "reactuals";
import { DemoWrapper } from "./DemoWrapper";

export const UseScrollPositionExample = () => {
  const scrollY = useScrollPosition();

  return (
    <div className="fixed bottom-[40%] right-4 max-w-72 z-50">
      <DemoWrapper>
        <div className="flex flex-col items-center gap-4 max-w-2xl w-full pt-5 pb-0">
          <p className=" text-lg text-center">
            Scroll down to see the progress bar fill based on your scroll
            position.
          </p>
          <p className="text-base text-base w-full rounded-xl border p-4">
            Scroll Position:{" "}
            <span className="font-mono">{Math.round(scrollY)}px</span>
          </p>
        </div>
      </DemoWrapper>
    </div>
  );
};
