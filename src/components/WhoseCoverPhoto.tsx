import * as React from 'react'
import { css } from 'react-emotion'
import Arrow from '../images/vector.png'


export enum XPosition {
  Left = 'start',
  Center = 'center',
  Right = 'end',
}

export enum YPosition {
  Top = 'start',
  Center = 'center',
  Bottom = 'end',
}

interface CoverPhotoProps {
  headline: string
  imageURL: string
  mobImageURL: string
  xPosition: XPosition
  yPosition: YPosition
  darken?: number
  style?: string
  explainer?: string
  textColor: string
}

export default class WhoseCoverPhoto extends React.Component<CoverPhotoProps> {
  public static defaultProps = {
    darken: 0,
    textColor: '#fff',
  }

  public render() {
    const textAlign =
      this.props.xPosition === XPosition.Center
        ? 'center'
        : this.props.xPosition === XPosition.Left
          ? 'left'
          : 'right'

    return (
      <div
        className={css`
        width: 100vw;
        height: 100vh;
        background: linear-gradient(
          rgba(0, 0, 0, ${this.props.darken}),
          rgba(0, 0, 0, ${this.props.darken})
        ), linear-gradient(
            rgba(0, 0, 0, 0),
            80%,
            rgba(0, 0, 0, 0.9)
        ),
        url("${this.props.imageURL}");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center top;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${this.props.textColor};
        ${this.props.style}
        @media (max-width: 900px) {
          background: url("${this.props.mobImageURL}");
          height: auto;
        }
      `}

      >
          <img src={this.props.mobImageURL} className={css`
            display: none;
            align-items: center;
            @media (max-width: 900px) {
              display: flex;
            }
          `}/>
          <div
          className={css`
            position: absolute;
            text-align: center;
            bottom: 0px;
            width: 100vw;
            text-align: center;
            @media (max-width: 900px) {
              display: none;
            }
          `}>
              <div>
              Scroll to continue
              </div>
              <img
                  src={Arrow}
                  className={css`
                    animation: bounce 4s infinite;
                    @keyframes bounce {
                      0%,
                      100% {
                        transform: translate(0px, 4px);
                      }
                      50% {
                        transform: translate(0px, 14px);
                      }
                    }
                  `}
                />
          </div>
      </div>
    )
  }
}
