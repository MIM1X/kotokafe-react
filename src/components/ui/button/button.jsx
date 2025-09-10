import React from 'react';
import './style.css';

function Button({ minWidth }) {
  return (
    <a href='#' className='button' style={{ minWidth: minWidth }}>
      Купить билет
    </a>
  );
}

export default Button;
