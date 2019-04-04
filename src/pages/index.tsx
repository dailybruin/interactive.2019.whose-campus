import * as React from 'react'
import { graphql } from 'gatsby'
import {
  Article,
  CoverPhoto,
  Footer,
  Head,
  XPosition,
  YPosition,
} from '@dailybruin/lux'
import { DropdownMenu } from '../components/DropdownMenu'
import { css } from 'emotion'

import NavBar2 from '../components/navbar2'

export const query = graphql`
  query {
    site {
      siteMetadata {
        siteName
        description
        url
        image
      }
    }
    kerckhoffArticle {
      headline
      author
      content {
        type
        value
      }
    }
  }
`
const IndexPage = ({ data }) => (
  <>
    <Head {...data.site.siteMetadata} />
<<<<<<< HEAD

    <NavBar2 />

=======
    <div
      className={css`
        background-color: #161a3e;
      `}
    >
      <DropdownMenu
        title="whose campus?"
        titleBGColorActive="#46457D"
        dropdownColor="#6966A3"
        articleTabColor="#A2A1CD"
        sections={[
          {
            name: 'equity',
            articles: [
              {
                name: 'article one',
                link: '#',
              },
              {
                name: 'article two',
                link: '#',
              },
            ],
          },
          {
            name: 'diversity',
            articles: [
              {
                name: 'article one',
                link: '#',
              },
              {
                name: 'article two',
                link: '#',
              },
              {
                name: 'article three',
                link: '#',
              },
              {
                name: 'article four',
                link: '#',
              },
              {
                name: 'article five',
                link: '#',
              },
            ],
          },
          {
            name: 'inclusion',
            articles: [
              {
                name: 'article one',
                link: '#',
              },
              {
                name: 'article two',
                link: '#',
              },
              {
                name: 'article three',
                link: '#',
              },
              {
                name: 'article four',
                link: '#',
              },
            ],
          },
        ]}
      />
    </div>
>>>>>>> master
    <Article dropcap={true} content={data.kerckhoffArticle.content} />
    <Footer developers="Nathan Smith" copyrightYear={2018} />
  </>
)

export default IndexPage
