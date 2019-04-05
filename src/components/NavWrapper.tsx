import * as React from 'react'
import { css } from 'react-emotion'
import NavBar2 from './navbar2'
import { DropdownMenu } from './DropdownMenu'

interface NavWrapperProps {
  articles: any[]
}

class NavWrapper extends React.Component<NavWrapperProps> {
  render() {
    return (
      <div
        className={css`
          position: sticky;
          top: 0px;
        `}
      >
        <div
          className={css`
            @media screen and (max-width: 700px) {
              display: none;
            }
          `}
        >
          <NavBar2
            articleGroups={['equity', 'diversity', 'inclusion'].map(ele => {
              return {
                name: ele,
                articles: this.props.articles
                  .filter(node => node.node.category === ele)
                  .map(node => {
                    const dummy = node.node
                    console.log(
                      `/${ele}#${node.node.title
                        .substring(8, node.node.title.length - 4)
                        .split('')
                        .join('')}`
                    )
                    return {
                      name: dummy.headline,
                      link: `/${ele}#${dummy.title
                        .substring(8, node.node.title.length - 4)
                        .split('')
                        .join('')}`,
                    }
                  }),
              }
            })}
          />
        </div>
        <div
          className={css`
            background-color: #161a3e;
            @media screen and (min-width: 700px) {
              display: none;
            }
          `}
        >
          <DropdownMenu
            title="whose campus?"
            titleBGColorActive="#46457D"
            dropdownColor="#6966A3"
            articleTabColor="#A2A1CD"
            sections={['equity', 'diversity', 'inclusion'].map(ele => {
              return {
                name: ele,
                articles: this.props.articles
                  .filter(node => node.node.category === ele)
                  .map(node => {
                    const dummy = node.node
                    console.log(
                      `/${ele}#${node.node.title
                        .substring(8, node.node.title.length - 4)
                        .split('')
                        .join('')}`
                    )
                    return {
                      name: dummy.headline,
                      link: `/${ele}#${dummy.title
                        .substring(8, node.node.title.length - 4)
                        .split('')
                        .join('')}`,
                    }
                  }),
              }
            })}
          />
        </div>
      </div>
    )
  }
}

export default NavWrapper
