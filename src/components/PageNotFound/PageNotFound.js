import './PageNotFound.css';
import {useNavigate} from "react-router-dom";

function PageNotFound() {
    const navigate = useNavigate();
    return (
            <main className="page-not-found">
                <div className="page-not-found__inner">
                    <h1 className="page-not-found__title">404</h1>
                    <p className="page-not-found__text">Страница не найдена</p>
                </div>
                <span onClick={() => navigate(-2)} className="block-link">Назад</span>
            </main>
    );
}

export default PageNotFound;
