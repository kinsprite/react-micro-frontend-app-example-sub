import React from 'react';
import {
  Link,
} from 'react-router-dom';

import styles from './ExampleAppSub.module.css';
import { CounterContainer } from './counter';

function ExampleApp() : JSX.Element {
  return (
    <div className={styles.container}>
      <div>This is App Example Sub.</div>
      <ul className={styles.linkList}>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/app-example">App Example</Link>
        </li>
        <li>
          <Link to="/app-example/sub">
            {'App Example\'s Sub'}
          </Link>
        </li>
      </ul>
      <CounterContainer />
    </div>
  );
}

export default ExampleApp;
