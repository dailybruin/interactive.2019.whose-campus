import React, { useState } from 'react';
import HamburgerMenu from "react-hamburger-menu";
import { css } from 'emotion';
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

interface IDropdownArticle {
  name: string;
  link: string;
}

interface IDropdownSection {
  name: string;
  articles: IDropdownArticle[];
}

interface IDropdownMenuProps {
  title?: string;
  titleBGColorActive: string;
  dropdownColor: string;
  articleTabColor: string;
  sections: IDropdownSection[];
}

interface IDropdownMenuState {
  active: boolean;
  index: number;
}

type IDropdownSectionComponentProps = IDropdownSection & {
  expand: boolean,
  toggleExpand: () => void,
  dropdownColor: string;
  articleTabColor: string;
};

const DropdownSection: React.SFC<IDropdownSectionComponentProps> = ({
  expand, name, articles, toggleExpand, dropdownColor, articleTabColor,
}) => {
  return (
    <div className={css`
      position: relative;
      `}>
      <div className={css`
        z-index: 1;
        background-color: ${dropdownColor};
        color: white;
        height: 3rem;
        font-size: 1rem;
        display: flex;
        box-shadow: 0px 3px 5px 0px #444;  
      `} onClick={toggleExpand}>
        <div className={css`
          margin: auto auto auto 3rem;
        `}>{name}</div>
        <div className={css`
          height: 100%;
          width: 20vw;
          font-size: 1.5rem;
          transform: translateY(0.6rem);
          text-align: center;
          margin: 0;
        `}>
        { expand ? <FaAngleUp /> : <FaAngleDown /> }
        </div>
      </div>
      <div className={css`
        ${expand ? "" : "height: 0;"}
        z-index: 0;
        overflow: hidden;
        padding-left: 20vw;
        transition: all 0.3s;
        color: white;
      `}>
        {articles.map(article => <a className={css`
          display: block;
          color: white;
          text-decoration: none;
          &:hover {
            color: white;
            text-decoration: none;
          }
          height: 3rem;
          padding-left: 10vw;
          background-color: ${articleTabColor};
          box-shadow: 0px 3px 5px 0px #444;  
        `} href={article.link}>
          <div className={css`
            transform: translateY(50%);
            width: 80vw;
            color: white;
          `}>{article.name}</div>
        </a>)}
      </div>
    </div>
  );
}

export class DropdownMenu extends React.Component<IDropdownMenuProps, IDropdownMenuState> {
  state = {
    active: false,
    index: -1,
  };

  isSelected = () => this.state.index >= 0;

  setActive = (active: boolean) => this.setState({active});

  toggleActive = () => this.setState(({active}) => ({ active: !active }));

  setIndex = (index: number) => this.setState({index});

  addBarColorClass = (className: string) => {
    const BGColoredClassName = css`
      background-color: ${this.props.titleBGColorActive};
    `;
    return [className, this.state.active ? BGColoredClassName : ''].join(' ');
  }

  render() {
    const {title, sections, dropdownColor, articleTabColor} = this.props;
    const {active, index} = this.state;

    return (
      <div className={css`
        font-family: Montserrat;
      `}>
        <div className={css`
          width: 100%;
          position: absolute;
          top: 0;
          left: 0;
          height: ${active ? '100vh' : '0'};
          background-color: ${dropdownColor};
          transition: all 0.3s;
        `}>
        <div className={this.addBarColorClass(css`
          padding: 1.5rem;
          transition: all 0.3s;
          display: inline-block;
          width: 100%;
          display: flex;

        `)}>
          <div className={css`
            display: inline-block;
            margin: 0 1rem;
          `}>
            <HamburgerMenu isOpen={active} menuClicked={this.toggleActive} color="white" />
          </div>
          <div className={css`
            display: inline-block;
            color: white;
            letter-spacing: 3px;
            font-size: 1.5rem;
            margin: 0 auto;
          `}>{title}</div>
        </div>
        <div className={css`
          width: 100vw;
          ${active ? 'height: 100%' : 'height: 0;'}
          overflow: hidden;
          transition: all 0.3s;
        `}>
          {sections.map((section, i) => <DropdownSection
              expand={i === index}
              toggleExpand={() => this.setIndex(i === index ? -1 : i)}
              dropdownColor={dropdownColor}
              articleTabColor={articleTabColor}
              {...section}
              />)}
        </div>

        </div>
      </div>
    );
  }
}
