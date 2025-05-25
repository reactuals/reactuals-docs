import React, { useState } from "react";
import { usePrevious } from "reactuals";
import { DemoWrapper } from "./DemoWrapper";

export const UsePreviousExample = () => {
  const [query, setQuery] = useState("");
  const previousQuery = usePrevious(query);

  return (
    <DemoWrapper>
      <div className="flex flex-col items-center gap-4 max-w-sm w-full">
        <p className="text-lg text-center">
          Type a search query and use the undo button to revert to the previous
          one.
        </p>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="p-4 bg-gray-100 rounded-lg shadow-md w-full flex flex-col gap-2">
          <p className="text-base text-center">
            Current Query: <span className="font-mono">{query || "None"}</span>
          </p>
          <p className="text-base text-center">
            Previous Query:{" "}
            <span className="font-mono">{previousQuery ?? "None"}</span>
          </p>
        </div>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition disabled:bg-gray-400"
          onClick={() => setQuery(previousQuery ?? "")}
          disabled={previousQuery === undefined}
        >
          Undo Last Query
        </button>
      </div>
    </DemoWrapper>
  );
};
