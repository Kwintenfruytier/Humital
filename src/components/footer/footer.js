import * as React from "react"
import * as styles from "./footer.module.css"

const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <div>
      <footer className={styles.footer}>
        <p>©Copyright {currentYear} Humital - Made with ❤️</p>
      </footer>
    </div>
  )
}

export default Footer
