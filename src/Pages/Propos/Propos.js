import React from 'react';
import { Fragment } from 'react'
import HeaderPage from '../../components/HeaderPage/HeaderPage'
import imageAboutUs from '../../images/ImagesComponents/HeaderBackgroundAboutUs.png'

const Propos = () => {
    return (
        <Fragment>
            <HeaderPage
            imageLayout={imageAboutUs}
            />
        </Fragment>   
    )
}

export default Propos