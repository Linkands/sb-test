import React from 'react';

import CarLeasingForm from '../../components/Form/CarLeasingForm.js';

import styles from './CarLeasingPage.module.css';

const CarLeasingPage = () => {
    return (
        <div className={styles.root}>
            <CarLeasingForm></CarLeasingForm>
        </div>
    );
};

export default CarLeasingPage;
