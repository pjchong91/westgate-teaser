import React, { Component } from 'react';
import styled from 'styled-components';

import screen from 'src/styles/media';

import Container from 'components/Container';
import Form from 'components/Form/Form';

class SectionRegister extends Component {
  state = {};
  render() {
    return (
      <Wrapper id="register">
        <Container>
          <h2>3&nbsp;Bedroom Townhomes in Richmond</h2>
          <p>Register today and live a naturally connected life.</p>
          <Form />
        </Container>
      </Wrapper>
    );
  }
}

const Wrapper = styled.section`
  background: ${props => props.theme.colorPrimary};
  color: #fff;
  h2 {
    max-width: 520px;
    margin: 0 auto;
    margin-bottom: 30px;
    white-space: normal;
    @media (max-width: ${screen.sm}) {
      max-width: 300px;
    }
  }
  p {
    margin-bottom: 7.5%;
    letter-spacing: 1.25px;
  }
`;

export default SectionRegister;
