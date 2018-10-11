import React, { Component } from 'react';
import styled from 'styled-components';
import theme from './../../../styles/theme';

class Input extends Component {
  render() {
    return <InputField type={this.props.type} {...this.props} />;
  }
}

const InputField = styled.input`
  width: 100%;
  background-color: transparent;
  border: 0px;
  border-bottom: 1px solid ${theme.colorLightGray};
  line-height: 2;
  font-size: 16px;
  margin: 10px 0;
  padding: 10px 0;
  color: white;
  &:focus {
    border: 1px solid ${theme.colorYellow};
    outline: none !important;
  }

  @media (min-width: 768px) {
    width: 46%;
    margin: 2%;
  }
`;

export default Input;
