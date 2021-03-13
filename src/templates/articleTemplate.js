import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/articleTemplate.scss"
import "../styles/button.scss"
import "../styles/layout.scss"

const ArticleTemplate = ({ pageContext: { data } }) => (
  <Layout>
    <SEO title={data.title} />
    <div className="article-container">
      <h1>{data.title}</h1>
      <h2>{data.author}</h2>
      <div className="article-box">
        {/* <div className="img-container"> */}
        <img src={data.image.url} alt={data.title} />
        {/* </div> */}
        <p>{data.description}</p>
      </div>
    </div>
  </Layout>
)

export default ArticleTemplate
