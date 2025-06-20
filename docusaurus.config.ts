import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)
// import React from "react";
// const reactuals = require("reactuals");

const config: Config = {
  title: "Reactuals",
  tagline: "Hooks are cool",
  favicon: "img/favicon.png",

  // Set the production url of your site here
  url: "https://reactuals.vercel.app",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "reactuals", // Usually your GitHub org/user name.
  projectName: "reactuals", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/ankitpanchal534/reactuals-docs/tree/main",
          sidebarCollapsed: false,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: ["@docusaurus/theme-live-codeblock"],

  themeConfig: {
    // Replace with your project's social card
    liveCodeBlock: {
      /**
       * The position of the live playground, above or under the editor
       * Possible values: "top" | "bottom"
       */
      playgroundPosition: "bottom",
    },

    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "reactuals",
      logo: {
        alt: "reactuals Logo",
        src: "img/logo.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },
        // { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/ankitpanchal534/reactuals",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Documentation",
          items: [
            {
              label: "Getting Started",
              to: "/docs/intro",
            },
            {
              label: "Installation",
              to: "/docs/intro#-installation",
            },
            {
              label: "All Hooks",
              to: "/docs/hooks",
            },
            {
              label: "API Reference",
              to: "/docs/api",
            },
          ],
        },

        {
          title: "Popular Hooks",
          items: [
            {
              label: "useBatteryStatus",
              to: "/docs/hooks/useBatteryStatus",
            },
            {
              label: "useLocalStorage",
              to: "/docs/hooks/useLocalStorage",
            },
            {
              label: "useDebounce",
              to: "/docs/hooks/useDebounce",
            },
            {
              label: "useToggle",
              to: "/docs/hooks/useToggle",
            },
            {
              label: "useOnClickOutside",
              to: "/docs/hooks/useOnClickOutside",
            },
            {
              label: "useMediaQuery",
              to: "/docs/hooks/useMediaQuery",
            },
            {
              label: "useGeoLocation",
              to: "/docs/hooks/useGeoLocation",
            },
            {
              label: "useNetworkSpeed",
              to: "/docs/hooks/useNetworkSpeed",
            },
          ],
        },
        {
          title: "Essential Hooks",
          items: [
            {
              label: "useClipboard",
              to: "/docs/hooks/useClipboard",
            },
            {
              label: "useScrollPosition",
              to: "/docs/hooks/useScrollPosition",
            },
            {
              label: "useWindowResize",
              to: "/docs/hooks/useWindowResize",
            },
            {
              label: "useKeyPress",
              to: "/docs/hooks/useKeyPress",
            },
            {
              label: "useOnScreen",
              to: "/docs/hooks/useOnScreen",
            },
            {
              label: "useInterval",
              to: "/docs/hooks/useInterval",
            },
            {
              label: "useTimeout",
              to: "/docs/hooks/useTimeout",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/ankitpanchal534/reactuals",
            },
            {
              label: "Issues & Bugs",
              href: "https://github.com/ankitpanchal534/reactuals/issues",
            },
            {
              label: "Feature Requests",
              href: "https://github.com/ankitpanchal534/reactuals/issues/new?template=feature_request.md",
            },
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/reactuals",
            },
          ],
        },
        {
          title: "Resources",
          items: [
            {
              label: "NPM Package",
              href: "https://www.npmjs.com/package/reactuals",
            },
            {
              label: "Bundle Analyzer",
              href: "https://bundlephobia.com/package/reactuals",
            },
            {
              label: "Sponsor",
              href: "https://github.com/sponsors/ankitpanchal534",
            },
          ],
        },
      ],
      copyright: `
    <div style="display: flex; flex-direction: column; gap: 12px; text-align: center;">
      <div>
        Copyright © ${new Date().getFullYear()} Reactuals. Built with ❤️ for the React community.
      </div>
      <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; font-size: 14px; opacity: 0.8;">
        <span>📦 55+ Hooks</span>
        <span>⚡ 5.6kb Gzipped</span>
        <span>🔷 TypeScript First</span>
        <span>🚀 Production Ready</span>
        <span>📱 Mobile Friendly</span>
      </div>
      <div style="font-size: 12px; opacity: 0.6; margin-top: 8px;">
        Built with <a href="https://docusaurus.io/" target="_blank" rel="noopener noreferrer" style="color: #61dafb;">Docusaurus</a>
      </div>
    </div>
  `,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
