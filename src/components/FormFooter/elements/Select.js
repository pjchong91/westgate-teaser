import React, { Component } from 'react';
import styled from 'styled-components';
import theme from './../../../styles/theme';

import Caret from './../../../assets/images/caret.svg';

class Select extends Component {
  render() {
    return (
      //TODO: React pops warning for using 'selected' vs defaultValue - question no longer showing
      <SelectWrapper>
        <SelectMenu defaultValue="" className="button">
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
  color: white;
  border: none;
  border-bottom: 1px solid ${theme.colorLightGray};
  font-size: 16px;
  line-height: 2;
  margin: 10px 0;
  padding: 10px 0;
  border-radius: 0px;
  -webkit-appearance: none;
  position: relative;
  /* TODO: How to colour just the placeholder/disabled value in the light gray colour? */
  &option:disabled {
    color: ${theme.colorLightGray};
  }
  &:focus {
    border: 1px solid ${theme.colorYellow};
    outline: none !important;
  }

  @media (min-width: 768px) {
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
    background: url(${Caret});
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    /* bottom: 0; */
    transform: translate(-50px, 38px);
  }
`;

export default Select;
