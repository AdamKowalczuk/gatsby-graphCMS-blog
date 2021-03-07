const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const articleTemplate = path.resolve(`src/templates/articleTemplate.js`)
  // const quoteTemplate = path.resolve(`src/templates/quoteTemplate.js`)
  // const songTemplate = path.resolve(`src/templates/songTemplate.js`)
  // const appTemplate = path.resolve(`src/templates/appTemplate.js`)
  const articlesQuery = await graphql(`
    {
      blog {
        articles: articlesConnection(first: 100) {
          edges {
            node {
              id
              createdAt
              id
              slug
              title
              updatedAt
              description
              author
              image {
                url
              }
            }
          }
        }
      }
    }
  `)
  const quotesQuery = await graphql(`
    {
      blog {
        quotes: quotesConnection(first: 100) {
          edges {
            node {
              id
              createdAt
              updatedAt
              description
              author
            }
          }
        }
      }
    }
  `)

  // const songsQuery = await graphql(`
  //   {
  //     blog {
  //       songs: quotesConnection(first: 100) {
  //         edges {
  //           node {
  //             id
  //             createdAt
  //             updatedAt
  //             author
  //             title
  //             image {
  //               url
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  // const appsQuery = await graphql(`
  //   {
  //     blog {
  //       apps: quotesConnection(first: 100) {
  //         edges {
  //           node {
  //             id
  //             createdAt
  //             updatedAt
  //             description
  //             name
  //             image {
  //               url
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  articlesQuery.data.blog.articles.edges.forEach(article => {
    createPage({
      path: article.node.slug,
      component: articleTemplate,
      context: {
        data: article.node,
      },
    })
  })
  // quotesQuery.data.blog.quotes.edges.forEach(quote => {
  //   createPage({
  //     // path: quote.node.slug,
  //     component: quoteTemplate,
  //     context: {
  //       data: quote.node,
  //     },
  //   })
  // })
  // songsQuery.data.blog.songs.edges.forEach(song => {
  //   createPage({
  //     path: song.node.slug,
  //     component: songTemplate,
  //     context: {
  //       data: song.node,
  //     },
  //   })
  // })
  // appsQuery.data.blog.apps.edges.forEach(app => {
  //   createPage({
  //     path: app.node.slug,
  //     component: appTemplate,
  //     context: {
  //       data: app.node,
  //     },
  //   })
  // })
}
