import React from 'react'
import { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'



const Collapse = () => {
    return (
        <Fragment>
            <div className="">
                
                <div className="">
                    <div className="">
                        <h2>Titre de Accordion à faire</h2>
                    </div>

                    <div className="">
                        <FontAwesomeIcon icon={faChevronUp} />
                    </div>
                </div>

                <div className="">
                    <p className="">Super content</p>
                </div>
            </div>
            
        </Fragment>

    )
}

export default Collapse


