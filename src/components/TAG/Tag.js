import './Tag.css';
import {Fragment} from 'react'


const Tag = ({children}) => {
    return (
        <Fragment>
<div className="containerTag">
    <p>{children}</p>
</div>
        </Fragment>
    )
}

export default Tag