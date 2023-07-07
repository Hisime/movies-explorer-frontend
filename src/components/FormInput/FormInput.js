import './FormInput.css';

function FormInput({type, text, inputName, inputId, required}) {
    return (
        <div className="form-input">
            <label className="form-input__label">{text}</label>
            <input id={inputId} name={inputName} className="form-input__textfield" type={type} required={required}/>
        </div>
    );
}

export default FormInput;
