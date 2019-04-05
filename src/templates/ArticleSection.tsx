import * as React from 'react'
import { graphql } from 'gatsby'
import { Article, Headline, Image, Byline, Head } from '@dailybruin/lux'
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
                />
                <Byline authors={art.author} />
                <Article
                  content={art.content}
                  style={css`
                    a {
                      color: #3298e6;
                    }
                    figcaption {
                      font-style: italic;
                    }
                  `}
                />
              </div>
            )
          })}
      </div>
    </div>
  )
}
