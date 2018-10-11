import React, { Component } from 'react';
import styled from 'styled-components';
import theme from './../styles/theme.js';

import DescriptionBackground from './../assets/images/Description-Background.png';
import Homes from './../assets/images/Homes.png';

class Description extends Component {
  render() {
    return (
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
            A gateway to the city - a naturally spectacular place to call home,
            the homes of Westgate give you both. Together with the contemporary
            style designed into every home, Westgate gives you a naturally
            luxurious lifestyle that is second to none.
          </DescriptionText>
        </TextWrapper>
      </DescriptionSection>
    );
  }
}

const DescriptionSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const HeaderText = styled.h1`
  font-style: italic;
  color: ${theme.colorPurple};
  text-align: center;
  font-size: 24px;
  text-transform: uppercase;
  padding: 8% 0;

  &.purple {
    color: white;
  }
`;

const ImageContainer = styled.div`
  max-width: 100%;
`;

const Image = styled.img`
  max-width: 100%;
`;

const TextWrapper = styled.div`
  background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.8)
    ),
    url(${DescriptionBackground});
  background-position: center;
  background-size: 110%;
  background-repeat: no-repeat;
  padding: 8% 0;
`;

const DescriptionText = styled.p`
  text-align: center;

  line-height: 2;
`;

export default Description;
