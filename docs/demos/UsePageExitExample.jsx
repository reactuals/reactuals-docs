import React, { useState } from "react";
import { usePageExit } from "reactuals";
import { DemoWrapper } from "./DemoWrapper";

export const UsePageExitExample = () => {
  const [showPopup, setShowPopup] = useState(false);

  usePageExit(() => setShowPopup(true));

  return (
    <DemoWrapper>
      <div className="flex flex-col items-center gap-4 max-w-lg m-auto  w-full">
        <p className="text-lg text-center">
          Move your mouse to the top edge of the browser to trigger the
          exit-intent popup.
        </p>
        {showPopup && (
          <div className="p-4 bg-white rounded-lg shadow-md border border-gray-200 flex flex-col gap-3 w-full">
            <img
              src="https://c8.alamy.com/comp/2XG30EM/special-offer-vector-letter-badge-2XG30EM.jpg"
              height={150}
              alt="offer image"
            />
            <p className="text-base dark:text-gray-400 font-medium text-center">
              Don't leave yet! Here's a special offer!
            </p>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              onClick={() => setShowPopup(false)}
            >
              Close Popup
            </button>
          </div>
        )}
        <p className="text-sm text-center text-gray-600 ">
          Try moving your mouse toward the browser's address bar or tabs.
        </p>
      </div>
    </DemoWrapper>
  );
};
