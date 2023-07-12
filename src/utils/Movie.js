import moviesApi from "./MoviesApi";

export class Movie {
    constructor(props) {
        this.country = props.country;
        this.director = props.director;
        this.duration = props.duration;
        this.year = props.year;
        this.description = props.description;
        this.image = `${moviesApi.baseUrl}/${props.image.url}`;
        this.trailerLink = props.trailerLink;
        this.thumbnail = `${moviesApi.baseUrl}/${props.image?.formats?.thumbnail?.url}`;
        this.movieId = props.id;
        this.nameRU = props.nameRU;
        this.nameEN = props.nameEN;
    }
}
