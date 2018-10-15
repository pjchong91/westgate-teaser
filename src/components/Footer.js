import React, { Component } from 'react';
import styled from 'styled-components';

import screen from 'src/styles/media';

import Container from 'components/Container';

class Footer extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Disclosure>
            &copy; 2018 Bene group. This is not an offering for sale.
            Illustrations are for marketing purposes only and may differ from
            finished product. The developer reserves the right to change or
            modify the offer, features, specifications and floorplans without
            prior notice. All amenities are planned and are subject to change
            without notice. E&amp;OE.
          </Disclosure>
          <FooterContent>
            <Map src="/assets/images/map.svg" />
            <Contact>
              <h5>
                FOR MORE INFORMATION,
                <br /> PLEASE CALL OR EMAIL
              </h5>
              <p>
                <a href="tel:6043706700">604.370.6700</a>
                <a href="mailto:info@westgateliving.com">
                  INFO@WESTGATELIVING.COM
                </a>
              </p>
              <Separator />
              <h5>Developed By</h5>
              <a
                href="https://www.benehomes.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/assets/images/bene-group.png" alt="" />
              </a>
            </Contact>
          </FooterContent>
        </Container>
      </Wrapper>
    );
  }
}

const Wrapper = styled.footer`
  background: ${props => props.theme.colorPrimary};
  padding: 0 20px;
  color: #fff;
  padding-top: 30px;
  & > *:first-child {
    &::before {
      display: none;
    }
  }
`;

const Disclosure = styled.p`
  max-width: 972px;
  margin: 0 auto;
  margin-bottom: 7.5%;
  color: #fff;
  font-size: 10px;
  text-transform: uppercase;
  line-height: 1.75;
  @media (max-width: ${screen.sm}) {
    margin-bottom: 65px;
  }
`;

const Map = styled.img`
  width: 100%;
  display: inline-block;
  margin-bottom: 7%;
  @media (max-width: ${screen.sm}) {
    margin-bottom: 70px;
  }
`;

const Contact = styled.div`
  font-size: 12px;
  text-align: left;
  h5 {
    font-family: 'Futura Std';
    letter-spacing: 1px;
    margin-bottom: 15px;
  }
  a {
    color: #fff;
    display: block;
    line-height: 1.5;
  }
  @media (max-width: ${screen.sm}) {
    text-align: center;
  }
`;

const Separator = styled.div`
  margin-bottom: 57px;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #80767a;
  max-width: 820px;
  margin: 0 auto;
  & > * {
    &:first-child {
      width: 65%;
    }
    &:last-child {
      width: 25%;
    }
  }
  @media (max-width: ${screen.sm}) {
    flex-wrap: wrap;
    & > * {
      &:first-child {
        width: 100%;
      }
      &:last-child {
        width: 100%;
      }
    }
  }
`;

export default Footer;
