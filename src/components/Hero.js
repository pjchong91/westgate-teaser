import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import scrollToElement from 'scroll-to-element';

class Hero extends Component {
  state = {};

  handleClickRegister = () => {
    scrollToElement('#register');
  };

  render() {
    return (
      <Wrapper>
        <LogoWrapper>
          <span />
          <span />
          <span />
          <span />
          <Logo src="/assets/images/westgate-logo.svg" alt="" />
          <WhiteFade />
        </LogoWrapper>
        <Heading src="/assets/images/westgate.svg" />
        <Register onClick={this.handleClickRegister}>Register</Register>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const LogoWrapper = styled.div`
  position: absolute;
  display: inline-block;
  width: 90%;
  max-width: 590px;
  margin: 0 auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  span {
    position: absolute;
    width: 200vw;
    height: 200vh;
    background: ${props => props.theme.colorPrimary};
    &:nth-child(1) {
      bottom: calc(100% - 1px);
      left: 0;
    }
    &:nth-child(2) {
      left: calc(100% - 1px);
      top: 0;
    }
    &:nth-child(3) {
      right: 0;
      top: calc(100% - 2px);
    }
    &:nth-child(4) {
      right: calc(100% - 1px);
      bottom: 0;
    }
  }
`;

const Logo = styled.img`
  display: block;
  position: relative;
  z-index: 10;
`;

const Heading = styled.img`
  position: absolute;
  left: 50%;
  bottom: 5%;
  transform: translateX(-50%);
  width: 60%;
  max-width: 255px;
`;

const Register = styled.a`
  position: absolute;
  padding: 30px;
  top: 15px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 3.89px;
  cursor: pointer;
`;

const animateWhiteFade = keyframes`
  to {
    opacity: 0;
  }
`;

const WhiteFade = styled.div`
  width: 98%;
  height: 98%;
  position: absolute;
  z-index: 1;
  background: #fff;
  top: 1px;
  left: 1px;
  right: 1px;
  bottom: 1px;
  opacity: 1;
  animation: ${animateWhiteFade} 2s forwards;
  animation-delay: 0.75s;
`;

export default Hero;
