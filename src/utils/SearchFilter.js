import Storage from "./Storage";

class SearchFilter {
    filterMovies(movies) {
        const search = Storage.get('search');
        const shortFilms = Storage.get('shortFilms');
        return movies.filter((movie) => {
            if (shortFilms && movie.duration > 40) {
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
