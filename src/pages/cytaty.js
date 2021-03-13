import * as React from "react"
import { graphql, StaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/cytaty.scss"

const QuotePage = () => (
  <Layout>
    <SEO title="Cytaty" />
    <StaticQuery
      query={graphql`
        query {
          blog {
            quotes {
              author
              description
            }
          }
        }
      `}
      render={({ blog: { quotes } }) => (
        <div className="quotes-list">
          <ol className="gradient-list">
            {quotes.map(quote => (
              <li key={quote.author}>
                <h2>{quote.author}</h2>
                <blockquote>
                  <q>{quote.description}</q>
                </blockquote>
              </li>
            ))}
          </ol>
        </div>
      )}
    />
  </Layout>
)

export default QuotePage
