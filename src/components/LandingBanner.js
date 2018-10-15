import React, { Component } from 'react';
import styled from 'styled-components';
import theme from './../styles/theme';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import HeroImage from './../assets/images/westgate_mask.svg';
import HeroBackground from './../assets/images/Hero-Background.jpeg';
import Logo from './../assets/images/Logo@4x.png';

class LandingBanner extends Component {
  render() {
    return (
      <HeroSection>
        <AnchorLink className="anchor-link" href="#register">
          Register
        </AnchorLink>
        <MaskContainer className="logo-w">
          <Image src={HeroImage} />
          <Span />
          <Span />
          <Span />
          <Span />
        </MaskContainer>

        <LogoContainer>
          <Image className="logo" src={Logo} alt="Westgate Logo" />
        </LogoContainer>
      </HeroSection>
    );
  }
}

const HeroSection = styled.div`
  background: url(${HeroBackground});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 80% 10%;
  background-attachment: fixed;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10% 0;
  position: relative;
  overflow: hidden;

  .anchor-link {
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: white;
    font-family: 'Futura';
    z-index: 99;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const MaskContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  position: relative;
  &.logo-w {
    max-width: 590px;
  }
`;

const LogoContainer = styled.div`
  max-width: 60%;
  z-index: 99;
`;

const Image = styled.img`
  max-width: 100%;
  width: 100%;
  z-index: 2;
  &.logo {
    max-width: 255px;
  }
`;

const Span = styled.span`
  background-color: ${theme.colorPurple};
  position: absolute;
  height: 100vh;
  width: 100vw;
  &:nth-child(2) {
    bottom: 99%;
    left: 0%;
  }
  &:nth-child(3) {
    right: 0;
    top: 95%;
  }
  &:nth-child(4) {
    right: 99%;
    bottom: 0%;
  }

  &:last-child {
    left: 99%;
    top: 0%;
  }
`;

export default LandingBanner;
