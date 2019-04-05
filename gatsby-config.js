const slugify = require('slugify')

const siteName = 'Whose Campus?'
const description =
  'A century in, UCLA is still a campus of barriers. The university is divided, resources are limited and zero-sum politics dominate the decision making. Read more to see Daily Bruin Opinion’s analysis of equity, diversity and inclusion on campus.'
const image =
  'https://assets.dailybruin.com/images/interactive.2019.whose-campus-2/whosecampus-612ba44fe40d2576e7cbf90e47e256f3.jpg'
const year = '2019'

const url = `https://features.dailybruin.com/${year}/${slugify(siteName)}`

module.exports = {
  siteMetadata: {
    siteName,
    description,
    url,
    image,
  },
  pathPrefix: '/2019/whose-campus',
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: siteName,
        short_name: siteName,
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'browser',
        icon: 'src/images/db-logo.png',
      },
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      resolve: '@dailybruin/gatsby-source-kerckhoff',
      options: {
        slug: 'interactive.2019.whose-campus-2',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-28181852-23',
        head: false,
        anonymize: true,
      },
    },
    {
      resolve: 'gatsby-source-published-google-sheets',
      options: {
        sheetID: '1TJVrlFP0zPViE63jbPGZXGI1aixPwLYS6OdenLml76g',
      },
    },
  ],
}
