import './Register.css';
import Logo from "../Logo/Logo";
import FormTitle from "../FormTitle/FormTitle";
import FormInput from "../FormInput/FormInput";
import FormButton from "../FormButton/FormButton";

function Register() {
    return (
        <main className="register">
            <form className="register-section">
                <Logo/>
                <FormTitle text="Добро пожаловать!"/>
                <FormInput text="Имя" type="text" required="required"/>
                <FormInput text="E-mail" type="email" required="required"/>
                <FormInput text="Пароль" type="password" required="required"/>
                <div className="register-section__bottom">
                    <FormButton text="Зарегистрироваться"/>
                    <div className="register-section__tip">
                        <span className="register-section__tip-text">Уже зарегистрированы?</span>
                        <a href="/sign-in" className="block-link">Войти</a>
                    </div>
                </div>

            </form>
        </main>
    );
}

export default Register;
