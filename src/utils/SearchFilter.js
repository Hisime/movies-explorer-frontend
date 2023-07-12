import {SHORT_FILM_DURATION} from "./Constatnts";

class SearchFilter {
    filterMovies(movies, search = '', shortFilms = false) {
        return movies.filter((movie) => {
            if (shortFilms && movie.duration > SHORT_FILM_DURATION) {
                return false;
            }
            return movie.nameRU.toLowerCase().indexOf(search.toLowerCase()) !== -1;
        })
    }

    updateMoviesWithLiked(allMovies, likedMovies) {
        allMovies.forEach((movie) => {
            movie.isLiked = false;
            likedMovies.find((likedMovie) => {
                if (movie.id === likedMovie.movieId) {
                    movie.isLiked = true;
                    movie._id = likedMovie._id;
                    return true;
                }
                return false;
            })
        })
    }
}

const searchFilter = new SearchFilter();
export default searchFilter;
