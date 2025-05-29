import React from "react";
import { useIdleTimeout } from "reactuals";

export const UseIdleTimeoutExample = () => {
  const isIdle = useIdleTimeout(5000);

  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-4">useIdleTimeout Example</h3>
      <div className="p-4 bg-gray-100 rounded-lg border border-gray-300">
        <p className="text-gray-700">
          Status:{" "}
          <span
            className={`font-bold ${
              isIdle ? "text-red-600" : "text-green-600"
            }`}
          >
            {isIdle ? "Idle" : "Active"}
          </span>
        </p>
        <p className="mt-2 text-sm text-gray-600">
          Stop interacting (e.g., moving mouse, clicking, scrolling) for 5
          seconds to see idle state.
        </p>
      </div>
    </div>
  );
};
