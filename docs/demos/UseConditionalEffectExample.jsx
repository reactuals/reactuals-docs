import React, { useState } from "react";
import { useConditionalEffect } from "reactuals";
import { DemoWrapper } from "./DemoWrapper";

export const UseConditionalEffectExample = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [count, setCount] = useState(0);
  const [logs, setLogs] = useState([]);

  useConditionalEffect(
    isEnabled,
    () => {
      const timestamp = new Date().toLocaleTimeString();
      const log = `🔥 Effect executed at ${timestamp} (count: ${count})`;
      setLogs((prev) => [...prev.slice(-4), log]); // Keep only last 5 logs

      return () => {
        console.log("Cleanup function called");
      };
    },
    [count]
  );

  const clearLogs = () => setLogs([]);

  return (
    <DemoWrapper>
      <p className="text-lg text-center text-gray-500 mb-6">
        Toggle the effect on/off and increment the counter to see conditional
        effects in action:
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <button
          onClick={() => setIsEnabled(!isEnabled)}
          className={`px-6 py-3 rounded-lg font-medium transition-all ${
            isEnabled
              ? "bg-red-500 text-white hover:bg-red-600"
              : "bg-green-500 text-white hover:bg-green-600"
          }`}
        >
          {isEnabled ? "🛑 Disable Effect" : "✅ Enable Effect"}
        </button>

        <button
          onClick={() => setCount((c) => c + 1)}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-all"
        >
          🔢 Increment Count: {count}
        </button>
      </div>

      <div className="w-full max-w-md">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-lg font-semibold text-gray-800">
            Effect Status:
          </h4>
          <div
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              isEnabled
                ? "bg-green-100 text-green-800"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            {isEnabled ? "🟢 Active" : "🔴 Inactive"}
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 min-h-[120px]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">
              Effect Logs:
            </span>
            {logs.length > 0 && (
              <button
                onClick={clearLogs}
                className="text-xs text-gray-500 hover:text-gray-700 underline"
              >
                Clear
              </button>
            )}
          </div>

          {logs.length === 0 ? (
            <p className="text-sm text-gray-500 italic">
              {isEnabled
                ? "Increment the counter to trigger the effect..."
                : "Enable the effect first..."}
            </p>
          ) : (
            <div className="space-y-1">
              {logs.map((log, i) => (
                <p
                  key={i}
                  className="text-sm text-gray-700 font-mono bg-white px-2 py-1 rounded border"
                >
                  {log}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </DemoWrapper>
  );
};
