import React, { useImperativeHandle, useRef } from "react"
import { Link } from "gatsby"
import styles from "../styles/menu.module.scss"


class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
        }
    }

    render() {
        return (
            <div
            role="button"
            tabIndex="0"
            className={`${styles.menu} ${this.state.open ? `${styles.open}` : ""}`}
            onClick={() => this.close()}
            onKeyDown={() => this.close()}
          >
            <Link to="/"><h1>Home</h1></Link>
            <Link to="/video"><h1>Video</h1></Link>
            <Link to="/blog"><h1>Blog</h1></Link>
            <Link to="/about"><h1>About</h1></Link>
          </div>
        )
    }

    close() {
        this.setState({ open: false })
    }

    open() {
        this.setState({ open: true })
    }
}

export default React.forwardRef((props, ref) => {
    const menuRef = useRef()
  
    useImperativeHandle(ref, () => ({
      open() {
        menuRef.current.open()
      },
    }))
  
    return <Menu ref={menuRef} {...props} />
  })