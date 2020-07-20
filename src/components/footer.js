import React from 'react'
import { graphyql, useStaticQuery } from 'gatsby'

import footerStyles from "../styles/footer.module.scss"

const Footer = () => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

    return (
        <footer className={footerStyles.footer}>
            <p>© {data.site.siteMetadata.author} 2020</p>
        </footer>
    )
}

export default Footer