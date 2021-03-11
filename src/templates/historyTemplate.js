import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/articleTemplate.scss"
import "../styles/historyTemplate.scss"
import "../styles/button.scss"
import "../styles/layout.scss"

const HistoryTemplate = ({ pageContext: { data } }) => (
  <Layout>
    <SEO title={data.title} />
    <div className="history-container">
      <h1>{data.title}</h1>
      <h2>{data.author}</h2>
      <div className="history-box">
        {/* <div className="img-container"> */}
        <img className="img1" src={data.image.url} alt={data.title} />
        {/* </div> */}
        <p>{data.description}</p>
        <img className="img2" src={data.image2.url} alt={data.title} />
      </div>
    </div>
  </Layout>
)

export default HistoryTemplate
