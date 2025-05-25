import React from "react";
import { useColorMode } from "@docusaurus/theme-common";

export const DemoWrapper = ({ children, title }) => {
  const { colorMode } = useColorMode();

  function loadScript() {
    const scriptSrc = "https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4";
    if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
      const script = document.createElement("script");
      script.src = scriptSrc;
      document.head.appendChild(script);
    }
  }

  React.useEffect(() => {
    loadScript();
  }, []);
  return (
    <div className={`demo-wrapper mac-theme ${colorMode}`}>
      <div className="mac-header">
        <span className="mac-dot red" />
        <span className="mac-dot yellow" />
        <span className="mac-dot green" />
        {title && <span className="mac-title">{title}</span>}
      </div>
      <div className="demo-content">{children}</div>
      <style jsx>{`
        .demo-wrapper.mac-theme {
          text-align: center;
          width: 100%;
          position: relative;
          // margin: 2rem auto;
          border-radius: 12px;
          border: 1.5px solid ${colorMode === "dark" ? "#8a8787" : "#e5e7eb"};
          background: ${colorMode === "dark" ? "#23232b" : "#f8fafc"};
          color: ${colorMode === "dark" ? "#f5f6fa" : "#1a2236"};
          // max-width: 700px;
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1);
          overflow: hidden;
          transition: box-shadow 0.2s, border-color 0.2s, background 0.2s;
        }
        .mac-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          height: 38px;
          padding: 0 1.2rem;
          background: ${colorMode === "dark" ? "#18181b" : "#e5e7eb"};
          border-bottom: 1px solid
            ${colorMode === "dark" ? "#23232b" : "#e5e7eb"};
          position: relative;
        }
        .mac-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          display: inline-block;
          margin-right: 0.3rem;
          border: 1px solid rgba(0, 0, 0, 0.08);
        }
        .mac-dot.red {
          background: #ff5f56;
        }
        .mac-dot.yellow {
          background: #ffbd2e;
        }
        .mac-dot.green {
          background: #27c93f;
        }
        .mac-title {
          margin-left: 1rem;
          font-size: 1.05rem;
          font-weight: 500;
          color: ${colorMode === "dark" ? "#f5f6fa" : "#22223b"};
          opacity: 0.85;
        }
        .demo-content {
          padding: 1.5rem;
          position: relative;
          z-index: 1;
        }
        @media (max-width: 700px) {
          .demo-wrapper.mac-theme {
            margin: 1rem;
            max-width: 100vw;
            border-radius: 8px;
          }
          .demo-content {
            padding: 1rem;
          }
          .mac-header {
            padding: 0 0.7rem;
            height: 32px;
          }
        }
        @media (max-width: 480px) {
          .demo-wrapper.mac-theme {
            margin: 0.5rem;
            border-radius: 5px;
          }
          .demo-content {
            padding: 0.5rem;
          }
          .mac-header {
            padding: 0 0.5rem;
            height: 28px;
          }
        }
      `}</style>
    </div>
  );
};
