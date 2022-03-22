import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./navbar.module.css"

const NavBar = () => {
  return (
    <div>
      <header>
        <h1 className={styles.logo}>
          <Link to="/">Humital.</Link>
        </h1>
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
