import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../Button/Button';

import styles from './Intro.module.css';

const Intro = () => {
    return (
        <div className={styles.root}>
            <h1>Car leasing</h1>
            <h2>
                Your new car can be a step towards to a more sustainable
                lifestyle
            </h2>
            <p>
                <em>Special offer</em> for cars with CO2 emissions up to 50
                g/km! Interest for the first two years is
                <em> 0% + 6 months’ Euribor.*</em>
            </p>
            <div className={styles.buttonWrapper}>
                <Link to='/leasing'>
                    <Button>Apply</Button>
                </Link>
            </div>
        </div>
    );
};

export default Intro;
