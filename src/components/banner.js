import React from "react"
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa"


import bannerStyles from "../styles/banner.module.scss"



const Banner = () => {
    return (
        <main class={bannerStyles.container}>
            <div className={bannerStyles.intro}>
                <h2>Hi! I'm Kenton, an NYC-based full stack developer and producer/editor. I'm passionate about creating digital experiences that are fast and intuitive.</h2>
            </div>
            <div class={bannerStyles.iconrow}>
                <a href="https://www.linkedin.com/in/kenton-scott/" class={bannerStyles.icons}><FaLinkedinIn className={bannerStyles.faIcon} /></a>
                <div class={bannerStyles.divider} />
                <a href="https://github.com/kentonscott" class={bannerStyles.icons}><FaGithub className={bannerStyles.faIcon} /></a>
                <div class={bannerStyles.divider} />
                <a href="https://www.instagram.com/kentonscott/" class={bannerStyles.icons}><FaInstagram className={bannerStyles.faIcon} /></a>
                <div class={bannerStyles.divider} />
                <a href="https://twitter.com/kentonscott" class={bannerStyles.icons}><FaTwitter className={bannerStyles.faIcon}/></a>
            </div>
        </main>
    )
}

export default Banner