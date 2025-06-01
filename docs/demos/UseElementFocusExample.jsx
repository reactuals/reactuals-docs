import React from "react";
import { useElementFocus } from "reactuals";
import { DemoWrapper } from "./DemoWrapper";

export function UseElementFocusExample() {
  const { ref, focus, blur, select, scrollIntoView, focusOnMount } =
    useElementFocus();

  // Optionally focus on mount
  focusOnMount.current = true;

  return (
    <DemoWrapper>
      <div className="space-y-4 justify-center">
        <input
          ref={ref}
          type="text"
          placeholder="Focus me"
          defaultValue={"Click buttons to interact"}
          className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex flex-wrap gap-3">
          <button
            onClick={focus}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Focus
          </button>
          <button
            onClick={blur}
            className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
          >
            Blur
          </button>
          <button
            onClick={select}
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Select Text
          </button>
          <button
            onClick={() =>
              scrollIntoView({ behavior: "smooth", block: "center" })
            }
            className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600"
          >
            Scroll Into View
          </button>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400">
          Try clicking the buttons or interacting with the input to see focus
          changes.
        </p>
      </div>
    </DemoWrapper>
  );
}
