import './Movies.css';
import Header from "../Header/Header";
import MoviesCardList from "../ MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import {useState} from "react";
import moviesApi from "../../utils/MoviesApi";
import mainApi from "../../utils/MainApi";
import Storage from "../../utils/Storage";
import SearchFilter from "../../utils/SearchFilter";
import {Movie} from "../../utils/Movie";
import {STORAGE_NAMES} from "../../utils/Constatnts";

function Movies({handleAlert}) {
    const [movies, setMovies] = useState(null);
    const [error, setIsError] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);

    const handleAdd = (cardToAdd) => {
        mainApi.addMovie(new Movie(cardToAdd)).then((card) => {
            setMovies((prevState) => {
                const newState = prevState.map((movie) => {
                    if (movie.id === card.movieId) {
                        movie.isLiked = true;
                        movie._id = card._id;
                    }
                    return movie;
                });
                const savedMovies = Storage.get(STORAGE_NAMES.SAVED_MOVIES);
                savedMovies.push(card);
                Storage.set(STORAGE_NAMES.SAVED_MOVIES, savedMovies);
                return newState;
            })
        }).catch((err) => handleAlert(err))
    }

    const handleRemove = (movieId) => {
        mainApi.removeMovie(movieId).then((card) => {
            setMovies((prevState) => {
                const newState = prevState.map((movie) => {
                    if (movie.id === card.movieId) {
                        movie.isLiked = false;
                    }
                    return movie;
                });
                Storage.set(STORAGE_NAMES.SAVED_MOVIES, Storage.get(STORAGE_NAMES.SAVED_MOVIES).filter((item) => item._id !== movieId))
                return newState;
            })
        }).catch((err) => handleAlert(err))
    }

    const getAllMovies = () => {
        const storedMovies = localStorage.getItem(STORAGE_NAMES.ALL_MOVIES);
        if (storedMovies) {
            return Promise.resolve(JSON.parse(storedMovies));
        }
        return moviesApi.getMovies().then((movies) => {
            localStorage.setItem(STORAGE_NAMES.ALL_MOVIES, JSON.stringify(movies));
            return movies;
        });
    }

    const getUserMovies = () => {
        const storedMovies = Storage.get(STORAGE_NAMES.SAVED_MOVIES);
        if (storedMovies) {
            return Promise.resolve(storedMovies);
        }
        return mainApi.getMovies().then((movies) => {
            Storage.set(STORAGE_NAMES.SAVED_MOVIES, movies);
            return movies;
        });
    }

    const onSearchSubmit = ({search, shortFilms}) => {
        if (!search) {
            return;
        }
        setMovies(false);
        filterMovies(search, shortFilms);
    }

    const filterMovies = (search = Storage.get(STORAGE_NAMES.LAST_SEARCH_TEXT), shortFilms = Storage.get(STORAGE_NAMES.LAST_SEARCH_SHORT_FILM)) => {
        setMovies(false);
        setIsDisabled(true);
        Promise.all([getAllMovies(), getUserMovies()])
            .then(([allMovies, userMovies]) => {
                setIsError(false);
                saveUserInputs(search, shortFilms);
                const filteredMovies = SearchFilter.filterMovies(allMovies, search, shortFilms);
                SearchFilter.updateMoviesWithLiked(allMovies, userMovies);
                setMovies(filteredMovies);
            }).catch(() => {
            setIsError(true);
            setMovies(null);
        }).finally(() => {
            setIsDisabled(false)
        })
    }

    const saveUserInputs = (search, shortFilms) => {
        Storage.set(STORAGE_NAMES.LAST_SEARCH_TEXT, search);
        Storage.set(STORAGE_NAMES.LAST_SEARCH_SHORT_FILM, shortFilms);
    }

    useState(() => {
        return () => {
            Storage.set(STORAGE_NAMES.LAST_SEARCH_RESULT);
        }
    })


    return (
        <>
            <Header isLogged={true}/>
            <main>
                <SearchForm handleSearchSubmit={onSearchSubmit} isDisabled={isDisabled} isSearchRequired={true} filterInitValues={{
                    search: Storage.get(STORAGE_NAMES.LAST_SEARCH_TEXT),
                    shortFilms: Storage.get(STORAGE_NAMES.LAST_SEARCH_SHORT_FILM)
                }}/>
                <MoviesCardList handleAdd={handleAdd} handleRemove={handleRemove} cards={movies} error={error}/>
            </main>
            <Footer/>
        </>
    );
}

export default Movies;
