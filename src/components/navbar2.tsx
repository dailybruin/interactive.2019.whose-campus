import * as React from 'react'
import { css } from 'react-emotion'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'

class NavBar2 extends React.Component {
  render() {
    return (
      <div>
        <ul
          className={css`
            width: 100%;
            float: left;
            margin: 0 0 3em 0;
            padding: 0;
            list-style: none;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            height: 100%;
          `}
        >
          <li
            className={css`
              float: left;
            `}
          >
            <a
              href="#"
              className={css`
                display: block;
                padding: 8px 15px;
                text-decoration: none;
                font-family: Montserrat;
                text-transform: lowercase;
                font-weight: bold;
                color: #ffffff;

                left: 0px;
                top: 0px;
                flex-grow: 1;

                background: #161a3e;
              `}
            >
              Whose Campus
            </a>
          </li>
          <li
            className={css`
              float: left;
            `}
          >
            <a
              href="#"
              className={css`
                display: block;
                padding: 8px 15px;
                text-decoration: none;
                font-weight: bold;
                font-family: Montserrat;
                text-transform: lowercase;
                color: #ffffff;
                background: #6966a3;
              `}
            >
              Equity
            </a>
          </li>
          <li
            className={css`
              float: left;
            `}
          >
            <a
              href="#"
              className={css`
                display: block;
                padding: 8px 15px;
                text-decoration: none;
                font-weight: bold;
                font-family: Montserrat;
                text-transform: lowercase;
                color: #ffffff;
                background: #56449d;
              `}
            >
              Diversity
            </a>
          </li>
          <li
            className={css`
              float: left;
            `}
          >
            <a
              href="#"
              className={css`
                display: block;
                padding: 8px 15px;
                text-decoration: none;
                font-weight: bold;
                font-family: Montserrat;
                text-transform: lowercase;
                color: #ffffff;
                background: #46457d;
              `}
            >
              Inclusion
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default NavBar2
