/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Footer from './footer'
import "./layout.scss"

import Particles from 'react-particles-js'

const Layout = ({ children }) => {

  return (
    <main>
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}      
      <Particles
        params={{
          "particles": {
              "number": {
                  "value": 20
              },
              "size": {
                  "value": 3
              },
              "line_linked": {
                "color": "#9b4dca"
              },
              "color": "#9b4dca",
          },
          "interactivity": {
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                  "enable": true,
                  "mode": "push"
                }
            }
          }
        }} />
        {children}
        <Footer />
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
