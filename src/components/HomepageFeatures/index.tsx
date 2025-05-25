import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'TypeScript First',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Built with TypeScript from the ground up, providing excellent IntelliSense, 
        type safety, and developer experience. All hooks include comprehensive type definitions.
      </>
    ),
  },
  {
    title: 'Production Ready',
        Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Battle-tested hooks designed for real-world applications. Optimized for performance,
        memory efficiency, and reliability. <code>Tree-shakable</code> and lightweight.
      </>
    ),
  },
  {
    title: 'Developer Friendly',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Simple, intuitive APIs that follow React conventions. Comprehensive documentation
        with interactive examples and TypeScript support out of the box.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}