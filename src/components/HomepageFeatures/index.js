import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Appium contributor',
    Svg: require('@site/static/img/appium-logo-vector.svg').default,
    description: (
      <>
        Not that much lately.
      </>
    ),
  },
  {
    title: 'Golang enthusiast',
    Svg: require('@site/static/img/gopher-logo-vector.svg').default,
    description: (
      <>
        All things Golang. Enjoy building golang tooling and services.
      </>
    ),
  },
  {
    title: 'Android developer',
    Svg: require('@site/static/img/android-logo-vector.svg').default,
    description: (
      <>
        Java developer moving slowly to Kotlin and using all the new awesome stuff Android is offering.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
