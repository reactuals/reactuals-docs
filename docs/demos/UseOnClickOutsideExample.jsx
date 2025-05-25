import React, { useRef, useState } from "react";
import { useOnClickOutside } from "reactuals";
import { DemoWrapper } from "./DemoWrapper";

export const UseOnClickOutsideExample = () => {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useOnClickOutside(ref, () => setIsOpen(false));

  return (
    <DemoWrapper>
      <div className="flex flex-col items-center gap-4  w-full">
        <p className="text-lg text-center">
          Click the button to open the dropdown, then click outside to close it.
        </p>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          onClick={() => setIsOpen(true)}
        >
          {isOpen ? "Dropdown Open" : "Open Dropdown"}
        </button>
        {isOpen && (
          <div
            ref={ref}
            className="p-4 bg-white rounded-lg max-w-sm m-auto shadow-md border border-gray-200 flex flex-col gap-2 w-full"
          >
            <p className="text-base dark:text-black text-center font-medium">
              Dropdown Content
            </p>
            <button
              className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition"
              onClick={() => alert("Action clicked!")}
            >
              Action
            </button>
            <button
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </DemoWrapper>
  );
};
