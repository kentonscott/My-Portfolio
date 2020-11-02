import React from "react"

import Layout from "../components/layout"
import Banner from "../components/banner"
import Head from '../components/head'
import Img from "gatsby-image"
import Project from "../components/project"

const IndexPage = () => {
  return (
    <Layout>      
      <Head title="Home" />
      <Banner />
      <Project />
    </Layout>
  )
}

export default IndexPage
