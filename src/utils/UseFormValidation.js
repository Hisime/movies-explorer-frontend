import {useState, useCallback, useRef, useEffect} from "react";

export function useFormValidation(initialValues = {}) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);
    const formRef = useRef(null);

    useEffect(() => {
        setIsValid(formRef.current.checkValidity())
    }, [values])

    const handleChange = (e) => {
        const { name } = e.target;
        const value = e.target.hasOwnProperty('checked') ? e.target.checked : e.target.value;
        setDiffError(e.target.getAttribute('data-diff'), value, e.target);
        const validationMessage = e.target.validity.patternMismatch && e.target.getAttribute('data-pattern-error-message')
            ? e.target.getAttribute('data-pattern-error-message')
            : e.target.validationMessage
        setValues((oldValues) => ({...oldValues, [name]: value }));
        setErrors((oldErrors) => ({...oldErrors, [name]: validationMessage}));
    }

    const reset = (initialValues = {}) => {
        setValues(initialValues);
        setErrors({});
    }

    const setDiffError = (initValue, currentValue, input) => {
        const hasError = initValue && initValue === currentValue;
        if (hasError) {
            input.setCustomValidity('Значение не отличается от изначального');
            return;
        }
        input.setCustomValidity('')
    }

    const setValue = useCallback((name, value) => {
        setValues((oldValues) => ({...oldValues, [name]: value }));
    }, [])

    return { values, errors, isValid, handleChange, setValue, setErrors, reset, formRef, setIsValid }
}
