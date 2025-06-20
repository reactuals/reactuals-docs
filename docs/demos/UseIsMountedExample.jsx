import React, { useState, useEffect } from "react";
import { useIsMounted } from "reactuals";
import { DemoWrapper } from "./DemoWrapper";

export const UseIsMountedExample = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [showWarning, setShowWarning] = useState(false);

  const ChildComponent = () => {
    const isMounted = useIsMounted();
    const [data, setData] = useState("Waiting for data...");

    useEffect(() => {
      // Simulate a slow API call
      const fetchData = async () => {
        await new Promise((resolve) => setTimeout(resolve, 3000));
        if (isMounted()) {
          setData("Data fetched successfully!");
        } else {
          setShowWarning(true); // Show warning if component is unmounted
        }
      };
      fetchData();
    }, []);

    return (
      <div className="p-4 bg-gray-100  text-black rounded-lg shadow-md flex flex-col gap-2 max-w-sm w-full">
        <p className="text-lg text-center">
          Component Status:{" "}
          <span className="font-mono">
            {isMounted() ? "Mounted" : "Unmounted"}
          </span>
        </p>
        <p className="text-base text-center">
          Data: <span className="font-mono">{data}</span>
        </p>
      </div>
    );
  };

  return (
    <DemoWrapper>
      <div className="flex flex-col items-center gap-4 dark:text-black">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          onClick={() => setIsVisible(!isVisible)}
        >
          {isVisible ? "Unmount" : "Mount"} Component
        </button>
        {showWarning && (
          <p className="text-red-500  text-base text-center">
            Warning: Attempted to update state on an unmounted component!
          </p>
        )}
        {isVisible && <ChildComponent />}
      </div>
    </DemoWrapper>
  );
};
