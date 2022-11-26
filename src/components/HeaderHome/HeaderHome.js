import React from 'react';
import './HeaderHome.css';
import IMG from '../ImagesComponents/IMG.png'
import { Fragment } from 'react';

const HeaderHome = () => {
    return (
        <Fragment>
            <div className="HeaderHome">
                <div className="containerImgHeader">
                    <img src={IMG} alt=""/>
                    <div className="HeaderHomeText">
                        <h1>Chez vous, et partout ailleurs</h1>
                    </div>
                </div>
            </div>
            
        </Fragment>
    )
}

export default HeaderHome;