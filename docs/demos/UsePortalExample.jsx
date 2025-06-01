import React, { useState } from "react";
import { usePortal } from "reactuals";
import { createPortal } from "react-dom";
import { DemoWrapper } from "./DemoWrapper";

export function UsePortalExample() {
  const portalRoot = usePortal("demo-portal");
  const [isVisible, setIsVisible] = useState(false);

  return (
    <DemoWrapper>
      <div className="space-y-4">
        <button onClick={() => setIsVisible(!isVisible)} className="btn">
          {isVisible ? "Hide Portal" : "Show Portal"}
        </button>
        <p className="text-lg">
          Portal Status:{" "}
          <span className="font-bold">{isVisible ? "Visible" : "Hidden"}</span>
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Click to toggle a portal-rendered element. The content appears outside
          the component hierarchy.
          <br />
          <span className="italic">
            Portals are important because they let you render children into a
            DOM node that exists outside the DOM hierarchy of the parent
            component. This is useful for UI elements like modals, tooltips, and
            dropdowns that need to visually break out of their container.
          </span>
        </p>
      </div>
      {isVisible &&
        createPortal(
          <div className="fixed top-10 left-10 bg-blue-500 text-white p-4 rounded-md shadow-lg z-50">
            <p className="text-lg">This is rendered in a portal!</p>
            <p className="text-sm mt-2">
              Notice how this element visually escapes its parent container.
            </p>
          </div>,
          portalRoot
        )}
    </DemoWrapper>
  );
}
