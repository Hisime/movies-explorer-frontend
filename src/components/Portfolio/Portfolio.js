import './Portfolio.css';

function Portfolio() {
    return (
        <section className="portfolio block-wrapper">
            <h2 className="portfolio__title">Портфолио</h2>
            <ul className="portfolio__list">
                <li className="portfolio__list-item">
                    <span className="portfolio__list-name">Статичный сайт</span>
                    <a className="portfolio__link" href="#" target="_blank">
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.60653 16.5241L14.9645 4.14489L14.9432 13.6903H17.2656V0.181818H3.77841L3.7571 2.48295H13.3026L0.944603 14.8622L2.60653 16.5241Z" fill="black"/>
                        </svg>
                    </a>
                </li>
                <li className="portfolio__list-item">
                    <span className="portfolio__list-name">Адаптивный сайт</span>
                    <a className="portfolio__link" href="#" target="_blank">
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.60653 16.5241L14.9645 4.14489L14.9432 13.6903H17.2656V0.181818H3.77841L3.7571 2.48295H13.3026L0.944603 14.8622L2.60653 16.5241Z" fill="black"/>
                        </svg>
                    </a>
                </li>
                <li className="portfolio__list-item">
                    <span className="portfolio__list-name">Одностраничное приложение</span>
                    <a className="portfolio__link" href="#" target="_blank">
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.60653 16.5241L14.9645 4.14489L14.9432 13.6903H17.2656V0.181818H3.77841L3.7571 2.48295H13.3026L0.944603 14.8622L2.60653 16.5241Z" fill="black"/>
                        </svg>
                    </a>
                </li>
            </ul>
        </section>
    );
}

export default Portfolio;
