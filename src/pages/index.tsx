import * as React from 'react'
import { graphql } from 'gatsby'
import coverImage from '../images/whosecampus.jpg'
import mobileCoverImage from '../images/mobilewhosecampus.jpg'
import WhoseCoverPhoto from '../components/whoseCoverPhoto'
import NavWrapper from '../components/NavWrapper'
import {
  Article,
  Byline,
  Footer,
  Head,
  XPosition,
  YPosition,
} from '@dailybruin/lux'
import { css } from 'emotion'

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
        }
      }
    }
  }
`
const IndexPage = ({ data }) => (
  <div
    className={css`
      background: linear-gradient(
        180deg,
        #161a3e 0%,
        #46457d 32.6%,
        #56449d 66.3%,
        #6966a3 100%
      );
      color: white;
    `}
  >
    {console.log(data)}
    <Head {...data.site.siteMetadata} />
    <WhoseCoverPhoto
      headline={'Whose Campus'}
      imageURL={coverImage}
      mobImageURL={mobileCoverImage}
      xPosition={XPosition.Center}
      yPosition={YPosition.Center}
    />
    <NavWrapper articles={data.allKerckhoffArticle.edges} />
    <div
      className={css`
        color: black;
        height: 125px;
      `}
    />
    <div
      className={css`
        margin-left: 20px;
        margin-right: 20px;
        display: flex;
        justify-content: center;
        align-content: center;
      `}
    >
      <div
        className={css`
          display: flex;
          flex-direction: column;
          max-width: 700px;
        `}
      >
        <Byline authors="Keshav Tadimeti" />
        <Article
          dropcap={true}
          content={
            data.allKerckhoffArticle.edges.find(node => {
              return node.node.author === 'Keshav Tadimeti'
            }).node.content
          }
        />
      </div>
    </div>
    <Footer
      developers={[
        'Richard Yang',
        'Max Wu',
        'Felix Zhang',
        'Karl Huang',
        'Mindi Cao',
        'Kevin Qian',
        'Lauren Ho',
      ]}
      copyrightYear={2018}
      style={css`
        margin-bottom: 0px;
        background-color: #161a3e;
        height: 75px;
      `}
    />
  </div>
)

export default IndexPage
