import * as React from 'react'
import styled, { css } from 'react-emotion'

interface NavBar2Props {
  articleGroups: any
}

class NavBar2 extends React.Component<NavBar2Props> {
  render() {
    type navLinkProps = {
      backColor: string
      width: string
      children: string
      href: string
    }
    const NavLink = styled.a`
      padding: 8px 15px;
      text-decoration: none;
      font-family: Montserrat;
      text-transform: lowercase;
      font-weight: ${(props: navLinkProps) =>
        props.width === '50%' ? 'bold' : 'normal'};
      color: #ffffff;
      font-size: ${(props: navLinkProps) =>
        props.width === '50%' ? '2.25rem' : '1.5rem'};
      width: ${(props: navLinkProps) => props.width};
      background: ${(props: navLinkProps) => props.backColor};
      display: flex;
      justify-content: center;
      align-items: center;
    `

    const NavDrop = styled.div`
      display: none;
      position: absolute;
      top: 75px;
      left: 50%;
      width: 50%;
      flex-direction: column;
      a:not(:last-child) {
        border-bottom: 1px grey solid;
      }
      box-shadow: -1px 6px 10px 2px rgba(0, 0, 0, 0.25);
    `

    const dropDownMapping = cate => {
      const cateColor = {
        equity: '#6966A3',
        diversity: '#56449D',
        inclusion: '#46457D',
      }
      return this.props.articleGroups
        .find(ele => {
          return ele.name === cate
        })
        .articles.map(article => (
          <a
            className={css`
              color: white;
              display: block;
              text-decoration: none;
              &:hover {
                color: white;
                text-decoration: none;
              }
              height: 3rem;
            `}
            href={article.link}
          >
            <div
              className={css`
                width: 80vw;
                color: white;
                word-wrap: break-word;
                background-color: ${cateColor[cate]};
                height: 100%;
                @media screen and (max-width: 450px) {
                  font-size: 0.75rem;
                }
                display: flex;
                align-items: center;
              `}
            >
              <span
                className={css`
                  margin-left: 5px;
                `}
                dangerouslySetInnerHTML={{
                  __html: article.name,
                }}
              />
            </div>
          </a>
        ))
    }

    return (
      <div
        className={css`
          width: 100%;
          margin: 0;
          padding: 0;
          list-style: none;
          display: flex;
          height: 75px;
          a:hover + div {
            display: flex;
          }
          div:hover {
            display: flex;
          }
        `}
      >
        {console.log('asdf', dropDownMapping('equity'))}
        <NavLink href="/" width="50%" backColor="#161A3E">
          Whose Campus?
        </NavLink>
        <NavLink href="/equity" width="16.667%" backColor="#6966a3">
          Equity
        </NavLink>
        <NavDrop>{dropDownMapping('equity')}</NavDrop>
        <NavLink href="/diversity" width="16.667%" backColor="#56449d">
          Diversity
        </NavLink>
        <NavDrop>{dropDownMapping('diversity')}</NavDrop>
        <NavLink href="/inclusion" width="16.667%" backColor="#46457d">
          Inclusion
        </NavLink>
        <NavDrop>{dropDownMapping('inclusion')}</NavDrop>
      </div>
    )
  }
}

export default NavBar2
