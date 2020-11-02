module.exports = {
  siteMetadata: {
      title: 'Kenton Scott Portfolio',
      author: 'Kenton Scott'
  },
  plugins: [
      `gatsby-plugin-styled-components`,
      'gatsby-plugin-react-helmet',
      {
        resolve: `gatsby-plugin-prefetch-google-fonts`,
        options: {
          fonts: [
            {
              family: `Heebo`,
              variants: [`400`, `700`],
            },
            {
              family: `Open Sans`,
              variants: [`400`, `700`]
            },
          ],
        },
      },
      {
          resolve: 'gatsby-source-contentful',
          options: {
              spaceId: process.env.CONTENTFUL_SPACE_ID,
              accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
          }
      },
      {
            resolve: "gatsby-remark-embed-video",
            options: {
                width: 800,
                ratio: 1.77, 
                height: 400, 
                related: false,
                noIframeBorder: true
            },
        },
      'gatsby-plugin-sass',
      {
          resolve: 'gatsby-source-filesystem',
          options: {
              name: 'src',
              path: `${__dirname}/src/`
          }
      },
      'gatsby-plugin-sharp',
      {
          resolve: 'gatsby-transformer-remark',
          options: {
              plugins: [
                  'gatsby-remark-relative-images',
                  {
                      resolve: 'gatsby-remark-images',
                      options: {
                          maxWidth: 750,
                          linkImagesToOriginal: false
                      }
                  }
              ]
          }
      }
  ]
}