import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import projectStyles from "../styles/projects.module.scss"
import Img from "gatsby-image"


const Project = () => {
    const data = useStaticQuery(graphql`
      query {
        allContentfulProject(sort: { fields: publishedDate, order: DESC } ) {
          edges {
            node {
              title
              slug
              logline
              stackList
              publishedDate (formatString:"YYYY")
              code
              liveLink
              image {
                title
                fluid(maxWidth:450) {
                  sizes
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                  ...GatsbyContentfulFluid
                }
              }
            }
          }
        }
      }
    `)
  
    console.log(data)
  
    return (
        <section>
        <ol className={projectStyles.posts}>
          {data.allContentfulProject.edges.map((edge) => {
            return (
                <li className={projectStyles.post}>
                    <div className={projectStyles.previewImage}>
                      <Img
                        fluid={edge.node.image.fluid}
                        alt={edge.node.image.title}
                      />
                    </div>
                    <div className={projectStyles.info}>
                      <p>{edge.node.publishedDate}</p>
                      <div className={projectStyles.headline}>
                        <h2>{edge.node.title}: <h3>{edge.node.logline}</h3></h2>
                      </div>
                      <p>{edge.node.stackList}</p>
                      <div className={projectStyles.buttons}>
                        <Link to={`${edge.node.code}`} class={projectStyles.button}>Code</Link>
                        <div class={projectStyles.divider}></div>
                        <Link to={`${edge.node.liveLink}`} class={projectStyles.button}>Live</Link>
                      </div>
                    </div>
  
                </li>
            )
          })}
        </ol>
        </section>
    )
  }
  
  export default Project
  