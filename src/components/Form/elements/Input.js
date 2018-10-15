import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class Input extends Component {
  static propTypes = {
    type: PropTypes.string,
  };

  static defaultProps = {
    type: 'text',
  };

  render() {
    return <Wrapper type={this.props.type} {...this.props} />;
  }
}

const Wrapper = styled.input`
  display: block;
  padding: 15px 5px;
  margin-bottom: 30px;
  border: 1px solid transparent;
  background: transparent;
  border-bottom: 1px solid #80767A;
  font-size: 15px;
  font-family: 'Gotham-Light';
  color: #fff;
  outline: none;
  transition: all 0.25s;
  &::placeholder {
    color: #80767A;
  }
  &:focus {
    border: 1px solid ${props => props.theme.colorSecondary};
  }
`;

export default Input;
