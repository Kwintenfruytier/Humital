import * as React from "react"
import * as styles from "../styles/contact.module.css"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"

const Contact = () => {
  return (
    <Layout>
      <Seo title="Contact" />
      <div className={styles.contactWrapper}>
        <div className={styles.contactInfo}>
          <h1>Humital</h1>
          <p className={styles.address}>
            Bookmolenstraat 87
            <span>9111 Belsele</span>
          </p>

          <p className={styles.contactJan}>Jan Fruytier - 0472/37 57 83</p>
          <p className={styles.contactDomien}>
            Domien De Rycke - 0472/33 30 95
          </p>
          <p>Email: info@humital.be</p>
          <span className={styles.btnAppointment}>Maak een afspraak</span>
        </div>
        <div className={styles.maps}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2502.9465397477843!2d4.115734415431693!3d51.1463369448595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c38e5852e01197%3A0x5ca621fc9869c390!2sBookmolenstraat%2087%2C%209111%20Sint-Niklaas!5e0!3m2!1sen!2sbe!4v1649069218714!5m2!1sen!2sbe"
            title="Google Maps Humital home address"
          ></iframe>
        </div>
      </div>
    </Layout>
  )
}
export default Contact
