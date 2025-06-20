import React, { useState } from "react";
import { useDebounce } from "reactuals";
import { DemoWrapper } from "./DemoWrapper";

export const UseDebounceExample = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  return (
    <DemoWrapper>
      <div className="flex flex-col items-center gap-6 font-sans max-w-lg mx-auto">
        <p className="text-base text-center ">
          Type in the input below to see debouncing in action (500ms delay):
        </p>

        <div className="w-full">
          <input
            type="text"
            placeholder="Type to search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-lg text-base outline-none transition-colors focus:border-blue-600 dark:focus:border-blue-400 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
          />
        </div>

        <div className="flex flex-col gap-4 w-full">
          <div className="flex justify-between items-center px-4 py-3 rounded-md bg-blue-100 dark:bg-blue-900/40">
            <span className="font-medium text-gray-700 dark:text-gray-300">
              Current input:
            </span>
            <span className="font-mono font-bold text-sm text-blue-700 dark:text-blue-300">
              {searchTerm || "(empty)"}
            </span>
          </div>
          <div className="flex justify-between items-center px-4 py-3 rounded-md bg-green-100 dark:bg-green-900/40">
            <span className="font-medium text-gray-700 dark:text-gray-300">
              Debounced value:
            </span>
            <span className="font-mono font-bold text-sm text-green-700 dark:text-green-300">
              {debouncedSearchTerm || "(empty)"}
            </span>
          </div>
        </div>
      </div>
    </DemoWrapper>
  );
};
