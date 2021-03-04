import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/articleTemplate.scss"

const ArticleTemplate = ({ pageContext: { data } }) => (
  <Layout>
    <Link to="/">Go back</Link>
    <h1>{data.title}</h1>
    <h2>{data.author}</h2>
    <p>{data.description}</p>
    <img src={data.image.url} />
  </Layout>
)

export default ArticleTemplate
