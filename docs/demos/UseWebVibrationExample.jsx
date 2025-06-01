import React, { useState } from "react";
import { useWebVibration } from "reactuals";
import { DemoWrapper } from "./DemoWrapper";

export function UseWebVibrationExample() {
  const { vibrate, isSupported, error } = useWebVibration();
  const [vibrationStatus, setVibrationStatus] = useState(null);

  const handleVibrate = (pattern) => {
    const success = vibrate(pattern);
    setVibrationStatus(success ? "Vibration triggered!" : "Failed to vibrate.");
    setTimeout(() => setVibrationStatus(null), 3000);
  };

  return (
    <DemoWrapper>
      <div className="space-y-4 flex flex-col items-center">
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => handleVibrate(200)}
            disabled={!isSupported}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Short Vibration
          </button>
          <button
            onClick={() => handleVibrate([200, 100, 200])}
            disabled={!isSupported}
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Pattern Vibration
          </button>
        </div>
        {vibrationStatus && (
          <p
            className={`text-lg ${
              vibrationStatus.includes("triggered")
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {vibrationStatus}
          </p>
        )}
        {error && (
          <p className="text-lg text-red-500">Error: {error.message}</p>
        )}
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Click a button to trigger device vibration. Supported primarily on
          mobile devices with Vibration API support.
        </p>
      </div>
    </DemoWrapper>
  );
}
