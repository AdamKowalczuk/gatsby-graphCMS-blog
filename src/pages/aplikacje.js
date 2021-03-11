import * as React from "react"
import { graphql, StaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/aplikacje.scss"

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
      render={({ blog: { apps } }) => (
        <div className="app-container">
          {apps.map(app => (
            <div className="app-box" key={app.name}>
              <h2>{app.name}</h2>
              <div className="img-container">
                <img src={app.image.url} alt={app.name} />
                <img src={app.image2.url} alt={app.name} />
              </div>
              <p>{app.description}</p>
            </div>
          ))}
        </div>
      )}
    />
  </Layout>
)

export default ApplicationPage
