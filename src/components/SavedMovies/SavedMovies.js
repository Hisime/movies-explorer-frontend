import './SavedMovies.css';
import {useEffect, useState} from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../ MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import mainApi from "../../utils/MainApi";
import SearchFilter from "../../utils/SearchFilter";
import Storage from "../../utils/Storage";

function SavedMovies({handleAlert}) {
    const [movies, setMovies] = useState(null);
    const [error, setIsError] = useState(false);

    const handleRemove = (movieId) => {
        mainApi.removeMovie(movieId).then((card) => {
            setMovies((prevState) => {
                const newState = prevState.filter((movie) => {
                    return movie._id !== card._id
                });
                Storage.set('savedMovies', newState);
                return newState;
            })
        }).catch((err) => handleAlert(err))
    }

    const saveUserInputs = (search, shortFilms) => {
        Storage.set('search', search);
        Storage.set('shortFilms', shortFilms);
    }

    const onSearchSubmit = ({search, shortFilms}) => {
        filterMovies(search, shortFilms)
    }

    const filterMovies = (search = Storage.get('search'), shortFilms = Storage.get('shortFilms')) => {
        getUserMovies().then((movies) => {
            setMovies(SearchFilter.filterMovies(movies));
            setIsError(false);
            saveUserInputs(search, shortFilms);
        })
    }

    const onShortFilmChange = (shortFilms) => {
        Storage.set('shortFilms', shortFilms)
        if (movies?.length) {
            filterMovies()
        }
    }

    const getUserMovies = () => {
        const storedMovies = Storage.get('savedMovies');
        if (storedMovies) {
            return Promise.resolve(storedMovies);
        }
        return mainApi.getMovies().then((movies) => {
            Storage.set('savedMovies', movies);
            return movies.map((item) => {
                item.isLiked = true;
                return item;
            });
        });
    }

    useEffect(() => {
        getUserMovies().then((movies) => {
            setMovies(SearchFilter.filterMovies(movies));
        }).catch((err) => handleAlert(err))
    }, [handleAlert])


    return (
        <>
            <Header isLogged="true"/>
            <main>
                <SearchForm handleSearchSubmit={onSearchSubmit} handleShortFilmChange={onShortFilmChange}/>
                <MoviesCardList handleRemove={handleRemove} cards={movies} error={error} isSavedMoviesPage={true}/>
            </main>
            <Footer/>
        </>
    );
}

export default SavedMovies;
