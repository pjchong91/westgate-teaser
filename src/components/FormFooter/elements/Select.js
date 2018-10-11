import React, { Component } from 'react';
import styled from 'styled-components';
import theme from './../../../styles/theme';

class Select extends Component {
  render() {
    console.log(this.props, 'what my props');
    return (
      <SelectMenu>
        <option value="" disabled selected>
          {this.props.children}
        </option>
        {this.props.options &&
          this.props.options.map(option => (
            <option value={option.value}>{option.name}</option>
          ))}
      </SelectMenu>
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
  &::placeholder {
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

export default Select;
