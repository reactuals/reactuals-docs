import React, { useState } from "react";
import { useWhyDidYouUpdate } from "reactuals";
import { DemoWrapper } from "./DemoWrapper";

const WhyDidYouUpdate = ({ count, text }) => {
  useWhyDidYouUpdate("WhyDidYouUpdate", { count, text });

  return (
    <div className="p-4">
      <p className="mt-4">Count: {count}</p>
      <p className="mt-2">Text: {text}</p>
    </div>
  );
};

export const UseWhyDidYouUpdateExample = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("Initial");

  return (
    <DemoWrapper>
      <button onClick={() => setCount((c) => c + 1)} className="btn">
        Increment Count
      </button>
      <button
        onClick={() => setText(text === "Initial" ? "Updated" : "Initial")}
        className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition mt-2"
      >
        Change Text
      </button>
      <WhyDidYouUpdate count={count} text={text} />
      <p className="mt-2 text-sm text-gray-600">
        Check console for prop change logs.
      </p>
    </DemoWrapper>
  );
};
