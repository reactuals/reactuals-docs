import React, { useState } from "react";
import { useUpdateEffect } from "reactuals";
import { DemoWrapper } from "./DemoWrapper";

export const UseUpdateEffectExample = () => {
  const [count, setCount] = useState(0);

  useUpdateEffect(() => {
    console.log(`Count updated to: ${count}`);
  }, [count]);

  return (
    <DemoWrapper>
      <h3 className="text-lg font-semibold mb-4">useUpdateEffect Example</h3>
      <button onClick={() => setCount((c) => c + 1)} className="btn">
        Increment
      </button>
      <p className="mt-4">Count: {count}</p>
      <p className="mt-2 text-sm text-gray-600">
        Check console for update logs (skips initial render).
      </p>
    </DemoWrapper>
  );
};
