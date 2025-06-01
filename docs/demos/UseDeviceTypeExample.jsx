import React from "react";
import { useDeviceType } from "reactuals";
import { DemoWrapper } from "./DemoWrapper";

export function UseDeviceTypeExample() {
  const { deviceType, isMobile, isTab, isDesktop } = useDeviceType();

  const getDeviceMessage = () => {
    if (isMobile) return "Mobile device detected! Optimized for small screens.";
    if (isTab) return "Tablet device detected! Great for touch interfaces.";
    return "Desktop device detected! Enjoy the full experience.";
  };

  return (
    <DemoWrapper>
      <p className="text-lg">
        Device Type: <span className="font-bold capitalize">{deviceType}</span>
      </p>
      <p className="text-base">{getDeviceMessage()}</p>
      <div className="flex flex-wrap gap-3 justify-center mt-4">
        <span
          className={`px-3 py-1 rounded-full text-sm ${
            isMobile
              ? "bg-green-500 text-white"
              : "bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300"
          }`}
        >
          Mobile: {isMobile ? "Yes" : "No"}
        </span>
        <span
          className={`px-3 py-1 rounded-full text-sm ${
            isTab
              ? "bg-green-500 text-white"
              : "bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300"
          }`}
        >
          Tablet: {isTab ? "Yes" : "No"}
        </span>
        <span
          className={`px-3 py-1 rounded-full text-sm ${
            isDesktop
              ? "bg-green-500 text-white"
              : "bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300"
          }`}
        >
          Desktop: {isDesktop ? "Yes" : "No"}
        </span>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
        Resize the window to see the device type change.
      </p>
    </DemoWrapper>
  );
}
