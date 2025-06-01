import React from "react";
import { useScrollLock } from "reactuals";
import { DemoWrapper } from "./DemoWrapper";

export function UseScrollLockExample() {
  const { locked, toggle } = useScrollLock();

  return (
    <DemoWrapper>
      <div className="space-y-4 py-6">
        <button
          onClick={toggle}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          {locked ? "Unlock Scroll" : "Lock Scroll"}
        </button>
        <p className="text-lg">
          Scroll is{" "}
          <span className="font-bold">{locked ? "locked" : "unlocked"}</span>.
        </p>
      </div>
      <div className="flex justify-center">
        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-lg">
          Click the button to toggle scroll lock. When scroll is locked, the
          page will not scroll even if you try to use the mouse wheel or touch
          gestures.
        </p>
      </div>
    </DemoWrapper>
  );
}
