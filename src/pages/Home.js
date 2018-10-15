import React, { Component } from 'react';
import styled from 'styled-components';

import LandingBanner from 'components/LandingBanner';
import Description from 'components/Description';
import Form from 'components/FormFooter/Form';
import Footer from 'components/FormFooter/Footer';

class Home extends Component {
  render() {
    return (
      <Root>
        <LandingBanner />

        <Description />

        <FormFooter>
          <Form />
          <Footer />
        </FormFooter>
      </Root>
    );
  }
}

const Root = styled.div`
  min-height: 100%;
`;

const FormFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colorPurple};
  padding: 2%;
`;

export default Home;
