import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Head from '../components/head'
import Img from "gatsby-image"
import SEO from '../components/seo'
import aboutStyles from "../styles/about.module.scss"




const AboutPage = () => {
    const data = useStaticQuery(graphql`
        query {
            contentfulAsset(title: { eq: "Bio Pic" }) {
                title
                fluid(maxWidth: 980){
                    src
                    srcSet
                    ...GatsbyContentfulFluid
                }
            }
        }
    `)

    return (
        <div>
            <Layout>
                <SEO title="About" />
            <Head title="About"/>
            <div className={aboutStyles.parent}>
                <section className={aboutStyles.container}>
                    <div className={aboutStyles.image}>
                        <Img fluid={data.contentfulAsset.fluid} alt={data.contentfulAsset.title} />
                    </div>
                    <div className={aboutStyles.info}>
                        <h1>Hi again! My name is Kenton Scott, a fullstack developer and producer/editor in Brooklyn, NY.</h1>
                        <p>As a developer, I enjoy breaking down and solving complex problems through design, utilizing my experience in storytelling to create intuitive user-experiences.</p>
                        <br />
                        <p>My background is in network television programming, editorial, and creative. This has developed my skills in content-creation, given me insight into the inner workings of technical teams, and taught me the value of teamwork. In addition, it also allowed me to create pitch decks, develop copy for international audiences, and curate a visual taste. Over the past few years, I have become self-taught in Javascript and React, focusing on Gatsby to create websites for myself and other freelance clients.</p>
                        <br />
                        <p>In my free time, I like to <Link class={aboutStyles.link} to="/">make music</Link>, <Link class={aboutStyles.link}to="/video">create videos</Link>, and listen to history podcasts.</p>
                        <br />
                        <p>Want to reach me? Launch a flare into the sky and I'll be there as soon as I can...or <a href="mailto:kenton.scott22@gmail.com" target="_blank" rel="noreferrer" class={aboutStyles.mail}> email me!</a></p>

                    </div>
                </section>
            </div>
            </Layout>
        </div>
    )
}

export default AboutPage