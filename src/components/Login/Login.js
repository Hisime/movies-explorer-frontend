import './Login.css';
import Logo from "../Logo/Logo";
import FormTitle from "../FormTitle/FormTitle";
import FormInput from "../FormInput/FormInput";
import FormButton from "../FormButton/FormButton";
import {useEffect} from "react";
import {useFormValidation} from "../../utils/UseFormValidation";
import {NavLink} from "react-router-dom";
import {Patterns} from "../../utils/Patterns";

function Login({handleLogin, isLoginProcessing}) {
    const {values, errors, handleChange, isValid, setValue, formRef} = useFormValidation();

    function handleSubmit(e) {
        e.preventDefault();
        handleLogin({
            email: values['email'],
            password: values['password'],
        });
    }

    useEffect(() => {
        setValue('email', '')
        setValue('password', '')
    }, [setValue])

    return (
        <main className="register">
            <form className="register-section" ref={formRef} onSubmit={handleSubmit}>
                <Logo/>
                <FormTitle text="Рады видеть!"/>
                <FormInput inputId={'email'} pattern={Patterns.EMAIL.pattern}
                           patternErrorMessage={Patterns.EMAIL.message} error={errors['email']} inputName={'email'}
                           text="E-mail"
                           handleChange={handleChange} type="email" required/>
                <FormInput inputId={'password'} error={errors['password']} inputName={'password'} text="Пароль"
                           handleChange={handleChange} type="password" required/>
                <div className="register-section__bottom">
                    <FormButton text="Войти" disabled={!isValid || isLoginProcessing}/>
                    <div className="register-section__tip">
                        <span className="register-section__tip-text">Ещё не зарегистрированы?</span>
                        <NavLink to="/sign-up" className="block-link">Регистрация</NavLink>
                    </div>
                </div>

            </form>
        </main>
    );
}

export default Login;
