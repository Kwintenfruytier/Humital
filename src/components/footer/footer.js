import * as React from "react"
import "./footer.module.css"

const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <footer>
      <p>©Copyright {currentYear} Humital - Made with ❤️</p>
    </footer>
  )
}

export default Footer
