require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    firstName: `Behnam`,
    lastName: `Nikkhah`,
    description: `Front-End Developer`,
    author: `Behnam Nikkhah`,
    telephone: '4037149747',
    social: [
      {
        title: 'GitHub',
        icon: 'faGithub',
        link: 'https://github.com/bnikkhah'
      },
      {
        title: 'LinkedIn',
        icon: 'faLinkedinIn',
        link: 'https://www.linkedin.com/in/bnikkhah/'
      },
      {
        title: 'CodePen',
        icon: 'faCodepen',
        link: 'https://codepen.io/NeroSonic'
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-recaptcha`,
      options: {
         async: true,
         defer: false,
         args: `?onload=onloadCallback&render=explicit`,
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
