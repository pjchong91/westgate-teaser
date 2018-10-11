import React, { Component } from 'react';
import styled from 'styled-components';
import theme from './../styles/theme';

import HeroImage from './../assets/images/westgate_mobile.svg';
import HeroBackground from './../assets/images/Hero-Background.jpeg';
import Logo from './../assets/images/Logo@4x.png';

class LandingBanner extends Component {
  render() {
    return (
      <HeroSection>
        <RegisterLink>Register</RegisterLink>
        <LogoContainer>
          <Image src={Logo} alt="Westgate Logo" />
        </LogoContainer>
      </HeroSection>
    );
  }
}

const HeroSection = styled.div`
  background: url(${HeroImage}), url(${HeroBackground});
  background-size: cover, cover;
  background-repeat: no-repeat;
  background-position: center, center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10% 0;
`;

const RegisterLink = styled.a`
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: white;
  &:hover {
    text-decoration: underline;
  }
`;

const LogoContainer = styled.div`
  max-width: 60%;
`;

const Image = styled.img`
  max-width: 100%;
`;

export default LandingBanner;
