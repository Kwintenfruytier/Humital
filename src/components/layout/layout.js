import * as React from "react"
import NavBar from "../navigation/navbar"
import * as globalStyles from "../../styles/global.css"
import * as styles from "./layout.module.css"

const currentYear = new Date().getFullYear()

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div className={styles.container}>
        <p>{children}</p>
      </div>
      <footer>
        <p>©Copyright {currentYear} Humital</p>
      </footer>
    </div>
  )
}

export default Layout
