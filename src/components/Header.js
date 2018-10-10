import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Logo from 'components/Logo';
import Intl from 'src/components/Intl';

export default class Header extends Component {
  render() {
    return (
      <Intl>
        {(t, { getLocaleURL }) => (
          <Root>
            <Logo />
            <nav>
              <Link to={`${getLocaleURL()}/`}>Home</Link>
              <Link to={`${getLocaleURL()}/about`}>About</Link>
            </nav>
          </Root>
        )}
      </Intl>
    );
  }
}

const Root = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  background: #333;
  z-index: 100;
  text-align: center;
  nav {
    margin-top: 10px;
    text-align: center;
  }
  a {
    color: ${props => props.theme.colorPrimary};
    margin: 0 15px;
  }
`;
