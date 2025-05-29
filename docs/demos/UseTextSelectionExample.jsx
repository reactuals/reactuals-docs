import React, { useRef, useState } from "react";
import { useTextSelection } from "reactuals";
import { DemoWrapper } from "./DemoWrapper";

const lightTheme = {
  background: "linear-gradient(135deg, #e0e7ff 0%, #f0f4ff 100%)",
  border: "1.5px solid #4f8cff",
  color: "#222",
  boxShadow: "0 4px 24px rgba(79,140,255,0.10)",
  selectionBg: "#fff",
  selectionBorder: "1px solid #e0e7ff",
  selectionShadow: "0 2px 8px rgba(79,140,255,0.08)",
  buttonBg: "linear-gradient(90deg, #4f8cff 60%, #6ee7b7 100%)",
  buttonColor: "#fff",
};

const darkTheme = {
  background: "linear-gradient(135deg, #232946 0%, #16161a 100%)",
  border: "1.5px solid #6ee7b7",
  color: "#f4f4f5",
  boxShadow: "0 4px 24px rgba(110,231,183,0.10)",
  selectionBg: "#232946",
  selectionBorder: "1px solid #6ee7b7",
  selectionShadow: "0 2px 8px rgba(110,231,183,0.08)",
  buttonBg: "linear-gradient(90deg, #6ee7b7 60%, #4f8cff 100%)",
  buttonColor: "#232946",
};

export const UseTextSelectionExample = () => {
  const ref = useRef(null);
  const { text } = useTextSelection(ref);

  return (
    <DemoWrapper>
      <div ref={ref}>
        <p style={{ fontSize: 18, fontWeight: 600, marginBottom: 10 }}>
          <span role="img" aria-label="cursor">
            🖱️
          </span>{" "}
          Select any part of this text!
        </p>
        <p style={{ fontSize: 16, lineHeight: 1.7, marginBottom: 0 }}>
          The ocean covers{" "}
          <span style={{ color: "#4f8cff", fontWeight: 500 }}>70%</span> of the
          Earth's surface and is home to a vast array of life forms. Oceans
          regulate the planet's climate, absorb carbon dioxide, and provide food
          and livelihoods for billions of people. Beneath the waves lies a world
          of incredible diversity, from the smallest plankton to the largest
          whales. Coral reefs, often called the "rainforests of the sea,"
          support more species per unit area than any other marine environment.
          However, human activities such as overfishing, pollution, and climate
          change threaten the delicate balance of ocean ecosystems. Protecting
          our oceans is essential for maintaining biodiversity and ensuring a
          healthy planet for future generations.
        </p>
        {text && (
          <div
            style={{
              marginTop: 24,
              borderRadius: 10,
              padding: "14px 18px",
              display: "flex",
              alignItems: "center",
              gap: 12,
              animation: "fadeIn 0.3s",
              backgroundColor: "whitesmoke",
              border: "1px solid #ccc",
            }}
          >
            <span
              style={{
                color: "#4f8cff",
                fontWeight: 600,
                fontSize: 15,
                wordBreak: "break-word",
              }}
            >
              Selected: "{text}"
            </span>
            <button
              className="btn"
              onClick={() => navigator.clipboard.writeText(text)}
            >
              Copy
            </button>
          </div>
        )}
        <style>{`
                            @keyframes fadeIn {
                                    from { opacity: 0; transform: translateY(10px);}
                                    to { opacity: 1; transform: none;}
                            }
                    `}</style>
      </div>
    </DemoWrapper>
  );
};
