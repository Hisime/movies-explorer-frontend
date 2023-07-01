import './MoviesCardList.css';
import MoviesCard from "../ MoviesCard/MoviesCard";
import {useEffect, useState} from "react";

function MoviesCardList({cards, isCardRemovable}) {
    return (
        <section className="movies block-wrapper">
            <div className="movies__list">
                {cards.map((item) =>
                    <MoviesCard key={item.id} isLiked={item.isLiked} duration={item.duration} title={item.title}
                                                 imgSrc={item.img} isRemovable={isCardRemovable}/>)
                }
            </div>
            {!isCardRemovable &&
                <button className="movies__more-button">Ещё</button>
            }
        </section>
    );
}

export default MoviesCardList;
