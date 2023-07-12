import './Profile.css';
import Header from "../Header/Header";
import {useContext, useEffect, useState} from "react";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import {useFormValidation} from "../../utils/UseFormValidation";
import {Patterns} from "../../utils/Patterns";

function Profile({handleLogout, handleEditUser}) {
    const [isDisabled, setIsDisabled] = useState(false);
    const currentUser = useContext(CurrentUserContext);
    const {values, errors, setIsValid, handleChange, setValue, isValid, formRef} = useFormValidation(
        {
            email: currentUser.email,
            name: currentUser.name,
        }
    );
    const [userValuesOnInit, setUserValuesOnInit] = useState();
    const errorClassname = (name) => `popup__input ${errors[name] && 'profile__input--error'}`;
    function handleSubmit(e) {
        e.preventDefault();
        setIsDisabled(true);
        handleEditUser({
            email: values['email'],
            name: values['name'],
        }).finally(() => setIsDisabled(false))
    }

    useEffect(() => {
        setUserValuesOnInit({
            email: currentUser.email,
            name: currentUser.name,
        })
        setIsValid(false);
    }, [currentUser, setIsValid, setValue]);

    return (
        <>
            <Header isLogged={true}/>
            <main className="profile">
                <section className="profile__inner">
                    <form className='profile__form' ref={formRef} onSubmit={handleSubmit}>
                        <h1 className="profile__title">Привет, {currentUser.name}!</h1>
                        <div className="profile__inputs">
                            <div className="profile__input-wrapper">
                                <label className="profile__label">Имя</label>
                                <input className={`profile__input ${errorClassname('name')}`} data-diff={userValuesOnInit?.name}
                                       pattern={Patterns.USERNAME.pattern}
                                       onChange={handleChange}
                                       disabled={isDisabled}
                                       name='name'
                                       id='name'
                                       required
                                       data-pattern-error-message={Patterns.USERNAME.message}
                                       value={values['name'] || ''} type="text"/>
                                {errors['name'] ? <span className='input-error-text'>{errors['name']}</span> : null}
                            </div>
                            <div className="profile__input-wrapper">
                                <label className="profile__label">E-mail</label>
                                <input className={`profile__input ${errorClassname('email')}`} pattern={Patterns.EMAIL.pattern}
                                       onChange={handleChange}
                                       data-diff={userValuesOnInit?.email}
                                       name='email'
                                       disabled={isDisabled}
                                       id='email'
                                       required
                                       data-pattern-error-message={Patterns.EMAIL.message} value={values['email'] || ''}
                                       type="email"/>
                                {errors['email'] ? <span className='input-error-text'>{errors['email']}</span> : null}
                            </div>
                        </div>
                        <div className="profile__buttons">
                            <button className="profile__button profile__button--edit" type='submit'
                                    disabled={!isValid || isDisabled}>Редактировать
                            </button>
                            <button className="profile__button profile__button--danger" type='button'
                                    onClick={handleLogout}>Выйти из
                                аккаунта
                            </button>
                        </div>
                    </form>
                </section>
            </main>
        </>
    );
}

export default Profile;
