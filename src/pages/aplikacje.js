import * as React from "react"
import { graphql, StaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ApplicationPage = () => (
  <Layout>
    <SEO title="Aplikacje" />
    <StaticQuery
      query={graphql`
        query {
          blog {
            apps {
              name
              description
              img {
                url
              }
            }
          }
        }
      `}
      render={({ blog: { apps } }) => (
        <div className="article-container">
          {apps.map(app => (
            <div key={app.name}>
              <h2>{app.name}</h2>
              <div className="article-box">
                {/* <div className="img-container"> */}
                <img src={app.img.url} alt={app.name} />
                {/* </div> */}
                <p>{app.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    />
  </Layout>
)

export default ApplicationPage
