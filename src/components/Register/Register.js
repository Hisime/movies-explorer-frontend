import './Register.css';
import Logo from "../Logo/Logo";
import FormTitle from "../FormTitle/FormTitle";
import FormInput from "../FormInput/FormInput";
import FormButton from "../FormButton/FormButton";
import {useFormValidation} from "../../utils/UseFormValidation";
import {useEffect, useState} from "react";
import {Patterns} from "../../utils/Patterns";
import {NavLink} from "react-router-dom";

function Register({handleRegister}) {
    const {values, errors, handleChange, setValue, isValid, formRef} = useFormValidation();
    const [isDisabled, setIsDisabled] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setIsDisabled(true);

        handleRegister({
            email: values['email'],
            password: values['password'],
            name: values['name'],
        }).finally(() => setIsDisabled(false))
    }

    useEffect(() => {
        setValue('email', '')
        setValue('password', '')
        setValue('name', '')
    }, [setValue])
    return (
        <main className="register">
            <form className="register-section" ref={formRef} onSubmit={handleSubmit}>
                <Logo/>
                <FormTitle text="Добро пожаловать!"/>
                <FormInput inputId={'name'} error={errors['name']} inputName={'name'}
                           pattern={Patterns.USERNAME.pattern} patternErrorMessage={Patterns.USERNAME.message}
                           handleChange={handleChange} text="Имя" disabled={isDisabled} required/>
                <FormInput inputId={'email'} error={errors['email']} pattern={Patterns.EMAIL.pattern}
                           patternErrorMessage={Patterns.EMAIL.message} inputName={'email'} text="E-mail"
                           handleChange={handleChange} type="email" disabled={isDisabled} required/>
                <FormInput inputId={'password'} error={errors['password']} inputName={'password'} text="Пароль"
                           handleChange={handleChange} type="password" disabled={isDisabled} required/>
                <div className="register-section__bottom">
                    <FormButton text="Зарегистрироваться" disabled={!isValid || isDisabled}/>
                    <div className="register-section__tip">
                        <span className="register-section__tip-text">Уже зарегистрированы?</span>
                        <NavLink to="/sign-in" className="block-link">Войти</NavLink>
                    </div>
                </div>

            </form>
        </main>
    );
}

export default Register;
