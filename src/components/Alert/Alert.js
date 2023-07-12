import './Alerts.css';

function Alert({message, closeAlert, isSuccess}) {
    return (
        message && <div className={`alert ${isSuccess && 'alert--success'}`}>
            <button className="alert__close-button" onClick={closeAlert}></button>
            <p className="alert__text">{message}</p>
        </div>
    );
}

export default Alert;
