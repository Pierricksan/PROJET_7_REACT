import React from 'react';
import { Fragment } from 'react'
import './Thumb.css'

const Thumb = ({sourceImg, children}) => {
    return (
        <Fragment>
            <div className="containerThumb">
                <img src={sourceImg} alt=""/>
                <div className="titleLocation">
                    <h2>{children}</h2>
                </div>
            </div>
        </Fragment>
    )
}

export default Thumb
