import * as React from "react"
import { Link } from "gatsby"
import {
  companyName,
  navContainer,
  navBar,
  navLogo,
  ul,
  navigation,
} from "./navbar.module.css"

const NavBar = () => {
  return (
    <nav className={navContainer}>
      <div className={companyName}>
        <Link className={navLogo} to="/">
          Humital.
        </Link>
      </div>
      <div className={navigation}>
        <ul className={ul}>
          <li>
            <Link className={navBar} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={navBar} to="/About">
              Over Ons
            </Link>
          </li>
          <li>
            <Link className={navBar} to="/">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
