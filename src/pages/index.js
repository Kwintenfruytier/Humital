import { Link } from "gatsby"

import * as React from "react"
import * as styles from "../styles/index.module.css"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />

      <section className={styles.indexMain}>
        <div className={styles.imageWrapper}>
          <div className={styles.heroImage}></div>
        </div>

        <div className={styles.ctaMain}>
          <h1 className={styles.ctaTitle}>
            Working digital
            <span classname={styles.accentedMain}> empowers</span> human
            capital.
          </h1>
          <span className={styles.ctaSubtitle}>
            Humital richt zich op het begrijpen en het begeleiden van groeiende
            entrepreneurs die een strategische humitale transformatie willen
            realiseren.
          </span>
          <Link to="/contact" className={styles.ctaButton}>
            contacteer ons
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
