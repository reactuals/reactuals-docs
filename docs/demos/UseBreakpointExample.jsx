import React from "react";
import { useBreakpoint, useColorScheme } from "reactuals";
import { DemoWrapper } from "./DemoWrapper";

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

export function UseBreakpointExample() {
  const { breakpoint, isBreakpoint, isAbove, isBelow } =
    useBreakpoint(breakpoints);
  const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const getMessage = () => {
    if (isBreakpoint("sm"))
      return "Small screen detected! Try resizing the window.";
    if (isBreakpoint("md")) return "Medium screen detected! Great for tablets.";
    if (isBreakpoint("lg"))
      return "Large screen detected! Perfect for desktops.";
    if (isBreakpoint("xl"))
      return "Extra-large screen detected! Enjoy the space.";
    return "Default breakpoint. Resize to see changes!";
  };

  return (
    <DemoWrapper>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <p style={{ fontSize: "16px" }} className="dark:text-white">
          Current Breakpoint: <strong>{breakpoint || "default"}</strong>
        </p>
        <p style={{ fontSize: "16px" }}>{getMessage()}</p>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          <div
            style={{
              padding: "10px",
              backgroundColor: isBreakpoint("md") ? "#4caf50" : "#ccc",
              color: "white",
              borderRadius: "4px",
            }}
          >
            Medium (md): {isBreakpoint("md") ? "Active" : "Inactive"}
          </div>
          <div
            style={{
              padding: "10px",
              backgroundColor: isAbove("lg") ? "#4caf50" : "#ccc",
              color: "white",
              borderRadius: "4px",
            }}
          >
            Above Large (lg): {isAbove("lg") ? "Yes" : "No"}
          </div>
          <div
            style={{
              padding: "10px",
              backgroundColor: isBelow("sm") ? "#4caf50" : "#ccc",
              color: "white",
              borderRadius: "4px",
            }}
          >
            Below Small (sm): {isBelow("sm") ? "Yes" : "No"}
          </div>
        </div>
      </div>
    </DemoWrapper>
  );
}
