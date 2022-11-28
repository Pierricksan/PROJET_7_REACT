import React from "react";
import {Fragment} from "react"
import styles from './Home.module.css'
import HeaderPage from '../../components/HeaderPage/HeaderPage'
import Thumb from '../../components/Thumb/Thumb'


const Home = () => {
    return (
        <Fragment>
            <HeaderPage>
                Chez vous, partout et ailleurs
            </HeaderPage>
            <div className={styles.flexHome}>
                <div className={styles.containerHomeLocations}>
                    <Thumb/>
                    <Thumb/>
                    <Thumb/>
                    <Thumb/>
                    <Thumb/>
                    <Thumb/>
                </div>
            </div>
        </Fragment>
    )
}

export default Home;