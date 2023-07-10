import './FormButton.css';

function FormButton({text, type = 'submit', disabled}) {
    return (
        <button className="form-button" disabled={disabled} type={type}>{text}</button>
    );
}

export default FormButton;
