import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import * as styles from "../styles/about.module.css"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"

const About = () => {
  return (
    <Layout>
      <Seo title="Over Ons" />

      <div className={styles.containerButtons}>
        <button className={styles.missieBtn}>
          <details>
            <summary>
              <StaticImage
                src="../images/overOns/missie.png"
                width={200}
                className={styles.missieImage}
                alt="missie"
              ></StaticImage>
            </summary>

            <ul className={styles.missieTxt}>
              <span>Humital wil, kan, en zal...</span>
              <li>
                ...elke dag het verschil maken voor elke klant, en er 100% voor
                gaan
              </li>
              <li>
                ...gewoon zijn wie we zijn met onze gebreken en tekortkomingen
              </li>
              <li>...klanten behandelen zoals zij dat liefst willen</li>

              <li>...altijd blijven leren, ook "aan" en "van" anderen</li>

              <li>...empatisch zijn en meedenken met de klant</li>

              <li>
                ...dankbaar zijn voor wat we hebben, nog niet hebben, krijgen,
                en kunnen geven
              </li>

              <li>
                ...een sfeer van ontspanning en rust uitstralen aan iedere klant
              </li>

              <li>
                ...een veilige haven creeëren waar iedereen vrijuit kan spreken
              </li>
            </ul>
          </details>
        </button>

        <button className={styles.visieBtn}>
          <details>
            <summary>
              <StaticImage
                src="../images/overOns/visie.png"
                width={200}
                className={styles.visieImage}
                alt="visie"
              ></StaticImage>
            </summary>
            <p className={styles.visieTxt}>
              <span>visie</span> we komen niet met een "Plug & Play" oplossing.
              Niets moet, alles kan! Onze aanbevelingen zullen een wereld van
              verschil maken.
            </p>
          </details>
        </button>

        <button className={styles.founderJBtn}>
          <details>
            <summary>
              <StaticImage
                width={180}
                src="../images/overOns/janFruytier.png"
                className={styles.founderJImage}
                alt="Jan Fruytier afbeelding"
              ></StaticImage>
            </summary>

            <ul className={styles.founderJTxt}>
              <li>Ambitieus en grensverleggend</li>
              <li>Daadkrachtig en doortastend</li>
              <li>Wilskrachtig en vastberaden</li>
              <li>Sociaal, spontaan, en een nieuwsgierig</li>
              <li>Enthousiast en inspirerend</li>
            </ul>
          </details>
        </button>

        <button className={styles.founderDBtn}>
          <details>
            <summary>
              <StaticImage
                width={180}
                src="../images/overOns/domienDeRycke.png"
                className={styles.founderDImage}
                alt="Domien De Rycke afbeelding"
              ></StaticImage>
            </summary>

            <ul className={styles.founderDTxt}>
              <li>Ondernemend efficiënt</li>
              <li>Aandacht voor eenduidige en correcte communicatie</li>
              <li>Structureer georoënteerd</li>
              <li>Sociaal sterk aanwezig</li>
              <li>
                Wereldverkenner met flexible en zelfstandige ingesteldheid
              </li>
            </ul>
          </details>
        </button>
      </div>
    </Layout>
  )
}
export default About
