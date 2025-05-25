import React, { useState } from "react";
import { useKeyPress } from "reactuals";
import { DemoWrapper } from "./DemoWrapper";

export const UseKeyPressExample = () => {
  const [pressCount, setPressCount] = useState(0);

  useKeyPress("Enter", () => {
    setPressCount((prev) => prev + 1);
  });

  return (
    <DemoWrapper>
      <p>Press the "Enter" key to increment the counter.</p>
      <p>Enter Press Count: {pressCount}</p>

      <style jsx>{`
        .demo-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            sans-serif;
        }

        p {
          font-size: 1.1rem;
          margin: 0;
          text-align: center;
        }
      `}</style>
    </DemoWrapper>
  );
};
