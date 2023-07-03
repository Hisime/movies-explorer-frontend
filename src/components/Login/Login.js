import './Login.css';
import Logo from "../Logo/Logo";
import FormTitle from "../FormTitle/FormTitle";
import FormInput from "../FormInput/FormInput";
import FormButton from "../FormButton/FormButton";

function Login() {
    return (
        <main className="register">
            <section className="register-section">
                <Logo/>
                <FormTitle text="Рады видеть!"/>
                <FormInput text="E-mail" type="email"/>
                <FormInput text="Пароль" type="password"/>
                <div className="register-section__bottom">
                    <FormButton text="Войти"/>
                    <div className="register-section__tip">
                        <span className="register-section__tip-text">Ещё не зарегистрированы?</span>
                        <a href="/sign-up" className="block-link">Регистрация</a>
                    </div>
                </div>

            </section>
        </main>
    );
}

export default Login;
