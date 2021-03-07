import * as React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const MusicPage = () => (
  <Layout>
    <SEO title="Muzyka" />
    <StaticQuery
      query={graphql`
        query {
          blog {
            songs {
              title
              author
              url
            }
          }
        }
      `}
      render={({ blog: { songs } }) => (
        <div>
          {songs.map(song => (
            <div key={song.title}>
              <small>{song.author}</small>
              <h2>{song.title}</h2>
              <Link to={song.url}>Zobacz Frame</Link>
            </div>
          ))}
        </div>
      )}
    />
  </Layout>
)

export default MusicPage
