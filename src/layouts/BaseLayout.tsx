import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BaseLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex min-h-screen flex-col">
    <Navbar />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
);

export default BaseLayout;
