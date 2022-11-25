import React from 'react';
import './Header.css'
import LOGO from '../imagesLayout/LOGO.svg'
import {Fragment} from 'react'
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <Fragment>
            <header>
                <div>
                    <img src={LOGO} alt=""/>
                </div>
                <nav>
                    <Link to="/">Accueil</Link>
                    <Link to="/propos">A propos</Link>
                </nav>
            </header>
        </Fragment>
    )
}

export default Header