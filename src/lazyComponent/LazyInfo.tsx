import React from 'react';

import styles from './LazyInfo.module.pcss';

function LazyInfo() : JSX.Element {
  return (
    <div className={styles.container}>
      <code className={styles.content}>This is lazy content in App Example Sub.</code>
    </div>
  );
}

export default LazyInfo;
