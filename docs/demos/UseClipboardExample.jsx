import React, { useState } from "react";
import { useClipboard } from "reactuals";
import { DemoWrapper } from "./DemoWrapper";

export const UseClipboardExample = () => {
  const [text, setText] = useState("Hello, World! 👋");
  const [copy, copied] = useClipboard();

  const sampleTexts = [
    "Hello, World! 👋",
    "React hooks are awesome! ⚛️",
    "Copy me to clipboard! 📋",
    "useClipboard hook demo 🚀",
  ];

  return (
    <DemoWrapper>
      <p className="text-lg text-center  mb-6">
        Enter text or select a sample to copy to clipboard:
      </p>

      <div className="flex gap-3 w-full max-w-md">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text to copy"
          className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg text-base focus:border-blue-500 focus:outline-none transition-colors"
        />

        <button
          onClick={() => copy(text)}
          className={`px-5 py-3 border-2 rounded-lg text-base font-medium transition-all whitespace-nowrap min-w-[100px] ${
            copied
              ? "bg-green-500 border-green-500 text-white"
              : text.trim()
              ? "bg-blue-500 border-blue-500 text-white hover:bg-blue-600 hover:border-blue-600"
              : "bg-gray-400 border-gray-400 text-white cursor-not-allowed"
          }`}
          disabled={!text.trim()}
        >
          {copied ? "✓ Copied!" : "📋 Copy"}
        </button>
      </div>

      <div className="w-full text-center">
        <p className="text-sm text-gray-500 mb-3">Quick samples:</p>
        <div className="flex flex-wrap gap-2 justify-center">
          {sampleTexts.map((sample, index) => (
            <button
              key={index}
              onClick={() => setText(sample)}
              className="px-3 py-2 border border-gray-300 bg-gray-50 text-gray-700 rounded-md text-sm hover:bg-gray-100 hover:border-gray-400 transition-all"
            >
              {sample}
            </button>
          ))}
        </div>
      </div>
    </DemoWrapper>
  );
};
