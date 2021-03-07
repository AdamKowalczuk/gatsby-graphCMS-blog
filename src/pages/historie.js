import * as React from "react"
import { graphql, StaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const StoryPage = () => (
  <Layout>
    <SEO title="Historie" />
    <StaticQuery
      query={graphql`
        query {
          blog {
            histories {
              title
              description
              image {
                url
              }
              image2 {
                url
              }
            }
          }
        }
      `}
      render={({ blog: { histories } }) => (
        <div>
          {histories.map(history => (
            <div key={history.title}>
              <h2>{history.title}</h2>
            </div>
          ))}
        </div>
      )}
    />
  </Layout>
)

export default StoryPage
