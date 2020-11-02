import React from 'react'

import Navbar from "./NavBar/Navbar"
// import Header from "../components/header"
import Footer from "../components/footer"
import "../styles/index.scss"
import layoutStyles from "../styles/layout.module.scss"


const Layout = (props) => {
  return (
    <div className={layoutStyles.container}>
      <Navbar />
      {/* <Header /> */}
      <div className={layoutStyles.content}>
      <main>{props.children}</main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout