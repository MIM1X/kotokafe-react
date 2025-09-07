import React from 'react';
import Logo from '../../ui/logo/logo';
import Nav from '../navigation/navigation';
import './style.css';

function Header() {
  return (
    <header>
      <Logo></Logo>
      <Nav></Nav>
    </header>
  );
}

export default Header;
