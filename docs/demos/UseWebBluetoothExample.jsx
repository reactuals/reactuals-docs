import React, { useState } from "react";
import { useWebBluetooth } from "reactuals";
import { DemoWrapper } from "./DemoWrapper";

// Icon components
function BluetoothIcon({ className = "", ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="icon icon-tabler icons-tabler-outline icon-tabler-bluetooth"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 8l10 8l-5 4l0 -16l5 4l-10 8" />
    </svg>
  );
}

function ConnectIcon({ className = "", ...props }) {
  return (
    <svg
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 24 24"
      className={className}
      {...props}
    >
      <path
        d="M17 7L7 17M7 7l10 10M12 3v18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DisconnectIcon({ className = "", ...props }) {
  return (
    <svg
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 24 24"
      className={className}
      {...props}
    >
      <path
        d="M6 18L18 6M6 6l12 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ConnectedDeviceIcon({ className = "", ...props }) {
  return (
    <svg
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 24 24"
      className={className}
      {...props}
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" fill="currentColor" />
    </svg>
  );
}

function InfoIcon({ className = "", ...props }) {
  return (
    <svg
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 24 24"
      className={className}
      {...props}
    >
      <path
        d="M13 16h-1v-4h-1m1-4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function UseWebBluetoothExample() {
  const { connect, disconnect, device, isSupported, error } = useWebBluetooth();
  const [status, setStatus] = useState(null);

  const handleConnect = async () => {
    const device = await connect({
      acceptAllDevices: true,
      optionalServices: ["battery_service"],
    });
    setStatus(device ? "Connected successfully!" : "Connection failed.");
    setTimeout(() => setStatus(null), 3000);
  };

  return (
    <DemoWrapper>
      <div className="p-8 max-w-xl mx-auto bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-2xl shadow text-gray-900 dark:text-gray-100 border border-blue-100 dark:border-gray-700">
        <div className="flex items-center gap-3 mb-6">
          <BluetoothIcon className="text-blue-500 dark:text-blue-400" />
          <h3 className="text-2xl font-bold tracking-tight">
            Web Bluetooth Demo
          </h3>
        </div>
        <div className="space-y-6">
          <div className="flex flex-wrap gap-4">
            <button
              onClick={handleConnect}
              disabled={!isSupported}
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg shadow hover:from-blue-600 hover:to-blue-700 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              <span className="inline-flex items-center gap-2">
                <BluetoothIcon className="inline text-white" />
                Connect Bluetooth
              </span>
            </button>
            {device && (
              <button
                onClick={disconnect}
                className="px-6 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-lg shadow hover:from-red-600 hover:to-red-700 transition"
              >
                <span className="inline-flex items-center gap-2">
                  <DisconnectIcon className="inline text-white" />
                  Disconnect
                </span>
              </button>
            )}
          </div>
          {status && (
            <div
              className={`rounded-lg px-4 py-3 text-lg font-medium shadow transition ${
                status.includes("successfully")
                  ? "bg-green-50 text-green-700 border border-green-200"
                  : "bg-red-50 text-red-700 border border-red-200"
              }`}
            >
              {status}
            </div>
          )}
          {error && (
            <div className="rounded-lg px-4 py-3 text-lg font-medium bg-red-50 text-red-700 border border-red-200 shadow">
              Error: {error.message}
            </div>
          )}
          {device && (
            <div className="rounded-lg px-4 py-3 bg-blue-50 dark:bg-blue-900/30 text-blue-900 dark:text-blue-200 border border-blue-200 dark:border-blue-700 font-medium shadow flex items-center gap-2">
              <ConnectedDeviceIcon className="text-blue-500 dark:text-blue-300" />
              Connected to:{" "}
              <span className="font-bold ml-1">
                {device.name || "Unnamed Device"}
              </span>
            </div>
          )}
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mt-2">
            <InfoIcon className="text-blue-400" />
            Click to connect to a Bluetooth device. Supported in Chrome/Edge on
            secure contexts (HTTPS).
          </div>
        </div>
      </div>
    </DemoWrapper>
  );
}
