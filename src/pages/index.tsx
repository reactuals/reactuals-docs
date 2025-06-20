import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";
import Head from "@docusaurus/Head";
import ReactualsHero from "./ReactualsHero";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header>
      <Head>
        <meta
          name="google-site-verification"
          content="NO9beTRrpBjTZPBE9aXCakHFGWp405e0yFrw5FB-Kgs"
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#000000" />
        <title>Reactuals: TypeScript-first React Hooks</title>
        <meta
          name="description"
          content="Explore lightweight, production-ready React hooks built with TypeScript, optimized for performance and memory efficiency."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Reactuals: TypeScript-first React Hooks"
        />
        <meta
          property="og:description"
          content="Discover a collection of lightweight, production-ready React hooks built with TypeScript."
        />
        <meta
          property="og:image"
          content="https://reactuals.vercel.app/img/og_img.png"
        />
        <meta property="og:url" content="https://reactuals.vercel.app" />
        <meta property="og:site_name" content="Reactuals" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Reactuals: TypeScript-first React Hooks"
        />
        <meta
          name="twitter:description"
          content="Explore lightweight, production-ready React hooks built with TypeScript."
        />

        <meta
          name="twitter:image"
          content="https://reactuals.vercel.app/twitter-card.png"
        />

        <meta name="twitter:site" content="@Reactuals" />
        <link rel="canonical" href="https://reactuals.vercel.app" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Reactuals",
              url: "https://reactuals.vercel.app",
              description:
                "A collection of lightweight, production-ready React hooks built with TypeScript.",
              publisher: {
                "@type": "Organization",
                name: "Reactuals",
              },
            }),
          }}
        />
      </Head>
      {/* <div className="container">
        <Heading as="h1" className="hero__title">
          reactuals
        </Heading>
        <p className="hero__subtitle">React Hooks are cool.</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            📜 Read Docs
          </Link>
        </div>
      </div> */}
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from reactuals`}
      description="A collection of React hooks for modern applications."
    >
      <meta
        name="keywords"
        content="react, hooks, typescript, react hooks, react utilities"
      />
      <meta name="author" content="reactuals" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <HomepageHeader />
      <main>
        {/* <HomepageFeatures /> */}
        <ReactualsHero />
      </main>
    </Layout>
  );
}
