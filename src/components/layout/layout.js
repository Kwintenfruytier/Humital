import * as React from "react"
import NavBar from "../navigation/navbar"
import { layout } from "../../styles/global.css"
import { content } from "./layout.module.css"

const currentYear = new Date().getFullYear()

const Layout = ({ children }) => {
  return (
    <div className={layout}>
      <NavBar />
      <div className={content}>{children}</div>
      <footer>
        <p>©Copyright {currentYear} Humital</p>
      </footer>
    </div>
  )
}

export default Layout
