import './Main.css';
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Promo from "../Promo/Promo";

function Main({loggedIn}) {
    return (
    <>
        <Header isLogged={loggedIn} isMain={true}/>
        <main>
            <Promo/>
            <AboutProject/>
            <Techs/>
            <AboutMe/>
            <Portfolio/>
        </main>
        <Footer/>
    </>
    );
}

export default Main;
