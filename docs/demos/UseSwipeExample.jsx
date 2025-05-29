import React from "react";
import { useSwipe } from "reactuals";
import { DemoWrapper } from "./DemoWrapper";

export const UseSwipeExample = () => {
  const [ref, direction] = useSwipe({ threshold: 50 });

  return (
    <DemoWrapper>
      <div
        ref={ref}
        className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-lg border border-gray-300"
      >
        {direction ? (
          <p className="text-xl font-bold text-blue-600 capitalize">
            Swiped {direction}!
          </p>
        ) : (
          <p className="text-xl text-gray-700">Swipe me!</p>
        )}
      </div>
      <p className="mt-4 text-sm text-gray-600">
        Swipe on the gray area to see the direction (best on touch devices).
      </p>
    </DemoWrapper>
  );
};
