import * as React from 'react';

export default function Layout(): any {
  React.useEffect(() => { console.log('ready'); }, []);
  return (
    <h1>React is there man, with router</h1>
  );
}

Layout.displayName = 'Layout';
