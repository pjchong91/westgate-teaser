import React, { Component } from 'react';
import styled from 'styled-components';
import media from 'src/styles/media';

import Button from 'components/Button';

class ThankYou extends Component {
  state = {}
  render() { 
    return <Wrapper>
      <Content>
        <Logo src="/assets/images/westgate.svg" alt=""/>
        <p>Thank you for expressing interest in Westgate.<br/>More information will be available soon.</p>
        <Button to="/">Back to Home</Button>
      </Content>
      <LogoBG  src="/assets/images/westgate-bg-logo-thank-you.svg"/>
    </Wrapper>
  }
}

const Wrapper = styled.main`
  min-height: 100vh;
  background: #3A2D33;
  position: relative;
  color: #fff;
`

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 376px;
  font-family: 'Futura Std Book';
  p {
    line-height: 1.75;
    margin-bottom: 85px;
  }
`

const LogoBG = styled.img`
  position: absolute;
  bottom: 0;
  right: 40%;
  pointer-events: none;
  width: 100%;
  max-width: 1000px;
  @media (max-width: ${media.sm}) {
    right: 10%;
    width: 200%;
  }
`

const Logo = styled.img`
  display: block;
  margin: 0 auto;
  margin-bottom: 85px;
`

 
export default ThankYou;