import * as React from "react"
import * as styles from "./footer.module.css"

const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <div>
      <footer>
        <p>Made with ❤️</p>
        <p>©Copyright {currentYear} Humital</p>
      </footer>
    </div>
  )
}

export default Footer
