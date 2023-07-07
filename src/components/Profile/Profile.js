import './Profile.css';
import Header from "../Header/Header";

function Profile() {
    return (
        <>
            <Header isLogged={true}/>
            <main className="profile">
                <section className="profile__inner">
                    <h1 className="profile__title">Привет, Виталий!</h1>
                    <div className="profile__inputs">
                        <div className="profile__input-wrapper">
                            <label className="profile__label">Имя</label>
                            <input className="profile__input" type="text" value="Виталий" disabled/>
                        </div>
                        <div className="profile__input-wrapper">
                            <label className="profile__label">E-mail</label>
                            <input className="profile__input" type="text" value="pochta@yandex.ru" disabled/>
                        </div>
                    </div>
                    <div className="profile__buttons">
                        <button className="profile__button">Редактировать</button>
                        <button className="profile__button profile__button--danger">Выйти из аккаунта</button>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Profile;
