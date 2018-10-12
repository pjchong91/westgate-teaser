import React, { Component } from 'react';
import styled from 'styled-components';
import theme from './../styles/theme.js';

import LandingBanner from './../components/LandingBanner.js';
import Description from './../components/Description.js';
import Form from './../components/FormFooter/Form.js';
import Footer from './../components/FormFooter/Footer.js';

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
  background-color: ${theme.colorPurple};
  padding: 2%;
`;

export default Home;
