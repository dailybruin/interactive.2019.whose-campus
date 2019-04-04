import * as React from 'react'
import { graphql } from 'gatsby'
import coverImage from '../images/whosecampus.jpg'
import mobileCoverImage from '../images/mobilewhosecampus.jpg'
import WhoseCoverPhoto from '../components/whoseCoverPhoto'
import {
  Article,
  Footer,
  Head,
  XPosition,
  YPosition,
} from '@dailybruin/lux'
import { css } from 'emotion'

import NavWrapper from '../components/NavWrapper'

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
    <WhoseCoverPhoto
      headline={"Whose Campus"}
      imageURL={coverImage}
      mobImageURL={mobileCoverImage}
      xPosition={XPosition.Center}
      yPosition={YPosition.Center}
    />
    <NavWrapper />
    <Article dropcap={true} content={data.kerckhoffArticle.content} />
    <Footer developers="Nathan Smith" copyrightYear={2018} />
  </>
)

export default IndexPage
