import './SearchForm.css';

function SearchForm() {
    return (
        <form className="search-form block-wrapper">
            <input className="search-form__switch" type="checkbox" id="switch"/><label className="search-form__switch-label" htmlFor="switch">Toggle</label>
        </form>
    );
}

export default SearchForm;
