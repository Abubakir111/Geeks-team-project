import React from "react"
import Burger from '../../asserts/img-our-menu/burger-i.jpg'
import OurMenuStyle from './OurMenuStyle.module.css'


const OurMenu = () => {
    return (<>
    <div className="menu_title">
        Наше меню
    </div>

        <div className="menu_items">

            <div className="menu_item">
                <div className="menu_image">
                    <img className={OurMenuStyle.OurMenuImage} src={Burger} alt="there burger2" />
                </div>

                <div className="menu_text">
                    Гамбургер макси
                </div>

                <div className="menu_subtext">
                    Максимально толстый <br/> слой мяса
                </div>

                <div className="menu_button">
                    <a href="#" className="menu_btn">ЗАКАЗАТЬ</a>
                </div>

                <div className="menu_item">
                    <img className={OurMenuStyle.OurMenuImage} src={Burger} alt="there burger2" />
                </div>

                <div className="menu_text">
                    Гамбургер макси
                </div>

                <div className="menu_subtext">
                    Максимально толстый <br/> слой мяса
                </div>

                <div className="menu_button">
                    <a href="#" className="menu_btn">ЗАКАЗАТЬ</a>
                </div>

                <div className="menu_item">
                    <img className={OurMenuStyle.OurMenuImage} src={Burger} alt="there burger2" />
                </div>
            </div>
        </div>

    </>)
}
export default OurMenu
