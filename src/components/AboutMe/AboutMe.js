import './AboutMe.css';
import BlockTitle from "../BlockTitle/BlockTitle";

function AboutMe() {
    return (
        <section className="about-me block-wrapper">
            <BlockTitle titleText="Студент"/>
            <div className="about-me__block">
                <div className="about-me__left">
                    <h3 className="about-me__name">Виталий</h3>
                    <p className="about-me__profession">Фронтенд-разработчик, 30 лет</p>
                    <p className="about-me__text">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
                        и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    <a className="about-me__link" href="#">Github</a>
                </div>
                <img className="about-me__photo" src={require('./../../images/pic__COLOR_pic.png')} alt="Фото профиля"/>
            </div>

        </section>
    );
}

export default AboutMe;
