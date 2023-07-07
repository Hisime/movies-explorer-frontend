import './Header.css';
import Logo from "../Logo/Logo";
import {useState} from "react";

function Header({isLogged}) {
    const [isHeaderOpened, setIsHeaderOpened] = useState(false);
    return (
        <header className={`header ${isLogged ? 'header--logged' : ''}`}>
            <div className="block-wrapper header__inner">
                <Logo/>
                <div className={`header__overlay ${isHeaderOpened ? 'header__overlay--active' : ''}`}></div>
                {isLogged ?
                    <>
                        <div className={`header__right-part ${isHeaderOpened ? 'header__right-part--active' : ''}`}>
                        <ul className="header__navigation">
                            <li className="header__navigation-item"><a className="header__navigation-link" href="/">Главная</a></li>
                            <li className="header__navigation-item"><a className="header__navigation-link header__navigation-link--active" href="/movies">Фильмы</a></li>
                            <li className="header__navigation-item"><a className="header__navigation-link" href="/saved-movies">Сохранённые фильмы</a></li>
                        </ul>
                        <a href="/profile" className="header__account-link">
                            Аккаунт
                            <svg className="header__account-icon" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path id="icon__COLOR:icon-main" fillRule="evenodd" clipRule="evenodd" d="M7.43004 7.96749C8.79146 7.40521 9.74951 6.06449 9.74951 4.5C9.74951 2.42893 8.07058 0.75 5.99951 0.75C3.92844 0.75 2.24951 2.42893 2.24951 4.5C2.24951 6.06451 3.20759 7.40525 4.56904 7.96751C3.17474 8.19979 1.89215 8.76573 0.808105 9.58019L2.18966 11.419C3.25095 10.6217 4.56849 10.1496 5.99961 10.1496C7.43073 10.1496 8.74828 10.6217 9.80957 11.419L11.1911 9.58019C10.107 8.7657 8.82439 8.19975 7.43004 7.96749Z" fill="black"/>
                            </svg>
                        </a>
                        <button className="header__button-close" onClick={() => setIsHeaderOpened(false)}>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="7.16016" y="9.28249" width="3" height="22" transform="rotate(-45 7.16016 9.28249)" fill="black"/>
                                <rect x="22.7168" y="7.16117" width="3" height="22" transform="rotate(45 22.7168 7.16117)" fill="black"/>
                            </svg>
                        </button>
                    </div>
                    <button className="header__burger" onClick={() => setIsHeaderOpened(true)}>
                        <svg className="header__burger-icon" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M36 14L8 14V11L36 11V14Z" fill="black"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M36 24L8 24V21L36 21V24Z" fill="black"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M36 34L8 34V31L36 31V34Z" fill="black"/>
                        </svg>
                    </button>
                    </>
                     :
                    <div className="header__login">
                        <a href="/sign-up" className="header__link">Регистрация</a>
                        <a href="/sign-in" className="header__button">Войти</a>
                    </div>}
            </div>
        </header>
    );
}

export default Header;
