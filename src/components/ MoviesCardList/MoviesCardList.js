import './MoviesCardList.css';
import MoviesCard from "../ MoviesCard/MoviesCard";
import {useEffect, useState} from "react";

function MoviesCardList() {
    const [cards, setCards] = useState([])
    useEffect(() => {
        setCards(Array.from(Array(5), ((item, idx) => {
            return {
                title: '33 слова о дизайне',
                duration: '1ч 47м',
                img: `./card${idx + 1}.png`,
                id: idx + 1,
                isLiked: Math.floor(Math.random() * 2),
            }
        })))
    }, [])
    return (
        <section className="movies block-wrapper">
            <div className="movies__list">
                {cards.map((item) =>
                    <MoviesCard key={item.id} isLiked={item.isLiked} duration={item.duration} title={item.title}
                                                 imgSrc={item.img}/>)
                }
            </div>
            <button className="movies__more-button">Ещё</button>
        </section>
    );
}

export default MoviesCardList;
