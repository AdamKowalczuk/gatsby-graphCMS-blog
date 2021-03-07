import * as React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const StoryPage = () => (
  <Layout>
    <SEO title="Historie" />
    <StaticQuery
      query={graphql`
        query {
          blog {
            articles {
              title
              description
              author
              slug
              image {
                url
              }
            }
          }
        }
      `}
      render={({ blog: { articles } }) => (
        <div>
          {articles.map(article => (
            <div key={article.title}>
              <h2>Historie</h2>
            </div>
          ))}
        </div>
      )}
    />
  </Layout>
)

export default StoryPage
