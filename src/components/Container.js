import React, { Component } from 'react';
import styled from 'styled-components';

class Container extends Component {
  render() {
    return <Wrapper>{this.props.children}</Wrapper>;
  }
}

const Wrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  &::before, &::after {
    content: '';
    display: block;
    padding-top: 10%;
  }
`;

export default Container;
