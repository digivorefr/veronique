import * as React from 'react';
import { Link } from 'react-router-dom';

export default function Header(): JSX.Element {
  return (
    <header className="navbar">
      Header - <Link to={'/'}>Home</Link>
    </header>
  );
}

Header.displayName = 'Heeder';
