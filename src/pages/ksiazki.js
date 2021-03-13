import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/ksiazki.scss"
import "../styles/button.scss"

const BookPage = ({
  data: {
    allSitePage: { edges },
  },
}) => (
  <Layout>
    <SEO title="Strona główna" />
    <div className="books-container">
      {edges.map(page => (
        <div className="book" key={page.node.context.data.title}>
          <h2>{page.node.context.data.title}</h2>
          <h3>{page.node.context.data.author}</h3>
          <img
            src={page.node.context.data.image.url}
            alt={page.node.context.data.title}
          />
          <button className="btn btn-blue">
            <Link
              className="link"
              style={{ display: "block" }}
              key={page.node.path}
              to={page.node.path}
            >
              Zobacz
            </Link>
          </button>
        </div>

        // <Link
        //   style={{ display: "block" }}
        //   key={page.node.path}
        //   to={page.node.path}
        // >
        //   {page.node.context.data.title}
        // </Link>
      ))}
    </div>
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
              author
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

export default BookPage
