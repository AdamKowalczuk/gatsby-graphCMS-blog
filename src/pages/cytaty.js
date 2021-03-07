import * as React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

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
        <div>
          {quotes.map(quote => (
            <div key={quote.author}>
              <h2>{quote.author}</h2>
              <blockquote>
                <q>{quote.description}</q>
              </blockquote>
            </div>
          ))}
        </div>
      )}
    />
  </Layout>
)

export default QuotePage
