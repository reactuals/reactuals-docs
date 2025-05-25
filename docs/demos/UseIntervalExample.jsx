import React, { useState } from "react";
import { useInterval } from "reactuals";
import { DemoWrapper } from "./DemoWrapper";

export const UseIntervalExample = () => {
  const [count, setCount] = useState(0);
  const [delay, setDelay] = useState(1000);

  useInterval(() => {
    setCount(count + 1);
  }, delay);

  const toggleInterval = () => setDelay(delay ? null : 1000);
  const resetCount = () => setCount(0);

  return (
    <DemoWrapper>
      <div className="flex flex-col items-center gap-4">
        <p className="text-lg text-center">
          Count: <span className="font-mono">{count}</span>
        </p>
        <div className="flex gap-3">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            onClick={toggleInterval}
          >
            {delay ? "Pause" : "Resume"}
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
            onClick={resetCount}
          >
            Reset
          </button>
        </div>
        <p className="text-base text-center">
          Interval:{" "}
          <span className="font-mono">{delay ? `${delay}ms` : "Paused"}</span>
        </p>
      </div>
    </DemoWrapper>
  );
};
