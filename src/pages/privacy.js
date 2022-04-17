import * as React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import * as styles from "../styles/privacy.module.css"
import { Link } from "gatsby"

const Privacy = () => (
  <Layout>
    <Seo title="Privacy Policy" />
    <div className={styles.privacyWrapper}>
      <h1 className={styles.privacyHeader}>Cookie & Privacy Policy</h1>
      <div className={styles.privacyContent}>
        <h2 className={styles.privacySubtitle}>Wat zijn cookies?</h2>
        <p>
          Cookies zijn tekstbestanden die naar jouw computer of mobiele apparaat
          worden gedownload wanneer je een website bezoekt en bepaalde
          informatie over het gebruik van de site opslaan. Cookies zijn nuttig,
          omdat websites er apparaten van gebruikers mee kunnen herkennen. Ze
          worden dan bij elk volgend bezoek teruggestuurd naar de
          oorspronkelijke website of naar een andere website die ze herkent. Wil
          je meer weten over cookies?{" "}
          <Link to="https://www.allaboutcookies.org/" target="_blank">
            Klik dan hier :).
          </Link>
        </p>
        <h2 className={styles.privacySubtitle}>
          Type informatie die wij verzamelen en redenen voor verzameling
        </h2>
        <p>
          Cookies helpen ons beter inzicht te krijgen in jouw gebruik van onze
          site, zodat wij onder meer onze websitebezoekers een optimale ervaring
          kunnen bieden. Hier volgen enkele voorbeelden van de soorten gegevens
          die we verzamelen via cookies:
        </p>
        <ul>
          <li>
            Het aantal gebruikers dat onze site bezoekt, de frequentie waarmee
            de site is bekeken, de bekeken pagina’s, de kliks op de site en de
            totale duur van het bezoek aan de site
          </li>
          <li>
            De naam van de website die is bezocht voorafgaand aan onze site
          </li>
          <li>Of je onze site voor de eerste keer bezoekt of niet</li>
          <li>
            Het gebruikte type browser en jouw IP-adres, zodat we je kunnen
            herkennen bij een volgende bezoek.
          </li>
        </ul>
        <p>We verzamelen niet jouw naam of e-mailadres via cookies.</p>
        <p>Daarnaast kunnen wij met cookies het volgende doen:</p>
        <ul>
          <li>
            Jouw bezoek afstemmen op jouw wensen: we kunnen informatie over jouw
            bezoek gebruiken om je volgende bezoek aan onze site te verbeteren.
          </li>
          <li>
            Klanttrends analyseren: Wij verzamelen informatie over bezoeken aan
            onze site en analyseren ze als geheel in geaggregeerde vorm. Dit
            type onderzoek is gericht op het signaleren van trends bij bezoekers
            aan onze site en niet op het analyseren van de gegevens van een
            specifieke bezoeker.
          </li>
        </ul>
        <h2 className={styles.privacySubtitle}>
          Typen cookies die wij gebruiken
        </h2>
        <h3>Cookies van derden</h3>
        <p>
          Sommige derden en gelieerde bedrijven kunnen cookies op jouw computer
          plaatsen en lezen. Met deze cookies kunnen onderdelen of functies van
          derden op of via de site worden aangeboden. De partijen die deze
          cookies van derden instellen, kunnen uw apparaat herkennen wanneer
          hierop onze site wordt bezocht en ook wanneer bepaalde andere websites
          worden bezocht.
        </p>
        <p>De typen cookies van derden die wij op de site gebruiken, zijn:</p>
        <ul>
          <li>
            Analysecookies: Met deze cookies kunnen wij of onze externe
            analyseproviders statistieken verzamelen (samengevoegd en anoniem)
            over het gebruik van de site door jou en andere bezoekers. Met deze
            informatie kunnen wij beschikbare functies verbeteren.
          </li>
        </ul>
        <p>
          Om deze verschillende soorten cookies te weigeren, volgt u de
          instructies hieronder in de sectie <span>‘Cookiebeheer’.</span>
        </p>
        <h2 className={styles.privacySubtitle}>
          Hoe lang blijven cookies opgeslagen?
        </h2>
        <h3>Permenante cookies</h3>
        <p>
          Onze analysecookies en cookies van derden zijn permanente cookies.
          Hiermee kunnen wij inzicht krijgen in het surfgedrag van bezoekers
          over een langere periode. Ze kunnen 24 uur, een week of zelfs enkele
          jaren op uw computer blijven staan, afhankelijk van hun functie. Dit
          betekent dat deze cookies overleven nadat jouw browser is gesloten en
          kunnen worden gebruikt door onze site om jouw computer te herkennen
          wanneer je jouw browser later opnieuw opent.
        </p>
        <h2 className={styles.privacySubtitle}>Cookiebeheer</h2>
        <p>
          Je kan beslissen of je cookies accepteert of weigert. Als je cookies
          wilt weigeren, volg je de onderstaande instructies:
        </p>
        <h3>Alle cookies</h3>
        <p>
          Je kan de voorkeur om alle soorten cookies te ontvangen via jouw
          webbrowser beheren. Aangezien de manier waarop je cookies kan
          activeren of uitschakelen per webbrowser varieert, moet je het
          Help-menu van jouw webbrowser raadplegen voor meer informatie over
          cookievoorkeuren. Je kan jouw browser ook op elk gewenst moment
          configureren om op de hoogte te worden gesteld van de ontvangst van
          een cookie, zodat je kan beslissen of je het wel of niet wilt
          accepteren. Cookies lezen in geen geval de gegevens van je harde
          schijf en je kan ze op ieder moment verwijderen van jouw computer. Op
          dit moment is het technisch onmogelijk om jouw instellingen te
          synchroniseren tussen jouw browser en jouw apparaten ( computer of
          smartphone). Je moet deze instellingen opgeven in alle browsers en op
          alle apparaten die je momenteel gebruikt en elke keer dat je een
          nieuwe browser of een nieuw apparaat gebruikt. Houd er rekening mee
          dat als je cookies uitschakelt of deactiveert, dit voor alle cookies
          geldt.
        </p>
        <h3>Analysecookies</h3>
        <p>
          Om analysecookies uit te schakelen die door onze externe
          analysepartners worden beheerd, gebruik je de hierboven beschreven
          mechanismen voor het uitschakelen van de browser of gebruik je de door
          onze analyseproviders gehanteerde afmeldmechanismen voor analyse:
          Google Analytics Opt-out Browser Add-on.
        </p>
      </div>
    </div>
  </Layout>
)

export default Privacy
