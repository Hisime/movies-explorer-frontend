import './PageNotFound.css';

function PageNotFound() {
    return (
            <main className="page-not-found">
                <div className="page-not-found__inner">
                    <h1 className="page-not-found__title">404</h1>
                    <p className="page-not-found__text">Страница не найдена</p>
                </div>
                <a href="/" className="block-link">Назад</a>
            </main>
    );
}

export default PageNotFound;
