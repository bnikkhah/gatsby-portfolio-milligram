import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Carousel from '../components/carousel'

import Social from '../components/social'

import { useStaticQuery, graphql } from "gatsby"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          firstName
          lastName
          description
        }
      }
    }
  `)

  const { firstName, lastName, description } = data.site.siteMetadata

  return (
    <Layout>
      <SEO title={`Home - ${firstName} ${lastName}`} />
      <section className="intro">
        <div className="container">
          <div className="row">
            <div className="column">
              <div className="text-center">
                <div style={{ maxWidth: `256px` }} className="rounded-circle mx-auto">
                  <Image />
                </div>
                <h1 className="mb-0 mt-4"><span className="first-name">{ firstName }</span> <span className="last-name">{ lastName }</span></h1>
                <h3>{ description }</h3>
                <Social />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="projects-carousel">
        <div className="container">
          <div className="row">
            <div className="column">
              <h2 className="text-center">Selected Work</h2>
              <Carousel />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
