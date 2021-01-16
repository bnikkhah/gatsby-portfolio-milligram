import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

import { useStaticQuery, graphql } from 'gatsby'

const StickyFooter = () => {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    telephone
                }
            }
        }
  `)

    return (
        <a href={`tel:${data.site.siteMetadata.telephone}`}>
            <div className="stickyfooter pt-3 pb-3">
                <div className="row text-center">
                    <div className="column">
                        <FontAwesomeIcon icon={faPhone} style={{ color: '#ffffff', fontSize: '24px' }} />
                        <p className="mb-0 text-white">Call me</p>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default StickyFooter