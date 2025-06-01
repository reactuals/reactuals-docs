import React, { useState } from "react";
import { useWebShare } from "reactuals";
import { DemoWrapper } from "./DemoWrapper";

export function UseWebShareExample() {
  const { share, isSupported, error } = useWebShare();
  const [shareStatus, setShareStatus] = useState(null);

  const handleShare = async () => {
    const success = await share({
      title: "Reactuals",
      text: "Check out this awesome library!",
      url: "https://reactuals.dev",
    });
    setShareStatus(success ? "Shared successfully!" : "Failed to share.");
    setTimeout(() => setShareStatus(null), 3000);
  };

  return (
    <DemoWrapper>
      <div className="p-6 max-w-sm mx-auto bg-gradient-to-b from-[#f7f7fa] to-[#e9e9ef] rounded-3xl shadow-xl border border-[#e5e5ea] text-gray-900 dark:text-gray-100 relative overflow-hidden">
        <div className="absolute left-1/2 -translate-x-1/2 top-2 w-24 h-2 bg-[#d1d1d6] rounded-full opacity-70"></div>
        <div className="flex flex-col items-center space-y-6 pt-8 pb-2">
          <h3 className="text-2xl font-bold mb-2 text-[#22223b]">Web Share</h3>
          <button
            onClick={handleShare}
            disabled={!isSupported}
            className="w-full py-3 rounded-xl bg-white border border-[#e5e5ea] shadow-sm text-[#007aff] font-semibold text-lg transition-all duration-150 active:bg-[#e5e5ea] hover:bg-[#f2f2f7] disabled:bg-[#f2f2f7] disabled:text-[#b0b0b8] disabled:border-[#e5e5ea] disabled:cursor-not-allowed"
            style={{
              boxShadow:
                "0 2px 8px 0 rgba(0,122,255,0.08), 0 1.5px 3px 0 rgba(0,0,0,0.03)",
            }}
          >
            <span className="inline-flex items-center gap-2">
              <svg
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block"
              >
                <path
                  d="M12 16v-8m0 0l-4 4m4-4l4 4"
                  stroke="#007aff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <rect
                  x="4"
                  y="16"
                  width="16"
                  height="4"
                  rx="2"
                  stroke="#007aff"
                  strokeWidth="2"
                />
              </svg>
              Share Content
            </span>
          </button>
          {shareStatus && (
            <div
              className={`w-full text-center rounded-xl py-2 px-3 text-base font-medium shadow-sm ${
                shareStatus.includes("successfully")
                  ? "bg-[#e7fbe7] text-[#34c759]"
                  : "bg-[#fde8e8] text-[#ff3b30]"
              }`}
            >
              {shareStatus}
            </div>
          )}
          {error && (
            <div className="w-full text-center rounded-xl py-2 px-3 text-base font-medium shadow-sm bg-[#fde8e8] text-[#ff3b30]">
              Error: {error.message}
            </div>
          )}
          <p className="text-xs text-[#8e8e93] text-center mt-2">
            Tap to share a link using your device’s sharing options.
            <br />
            Works on mobile and some desktop browsers.
          </p>
        </div>
      </div>
    </DemoWrapper>
  );
}
