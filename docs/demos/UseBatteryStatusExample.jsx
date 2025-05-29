import React from "react";
import { useBatteryStatus } from "reactuals";
import { DemoWrapper } from "./DemoWrapper";

// BatteryCircle: Shows the circular battery visualization
const BatteryCircle = ({ level, charging }) => {
  const radius = 32;
  const circumference = 2 * Math.PI * radius;
  const progress = Math.max(level, 0.08);

  const getStrokeColor = () => {
    if (level >= 0.7) return "#22c55e";
    if (level >= 0.3) return "#facc15";
    return "#ef4444";
  };

  return (
    <div className="relative flex flex-col items-center">
      <svg width="200" height="200" viewBox="0 0 80 80">
        <defs>
          <linearGradient id="batteryGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f0fdfa" />
            <stop offset="100%" stopColor="#e0e7ef" />
          </linearGradient>
        </defs>
        <circle
          cx="40"
          cy="40"
          r={radius}
          stroke="url(#batteryGradient)"
          strokeWidth="8"
          fill="none"
        />
        <circle
          cx="40"
          cy="40"
          r={radius}
          stroke={getStrokeColor()}
          strokeWidth="8"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - progress)}
          strokeLinecap="round"
          style={{
            transition:
              "stroke-dashoffset 0.5s cubic-bezier(.4,2,.6,1), stroke 0.3s",
            filter: "drop-shadow(0 2px 8px rgba(34,197,94,0.15))",
          }}
        />
        {charging && (
          <text
            x="40"
            y="44"
            textAnchor="middle"
            fontSize="28"
            fill="#22c55e"
            style={{ filter: "drop-shadow(0 0 4px #22c55e88)" }}
          >
            ⚡
          </text>
        )}
      </svg>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <span className="text-2xl font-bold text-gray-700 drop-shadow">
          {(level * 100).toFixed(0)}%
        </span>
        <span
          className={`text-xs ${
            level < 0.2 ? "text-red-500" : "text-gray-500"
          }`}
        >
          {level < 0.2 ? "Low Battery" : "Healthy"}
        </span>
      </div>
    </div>
  );
};

// ChargingIndicator: Shows charging status
const ChargingIndicator = ({ charging }) => (
  <div className="flex items-center gap-2">
    <span
      className={`inline-block w-3 h-3 rounded-full shadow ${
        charging ? "bg-green-400 animate-pulse" : "bg-gray-400"
      }`}
    ></span>
    <span className="text-gray-700 font-medium">
      {charging ? "Charging ⚡️" : "Not Charging"}
    </span>
  </div>
);

// BatteryStatus: Combines the circle and charging indicator
const BatteryStatus = ({ level, charging }) => (
  <div className="flex flex-col items-center gap-6">
    <BatteryCircle level={level} charging={charging} />
    <ChargingIndicator charging={charging} />
  </div>
);

export const UseBatteryStatusExample = () => {
  const { level, charging } = useBatteryStatus();

  return (
    <DemoWrapper>
      <div className="p-8 bg-gradient-to-br from-white to-blue-50 rounded-2xl border border-gray-200 shadow-lg max-w-md mx-auto">
        <h2 className="text-lg font-semibold mb-6  flex items-center gap-2 !text-black ">
          <span role="img" aria-label="battery">
            🔋
          </span>
          Battery Status
        </h2>
        {level !== null ? (
          <BatteryStatus level={level} charging={charging} />
        ) : (
          <p className="text-gray-700">Battery Level: Unavailable</p>
        )}
      </div>
    </DemoWrapper>
  );
};
