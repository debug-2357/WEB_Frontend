import React from 'react';
import header from '../public/css/header.module.css';

function Header() {
  return (
    <header className={header.header}>
      <span>Debug Recruit</span>
      <span className={header.toggle}>Dark Mode</span>
    </header>
  );
}

export default Header;
