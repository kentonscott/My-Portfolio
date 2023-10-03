import React from 'react'

import Navbar from "../components/NavBar/Navbar"
import Footer from "../components/footer"
import "../styles/index.scss"
import layoutStyles from "../styles/layout.module.scss"


const Layout = (props) => {
  return (
    <div className={layoutStyles.container}>
      <Navbar />
      <div className={layoutStyles.content}>
      <main>{props.children}</main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout