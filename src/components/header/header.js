import { useState } from 'react'

import './header.scss'

import menu from './../../assets/images/menu.svg'
import cross from './../../assets/images/cross.svg'


const Header = () => {
    const [menuActive, setMenuActive] = useState(true)

    return (
        <>
            <div className={menuActive ? 'header active' : 'header'}>
                <div className="header__nav">
                    <div className="header__nav-icon">
                        Atelier.
                    </div>
                    <div className="header__nav-text">
                        <a href='/'>
                            Overview
                        </a>
                        <a href='/'>
                            Pages
                        </a>
                        <a href='/'>
                            Portfolio
                        </a>
                        <a href='/'>
                            Template
                        </a>
                        <a href='/'>
                            Contact
                        </a>
                    </div>
                </div>

                <a href='/' className="header__btn">
                    Buy Template
                </a>
            </div>
            <div className="header__menuBtn" onClick={() => setMenuActive(!menuActive)}>
                <img src={menuActive ? cross : menu} alt="" />
            </div>
        </>
    )
}


export default Header