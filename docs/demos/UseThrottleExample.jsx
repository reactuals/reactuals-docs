import React, { useMemo, useState } from "react";
import { useThrottle } from "reactuals";
import { DemoWrapper } from "./DemoWrapper";

export const UseThrottleExample = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const throttledSearchTerm = useThrottle(searchTerm, 500);

  // Simulate a filtered result based on throttled search term
  const filteredItems = useMemo(() => {
    const mockItems = [
      "Apple",
      "Banana",
      "Cherry",
      "Date",
      "Elderberry",
      "Fig",
      "Grape",
      "Kiwi",
      "Lemon",
      "Mango",
      "Orange",
      "Peach",
      "Raspberry",
      "Strawberry",
    ];
    if (!throttledSearchTerm) return [];
    return mockItems.filter((item) =>
      item.toLowerCase().includes(throttledSearchTerm.toLowerCase())
    );
  }, [throttledSearchTerm]);

  return (
    <DemoWrapper>
      <div className="flex flex-col items-center gap-6 max-w-xl w-full">
        <p className="text-lg text-center">
          Type in the search bar to filter items. The search is throttled to
          update every 500ms.
        </p>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search fruits..."
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="p-4 bg-gray-100 dark:text-black rounded-lg shadow-md w-full flex flex-col gap-2">
          <p className="text-base text-center">
            Throttled Search:{" "}
            <span className="font-mono">{throttledSearchTerm || "None"}</span>
          </p>
          <p className="text-base text-center">
            Results: <span className="font-mono">{filteredItems.length}</span>
          </p>
        </div>
        {filteredItems.length > 0 ? (
          <ul className="w-full grid grid-cols-1 sm:grid-cols-2 gap-2">
            {filteredItems.map((item) => (
              <li
                key={item}
                className="p-2 bg-white border rounded shadow-sm text-center"
              >
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-600 text-center">No results found.</p>
        )}
      </div>
    </DemoWrapper>
  );
};
