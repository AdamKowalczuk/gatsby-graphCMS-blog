import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({
  data: {
    allSitePage: { edges },
  },
}) => (
  <Layout>
    <SEO title="Home" />
    {edges.map(page => (
      <Link
        style={{ display: "block" }}
        key={page.node.path}
        to={page.node.path}
      >
        {page.node.context.data.title}
      </Link>
    ))}
  </Layout>
)

export const allArticlePagesQuery = graphql`
  {
    allSitePage(
      filter: {
        component: {
          eq: "C:/Users/Adam/Desktop/Projekty/motivational-blog/src/templates/articleTemplate.js"
        }
      }
    ) {
      edges {
        node {
          path
          component
          context {
            data {
              title
            }
          }
        }
      }
    }
  }
`

export default IndexPage
