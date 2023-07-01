import './MoviesCard.css';

function MoviesCard({title, duration, imgSrc, isLiked, isRemovable}) {
    return (
        <div className="movies-card">
            <div className="movies-card__info">
                <div className="movies-card__left">
                    <h2 className="movies-card__name">{title}</h2>
                    <p className="movies-card__duration">{duration}</p>
                </div>
                <button className="movies-card__save">
                    {isRemovable ?
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="d9">
                                <rect id="back__COLOR:special-10" width="30" height="30" rx="15" fill="#F9F9F9"/>
                                <path id="icon__COLOR:icon-main" fill-rule="evenodd" clip-rule="evenodd" d="M15.0005 15.9429L17.3575 18.2999L18.4182 17.2393L16.0611 14.8822L18.3004 12.643L17.2397 11.5823L15.0005 13.8216L12.7613 11.5824L11.7007 12.6431L13.9398 14.8822L11.5829 17.2391L12.6436 18.2998L15.0005 15.9429Z" fill="black"/>
                            </g>
                        </svg>

                        :

                        isLiked ? <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="save9">
                            <rect id="tumb__COLOR:main-1" width="30" height="30" rx="15" fill="black"/>
                            <path id="icon__COLOR:invisible"
                                  d="M10 9.9C10 9.1268 10.6268 8.5 11.4 8.5H18.6C19.3732 8.5 20 9.1268 20 9.9V20.4789C20 20.9367 19.5079 21.2258 19.108 21.003L15.9734 19.2566C15.3683 18.9195 14.6317 18.9195 14.0266 19.2566L10.892 21.003C10.4921 21.2258 10 20.9367 10 20.4789V9.9Z"
                                  fill="white"/>
                        </g>
                    </svg> : <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="30" height="30" rx="15" fill="#F9F9F9"/>
                        <path d="M11.4 9H18.6C19.0971 9 19.5 9.40294 19.5 9.9V20.4789C19.5 20.5552 19.418 20.6034 19.3513 20.5662L16.2168 18.8198C15.4603 18.3984 14.5397 18.3984 13.7832 18.8198L10.6487 20.5662C10.582 20.6034 10.5 20.5552 10.5 20.4789V9.9C10.5 9.40294 10.9029 9 11.4 9Z" stroke="#E8E8E8"/>
                    </svg>
                        }
                </button>
            </div>
            <img className="movies-card__photo" src={imgSrc} alt="Фотография фильма"/>

        </div>
    );
}

export default MoviesCard;
