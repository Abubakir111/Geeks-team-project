import React, {useState} from "react";
import HeaderStyle from './HeaderStyle.module.css'
import Headerimagelog from '../../asserts/Heder_img/headerLog.png'
import HeaderLogo from '../../asserts/LOGO.png'
import HeaderCart from '../../asserts/Heder_img/cart.png'
import Headerphone from '../../asserts/Heder_img/phone.png'
import hederMenuGroop from '../../asserts/Heder_img/Group.svg'
import HeroMedioImg from '../../asserts/Heder_img/heroImage.png'
import HedeMenu from "./HedeMenu/HedeMenu"
import Button from "../UI/Button";
import '../../main.css'
import LogoCard from "./LogoCard";
import MobileMenu from "./MobileMenu/MobileMenu.jsx";

const Header = ({delivery, openTable, Toggles, togle, openBooking}) => {

    const [activeMobile, setActiveMobile] = useState(false);
    const activeMobileMenu = () => {
        setActiveMobile(prev => prev = true)
        document.body.style.overflow = 'hidden'
    }
    const closeMobileMenu = () => {
        setActiveMobile(prev => prev = false)
        document.body.style.overflow = ''
    }

    return (<>
        <div className={HeaderStyle.headerWrapper}>

            {activeMobile && <MobileMenu closeMobileMenu={closeMobileMenu} openDelivery={delivery} openBooking={openBooking}/>}

            <img className={HeaderStyle.headerImage} src={Headerimagelog} alt="Картинка" id='logo'/>
            <img className={HeaderStyle.headerImageMedia} src={HeroMedioImg} alt="Картинка"/>
            <div className={HeaderStyle.container}>

                <header className={HeaderStyle.header}>
                    <div className={HeaderStyle.headerMenuContain}>
                        <img className={HeaderStyle.HeaderLogoImage} src={HeaderLogo} alt="Тут логотип"/>
                        <div className={HeaderStyle.headerLogoContainer}>
                            <div className={HeaderStyle.Rectangele1}></div>
                            <div className={HeaderStyle.Rectangele2}></div>
                        </div>
                        <img className={HeaderStyle.hederMenuGroop} src={hederMenuGroop} alt="Тут логотип" onClick={activeMobileMenu}/>
                        <div className={HeaderStyle.headerNavBar}>
                            <div>
                                <a href='#'>ГЛАВНАЯ</a>
                            </div>
                            <div>
                                <a href='#menu'>МЕНЮ</a>
                            </div>
                            <div>
                                <a href='#story'>О НАС</a>
                            </div>
                            <div onClick={openTable}>
                                <a href='#'>БРОНЬ</a>
                            </div>
                            <div className={HeaderStyle.cortLince}>

                            </div>
                            <div>
                                <img src={Headerphone} alt="" className={HeaderStyle.headerphone}/>
                                <span>+999-888-76-54</span>
                                <p>Свяжитесь с нами для</p>
                                <p>бронирования</p>
                            </div>
                            <Button onClick={delivery} textButton={"Доставка"} w={157} h={47} bg={"#FF7400"}/>
                        </div>
                    </div>
                    <div className={HeaderStyle.TextContain}>
                        <p className={HeaderStyle.TextContainp1}>Добро пожаловать в</p>
                        <p className={HeaderStyle.TextContainp2}>ALEMOND</p>
                        <div className={HeaderStyle.TextContainp3Wraper}>
                            <p className={HeaderStyle.TextContainp3}>ДОМ ЛУЧШЕЙ ЕДЫ</p>
                        </div>
                        <div className={HeaderStyle.butnMenuContainer}>
                            <div className={HeaderStyle.button}>
                                <Button className={HeaderStyle.buttonDesktop}
                                        textButton={"Меню"}
                                        w={137} h={47}
                                        bg={"#FF7400"}
                                        onClick={Toggles}
                                />

                            </div>
                            {

                                togle && <HedeMenu Toggles={Toggles}/>
                            }

                        </div>

                    </div>
                    <div className={HeaderStyle.CardContainer}>
                        <LogoCard
                            title={"Магическая "}
                            titles={"Атмосфера"}
                            text={`В нашем заведении царит магическая атмосфера наполненная вкусными ароматами`}/>

                        <LogoCard
                            title={"Лучшее качество "}
                            titles={"Еды"}
                            text={`Качество нашей Еды - отменное!`}/>

                        <LogoCard
                            title={"Недорогая "}
                            titles={"Еда"}
                            text={`Стоимость нашей Еды зависит только от ее количества. Качество всегда на высоте!`}/>
                    </div>
                </header>

            </div>
        </div>
    </>)
}
export default Header;