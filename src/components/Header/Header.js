import './Header.css';

function Header({isLogged}) {
    return (
        <header className={`header ${isLogged ? 'header--logged' : ''}`}>
            {isLogged ? <div>kopiten</div> : <div>jeba</div>}
        </header>
    );
}

export default Header;
