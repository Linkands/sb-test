import React from 'react';

import styles from './Button.module.css';

const Button = ({ onClick, type, disabled, children }) => {
    return (
        <button
            className={styles.button}
            type={type}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
