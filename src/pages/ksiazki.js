import * as React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BookPage = () => (
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
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <h3>{article.author}</h3>
              <Link to={article.slug}>Zobacz</Link>
              <img src={article.image.url} alt={article.title} />
            </div>
          ))}
        </div>
      )}
    />
  </Layout>
)

export default BookPage
