import React, { Fragment } from 'react';
import LOGO from '../imagesLayout/LOGO.svg'

const Footer = () => {
    return (
        <Fragment>
            <div>
                <div>
                <img src={LOGO} alt="Logo de l'entreprise KASA"/>
                </div>
                <div>
                    <p>© 2020 Kasa. All rights reserved</p>
                </div>
            
            </div>
            
        </Fragment>
    )
}

export default Footer;