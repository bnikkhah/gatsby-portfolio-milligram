import React from 'react'

import Slider from 'react-slick'

import { useStaticQuery, graphql } from 'gatsby'

import BackgroundImage from 'gatsby-background-image'

const Carousel = () => {

    const data = useStaticQuery(graphql`
        query CarouselData {
            allContentfulProject {
                edges {
                    node {
                        title
                        id
                        link
                        thumbnail {
                            fluid(quality: 100) {
                                ...GatsbyContentfulFluid
                            }
                        }
                    }
                }
            }
        }
    `)

    const carouselSettings = {
        dots: true,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 6000,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    return (

        <Slider {...carouselSettings} className="row">
            {
                data.allContentfulProject.edges.map((project) => {

                    const { id, thumbnail, title, link } = project.node 

                    return (
                        <div className="column" key={id}>
                            <a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={title}
                            >
                                <div className="item-wrapper">
                                    <BackgroundImage
                                        Tag="div"
                                        className="img-wrapper"
                                        fluid={thumbnail.fluid}
                                        style={{ minHeight: 100 }}
                                    />
                                    <div className="text-center mt-4">
                                        <button className="button button-outline">Visit { title }</button>
                                    </div>
                                </div>
                            </a>
                        </div>
                    )
                })
            }
        </Slider>
    )
}

export default Carousel