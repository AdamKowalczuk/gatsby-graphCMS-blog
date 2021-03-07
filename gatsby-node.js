const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const articleTemplate = path.resolve(`src/templates/articleTemplate.js`)
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

  articlesQuery.data.blog.articles.edges.forEach(article => {
    createPage({
      path: article.node.slug,
      component: articleTemplate,
      context: {
        data: article.node,
      },
    })
  })
}
