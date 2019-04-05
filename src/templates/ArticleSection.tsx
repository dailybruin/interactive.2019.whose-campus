import * as React from 'react'
import { graphql } from 'gatsby'
import { Article, Headline, Image, Byline, Head, Footer } from '@dailybruin/lux'
import { css } from 'react-emotion'
import NavWrapper from '../components/NavWrapper'

export const query = graphql`
  query {
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
export default ({ data, pageContext }) => {
  return (
    <div
      className={css`
        background-color: ${pageContext.cateColor};
        width: 100%;
        height: 100%;
        color: white;
      `}
    >
      <NavWrapper articles={data.allKerckhoffArticle.edges} />
      <div
        className={css`
          color: black;
          height: 125px;
        `}
      />
      <div
        className={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-left: 20px;
          margin-right: 20px;
        `}
      >
        {data.allKerckhoffArticle.edges
          .filter(node => node.node.category === pageContext.category)
          .map(node => {
            const art = node.node
            return (
              <div
                id={art.title
                  .substring(8)
                  .split('')
                  .join('')}
                className={css`
                  margin-top: 20px;
                  max-width: 700px;
                `}
              >
                <h1
                  dangerouslySetInnerHTML={{
                    __html: art.headline,
                  }}
                />
                <Image
                  url={art.coverPhoto}
                  caption=""
                  alt={art.coverAlt}
                  credit="credit here"
                  style={css`
                    figcaption {
                      font-style: italic;
                      text-align: right;
                    }
                  `}
                />
                <Byline authors={art.author} />
                <Article
                  content={art.content}
                  style={css`
                    a {
                      color: #e6df25;
                    }
                    figcaption {
                      font-style: italic;
                      text-align: right;
                    }
                  `}
                />
              </div>
            )
          })}
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
}
