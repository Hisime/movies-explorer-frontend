
export class MainApi {
    constructor({baseUrl, headers}) {
        this.baseUrl = baseUrl;
        this.headers = headers;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.url.includes('signout') ? Promise.resolve() : res.json();
        }
        if (res.json) {
            return res.json().then((res) => Promise.reject(res.message))
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    _request(url, options) {
        return fetch(url, {...options, credentials: "include"}).then(this._checkResponse)
    }

    getMovies() {
        return this._request(`${this.baseUrl}/movies`, {
            headers: this.headers,
            method: 'GET',
        });
    }

    addMovie(movie) {
        return this._request(`${this.baseUrl}/movies`, {
            headers: this.headers,
            method: 'POST',
            body: JSON.stringify(movie),
        });
    }

    removeMovie(movieId) {
        return this._request(`${this.baseUrl}/movies/${movieId}`, {
            headers: this.headers,
            method: 'DELETE',
        });
    }

    getUserInfo() {
        return this._request(`${this.baseUrl}/users/me`, {
            headers: this.headers
        });
    }

    updateUser(email, name) {
        return this._request(`${this.baseUrl}/users/me`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({email, name}),
        })
    }

    authorize(email, password) {
        return this._request(`${this.baseUrl}/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({email, password}),
        })
    };

    register(email, password, name) {
        return this._request(`${this.baseUrl}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password, name}),
        })
    };

    logout() {
        return this._request(`${this.baseUrl}/signout`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        })
    };
}

const mainApi = new MainApi({
    baseUrl: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json',
    },
});
export default mainApi;

