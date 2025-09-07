import React from 'react';
import Logo from '../../ui/logo/logo';
import './style.css';

function Footer() {
  return (
    <footer>
      <Logo></Logo>
      <span className='footer__copyright'>Создано 2025</span>
    </footer>
  );
}

export default Footer;
