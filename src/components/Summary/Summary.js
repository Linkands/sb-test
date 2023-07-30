import React from 'react';

import styles from './Summary.module.css';

const Summary = ({ answers }) => {
    return (
        <div className={styles.root}>
            <h2>
                Congratulations! You have successfully filled leasing form! We
                will contact with you as soon as possible.
            </h2>
            <ul>
                {Object.entries(answers).map(([key, value]) => (
                    <li key={key}>
                        <strong>{key}: </strong>
                        {typeof value === 'boolean' ? value.toString() : value}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Summary;
