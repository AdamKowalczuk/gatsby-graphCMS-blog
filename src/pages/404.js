import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Ooops...</h1>
    <h2>Strona nie została znaleziona</h2>
    <p>
      Wróć na stronę główną <br />
      <Link to="/">Strona główna</Link>
    </p>
  </Layout>
)

export default NotFoundPage
