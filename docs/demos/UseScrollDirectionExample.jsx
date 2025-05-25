import React from "react";
import { useScrollPosition } from "reactuals";
import { DemoWrapper } from "./DemoWrapper";

export const UseScrollPositionExample = () => {
  const scrollY = useScrollPosition();
  const showButton = scrollY > 400;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <DemoWrapper>
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 p-3 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition-all duration-300 z-10 ${
          showButton
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
      <div className="flex fixed top-100 flex-col items-center gap-4 max-w-2xl w-full">
        <p className="text-lg text-center">
          Scroll down past 400px to show the "Back to Top" button, then click it
          to return to the top.
        </p>
        <div className="p-4 bg-gray-100 rounded-lg shadow-md w-full">
          <p className="text-base text-center">
            Scroll Position:{" "}
            <span className="font-mono">{Math.round(scrollY)}px</span>
          </p>
        </div>
        <div className="h-[200vh] flex flex-col gap-4">
          {Array.from({ length: 20 }).map((_, index) => (
            <div key={index} className="p-4 bg-gray-100 rounded-lg border">
              <p>Content Section {index + 1}</p>
            </div>
          ))}
        </div>
      </div>
    </DemoWrapper>
  );
};
