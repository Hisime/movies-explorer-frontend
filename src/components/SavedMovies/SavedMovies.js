import './SavedMovies.css';
import {useState} from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../ MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import mainApi from "../../utils/MainApi";
import SearchFilter from "../../utils/SearchFilter";
import Storage from "../../utils/Storage";
import {STORAGE_NAMES} from "../../utils/Constatnts";

function SavedMovies({handleAlert}) {
    const [movies, setMovies] = useState(null);
    const [error, setIsError] = useState(false);

    const handleRemove = (movieId) => {
        mainApi.removeMovie(movieId).then((card) => {
            setMovies((prevState) => {
                const newState = prevState.filter((movie) => {
                    return movie._id !== card._id
                });
                Storage.set(STORAGE_NAMES.SAVED_MOVIES, newState);
                return newState;
            })
        }).catch((err) => handleAlert(err))
    }

    const onSearchSubmit = ({search, shortFilms}) => {
        filterMovies(search, shortFilms)
    }

    const filterMovies = (search, shortFilms) => {
        getUserMovies().then((movies) => {
            setMovies(SearchFilter.filterMovies(movies, search, shortFilms));
            setIsError(false);
        })
    }

    const getUserMovies = () => {
        const storedMovies = Storage.get(STORAGE_NAMES.SAVED_MOVIES);
        if (storedMovies) {
            return Promise.resolve(storedMovies);
        }
        return mainApi.getMovies().then((movies) => {
            Storage.set(STORAGE_NAMES.SAVED_MOVIES, movies);
            return movies.map((item) => {
                item.isLiked = true;
                return item;
            });
        });
    }

    return (
        <>
            <Header isLogged="true"/>
            <main>
                <SearchForm handleSearchSubmit={onSearchSubmit}/>
                <MoviesCardList handleRemove={handleRemove} cards={movies} error={error} isSavedMoviesPage={true}/>
            </main>
            <Footer/>
        </>
    );
}

export default SavedMovies;
