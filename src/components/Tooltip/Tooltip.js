import React, { useState } from 'react';

import styles from './Tooltip.module.css';

const Tooltip = ({ children }) => {
    const [isShown, setIsShown] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setIsShown(!isShown);
    };

    return (
        <div className={styles.root}>
            <button
                className={styles.button}
                type='button'
                onClick={handleClick}
            >
                ?
            </button>
            {isShown && (
                <>
                    <div
                        onClick={handleClick}
                        className={styles.backdrop}
                    ></div>
                    <div className={styles.content}>
                        <div className={styles.closeButtonWrapper}>
                            <button onClick={handleClick}>x</button>
                        </div>
                        {children}
                    </div>
                </>
            )}
        </div>
    );
};

export default Tooltip;
