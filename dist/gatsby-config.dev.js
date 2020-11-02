"use strict";

module.exports = {
  siteMetadata: {
    title: 'Full-Stack Bootcamp',
    author: 'Kenton Scott'
  },
  plugins: ['gatsby-plugin-react-helmet', {
    resolve: 'gatsby-source-contentful',
    options: {
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
    }
  }, {
    resolve: "gatsby-remark-embed-video",
    options: {
      width: 800,
      ratio: 1.77,
      height: 400,
      related: false,
      noIframeBorder: true
    }
  }, 'gatsby-plugin-sass', {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'src',
      path: "".concat(__dirname, "/src/")
    }
  }, 'gatsby-plugin-sharp', {
    resolve: 'gatsby-transformer-remark',
    options: {
      plugins: ['gatsby-remark-relative-images', {
        resolve: 'gatsby-remark-images',
        options: {
          maxWidth: 750,
          linkImagesToOriginal: false
        }
      }]
    }
  }]
};