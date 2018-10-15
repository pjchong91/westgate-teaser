import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class Select extends Component {
  static propTypes = {
    label: PropTypes.string
  }
  
  state = {
    value: this.props.defaultValue,
  };

  handleChange = e => {
    this.setState({value: e.target.value});
  }

  render() {
    return (
      <Wrapper className={this.state.value ? 'updated' : ''}>
        <Label>{this.props.label}</Label>
        <InputSelect {...this.props} onChange={this.handleChange}>
          <option value="" disabled>{this.props.label}</option>
          {this.props.children}
        </InputSelect>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  width: 100%;
  display: block;
  position: relative;
  margin-bottom: 30px;
  &::after {
    content: '';
    width: 22px;
    height: 10px;
    position: absolute;
    top: 50%;
    right: 5px;
    background: url('/assets/images/icons/caret.svg');
    background-size: 100% 100%;
    transform: translateY(-50%);
  }
  &.updated {
    select {
      color: #fff;
    }
    label {
      opacity: 0;
    }
  }
  select {
    color: transparent;
  }
  label {
    opacity: 1;
  }
`;

const InputSelect = styled.select`
  width: 100%;
  display: block;
  padding: 15px 5px;
  
  border: 1px solid transparent;
  border-bottom: 1px solid #80767A;
  border-radius: 0;
  background: rgba(244, 241, 235, 0.5);
  -webkit-appearance: none;
  outline: none;
  font-size: 15px;
  font-family: 'Gotham-Light';
  color: rgba(0, 0, 0, 0.8);
  outline: none;
  height: 50px;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent;
  transition: all 0.25s;
  &:focus {
    border: 1px solid ${props => props.theme.colorSecondary};
  }
`;

const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  color: #80767A;
  pointer-events: none;
  font-family: 'Gotham-Light';
`;

export default Select;
