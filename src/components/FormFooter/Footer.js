import React from 'react';
import styled from 'styled-components';
import theme from './../../styles/theme.js';

import Map from './../../assets/images/Map.png';
import BeneLogo from './../../assets/images/bene-group.png';
const Footer = () => (
  <FooterWrapper>
    <Text>
      2018 Bene Group. This is not an offering for sale. Illustrations are for
      marketing purposes only and may differ from finished product. The
      developer reserves the right to change or modify the offer, features,
      specifications, and floorplans without prior notice. All ammenities are
      planned and are subject to change without notice.
    </Text>
    <MapImage src={Map} />

    <TextWrapper>
      <Text className="light-gray">
        For more information <br />
        Please call or email
      </Text>

      {/*polymorphic prop - as?? */}
      <Text as="a" className="larger">
        604.370.6700
      </Text>
      <Text as="a" className="larger">
        info@westgateliving.com
      </Text>
    </TextWrapper>

    <TextWrapper>
      <Text className="light-gray">Developed By</Text>
      <ImageContainer>
        <Image src={BeneLogo} alt="Bene Logo" />
      </ImageContainer>
    </TextWrapper>
  </FooterWrapper>
);

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Text = styled.p`
  color: white;
  text-transform: uppercase;
  font-size: 10px;
  text-align: center;
  line-height: 2;
  &.light-gray {
    line-height: 1;
    color: ${theme.colorLightGray};
  }
  &.larger {
    font-size: 14px;
  }
`;

const TextWrapper = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MapImage = styled.img`
  width: 100%;
  margin: 10% 0;
`;

const ImageContainer = styled.div`
  max-width: 100%;
  margin: 20px auto;
`;

const Image = styled.img`
  max-width: 100%;
`;

export default Footer;
