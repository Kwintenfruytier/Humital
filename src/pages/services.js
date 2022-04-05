import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import * as styles from "../styles/services.module.css"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"

const Services = () => {
  return (
    <Layout>
      <Seo title="Diensten" />

      <div className={styles.containerButtons}>
        <button
          className={styles.brainfoodBtn}
          onClick={() => {
            console.log("Brainfood button active")
          }}
        >
          <StaticImage
            src="../images/brainfood.png"
            width={250}
            className={styles.brainfoodImage}
            alt="brainfood"
          ></StaticImage>
        </button>

        <button
          className={styles.journeyBtn}
          onClick={() => {
            console.log("Journey Button active")
          }}
        >
          <StaticImage
            src="../images/journey.png"
            width={250}
            className={styles.journeyImage}
            alt="journey"
          ></StaticImage>
        </button>

        <button
          className={styles.projectBtn}
          onClick={() => {
            console.log("Project Button active")
          }}
        >
          <StaticImage
            src="../images/project.png"
            width={250}
            className={styles.projectImage}
            alt="project"
          ></StaticImage>
        </button>

        <button
          className={styles.speakerBtn}
          onClick={() => {
            console.log("Speaker Button active")
          }}
        >
          <StaticImage
            src="../images/speaker.png"
            width={250}
            className={styles.speakerImage}
            alt="speaker"
          ></StaticImage>
        </button>

        <button
          className={styles.visualsBtn}
          onClick={() => {
            console.log("Visuals Button active")
          }}
        >
          <StaticImage
            src="../images/visuals.png"
            width={250}
            className={styles.visualsImage}
            alt="visuals"
          ></StaticImage>
        </button>
      </div>
    </Layout>
  )
}
export default Services
