import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

class Button extends Component {
  render() {
    const ButtonComponent = this.props.to || this.props.href ? BtnLink : Btn;
    return (
      <ButtonComponent {...this.props}>{this.props.children}</ButtonComponent>
    );
  }
}

const BtnStyles = css`
  padding: 23px 61px;
  display: inline-block;
  background: ${props => props.theme.colorSecondary};
  color: ${props => props.theme.colorPrimary};
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 3.8px;
  line-height: 1;
`;

const Btn = styled.button`
  ${BtnStyles};
`;

const BtnLink = styled(Link)`
  ${BtnStyles};
`;

export default Button;
