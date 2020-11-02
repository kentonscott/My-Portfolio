import React, { useState, useCallback } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { HamburgerSqueeze } from 'react-animated-burgers'
import Menu from './menu'

import headerStyles from "../styles/header.module.scss"

const Header = () => {
  const [navOpen, setNavOpen] = useState(false)

  const [isActive, setIsActive] = useState(false)

  const toggleButton = useCallback(
    () => setIsActive(prevState => !prevState),
    [],
  )

  return (
    <div className={headerStyles.container}>
      <div>
          <Link className={headerStyles.logo} to="/">KS</Link>
      </div>
      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">work</Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/video">video</Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">blog</Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">about</Link>
          </li>
        </ul>
          <HamburgerSqueeze
              className={headerStyles.burger}
            buttonColor="white"
            barColor="#333333"
            {...{ isActive, toggleButton }}
          />
      </nav>
    </div>

  )
}



export default Header
