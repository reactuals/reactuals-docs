import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
     
      <div className="container">
        <Heading as="h1" className="hero__title">
         reactuals
        </Heading>
        <p className="hero__subtitle">React Hooks are cool.</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
           📜 Read Docs
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from reactuals`}
      description="A collection of React hooks for modern applications.">
      <meta name="keywords" content="react, hooks, typescript, react hooks, react utilities" />
      <meta name="author" content="reactuals" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />  
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
