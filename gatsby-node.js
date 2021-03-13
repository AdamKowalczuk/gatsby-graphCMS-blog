const path = require(`path`)
console.log(path)
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const articleTemplate = path.resolve(`src/templates/articleTemplate.js`)
  const historyTemplate = path.resolve(`src/templates/historyTemplate.js`)
  const articlesQuery = await graphql(`
    {
      blog {
        articles: articlesConnection(first: 100) {
          edges {
            node {
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
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors)
    }
  const historiesQuery = await graphql(`
    {
      blog {
        histories: historiesConnection(first: 100) {
          edges {
            node {
              createdAt
              id
              slug
              updatedAt
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
      }
    }
  `)
  articlesQuery.data.blog.articles.edges.forEach(article => {
    createPage({
      path: article.node.slug,
      component: articleTemplate,
      context: {
        data: article.node,
      },
    })
  })
  historiesQuery.data.blog.histories.edges.forEach(history => {
    createPage({
      path: history.node.slug,
      component: historyTemplate,
      context: {
        data: history.node,
      },
    })
  })
}
