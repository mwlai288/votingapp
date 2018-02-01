import React from 'react';
import AccountsUI from './AccountsUI';
import { Link } from 'react-router-dom';

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <header>
        <Link to="/">
          <h1>Vote!</h1>
        </Link>
        <AccountsUI />
        <nav>
          <Link to="/about"> About </Link>
        </nav>
      </header>
      {children}
    </div>
  );
};

export default MainLayout;
