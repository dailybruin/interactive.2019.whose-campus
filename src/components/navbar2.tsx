import * as React from 'react'
import styled, { css } from 'react-emotion'

class NavBar2 extends React.Component {
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
    return (
      <div>
        <div
          className={css`
            width: 100%;
            margin: 0 0 3em 0;
            padding: 0;
            list-style: none;
            display: flex;
            height: 75px;
          `}
        >
          <NavLink href="#" width="50%" backColor="#161A3E">
            Whose Campus
          </NavLink>
          <NavLink href="#" width="16.667%" backColor="#6966a3">
            Equity
          </NavLink>
          <NavLink href="#" width="16.667%" backColor="#56449d">
            Diversity
          </NavLink>
          <NavLink href="#" width="16.667%" backColor="#46457d">
            Inclusion
          </NavLink>
        </div>
      </div>
    )
  }
}

export default NavBar2
