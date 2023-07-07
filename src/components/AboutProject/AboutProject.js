import './AboutProject.css';
import BlockTitle from "../BlockTitle/BlockTitle";

function AboutProject() {
    return (
        <section className="about block-wrapper" id="about">
            <BlockTitle titleText={"О проекте"}/>
            <div className="about__items">
                <div className="about__item">
                    <h3 className="about__item-subtitle">Дипломный проект включал 5 этапов</h3>
                    <p className="about__item-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="about__item">
                    <h3 className="about__item-subtitle">На выполнение диплома ушло 5 недель</h3>
                    <p className="about__item-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <table className="about__timing">
                <tbody>
                    <tr>
                        <td className="about__column about__timing-header about__timing-header--black">1 неделя</td>
                        <td className="about__timing-header">4 недели</td>
                    </tr>
                    <tr>
                        <td className="about__column about__techs">Back-end</td>
                        <td className="about__techs">Front-end</td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
}

export default AboutProject;
