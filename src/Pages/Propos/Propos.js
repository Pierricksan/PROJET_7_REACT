import React from 'react';
import { Fragment } from 'react'
import Banner from '../../components/Banner/Banner';
import Collapse from '../../components/Collapse/Collapse';
import imageAboutUs from '../../images/ImagesComponents/HeaderBackgroundAboutUs.png'


const Propos = () => {
    return (
        <Fragment>
            <Banner
            imageLayout={imageAboutUs}
            />
            <Collapse/>
           
        </Fragment>   
    )
}

export default Propos