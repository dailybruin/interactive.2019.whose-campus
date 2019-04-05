const path = require(`path`)
exports.createPages = async ({ graphql, actions }) => {
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  const { createPage } = actions
  const cate = ['equity', 'diversity', 'inclusion']
  const cateColor = ['#6966A3', '#56449D', '#46457D']
  cate.forEach((category, cateIdx) => {
    return graphql(`
      {
        allKerckhoffArticle {
          edges {
            node {
              title
              author
              content {
                type
                value
              }
              category
              coverAlt
              headline
              coverPhoto
              credit
              authorBio
            }
          }
        }
      }
    `).then(_ => {
      createPage({
        path: `${category}`,
        component: path.resolve(`./src/templates/ArticleSection.tsx`),
        context: { category, cateColor: cateColor[cateIdx] },
      })
    })
  })
}
