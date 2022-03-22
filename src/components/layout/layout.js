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
        <div className={styles.container}>
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Layout
