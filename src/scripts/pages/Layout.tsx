import * as React from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'scripts/components/Header';
import Footer from 'scripts/components/Footer';

export default function Layout(): JSX.Element {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

Layout.displayName = 'Layout';
