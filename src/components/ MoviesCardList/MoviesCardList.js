import './MoviesCardList.css';
import MoviesCard from "../ MoviesCard/MoviesCard";
import {useEffect, useState} from "react";
import Preloader from "../Preloader/Preloader";
import {Debounce} from "../../utils/Debounce";

const cardLoadCounts = {
    BIG: {
        initLoad: 12,
        load: 3,
    },
    MEDIUM: {
        initLoad: 8,
        load: 2,
    },
    SMALL: {
        initLoad: 5,
        load: 2,
    }
}

function MoviesCardList({cards, isSavedMoviesPage, error, handleAdd, handleRemove}) {
    const [cardsToShow, setCardsToShow] = useState(null)
    const [cardInRowCount, setCardInRowCount] = useState({
        initLoad: getCardInRowCount().initLoad,
        load: getCardInRowCount().load,
    })
    const parseMovieDuration = (durationInMinutes) => {
        return {
            hours: Math.floor(durationInMinutes / 60),
            minutes: durationInMinutes % 60,
        }
    }

    /** Получает настройки количества карточек в ряду и подгрузки */
    function getCardInRowCount() {
        const windowWidth = window.innerWidth;
        if (windowWidth > 768) {
            return cardLoadCounts.BIG;
        }
        if (windowWidth > 500) {
            return cardLoadCounts.MEDIUM;
        }
        return cardLoadCounts.SMALL;
    }

    const onLoadMoreClick = () => {
        setCardsToShow(cards.slice(0, cardsToShow.length + cardInRowCount.load))
    }

    /** Проверяет, что количество показываемых карточке соответствуем сеткам */
    const checkCardItemsCount = () => {
        // Если карточки ещё есть в запасе, то можно что-то делать
        if (cardsToShow < cards) {
            // Если показанных карточке меньше чем должно загрузиться изначально на новой ширине, то грузим остальные
            if (cardsToShow.length < cardInRowCount.initLoad) {
                setCardsToShow(cards.slice(0, cardInRowCount.initLoad));
                return;
            }
            // Если текущее количество не кратно количству при подгрузке, то дополняем его
            const diff = cardsToShow.length % cardInRowCount.load
            if (diff) {
                setCardsToShow(cards.slice(0, cardsToShow.length - diff + cardInRowCount.load));
            }
        }
    }

    /** При смене ориентации экрана и ресайзинге, меняет настройки количества карточке */
    useEffect(() => {
        ['resize', 'orientationchange'].forEach((eventName) => {
            window.addEventListener(eventName, Debounce((e) => {
                setCardInRowCount(getCardInRowCount());
            }))
        })
    })

    /** При смене настроек количества карточке, подгружает дополнительные, если нужно */
    useEffect(() => checkCardItemsCount(), [cardInRowCount])

    useEffect(() => {
        setCardsToShow((prevState) => {
            if (isSavedMoviesPage) {
                return cards;
            }
            if (prevState?.length > cardInRowCount.initLoad) {
                return prevState;
            }
            if (cards?.length) {
                return cards.slice(0, cardInRowCount.initLoad);
            }
            return cards;
        })
    }, [cards]);
    return (
        <section className="movies block-wrapper">
            <div className="movies__list">
                {cardsToShow &&
                    cardsToShow.map((item, index) =>
                        <MoviesCard card={item} handleAdd={handleAdd} handleRemove={handleRemove} key={index}
                                    isLiked={item.isLiked} duration={parseMovieDuration(item.duration)}
                                    isRemovable={isSavedMoviesPage}/>)
                }
            </div>
            {error &&
                <div className='movies__error'>Во время запроса произошла ошибка. Возможно, проблема с соединением или
                    сервер недоступен. Подождите немного и попробуйте ещё раз</div>}
            {cardsToShow === false && <Preloader/>}
            {cardsToShow && cardsToShow.length === 0 && <div className='movies__error'>Ничего не найдено</div>}
            {!isSavedMoviesPage && cards?.length > cardInRowCount.load && cards?.length !== cardsToShow?.length &&
                <button className="movies__more-button" onClick={onLoadMoreClick}>Ещё</button>
            }
        </section>
    );
}

export default MoviesCardList;
