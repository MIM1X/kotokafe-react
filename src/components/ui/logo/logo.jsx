import React from 'react';
import logo from '../../../assets/logo.png';
import './style.css';

function Logo() {
  return (
    <a href='/' className='logo__link'>
      <img src={logo} alt='Логотип в виде лапки котика' />
      <span className='logo__text'>Котокафе</span>
    </a>
  );
}

export default Logo;
