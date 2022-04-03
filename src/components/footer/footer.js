import * as React from "react"
import * as styles from "./footer.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faMobileScreen,
  faEnvelopeOpenText,
} from "@fortawesome/free-solid-svg-icons"

const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <footer>
      <p>
        <FontAwesomeIcon className={styles.icon} icon={faMobileScreen} />
        Jan Fruytier - 0472/37 57 83
      </p>
      <p>
        <FontAwesomeIcon className={styles.icon} icon={faMobileScreen} />
        Domien De Rycke - 0472/33 30 95
      </p>
      <p>
        <FontAwesomeIcon className={styles.icon} icon={faEnvelopeOpenText} />
        info@humital.be
      </p>
      <p>©Copyright {currentYear} Humital - Made with ❤️</p>
    </footer>
  )
}

export default Footer
