import { useClickAnywhere } from "reactuals";
import React from "react";
import { DemoWrapper } from "./DemoWrapper";

export function UseClickAnywhereExample() {
  const [count, setCount] = React.useState(0);

  useClickAnywhere(() => {
    setCount((prevCount) => prevCount + 1);
  });

  return (
    <DemoWrapper>
      Click Count : <h2 style={{ lineHeight: 1.5 }}> {count} </h2>
    </DemoWrapper>
  );
}
