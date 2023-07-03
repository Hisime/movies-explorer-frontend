import './FormButton.css';

function FormButton({text}) {
    return (
        <button className="form-button" type="submit">{text}</button>
    );
}

export default FormButton;
