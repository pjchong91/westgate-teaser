import React, { Component } from 'react';
import styled from 'styled-components';
import media from 'src/styles/media';

import imgCaret from 'src/assets/images/caret.svg';

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEnabled: false,
    };
  }

  handleChangeColor = () => {
    this.setState({ isEnabled: true });
  };

  render() {
    return (
      //TODO: React pops warning for using 'selected' vs defaultValue - question no longer showing
      <SelectWrapper>
        <SelectMenu
          className={this.state.color}
          onChange={this.handleChangeColor}
          defaultValue=""
          isEnabled={this.state.isEnabled}
        >
          <option value="" disabled>
            {this.props.children}
          </option>

          {this.props.options &&
            this.props.options.map(option => (
              <option value={option.value} key={option.value}>
                {option.name}
              </option>
            ))}
        </SelectMenu>
      </SelectWrapper>
    );
  }
}

const SelectMenu = styled.select`
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colorLightGray};
  font-size: 16px;
  font-family: 'Rachel';
  line-height: 2;
  margin: 10px 0;
  padding: 10px 0;
  border-radius: 0px;
  -webkit-appearance: none;
  position: relative;
  color: ${props => (props.isEnabled ? 'white' : props.theme.colorLightGray)};

  /* &.disabled {
    color: ${({ theme }) => theme.colorLightGray};
  }

  &.enabled {
    color: white;
  } */
  &:focus {
    border: 1px solid ${({ theme }) => theme.colorYellow};
    outline: none !important;
  }

  @media (min-width: ${media.smup}) {
    width: 46%;
    margin: 2%;
  }
`;

const SelectWrapper = styled.div`
  display: inline;
  ::after {
    content: '';
    width: 30px;
    height: 30px;
    display: inline-block;
    background: url(${imgCaret});
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    /* bottom: 0; */
    transform: translate(-50px, 38px);
  }
`;

export default Select;
