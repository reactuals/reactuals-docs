import React from "react";
import { useLocalStorage } from "reactuals";
import { DemoWrapper } from "./DemoWrapper";

export const UseLocalStorageExample = () => {
  const [value, setValue] = useLocalStorage("example-text", "");

  return (
    <DemoWrapper>
      <div className="flex flex-col m-auto items-center gap-4 max-w-sm w-full">
        <p className="text-lg text-center">
          Type below to sync with localStorage (persists on reload)
        </p>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Type something..."
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <p className="text-base text-center">
          Stored Value: <span className="font-mono">{value || "None"}</span>
        </p>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          onClick={() => setValue("")}
        >
          Clear
        </button>
      </div>
    </DemoWrapper>
  );
};
