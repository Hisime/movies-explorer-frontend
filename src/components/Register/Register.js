import './Register.css';
import Logo from "../Logo/Logo";
import FormTitle from "../FormTitle/FormTitle";
import FormInput from "../FormInput/FormInput";
import FormButton from "../FormButton/FormButton";

function Register() {
    return (
        <main className="register">
            <section className="register-section">
                <Logo/>
                <FormTitle text="Добро пожаловать!"/>
                <FormInput text="Имя" type="text"/>
                <FormInput text="E-mail" type="email"/>
                <FormInput text="Пароль" type="password"/>
                <div className="register-section__bottom">
                    <FormButton text="Зарегистрироваться"/>
                    <div className="register-section__tip">
                        <span className="register-section__tip-text">Ещё не зарегистрированы?</span>
                        <a href="#" className="block-link">Регистрация</a>
                    </div>
                </div>

            </section>
        </main>
    );
}

export default Register;
