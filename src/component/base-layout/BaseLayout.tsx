import React from 'react';
import './BaseLayout.css';

interface LayoutProps {
  children: React.ReactNode;
}

function BaseLayout({ children }: LayoutProps) {
  return (
    <div className="layout">
      <header className="header">
        <h1>Site Header</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main className="main-content">
        {children}
      </main>
      <footer className="footer">
        <p>&copy; 2024 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default BaseLayout;