import * as React from "react"
import NavBar from "../navigation/navbar"
import "../../styles/global.css"
import * as styles from "./layout.module.css"
import Footer from "../footer/footer"
import CookieConsent from "react-cookie-consent"

const Layout = ({ children }) => {
  return (
    <>
      <div className={styles.flex}>
        <NavBar />
        <main>{children}</main>
      </div>
      <CookieConsent
        buttonStyle={{
          background: "#78c0a8",
          cursor: "pointer",
          color: "white",
        }}
        declineButtonClasses={{
          background: "#f07818",
          cursor: "pointer",
          color: "white",
        }}
        overlayStyle={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          zIndex: "999",
          backgroundColor: "rgba(0,0,0,0.3)",
        }}
        location="bottom"
        buttonText="Accepteer de koekjes"
        enableDeclineButton
        declineButtonText="ik wil geen koekjes"
        cookieName="humitalCookies"
        onAccept={() => {
          alert("je hebt de koekjes geaccepteerd!")
        }}
        onDecline={() => alert("je weigerde de koekjes")}
        overlay={true}
        flipButtons={true}
      >
        Omnom Omnom! Wij gebruiken koekjes om jouw ervaring beter te maken. Wil
        je meer weten welke gegevens we verzamelen? Klik hierè
      </CookieConsent>
      <Footer />
    </>
  )
}

export default Layout
