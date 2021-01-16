import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faCodepen } from '@fortawesome/free-brands-svg-icons'

import { useStaticQuery, graphql } from 'gatsby'

const Social = () => {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    social {
                        icon
                        link
                        title
                    }
                }
            }
        }
    `)

    const getSocialIcon = (socialIcon) => {
        switch(socialIcon) {
            case 'faGithub':
                return <FontAwesomeIcon icon={faGithub} />
            case 'faLinkedinIn':
                return <FontAwesomeIcon icon={faLinkedinIn} />
            case 'faCodepen':
                return <FontAwesomeIcon icon={faCodepen} />
            default:
                return null
        }
    }

    return (
        <ul className="list-inline">
            {
                data.site.siteMetadata.social.map((socialIcon) => (
                    <li key={socialIcon.icon} className="list-inline-item">
                        <a
                            href={socialIcon.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={socialIcon.title}
                        >
                            { getSocialIcon(socialIcon.icon) }
                        </a>
                    </li>
                ))
            }
        </ul>
        // <FontAwesomeIcon icon={faCoffee} />
    )
}

export default Social