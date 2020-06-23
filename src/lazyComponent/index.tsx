import React, { useState, useEffect } from 'react';

function LazyComponent(props?: {[key:string]: any}) : JSX.Element {
  const [once] = useState(1);
  const [result, setResult] = useState({
    loaded: 0,
    component: null,
  });

  useEffect(() => {
    let mounted = true;

    import('./LazyInfo').then((c) => {
      if (mounted) {
        setResult({
          loaded: 1,
          component: c.default,
        });
      }
    }, () => {
      if (mounted) {
        setResult({
          loaded: 2,
          component: null,
        });
      }
    });

    return () => { mounted = false; };
  }, [once]);

  return result.component
    ? React.createElement(result.component, props)
    : (<div>Waiting for lazy info ...</div>);
}

export default LazyComponent;
