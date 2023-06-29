import './SearchForm.css';

function SearchForm() {
    return (
        <form className="search-form block-wrapper">
            <div className="search-form__input-wrapper">
                <input className="search-form__input" placeholder="Фильм" type="text"/>
                <button className="search-form__button" type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="46 0 34 34" width="46"
                         height="36">
                        <g id="find">
                            <g id="find_2">
                                <rect id="back__COLOR:main-2" x="46" width="34" height="34" rx="17" fill="black"/>
                                <g id="icon">
                                    <path id="text__COLOR:invisible" fill-rule="evenodd" clip-rule="evenodd" d="M64.7927 18.2638C63.3608 19.6957 61.0391 19.6957 59.6072 18.2638C58.1753 16.8319 58.1753 14.5103 59.6072 13.0783C61.0391 11.6464 63.3608 11.6464 64.7927 13.0783C66.2246 14.5103 66.2246 16.8319 64.7927 18.2638ZM65.2331 19.6468C63.2728 21.1462 60.4572 20.9994 58.6644 19.2066C56.7118 17.254 56.7118 14.0882 58.6644 12.1355C60.617 10.1829 63.7829 10.1829 65.7355 12.1355C67.5282 13.9283 67.675 16.7437 66.1758 18.7039L69.7425 22.2706L68.7997 23.2134L65.2331 19.6468Z" fill="white"/>
                                </g>
                            </g>
                        </g>
                    </svg>
                </button>
            </div>
            <div className="search-form__toggle">
                <input className="search-form__switch" type="checkbox" id="switch"/><label className="search-form__switch-label" htmlFor="switch"></label>
                <span className="search-form__switch-text">Короткометражки</span>
            </div>
        </form>
    );
}

export default SearchForm;
