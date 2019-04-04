import * as React from 'react'
import { css } from 'react-emotion'
import NavBar2 from './Navbar2'
import { DropdownMenu } from './DropdownMenu'

class NavWrapper extends React.Component {
  render() {
    return (
      <div>
        <div
          className={css`
            @media screen and (max-width: 700px) {
              display: none;
            }
          `}
        >
          <NavBar2 />
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
      </div>
    )
  }
}

export default NavWrapper
