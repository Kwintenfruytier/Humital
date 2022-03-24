import * as React from "react"
import NavBar from "../navigation/navbar"
import "../../styles/global.css"
import * as styles from "./layout.module.css"
import Footer from "../footer/footer"

const Layout = ({ children }) => {
  return (
    <>
      <div className={styles.flex}>
        <NavBar />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
