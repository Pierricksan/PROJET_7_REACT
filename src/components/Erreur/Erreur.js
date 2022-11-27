import React from 'react';
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import styles from './Erreur.module.css'


const Erreur = ({errorType, returnPath, returnMessage, warningMessage}) => {
    
    return (
        <Fragment>
            <div className={styles.errorPageStyle}>
                <h1 className={styles.errorServerMessage}>{errorType}</h1>
                <p className={styles.warning}>{warningMessage}</p>
                <Link className={styles.returnLinkStyle} to={returnPath}>{returnMessage}</Link>
            </div>
                
        </Fragment>
        
    )
}

export default Erreur;