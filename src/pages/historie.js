// import * as React from "react"
// import { Link, graphql, StaticQuery } from "gatsby"
// import Layout from "../components/layout"
// import SEO from "../components/seo"
// import "../styles/historie.scss"

// const StoryPage = ({
//   data: {
//     allSitePage: { edges },
//   },
// }) => (
//   <Layout>
//     <SEO title="Historie" />
//     {edges.map(page => (
//       <>
//         <div className="history-container">
//           <h1>{page.node.context.data.title}</h1>
//           <img
//             src={page.node.context.data.image.url}
//             alt={page.node.context.data.title}
//           />
//           <button className="btn btn-blue">
//             <Link className="link" key={page.node.path} to={page.node.path}>
//               Zobacz
//             </Link>
//           </button>
//         </div>
//       </>
//     ))}
//   </Layout>
// )

// export const allHistoryPagesQuery = graphql`
//   {
//     allSitePage(
//       filter: {
//         component: {
//           eq: "C:/Users/Adam/Desktop/Projekty/motivational-blog/src/templates/historyTemplate.js"
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
//               image {
//                 url
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `

// export default StoryPage
