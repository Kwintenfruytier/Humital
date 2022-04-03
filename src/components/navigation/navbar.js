import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./navbar.module.css"
import { StaticImage } from "gatsby-plugin-image"

const NavBar = () => {
  return (
    <div>
      <header>
        <Link to="/" className={styles.logo}>
          <StaticImage
            src="../../images/logo.png"
            alt="logo"
            width={40}
          ></StaticImage>
          <div className={styles.logoName}>Humital</div>
        </Link>

        <input type="checkbox" id="navToggle" className={styles.navToggle} />

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">Over Ons</Link>
            </li>
            <li>
              <Link to="/services">Diensten</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <label for="navToggle" className={styles.navToggleLabel}>
          <span></span>
        </label>
      </header>
    </div>
  )
}

export default NavBar
