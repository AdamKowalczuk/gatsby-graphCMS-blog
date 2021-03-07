import * as React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
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
        <div>
          {apps.map(app => (
            <div key={app.name}>
              <h2>{app.name}</h2>
              <img src={app.img.url} alt={app.name} />
              <p>{app.description}</p>
            </div>
          ))}
        </div>
      )}
    />
  </Layout>
)

export default ApplicationPage
