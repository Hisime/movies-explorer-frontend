import './SavedMovies.css';
import {useEffect, useState} from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../ MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function SavedMovies() {
    const [cards, setCards] = useState([])
    useEffect(() => {
        setCards(Array.from(Array(5), ((item, idx) => {
            return {
                title: '33 слова о дизайне',
                duration: '1ч 47м',
                img: `./card${idx + 1}.png`,
                id: idx + 1,
            }
        })))
    }, [])
    return (
        <>
            <Header isLogged="true"/>
            <SearchForm/>
            <MoviesCardList cards={cards} isCardRemovable={true}/>
            <Footer/>
        </>
    );
}

export default SavedMovies;
