import './Profile.css';
import Header from "../Header/Header";
import FormTitle from "../FormTitle/FormTitle";

function Profile() {
    return (
        <>
            <Header isLogged={true}/>
            <main className="profile">
                <FormTitle text="Привет, Виталий!"></FormTitle>
                <div className="profile__inputs">
                    <div className="profile__input-wrapper">
                        <label className="profile__label" htmlFor="">Имя</label>
                        <input className="profile__input" type="text" value="Виталий" disabled/>
                    </div>
                    <div className="profile__input-wrapper">
                        <label className="profile__label" htmlFor="">E-mail</label>
                        <input className="profile__input" type="text" value="pochta@yandex.ru" disabled/>
                    </div>
                </div>
                <div className="profile__buttons">
                    <button className="profile__button">Редактировать</button>
                    <button className="profile__button profile__button--danger">Выйти из аккаунта</button>
                </div>
            </main>
        </>
    );
}

export default Profile;
