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
            console.log(
              "Brainfood - Wij denken heel graag met je mee. Ben je op zoek naar een sparring partner om jouw idee te pitchen, en het verder te laten evolueren? Of heb je nood aan advies en ondersteuning? Meer weten over adviserende verkoop?"
            )
          }}
        >
          <details>
            <summary>
              <StaticImage
                src="../images/brainfood.png"
                width={250}
                className={styles.brainfoodImage}
                alt="brainfood"
              ></StaticImage>
            </summary>
            <p className={styles.brainfoodTxt}>
              <span>Brainfood</span> Wij denken heel graag met je mee. Ben je op
              zoek naar een sparring partner om jouw idee te pitchen, en het
              verder te laten evolueren? Of heb je nood aan advies en
              ondersteuning? Meer weten over adviserende verkoop?
            </p>
          </details>
        </button>

        <button
          className={styles.journeyBtn}
          onClick={() => {
            console.log(
              "Journey - Een realiseerbaar traject op maat van je organisatie. Direct implementeerbaar, met begeleiding en opvolging. Hierbij streven we naar voortdurende progressie van het team en van de productiviteit. Knowlegde transfer zal centraal staan."
            )
          }}
        >
          <details>
            <summary>
              <StaticImage
                src="../images/journey.png"
                width={250}
                className={styles.journeyImage}
                alt="journey"
              ></StaticImage>
            </summary>
            <p className={styles.journeyTxt}>
              <span>Journey</span> Een realiseerbaar traject op maat van je
              organisatie. Direct implementeerbaar, met begeleiding en
              opvolging. Hierbij streven we naar voortdurende progressie van het
              team en van de productiviteit. Knowlegde transfer zal centraal
              staan.
            </p>
          </details>
        </button>

        <button
          className={styles.projectBtn}
          onClick={() => {
            console.log(
              "Project - Op zoek naar ondersteuning voor je projecten? Wij kunnen fungeren als projectleider, of wij kunnen verschillende andere projectrollen opnemen. Tegelijkertijd zorgen wij voor een kennisoverdracht binnen je team zodat toekomstige projecten zelfstandig uitgevoerd kunnen worden."
            )
          }}
        >
          <details>
            <summary>
              <StaticImage
                src="../images/project.png"
                width={250}
                className={styles.projectImage}
                alt="project"
              ></StaticImage>
            </summary>
            <p className={styles.projectTxt}>
              <span>Project</span> Op zoek naar ondersteuning voor je projecten?
              Wij kunnen fungeren als projectleider, of wij kunnen verschillende
              andere projectrollen opnemen. Tegelijkertijd zorgen wij voor een
              kennisoverdracht binnen je team zodat toekomstige projecten
              zelfstandig uitgevoerd kunnen worden.
            </p>
          </details>
        </button>

        <button
          className={styles.speakerBtn}
          onClick={() => {
            console.log(
              "Speaker - Op zoek naar een spreker of facilitator voor je evenement of workshop ? Wij helpen je graag verder"
            )
          }}
        >
          <details>
            <summary>
              <StaticImage
                src="../images/speaker.png"
                width={250}
                className={styles.speakerImage}
                alt="speaker"
              ></StaticImage>
            </summary>
            <p className={styles.speakerTxt}>
              <span> Speaker</span>Op zoek naar een spreker of facilitator voor
              je evenement of workshop ? Wij helpen je graag verder
            </p>
          </details>
        </button>

        <button
          className={styles.visualsBtn}
          onClick={() => {
            console.log(
              "Visuals - Flows, processen of simpelweg de agendapunten van een meeting duidelijk visualiseren, dat is ons ding."
            )
          }}
        >
          <details>
            <summary>
              <StaticImage
                src="../images/visuals.png"
                width={250}
                className={styles.visualsImage}
                alt="visuals"
              ></StaticImage>
            </summary>
            <p className={styles.visualsTxt}>
              <span>Visuals</span>Flows, processen of simpelweg de agendapunten
              van een meeting duidelijk visualiseren, dat is ons ding.
            </p>
          </details>
        </button>
      </div>
    </Layout>
  )
}
export default Services
