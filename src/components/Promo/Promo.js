import './Promo.css';

function Promo() {
    return (
        <section className="promo">
            <div className="block-wrapper promo__inner">
                <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
                <p className="promo__description">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                <a href="#about" className="promo__button">Узнать больше</a>
            </div>
        </section>
    );
}

export default Promo;
