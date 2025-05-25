import React, { useState } from "react";
import { useFavicon } from "reactuals";
import { DemoWrapper } from "./DemoWrapper";

export const UseFaviconExample = () => {
  let favicons = {
    0: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png",
    1: "https://ellipsiseducation.com/wp-content/uploads/2023/03/javascript.png",
  };
  const [favicon, setFavicon] = useState(false);

  const toggleFavicon = () => {
    setFavicon((prev) => !prev);
  };

  useFavicon(favicons[favicon ? 1 : 0]);

  return (
    <DemoWrapper>
      <div className="flex flex-col items-center gap-4">
        <p className="text-lg text-center">
          Click the button to toggle the favicon.
        </p>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          onClick={toggleFavicon}
        >
          Toggle Favicon
        </button>
        <p className="text-base text-center">
          Current favicon:{" "}
          <span className="font-mono">
            <img src={favicons[favicon ? 1 : 0]} height={50} width={50} />
          </span>
        </p>
      </div>
    </DemoWrapper>
  );
};
