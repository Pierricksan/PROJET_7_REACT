import React from 'react';
import { Fragment } from 'react'
import Banner from '../../components/Banner/Banner';
import imageAboutUs from '../../images/ImagesComponents/HeaderBackgroundAboutUs.png'

const Propos = () => {
    return (
        <Fragment>
            <Banner
            imageLayout={imageAboutUs}
            />
        </Fragment>   
    )
}

export default Propos