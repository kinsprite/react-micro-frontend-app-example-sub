import React from 'react';

import styles from './ExampleAppSub.module.css';
import { CounterContainer } from './counter';
import LazyComponent from './lazyComponent';

function ExampleApp() : JSX.Element {
  return (
    <div className={styles.container}>
      <div>This is App Example Sub.</div>
      <CounterContainer />
      <LazyComponent />
    </div>
  );
}

export default ExampleApp;
