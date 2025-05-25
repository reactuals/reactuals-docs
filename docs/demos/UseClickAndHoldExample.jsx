import React, { useState } from "react";
import { DemoWrapper } from "./DemoWrapper";
// import { useClickAndHold } from "reactuals";

export const UseClickAndHoldExample = () => {
  const [holdCount, setHoldCount] = useState(0);

  // useClickAndHold(() => {
  //   setHoldCount((prev) => prev + 1);
  // }, 1000); // 1000ms hold duration

  return (
    <DemoWrapper title="useClickAndHold Demo">
      <p>Hold Count: {holdCount}</p>
      <button>Click and Hold Me</button>
    </DemoWrapper>
  );
};
