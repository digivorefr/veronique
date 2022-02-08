import * as React from 'react';

export default function Footer(): JSX.Element {
  return (
    <footer className="navbar">
      Footer -
      Powered by <a
        href="https://github.com/digivorefr/veronique"
        target="_blank"
      >Veronique</a>
    </footer>
  );
}

Footer.displayName = 'Footer';
