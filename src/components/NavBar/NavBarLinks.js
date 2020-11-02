import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const activeClassName = 'active';

const NavItem = styled(Link).attrs({
  activeClassName: activeClassName,
})`

  &.${activeClassName} {
    color: #060a18;
  }

  display: flex;
  text-decoration: none;
  margin: 0;
  color: #999999;
  font-size: .95rem;
  margin-right: 1.3rem;

  :hover {
    color: #555b72;
  }


  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`

const NavbarLinks = () => {
  return (
    <>
      <NavItem to="/">work</NavItem>
      <NavItem to="/video">video</NavItem>
      <NavItem to="/blog">blog</NavItem>
      <NavItem to="/about">about</NavItem>
    </>
  )
}

export default NavbarLinks