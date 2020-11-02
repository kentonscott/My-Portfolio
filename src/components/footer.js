import React from 'react'
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa"


import footerStyles from "../styles/footer.module.scss"

const Footer = () => {
    return (
        <footer className={footerStyles.footer}>
            <a href="mailto:kenton.scott22@gmail.com" target="_blank" class={footerStyles.mail}>kenton.scott22@gmail.com</a>
            <div class={footerStyles.icons}>
              <a href="https://www.linkedin.com/in/kenton-scott/" class={footerStyles.icon}><FaLinkedinIn /></a>
              <a href="https://github.com/kentonscott" class={footerStyles.icon}><FaGithub /></a>
              <a href="https://www.instagram.com/kentonscott/" class={footerStyles.icon}><FaInstagram /></a>
              <a href="https://twitter.com/kentonscott" class={footerStyles.icon}><FaTwitter /></a>
            </div>
        </footer>
    )
}

export default Footer