export class MoviesApi {
    constructor({baseUrl, headers}) {
        this.baseUrl = baseUrl;
        this.headers = headers;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        if (res.length) {
            return res;
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    _request(url, options) {
        return fetch(url, options).then(this._checkResponse)
    }

    getMovies() {
        return this._request(`${this.baseUrl}/beatfilm-movies`, {
            headers: this.headers,
            method: 'GET',
        }).then(this._checkResponse);
    }
}

const moviesApi = new MoviesApi({
    baseUrl: 'https://api.nomoreparties.co',
    headers: {
        'Content-Type': 'application/json',
    },
});
export default moviesApi;
