import './Movies.css';
import Header from "../Header/Header";
import MoviesCardList from "../ MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import {useEffect, useState} from "react";
import moviesApi from "../../utils/MoviesApi";
import mainApi from "../../utils/MainApi";
import Storage from "../../utils/Storage";
import SearchFilter from "../../utils/SearchFilter";
import {Movie} from "../../utils/Movie";

function Movies({handleAlert}) {
    const [movies, setMovies] = useState(null);
    const [error, setIsError] = useState(false);

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
                const savedMovies = Storage.get('savedMovies');
                savedMovies.push(card);
                Storage.set('savedMovies', savedMovies);
                Storage.set('filteredMovies', newState);
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
                Storage.set('savedMovies', Storage.get('savedMovies').filter((item) => item._id !== movieId))
                Storage.set('filteredMovies', newState);
                return newState;
            })
        }).catch((err) => handleAlert(err))
    }

    const getAllMovies = () => {
        const storedMovies = localStorage.getItem('allMovies');
        if (storedMovies) {
            return Promise.resolve(JSON.parse(storedMovies));
        }
        return moviesApi.getMovies().then((movies) => {
            localStorage.setItem('allMovies', JSON.stringify(movies));
            return movies;
        });
    }

    const getUserMovies = () => {
        const storedMovies = Storage.get('savedMovies');
        if (storedMovies) {
            return Promise.resolve(storedMovies);
        }
        return mainApi.getMovies().then((movies) => {
            Storage.set('savedMovies', movies);
            return movies;
        });
    }

    const onSearchSubmit = ({search, shortFilms}) => {
        setMovies(false);
        filterMovies(search, shortFilms);
    }

    const filterMovies = (search = Storage.get('search'), shortFilms = Storage.get('shortFilms')) => {
        setMovies(false);
        Promise.all([getAllMovies(), getUserMovies()])
            .then(([allMovies, userMovies]) => {
                setIsError(false);
                saveUserInputs(search, shortFilms);
                const filteredMovies = SearchFilter.filterMovies(allMovies);
                SearchFilter.updateMoviesWithLiked(allMovies, userMovies);
                Storage.set('filteredMovies', filteredMovies);
                setMovies(filteredMovies);
            }).catch(() => {
            setIsError(true);
            setMovies(null)
        })
    }

    const onShortFilmChange = (shortFilms) => {
        Storage.set('shortFilms', shortFilms);
       if (movies?.length) {
           filterMovies()
       }
    }

    const saveUserInputs = (search, shortFilms) => {
        Storage.set('search', search);
        Storage.set('shortFilms', shortFilms);
    }

    useEffect(() => {
        const search = Storage.get('search');
        const shortFilms = Storage.get('shortFilms')
        if (search) {
            filterMovies(search, shortFilms)
        }
    }, [])
    return (
        <>
            <Header isLogged={true}/>
            <main>
                <SearchForm handleSearchSubmit={onSearchSubmit} handleShortFilmChange={onShortFilmChange}/>
                <MoviesCardList handleAdd={handleAdd} handleRemove={handleRemove} cards={movies} error={error}/>
            </main>
            <Footer/>
        </>
    );
}

export default Movies;
