import * as React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound(): JSX.Element {
  return (
    <div>
      <h1>Not Found</h1>
      <Link to="/">Go home</Link>
    </div>

  );
}

NotFound.displayName = 'NotFound';
