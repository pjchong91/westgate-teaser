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

        <FormFooter>
          <HeaderText className="purple">
            3 Bedroom Townhomes <br /> in Richmond
          </HeaderText>
          <SubheaderText>
            Register today and live a naturally connected life.
          </SubheaderText>

          <InputField type="text" placeholder="First Name *" />
          <InputField type="text" placeholder="Last Name *" />
          <InputField type="text" placeholder="Email *" />
          <InputField type="text" placeholder="Phone Number" />
          <InputField type="text" placeholder="Employer" />
          <InputField type="text" placeholder="Job Title" />
          <InputField type="text" placeholder="Street" />
          <InputField type="text" placeholder="Apt #, Unit, Suite" />
          <InputField type="text" placeholder="Postcode/Zip" />
          <InputField type="text" placeholder="City" />
          <InputField type="text" placeholder="Province / State" />
          {/* TODO: Dropdown with countries */}
          <SelectMenu type="text" placeholder="Canada">
            <option value="Canada">Canada</option>
          </SelectMenu>
          <SelectMenu type="text" placeholder="Contact Preference">
            <option value="any">Any</option>
            <option value="any">Email</option>
            <option value="any">Phone</option>
            <option value="any">Work</option>
            <option value="any">Agent</option>
            <option value="any">Text Message</option>
          </SelectMenu>
        </FormFooter>
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
  letter-spacing: 1.5px;
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
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.8)
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

  &.purple {
    color: white;
  }
`;

const FormFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colorPurple};
  padding: 2%;
`;

const SubheaderText = styled.h2`
  color: white;
  text-align: center;
  font-size: 16px;
  letter-spacing: 1.5px;
`;

const InputField = styled.input`
  width: 100%;
  background-color: transparent;
  border: 0px;
  border-bottom: 1px solid ${theme.colorLightGray};
  line-height: 2;
  font-size: 16px;
  margin: 10px 0;
  padding: 10px 0;
  color: white;
  &:focus {
    border: 1px solid ${theme.colorYellow};
    outline: none !important;
  }
`;
const SelectMenu = styled.select`
  width: 100%;
  background: transparent;
  color: white;
  border: none;
  border-bottom: 1px solid ${theme.colorLightGray};
  font-size: 16px;
  line-height: 2;
  margin: 10px 0;
  padding: 10px 0;
`;

export default Home;
