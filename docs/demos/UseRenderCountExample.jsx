import React, { useState } from "react";
import { useRenderCount } from "reactuals";
import { DemoWrapper } from "./DemoWrapper";

export const UseRenderCountExample = () => {
  const [text, setText] = useState("");
  const [isToggled, setIsToggled] = useState(false);
  const renderCount = useRenderCount();

  return (
    <DemoWrapper>
      <div className="flex flex-col  items-center gap-4 max-w-sm w-full">
        <p className="text-lg text-center ">
          Interact with the input or toggle to see the render count increase.
        </p>
        <div className="p-4 bg-gray-100 rounded-lg shadow-md w-full flex flex-col gap-2">
          <p className="text-base text-center dark:text-black">
            Render Count: <span className="font-mono">{renderCount}</span>
          </p>
        </div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something..."
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          onClick={() => setIsToggled(!isToggled)}
        >
          Button Click
        </button>
      </div>
    </DemoWrapper>
  );
};
