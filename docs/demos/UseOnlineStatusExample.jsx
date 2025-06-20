import React from "react";
import { useOnlineStatus } from "reactuals";
import { DemoWrapper } from "./DemoWrapper";

export const UseOnlineStatusExample = () => {
  const online = useOnlineStatus();

  return (
    <DemoWrapper>
      <div className="flex flex-col items-center gap-4 max-w-lg m-auto w-full">
        <p className="text-lg text-center">
          Toggle your network connection to see the status update.
        </p>

        <div
          className={`p-4 rounded-lg content-center text-black shadow-md w-full flex items-center justify-center gap-2 ${
            online ? "bg-green-100" : "bg-red-100"
          }`}
        >
          <span className="text-base  font-medium">Network Status: </span>
          <span
            className={`w-3 h-3 rounded-full ${
              online ? "bg-green-500" : "bg-red-500"
            }`}
          ></span>
          <span className="font-mono">{online ? "Online" : "Offline"}</span>
        </div>
        <p className="text-sm text-center text-gray-600 dark:text-gray-400">
          Try turning off your Wi-Fi or using browser dev tools to simulate
          offline mode.
        </p>
      </div>
    </DemoWrapper>
  );
};
