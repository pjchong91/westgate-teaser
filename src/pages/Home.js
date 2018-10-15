import React, { Component } from 'react';
import styled from 'styled-components';

import Hero from 'components/Hero';
import Footer from 'components/Footer';
import SectionContent from 'components/Sections/Content';
import SectionRegister from 'components/Sections/Register';

class Home extends Component {
  handleClick = () => {
  }
  
  render() {
    return (
      <Wrapper onClick={this.handleClick}>
        <Hero />
        <SectionContent />
        <SectionRegister />
        <Footer/>
      </Wrapper>
    );
  }
}

const Wrapper = styled.main``;

export default Home;
