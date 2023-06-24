import './Footer.css';

function Footer() {
    return (
       <footer className="footer block-wrapper">
           <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
           <div className="footer__bottom">
               <p className="footer__date">© 2020</p>
               <p className="footer__about">Яндекс.Практикум</p>
               <a className="footer__link" href="https://github.com/hisime" target="_blank">Github</a>
           </div>
       </footer>
    );
}

export default Footer;
