import React, { useState, useEffect } from 'react';

function LazyComponent() : JSX.Element {
  const [loaded, setLoaded] = useState(false);
  const [Component, setComponent] = useState(null as any);

  useEffect(() => {
    let mounted = true;
    import('./LazyInfo').then((c) => {
      if (mounted) {
        setComponent(c.default);
        setLoaded(true);
      }
    }, () => {
      if (mounted) {
        setComponent(null);
        setLoaded(true);
      }
    });

    return () => {
      mounted = false;
    };
  }, [loaded]);

  return (loaded && Component) || (<div>Waiting for lazy info ...</div>);
}

export default LazyComponent;
