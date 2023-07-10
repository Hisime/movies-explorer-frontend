import './Footer.css';
import {NavLink} from "react-router-dom";

function Footer() {
    return (
       <footer className="footer block-wrapper">
           <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
           <div className="footer__bottom">
               <p className="footer__date">© 2020</p>
               <ul className="footer__links">
                   <li><NavLink className="footer__link" to="https://practicum.yandex.ru/" target="_blank">Яндекс.Практикум</NavLink></li>
                   <li><NavLink className="footer__link" to="https://github.com/hisime" target="_blank">Github</NavLink></li>
               </ul>
           </div>
       </footer>
    );
}

export default Footer;
