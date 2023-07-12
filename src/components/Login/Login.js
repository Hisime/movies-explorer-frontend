import './Login.css';
import Logo from "../Logo/Logo";
import FormTitle from "../FormTitle/FormTitle";
import FormInput from "../FormInput/FormInput";
import FormButton from "../FormButton/FormButton";
import {useEffect, useState} from "react";
import {useFormValidation} from "../../utils/UseFormValidation";
import {NavLink} from "react-router-dom";
import {Patterns} from "../../utils/Patterns";

function Login({handleLogin}) {
    const {values, errors, handleChange, isValid, setValue, formRef} = useFormValidation();
    const [isDisabled, setIsDisabled] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setIsDisabled(true);

        handleLogin({
            email: values['email'],
            password: values['password'],
        }).finally(() => setIsDisabled(false))
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
                           text="E-mail" disabled={isDisabled}
                           handleChange={handleChange} type="email" required/>
                <FormInput inputId={'password'} error={errors['password']} disabled={isDisabled} inputName={'password'} text="Пароль"
                           handleChange={handleChange} type="password" required/>
                <div className="register-section__bottom">
                    <FormButton text="Войти" disabled={!isValid || isDisabled}/>
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
