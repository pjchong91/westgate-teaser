import React, { Component } from 'react';
import styled from 'styled-components';

import screen from 'src/styles/media';
import Container from 'components/Container';

class SectionContent extends Component {
  state = {};
  render() {
    return (
      <Wrapper>
        <Silhouette src="/assets/images/westgate-logo-2.svg" />
        <Container>
          <h2>Luxurious <br/>Parkside Homes</h2>
          <Image src="/assets/images/home.jpg" />
          <p>
            A gateway to the city - a naturally spectacular place to call home,
            the homes of Westgate give you both. Together with the contemporary
            style designed into every home, Westgate gives you a naturally
            luxurious lifestyle that is second to none.
          </p>
        </Container>
      </Wrapper>
    );
  }
}

const Wrapper = styled.section`
  position: relative;
  p {
    font-family: 'Futura Std Book';
    max-width: 728px;
    margin: 0 auto;
    line-height: 2;
  }
  & > * {
    position: relative;
  }
  h2 {
    max-width: 460px;
    margin: 0 auto;
    @media (max-width: 767px) {
      max-width: 350px;
    }
  }
`;

const Image = styled.img`
  max-width: 972px;
  margin-top: 6.5%;
  margin-bottom: 6.5%;
  width: 100%;
`;

const Silhouette = styled.img`
  position: absolute;
  bottom: 0;
  right: 40%;
  height: 50%;
  width: auto;
  @media (max-width: ${screen.sm}) {
    right: 15%;
  }
`;

export default SectionContent;
