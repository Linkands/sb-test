import React from 'react';

import Intro from '../../components/Intro/Intro';

import styles from './IntroPage.module.css';

const IntroPage = () => {
    return (
        <div className={styles.root}>
            <Intro />
        </div>
    );
};

export default IntroPage;
