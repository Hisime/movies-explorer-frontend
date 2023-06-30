import './FormInput.css';

function FormInput({type, text}) {
    return (
        <div className="form-input">
            <label className="form-input__label">{text}</label>
            <input className="form-input__textfield" type={type}/>
        </div>
    );
}

export default FormInput;
