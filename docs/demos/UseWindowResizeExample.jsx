import React, { useState } from "react";
import { useWindowResize } from "reactuals";
import { DemoWrapper } from "./DemoWrapper";

export const UseWindowResizeExample = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useWindowResize(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  });

  return (
    <DemoWrapper>
      <p>Resize the window to see the dimensions update:</p>
      <br />
      <div className="size-display">
        <div className="size-item">
          <span className="label">Width:</span>
          <span className="value">{windowSize.width}px</span>
        </div>
        <div className="size-item">
          <span className="label">Height:</span>
          <span className="value">{windowSize.height}px</span>
        </div>
      </div>

      <style jsx>{`
        .demo-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            sans-serif;
        }

        p {
          font-size: 1.1rem;
          margin: 0;
          text-align: center;
          color: #333;
        }

        .size-display {
          display: flex;
          gap: 2rem;
          background: #f8f9fa;
          padding: 1rem 2rem;
          border-radius: 8px;
          border: 1px solid #e9ecef;
        }

        .size-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.25rem;
        }

        .label {
          font-size: 0.9rem;
          color: #666;
          font-weight: 500;
        }

        .value {
          font-size: 1.5rem;
          font-weight: bold;
          color: #007acc;
          font-family: "Monaco", "Menlo", monospace;
        }
      `}</style>
    </DemoWrapper>
  );
};
