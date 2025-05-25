import React, { useState } from "react";
import { useDocumentTitle } from "reactuals";
import { DemoWrapper } from "./DemoWrapper";

export const UseDocumentTitleExample = () => {
  const [title, setTitle] = useState("useDocumentTitle Demo");

  useDocumentTitle(title);

  const titlePresets = [
    "🏠 Home Page",
    "📊 Dashboard",
    "⚙️ Settings",
    "👤 Profile",
  ];

  return (
    <DemoWrapper>
      <p className="text-lg text-center text-gray-700 dark:text-gray-300 mb-6">
        Change the input below to see the browser tab title update in real-time:
      </p>

      <div className="w-full max-w-md space-y-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter page title"
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-md text-sm focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none transition-colors"
        />

        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md p-3">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
              Current Title:
            </span>
            <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
          <p className="text-sm font-mono text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900 px-2 py-1 rounded border">
            {title}
          </p>
        </div>
      </div>

      <div className="w-full max-w-md">
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 text-center">
          Quick presets:
        </p>
        <div className="flex flex-wrap gap-1 justify-center">
          {titlePresets.map((preset, index) => (
            <button
              key={index}
              onClick={() => setTitle(preset)}
              className="px-2 py-1 text-xs border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
            >
              {preset}
            </button>
          ))}
        </div>
      </div>

      <div className="text-center mt-2">
        <p className="text-xs text-gray-500 dark:text-gray-400 italic">
          👆 Look at your browser tab to see the title change!
        </p>
      </div>
    </DemoWrapper>
  );
};
