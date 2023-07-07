import './Footer.css';

function Footer() {
    return (
       <footer className="footer block-wrapper">
           <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
           <div className="footer__bottom">
               <p className="footer__date">© 2020</p>
               <ul className="footer__links">
                   <li><a className="footer__link" href="https://practicum.yandex.ru/" target="_blank">Яндекс.Практикум</a></li>
                   <li><a className="footer__link" href="https://github.com/hisime" target="_blank">Github</a></li>
               </ul>
           </div>
       </footer>
    );
}

export default Footer;
