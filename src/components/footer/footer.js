import * as React from "react"
import * as styles from "./footer.module.css"

import { Link } from "gatsby"

const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <footer className={styles.flexFooter}>
      <ul className={styles.footerTopList}>
        <li>
          <h4 className={styles.footerTopHeader}>
            <Link to="/home" className={styles.footerLogo}>
              Humital
            </Link>
          </h4>
        </li>
      </ul>

      <ul className={styles.footerTopList}>
        <li>
          <h4 className={styles.footerTopHeader}>Over Humital</h4>
        </li>
        <li>
          <Link to="/about" className={styles.footerLinks}>
            leer ons kennen
          </Link>
        </li>
      </ul>

      <ul className={styles.footerTopList}>
        <li>
          <h4 className={styles.footerTopHeader}>Help me</h4>
        </li>
        <li>
          <Link to="/contact" className={styles.footerLinks}>
            Contacteer ons
          </Link>
        </li>
        <li>
          <Link
            to="https://calendly.com/grust"
            target="_blank"
            className={styles.footerLinks}
          >
            Maak een afspraak
          </Link>
        </li>
      </ul>

      <section className={styles.footerBottomSection}>
        <div className={styles.footerBottomWrapper}>
          <p>©Copyright {currentYear} Humital - Made with ❤️</p>
          <span className={styles.footerBottomRights}>
            - All Rights Reserved -
          </span>
        </div>
        <div className={styles.footerBottomWrapper}>
          <Link to="/sitemap">Sitemap</Link>|
          <Link to="/privacy">Privacy Policy</Link>
        </div>
      </section>
    </footer>
  )
}

export default Footer
