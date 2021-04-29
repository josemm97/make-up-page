/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import styles from './Button.module.css';

function Button({ onClick, children }) {
  return (
    <div>
      <button type="submit" onClick={onClick} className={styles.button}>
        { children }
      </button>
    </div>
  );
}

export default Button;
