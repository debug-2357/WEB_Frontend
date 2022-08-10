import React from 'react';
import footer from '../public/css/footer.module.css';

function Footer() {
  return (
    <footer className={footer.footer}>
      <h2>Debug</h2>
      <span>© Debug. all rights deserved</span>
      <div className={footer.icons}>
        <span>Link1</span>
        <span>|</span>
        <span>Link2</span>
        <span>|</span>
        <span>Link3</span>
      </div>
    </footer>
  );
}

export default Footer;
