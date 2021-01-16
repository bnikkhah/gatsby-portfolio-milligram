import React from 'react'

import StickyFooter from '../components/sticky-footer'

const Footer = () => {

    return (
        <footer>
            <div className="container" style={{ marginTop: "6rem" }}>
                <div className="row">
                    <div className="column text-center">
                        <p>&copy; { new Date().getFullYear() } Behnam Nikkhah. Site made possible using <a href="https://www.gatsbyjs.com" target="_blank" rel="noopener noreferrer">Gatsby</a>, <a href="https://milligram.io" target="_blank" rel="noopener noreferrer">Milligram</a>, and <a href="https://www.contentful.com" target="_blank" rel="noopener noreferrer">Contentful</a>.</p>
                    </div>
                </div>
            </div>
            <StickyFooter />
        </footer>

    )
}

export default Footer