import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/historie.scss"
import { Disqus } from 'gatsby-plugin-disqus';

const IndexPage = ({
  data: {
    allSitePage: { edges },
  },
}) => (
  <Layout>
    <SEO title="Strona główna" />
    <h1>Hej</h1>

    {console.log("All historyPagesQuery:", allHistoryPagesQuery)}
    {/* {console.log("historiesQuery:", historiesQuery)} */}
    <h3>{edges[0].node.context.data.title}</h3>

    {edges.map(page => (
      <>
        <div className="history-container" key={page.node.context.data.title}>
          <h1>{page.node.context.data.title}</h1>

          <img
            src={page.node.context.data.image.url}
            alt={page.node.context.data.title}
          />
          <button className="btn btn-blue">
            <Link className="link" key={page.node.path} to={page.node.path}>
              Zobacz
            </Link>
          </button>
        </div>
      </>
    ))}
    <Disqus
        config={
            /* Replace PAGE_URL with your post's canonical URL variable */
            url: 'https://motivational-blog.netlify.app/',
            /* Replace PAGE_IDENTIFIER with your page's unique identifier variable */
            identifier: {page.node.context.data.title},
            /* Replace PAGE_TITLE with the title of the page */
            title: {page.node.context.data.title},
        }
    />
  </Layout>

)

export const allHistoryPagesQuery = graphql`
  {
    allSitePage(
      filter: {
        component: {
          eq: "C:/Users/Adam/Desktop/Projekty/motivational-blog/src/templates/historyTemplate.js"
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

export default IndexPage
