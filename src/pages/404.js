import * as React from "react"
import Layout from "../components/Layout/Layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <div>
    <Layout>
      <Seo title="404: woops, page not found" />
      <h1>404: Nothing is here :(</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  </div>
)

export default NotFoundPage
