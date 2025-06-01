import React, { useRef } from "react";
import { usePictureInPicture } from "reactuals";
import { DemoWrapper } from "./DemoWrapper";

export function UsePictureInPictureExample() {
  const videoRef = useRef(null);
  const { openPictureInPicture, closePictureInPicture, isActive, error } =
    usePictureInPicture();

  const handleOpen = async () => {
    if (videoRef.current) {
      let element = videoRef.current;
      await openPictureInPicture(element);
    }
  };

  return (
    <DemoWrapper>
      <div className="p-8 max-w-2xl mx-auto bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-2xl shadow-xl text-gray-900 dark:text-gray-100">
        <div className="space-y-6">
          <div className="overflow-hidden rounded-xl shadow-lg border border-blue-100 dark:border-gray-700">
            <video
              ref={videoRef}
              className="w-full h-64 object-cover bg-black"
              controls
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
            />
          </div>
          <div className="flex justify-center gap-4">
            <button
              onClick={isActive ? closePictureInPicture : handleOpen}
              className={`px-6 py-2 rounded-full font-semibold transition-colors duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400
                                ${
                                  isActive
                                    ? "bg-pink-500 hover:bg-pink-600"
                                    : "bg-blue-600 hover:bg-blue-700"
                                }
                                text-white disabled:bg-gray-400 disabled:cursor-not-allowed`}
            >
              {isActive ? "Close PiP" : "Open PiP"}
            </button>
          </div>
          {error && (
            <div className="flex justify-center">
              <p className="text-base text-red-600 bg-red-50 dark:bg-red-900/30 px-4 py-2 rounded-lg shadow">
                Error: {error.message}
              </p>
            </div>
          )}
          <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-2">
            Try Picture-in-Picture with a video element.
            <br />
            <span className="inline-block mt-1 px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 rounded text-blue-700 dark:text-blue-300">
              Supported in Chrome/Edge browsers.
            </span>
          </p>
        </div>
      </div>
    </DemoWrapper>
  );
}
