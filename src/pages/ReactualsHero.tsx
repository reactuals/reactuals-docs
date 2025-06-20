import React from "react";
import { useClipboard } from "reactuals";

const ReactualsHero: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    // background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",

    // backgroundColor: "#160f1f",
    // backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='16' viewBox='0 0 12 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4 .99C4 .445 4.444 0 5 0c.552 0 1 .45 1 .99v4.02C6 5.555 5.556 6 5 6c-.552 0-1-.45-1-.99V.99zm6 8c0-.546.444-.99 1-.99.552 0 1 .45 1 .99v4.02c0 .546-.444.99-1 .99-.552 0-1-.45-1-.99V8.99z' fill='%23fdfbff' fill-opacity='0.06' fill-rule='evenodd'/%3E%3C/svg%3E")`,

    backgroundColor: "#100a1a",
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='180' height='180' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M82.42 180h-1.415L0 98.995v-2.827L6.167 90 0 83.833V81.004L81.005 0h2.827L90 6.167 96.167 0H98.996L180 81.005v2.827L173.833 90 180 96.167V98.996L98.995 180h-2.827L90 173.833 83.833 180H82.42zm0-1.414L1.413 97.58 8.994 90l-7.58-7.58L82.42 1.413 90 8.994l7.58-7.58 81.006 81.005-7.58 7.58 7.58 7.58-81.005 81.006-7.58-7.58-7.58 7.58zM175.196 0h-25.832c1.033 2.924 2.616 5.59 4.625 7.868C152.145 9.682 151 12.208 151 15c0 5.523 4.477 10 10 10 1.657 0 3 1.343 3 3v4h16V0h-4.803c.51.883.803 1.907.803 3 0 3.314-2.686 6-6 6s-6-2.686-6-6c0-1.093.292-2.117.803-3h10.394-13.685C161.18.938 161 1.948 161 3v4c-4.418 0-8 3.582-8 8s3.582 8 8 8c2.76 0 5 2.24 5 5v2h4v-4h2v4h4v-4h2v4h2V0h-4.803zm-15.783 0c-.27.954-.414 1.96-.414 3v2.2c-1.25.254-2.414.74-3.447 1.412-1.716-1.93-3.098-4.164-4.054-6.612h7.914zM180 17h-3l2.143-10H180v10zm-30.635 163c-.884-2.502-1.365-5.195-1.365-8 0-13.255 10.748-24 23.99-24H180v32h-30.635zm12.147 0c.5-1.416 1.345-2.67 2.434-3.66l-1.345-1.48c-1.498 1.364-2.62 3.136-3.186 5.14H151.5c-.97-2.48-1.5-5.177-1.5-8 0-12.15 9.84-22 22-22h8v30h-18.488zm13.685 0c-1.037-1.793-2.976-3-5.197-3-2.22 0-4.16 1.207-5.197 3h10.394zM0 148h8.01C21.26 148 32 158.742 32 172c0 2.805-.48 5.498-1.366 8H0v-32zm0 2h8c12.15 0 22 9.847 22 22 0 2.822-.53 5.52-1.5 8h-7.914c-.567-2.004-1.688-3.776-3.187-5.14l-1.346 1.48c1.09.99 1.933 2.244 2.434 3.66H0v-30zm15.197 30c-1.037-1.793-2.976-3-5.197-3-2.22 0-4.16 1.207-5.197 3h10.394zM0 32h16v-4c0-1.657 1.343-3 3-3 5.523 0 10-4.477 10-10 0-2.794-1.145-5.32-2.992-7.134C28.018 5.586 29.6 2.924 30.634 0H0v32zm0-2h2v-4h2v4h4v-4h2v4h4v-2c0-2.76 2.24-5 5-5 4.418 0 8-3.582 8-8s-3.582-8-8-8V3c0-1.052-.18-2.062-.512-3H0v30zM28.5 0c-.954 2.448-2.335 4.683-4.05 6.613-1.035-.672-2.2-1.16-3.45-1.413V3c0-1.04-.144-2.046-.414-3H28.5zM0 17h3L.857 7H0v10zM15.197 0c.51.883.803 1.907.803 3 0 3.314-2.686 6-6 6S4 6.314 4 3c0-1.093.292-2.117.803-3h10.394zM109 115c-1.657 0-3 1.343-3 3v4H74v-4c0-1.657-1.343-3-3-3-5.523 0-10-4.477-10-10 0-2.793 1.145-5.318 2.99-7.132C60.262 93.638 58 88.084 58 82c0-13.255 10.748-24 23.99-24h16.02C111.26 58 122 68.742 122 82c0 6.082-2.263 11.636-5.992 15.866C117.855 99.68 119 102.206 119 105c0 5.523-4.477 10-10 10zm0-2c-2.76 0-5 2.24-5 5v2h-4v-4h-2v4h-4v-4h-2v4h-4v-4h-2v4h-4v-4h-2v4h-4v-2c0-2.76-2.24-5-5-5-4.418 0-8-3.582-8-8s3.582-8 8-8v-4c0-2.64 1.136-5.013 2.946-6.66L72.6 84.86C70.39 86.874 69 89.775 69 93v2.2c-1.25.254-2.414.74-3.447 1.412C62.098 92.727 60 87.61 60 82c0-12.15 9.84-22 22-22h16c12.15 0 22 9.847 22 22 0 5.61-2.097 10.728-5.55 14.613-1.035-.672-2.2-1.16-3.45-1.413V93c0-3.226-1.39-6.127-3.6-8.14l-1.346 1.48C107.864 87.987 109 90.36 109 93v4c4.418 0 8 3.582 8 8s-3.582 8-8 8zM90.857 97L93 107h-6l2.143-10h1.714zM80 99c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zm20 0c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6z' fill='%23ffffff' fill-opacity='0.06' fill-rule='evenodd'/%3E%3C/svg%3E")`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  };

  const backgroundPattern: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage:
      "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
    backgroundSize: "50px 50px",
    pointerEvents: "none",
  };

  const heroContent: React.CSSProperties = {
    maxWidth: "1200px",
    padding: "80px 20px",
    textAlign: "center",
    position: "relative",
    zIndex: 2,
  };

  const logoStyle: React.CSSProperties = {
    width: "100px",
    height: "100px",
    margin: "0 auto 30px",
    background: "white",
    borderRadius: "60px",
    display: "flex",
    padding: "5px",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "48px",
    boxShadow: "0 20px 40px rgba(92, 35, 35, 0.1)",
  };

  const titleStyle: React.CSSProperties = {
    fontSize: "clamp(3rem, 4vw, 6rem)",
    fontFamily: "monospace",
    fontWeight: 800,
    background: "linear-gradient(45deg, #ffffff, #f0f0f0)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    margin: "0 0 20px 0",
    letterSpacing: "-0.02em",
    textShadow: "0 4px 20px rgba(0,0,0,0.1)",
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: "clamp(1.2rem, 1.5vw, 1.8rem)",
    color: "rgba(255,255,255,0.9)",
    margin: "0 0 40px 0",
    fontWeight: 400,
    maxWidth: "600px",
    marginLeft: "auto",
    marginRight: "auto",
  };

  const badgesContainer: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "12px",
    margin: "40px 0",
  };

  const buttonContainer: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    marginTop: "50px",
  };

  const primaryButton: React.CSSProperties = {
    background: "linear-gradient(45deg, #61dafb, #21d4fd)",
    color: "white",
    padding: "8px 32px",
    borderRadius: "50px",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: 600,
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    transition: "all 0.3s ease",
    boxShadow: "0 10px 30px rgba(97, 218, 251, 0.3)",
    border: "none",
    cursor: "pointer",
  };

  const secondaryButton: React.CSSProperties = {
    background: "rgba(255, 255, 255, 0.1)",
    color: "white",
    padding: "8px 32px",
    borderRadius: "50px",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: 600,
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    transition: "all 0.3s ease",
    border: "2px solid rgba(255, 255, 255, 0.2)",
    cursor: "pointer",
    backdropFilter: "blur(10px)",
  };

  // Remove all animation-related CSS and event handlers

  return (
    <>
      <style>{`
      .badge-hover{
      border-radius: 12px;


      }
                .badge-hover:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
                }
                .button-hover:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 15px 35px rgba(0,0,0,0.2);
                }
            `}</style>

      <div style={containerStyle}>
        <div style={backgroundPattern}></div>

        <div style={heroContent}>
          {/* Logo */}
          <div style={logoStyle}>
            <img src="/img/logo.png" alt="Reactuals Logo" />
          </div>

          {/* Title */}
          <h1 style={titleStyle}>reactuals</h1>

          {/* Subtitle */}
          <p style={subtitleStyle}>
            Powerful React Hooks collection for modern applications
          </p>

          <CopyCommands />

          {/* Buttons */}
          <div style={buttonContainer}>
            <a
              href="/docs/intro"
              style={primaryButton}
              className="button-hover"
            >
              📜 Read Docs
            </a>
            <a
              href="https://npmjs.com/package/reactuals"
              style={secondaryButton}
              className="button-hover"
            >
              📦 View on NPM
            </a>
            <a
              href="https://github.com/reactuals/reactuals"
              style={secondaryButton}
              className="button-hover"
            >
              ⭐ Star on GitHub
            </a>
          </div>
          {/* Badges */}
          <div style={badgesContainer}>
            <img
              src="https://img.shields.io/npm/v/reactuals.svg?style=for-the-badge&color=61dafb"
              alt="npm version"
              className="badge-hover"
              style={{ transition: "all 0.3s ease" }}
            />
            <img
              src="https://img.shields.io/npm/dm/reactuals.svg?style=for-the-badge&color=success"
              alt="downloads"
              className="badge-hover"
              style={{ transition: "all 0.3s ease" }}
            />
            <img
              src="https://img.shields.io/npm/l/reactuals.svg?style=for-the-badge&color=blue"
              alt="license"
              className="badge-hover"
              style={{ transition: "all 0.3s ease" }}
            />
            <img
              src="https://img.shields.io/github/stars/reactuals/reactuals.svg?style=for-the-badge&color=yellow"
              alt="GitHub stars"
              className="badge-hover"
              style={{ transition: "all 0.3s ease" }}
            />
            <img
              src="https://img.shields.io/bundlephobia/minzip/reactuals.svg?style=for-the-badge&color=success"
              alt="bundle size"
              className="badge-hover"
              style={{ transition: "all 0.3s ease" }}
            />
            <img
              src="https://img.shields.io/github/issues/reactuals/reactuals.svg?style=for-the-badge&color=red"
              alt="GitHub issues"
              className="badge-hover"
              style={{ transition: "all 0.3s ease" }}
            />
            <img
              src="https://img.shields.io/github/forks/reactuals/reactuals.svg?style=for-the-badge&color=blue"
              alt="GitHub forks"
              className="badge-hover"
              style={{ transition: "all 0.3s ease" }}
            />
            <img
              src="https://img.shields.io/github/contributors/reactuals/reactuals.svg?style=for-the-badge&color=orange"
              alt="contributors"
              className="badge-hover"
              style={{ transition: "all 0.3s ease" }}
            />
            <img
              src="https://img.shields.io/github/last-commit/reactuals/reactuals.svg?style=for-the-badge&color=green"
              alt="last commit"
              className="badge-hover"
              style={{ transition: "all 0.3s ease" }}
            />
            <img
              src="https://img.shields.io/badge/TypeScript-Ready-blue.svg?style=for-the-badge&logo=typescript"
              alt="TypeScript"
              className="badge-hover"
              style={{ transition: "all 0.3s ease" }}
            />
            <img
              src="https://img.shields.io/badge/React-18+-61dafb.svg?style=for-the-badge&logo=react"
              alt="React version"
              className="badge-hover"
              style={{ transition: "all 0.3s ease" }}
            />
            <img
              src="https://img.shields.io/badge/PRs-Welcome-brightgreen.svg?style=for-the-badge"
              alt="PRs welcome"
              className="badge-hover"
              style={{ transition: "all 0.3s ease" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ReactualsHero;

const CopyCommands: React.FC = () => {
  let cmd = `npm install reactuals`;
  const [copy, copied] = useClipboard();
  return (
    <div style={{ margin: "40px 0" }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            background: "rgba(30,30,40,0.95)",
            borderRadius: "8px",
            padding: "10px 16px",
            display: "flex",
            alignItems: "center",
            fontFamily: "monospace",
            fontSize: "1.1rem",
            color: "#fff",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            position: "relative",
            minWidth: "240px",
          }}
        >
          <code
            style={{
              flex: 1,
              userSelect: "all",
              background: "none",
              color: "#61dafb",
              fontWeight: 700,
              fontSize: "1.15rem",
              padding: "0",
              border: "none",
              letterSpacing: "0.5px",
              whiteSpace: "pre",
              transition: "color 0.2s",
              textShadow: "0 1px 4px rgba(97,218,251,0.08)",
            }}
          >
            <span style={{ color: "#fff", opacity: 0.6, marginRight: 8 }}>
              $
            </span>
            {cmd}
          </code>
          <button
            aria-label="Copy command"
            onClick={async () => {
              copy(cmd);
            }}
            style={{
              background: "none",
              border: "none",
              color: "#61dafb",
              cursor: "pointer",
              marginLeft: "10px",
              fontSize: "1.2em",
              display: "flex",
              alignItems: "center",
              outline: "none",
              padding: 0,
            }}
          >
            {copied ? (
              <span
                style={{
                  color: "#4ade80",
                  fontSize: "1.3em",
                  transition: "color 0.2s",
                }}
                title="Copied!"
              >
                ✓
              </span>
            ) : (
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
                style={{ display: "block" }}
              >
                <rect x="9" y="9" width="13" height="13" rx="2" />
                <path d="M5 15V5a2 2 0 0 1 2-2h10" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
