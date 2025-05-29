import React from "react";
import { useTimeoutToggle } from "reactuals";
import { DemoWrapper } from "./DemoWrapper";

export const UseTimeoutToggleExample = () => {
  const [visible, show] = useTimeoutToggle(3000);

  return (
    <DemoWrapper>
      <h3>Show Notification for 3 Seconds</h3>
      <button onClick={show} className="btn">
        Show Notification
      </button>
      {visible && (
        <div className="notification">
          This notification will disappear after 3 seconds!
        </div>
      )}
    </DemoWrapper>
  );
};
