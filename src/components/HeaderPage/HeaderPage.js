import React from 'react';
import './HeaderPage.css';
import IMG from '../ImagesComponents/IMG.png'
import { Fragment } from 'react';

const HeaderPage = ({children}) => {
    return (
        <Fragment>
            <div className="HeaderHome">
                <div className="containerImgHeader">
                    <img src={IMG} alt=""/>
                    <div className="HeaderHomeText">
                        <h1>{children}</h1>
                    </div>
                </div>
            </div>
            
        </Fragment>
    )
}

export default HeaderPage;