// import * as React from "react"
// import { Link, graphql } from "gatsby"
// import Layout from "../components/layout"
// import SEO from "../components/seo"

// const IndexPage = ({
//   data: {
//     allSitePage: { edges },
//   },
// }) => (
//   <Layout>
//     <SEO title="Strona główna" />
//     {edges.map(page => (
//       <Link
//         style={{ display: "block" }}
//         key={page.node.path}
//         to={page.node.path}
//       >
//         {page.node.context.data.title}
//       </Link>
//     ))}
//   </Layout>
// )

// export const allArticlePagesQuery = graphql`
//   {
//     allSitePage(
//       filter: {
//         component: {
//           eq: "C:/Users/Adam/Desktop/Projekty/motivational-blog/src/templates/articleTemplate.js"
//         }
//       }
//     ) {
//       edges {
//         node {
//           path
//           component
//           context {
//             data {
//               title
//             }
//           }
//         }
//       }
//     }
//   }
// `

// export default IndexPage

import * as React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/historie.scss"

const IndexPage = ({
  data: {
    allSitePage: { edges },
  },
}) => (
  <Layout>
    <SEO title="Strona główna" />
    {edges.map(page => (
      <>
        <div className="history-container">
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
