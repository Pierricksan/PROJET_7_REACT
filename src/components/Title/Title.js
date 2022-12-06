import './Title.css'
import { Fragment } from 'react'

const Title = ({mainTitle, secondaryTitle}) => {
    
    return (
        <Fragment>
            <h1>{mainTitle}</h1>
            <h2>{secondaryTitle}</h2>
        </Fragment>
    )
}

export default Title