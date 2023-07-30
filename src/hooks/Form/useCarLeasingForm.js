import { useState } from 'react';

const useCarLeasingForm = ({ clearErrors }) => {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState(null);

    const handleNext = () => {
        setStep((prevStep) => prevStep + 1);
    };

    const handlePrev = () => {
        setStep((prevStep) => prevStep - 1);
        clearErrors();
    };

    const findErrorMessage = (obj) => {
        for (let key in obj) {
            if (typeof obj[key] === 'object') {
                const message = findErrorMessage(obj[key]);
                if (message !== undefined) {
                    return message;
                }
            } else if (key === 'message') {
                return obj[key];
            }
        }
    };

    const submitForm = (values) => {
        if (step < 4) {
            return;
        }
        setAnswers(values);
        handleNext();
    };

    return {
        step,
        setStep,
        answers,
        setAnswers,
        handleNext,
        handlePrev,
        findErrorMessage,
        submitForm,
    };
};

export default useCarLeasingForm;
