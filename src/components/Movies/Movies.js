import './Movies.css';
import Header from "../Header/Header";
import MoviesCardList from "../ MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import {useEffect, useState} from "react";

function Movies({isHeaderOpened, changeHeaderState}) {
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
        <>
            <Header isLogged={true}/>
            <main>
                <SearchForm/>
                <MoviesCardList cards={cards}/>
            </main>
            <Footer/>
        </>
    );
}

export default Movies;
