import React from 'react';
import { useForm } from 'react-hook-form';
import useCarLeasingForm from '../../hooks/Form/useCarLeasingForm';

import Button from '../Button/Button';
import Summary from '../Summary/Summary';
import Tooltip from '../Tooltip/Tooltip';

import styles from './CarLeasingForm.module.css';

const CarLeasingForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        clearErrors,
    } = useForm({ mode: 'onTouched' });

    const {
        handleNext,
        handlePrev,
        findErrorMessage,
        step,
        answers,
        submitForm,
    } = useCarLeasingForm({ clearErrors });

    const actions = (
        <div className={styles.actions}>
            {step > 0 && step < 5 && (
                <div className={styles.prevButtonWrapper}>
                    <Button type='button' onClick={handlePrev}>
                        Previous
                    </Button>
                </div>
            )}
            {step < 4 && (
                <div className={styles.nextButtonWrapper}>
                    <Button
                        disabled={!isValid}
                        type='button'
                        onClick={handleNext}
                    >
                        Next
                    </Button>
                </div>
            )}
            {step === 4 && (
                <div className={styles.nextButtonWrapper}>
                    <Button disabled={!isValid} type='submit'>
                        Send request
                    </Button>
                </div>
            )}
        </div>
    );

    return (
        <div className={styles.root}>
            <div className={styles.formHeader}>
                <h1>Car Leasing</h1>
                {step < 5 && (
                    <span className={styles.steps}>Step {step + 1}/5</span>
                )}
            </div>
            <form onSubmit={handleSubmit(submitForm)}>
                {Object.keys(errors).length > 0 && (
                    <div className={styles.error}>
                        <div className={styles.errorIcon}></div>
                        <div>{findErrorMessage(errors)}</div>
                    </div>
                )}
                {step === 0 && (
                    <div className={styles.field}>
                        <label htmlFor='email'>
                            Enter your email address *
                        </label>
                        <input
                            className={styles.input}
                            type='email'
                            id='email'
                            name='email'
                            {...register('email', {
                                required: 'Please, enter your email address',
                                pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message:
                                        'Entered value does not match email format',
                                },
                            })}
                        />
                    </div>
                )}

                {step === 1 && (
                    <div className={styles.field}>
                        <label htmlFor='leasing-period'>
                            Choose leasing period *
                        </label>
                        <select
                            className={styles.select}
                            id='leasing-period'
                            name='leasing-period'
                            {...register('leasing-period', {
                                required: 'Please, choose leasing period',
                            })}
                        >
                            <option>1 year</option>
                            <option>2 years</option>
                            <option>3 years</option>
                        </select>
                    </div>
                )}

                {step === 2 && (
                    <fieldset id='vehicle' className={styles.field}>
                        <legend>Choose type of vehicle *</legend>
                        <div className={styles.radioField}>
                            <label htmlFor='new-vehicle'>New</label>
                            <div className={styles.radioWrapper}>
                                <input
                                    className={styles.radio}
                                    type='radio'
                                    value='new'
                                    name='vehicle'
                                    id='new-vehicle'
                                    {...register('vehicle', {
                                        required: 'Please, choose vehicle type',
                                    })}
                                />
                                <label
                                    htmlFor='new-vehicle'
                                    className={styles.customRadio}
                                ></label>
                            </div>
                        </div>
                        <div className={styles.radioField}>
                            <label htmlFor='used-vehicle'>Used</label>
                            <div className={styles.radioWrapper}>
                                <input
                                    className={styles.radio}
                                    type='radio'
                                    value='used'
                                    name='vehicle'
                                    id='used-vehicle'
                                    {...register('vehicle', {
                                        required: 'Please, choose vehicle type',
                                    })}
                                />
                                <label
                                    htmlFor='used-vehicle'
                                    className={styles.customRadio}
                                ></label>
                            </div>
                        </div>
                    </fieldset>
                )}

                {step === 3 && (
                    <>
                        <div className={styles.field}>
                            <label htmlFor='models'>
                                Which car model/models are you interested in? *
                                <Tooltip>
                                    You have the option to enter multiple car
                                    models. Our team will thoroughly review each
                                    submission, and there's a possibility that
                                    some of the models may come with special
                                    offers, such as electric cars.
                                </Tooltip>
                            </label>
                            <textarea
                                type='textarea'
                                id='models'
                                name='models'
                                {...register('models', {
                                    required:
                                        'Please fill preferred car models in the text field',
                                })}
                            />
                        </div>
                    </>
                )}

                {step === 4 && (
                    <div className={styles.field}>
                        <legend>
                            Please read and agree with terms conditions and
                            privacy policy *
                        </legend>
                        <div className={styles.checkboxField}>
                            <label>
                                <a href='#'>
                                    Terms conditions and privacy policy
                                </a>
                            </label>
                            <div className={styles.checkboxWrapper}>
                                <input
                                    className={styles.checkbox}
                                    type='checkbox'
                                    id='terms'
                                    name='terms'
                                    {...register('terms', {
                                        required: 'This is required field',
                                    })}
                                />
                                <label
                                    htmlFor='terms'
                                    className={styles.customCheckbox}
                                ></label>
                            </div>
                        </div>
                    </div>
                )}

                {step === 5 && <Summary answers={answers} />}
                {actions}
            </form>
        </div>
    );
};

export default CarLeasingForm;
