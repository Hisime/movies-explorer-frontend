import './FormInput.css';

function FormInput({type = 'text', text, inputName, inputId, required, handleChange, error, pattern, patternErrorMessage}) {
    return (
        <div className={`form-input ${error && 'form-input--invalid'}`}>
            <label className="form-input__label">{text}</label>
            <input id={inputId} name={inputName} pattern={pattern} data-pattern-error-message={patternErrorMessage} onChange={handleChange} className="form-input__textfield" type={type} required={required}/>
            {error && <span className="error-text">{error}</span>}
        </div>
    );
}

export default FormInput;
