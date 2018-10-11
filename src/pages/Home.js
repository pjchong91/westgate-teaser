import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from './../styles/theme.js';

import HeroImage from './../assets/images/westgate_mobile.svg';
import HeroBackground from './../assets/images/Hero-Background.jpeg';
import Logo from './../assets/images/Logo@4x.png';
import Homes from './../assets/images/Homes.png';
import DescriptionBackground from './../assets/images/Description-Background.png';

class Home extends Component {
  render() {
    return (
      <Root>
        <HeroSection>
          <RegisterLink>Register</RegisterLink>
          <LogoContainer>
            <Image src={Logo} alt="Westgate Logo" />
          </LogoContainer>
        </HeroSection>

        <DescriptionSection>
          <HeaderText>
            Luxurious
            <br /> Parkside Homes
          </HeaderText>
          <ImageContainer>
            <Image src={Homes} alt="Homes" />
          </ImageContainer>
          <TextWrapper>
            <DescriptionText>
              A gateway to the city - a naturally spectacular place to call
              home, the homes of Westgate give you both. Together with the
              contemporary style designed into every home, Westgate gives you a
              naturally luxurious lifestyle that is second to none.
            </DescriptionText>
          </TextWrapper>
        </DescriptionSection>
      </Root>
    );
  }
}

const Root = styled.div`
  min-height: 100%;
`;

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

const LogoContainer = styled.div`
  max-width: 60%;
`;

const Image = styled.img`
  max-width: 100%;
`;

const ImageContainer = styled.div`
  max-width: 100%;
`;
const RegisterLink = styled.a`
  text-transform: uppercase;
  letter-spacing: 1.5;
  color: white;
  &:hover {
    text-decoration: underline;
  }
`;

const DescriptionSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const DescriptionText = styled.p`
  text-align: center;

  line-height: 2;
`;

const TextWrapper = styled.div`
  background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0.9)
    ),
    url(${DescriptionBackground});
  background-position: center;
  background-size: 110%;
  background-repeat: no-repeat;
  padding: 8% 0;
`;

const HeaderText = styled.h1`
  font-style: italic;
  color: ${theme.colorPurple};
  text-align: center;
  font-size: 24px;
  text-transform: uppercase;
  padding: 8% 0;
`;

export default Home;
