import * as React from 'react';
import veronique from 'images/veronique.jpg';

export default function Home(): JSX.Element {
  return (
    <div>
      <h1>Homepage</h1>
      <img src={veronique} />
    </div>

  );
}

Home.displayName = 'Home';
