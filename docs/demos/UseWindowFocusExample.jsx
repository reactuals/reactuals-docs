import React, { useEffect } from "react";
import { useWindowFocus } from "reactuals";
import { DemoWrapper } from "./DemoWrapper";

export function UseWindowFocusExample() {
  const { isFocused, isVisible } = useWindowFocus();

  useEffect(() => {
    const originalTitle = document.title;
    if (!isVisible) {
      document.title = "🔒 Window Hidden";
    } else if (!isFocused) {
      document.title = "👀 Window Not Focused";
    } else {
      document.title = "✅ Window Active";
    }
    return () => {
      document.title = originalTitle;
    };
  }, [isFocused, isVisible]);

  return (
    <DemoWrapper>
      <div className="space-y-3 flex flex-col items-center">
        <p className="text-lg">
          Window Status:{" "}
          <span className="font-bold">
            {isFocused ? "Focused" : "Not Focused"},{" "}
            {isVisible ? "Visible" : "Hidden"}
          </span>
        </p>
        <div className="flex flex-wrap gap-3">
          <span
            className={`px-3 py-1 rounded-full text-sm ${
              isFocused
                ? "bg-green-500 text-white"
                : "bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300"
            }`}
          >
            Focus: {isFocused ? "Active" : "Inactive"}
          </span>
          <span
            className={`px-3 py-1 rounded-full text-sm ${
              isVisible
                ? "bg-green-500 text-white"
                : "bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300"
            }`}
          >
            Visibility: {isVisible ? "Active" : "Inactive"}
          </span>
        </div>
        <div className="flex justify-center mt-4">
          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md text-center">
            Switch tabs, minimize the window, or click elsewhere to see the
            focus and visibility change. The document title will update too!
          </p>
        </div>
      </div>
    </DemoWrapper>
  );
}
