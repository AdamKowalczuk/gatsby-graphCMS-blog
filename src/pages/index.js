import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/historie.scss"
const IndexPage = ({
  data: {
    allSitePage: { edges },
  },
}) => (
  <Layout>
    <SEO title="Strona główna" />
    <h1>Hej</h1>

    <h3>{edges[0].node.context.data.title}</h3>
    {edges.map(page => (
      <>
        <div className="history-container" key={page.node.context.data.title}>
          <h1>{page.node.context.data.title}</h1>

          <img
            src={page.node.context.data.image.url}
            alt={page.node.context.data.title}
          />
          <button className="btn btn-blue">
            <Link className="link" key={page.node.path} to={page.node.path}>
              Zobacz
            </Link>
          </button>
        </div>
      </>
    ))}
  </Layout>
)

export const allHistoryPagesQuery = graphql`
  {
    allSitePage {
      edges {
        node {
          path
          component
          context {
            data {
              title
              image {
                url
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
