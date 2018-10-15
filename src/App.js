import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import { hot } from 'react-hot-loader';
import store from 'src/redux/store';
import history from 'src/plugins/history';
import 'src/styles/global.css';

class App extends Component {
  generateRoutes() {
    return process.env.__ROUTES__.map((route, index) => {
      const { path, component } = route;
      const Component = require(`src/${component}`).default;
      return <Route exact path={path} component={Component} key={index} />;
    });
  }

  componentDidMount() {
    new window.GambitSmoothScroll({
      amount: 150,
      speed: 1500,
    });
  }

  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route
            render={({ location }) => (
              <AppWrapper>
                <TransitionGroup>
                  <CSSTransition
                    key={location.key}
                    timeout={500}
                    classNames="fade"
                  >
                    <Switch location={location}>{this.generateRoutes()}</Switch>
                  </CSSTransition>
                </TransitionGroup>
              </AppWrapper>
            )}
          />
        </Router>
      </Provider>
    );
  }
}

const AppWrapper = styled.div`
  background: url('assets/images/westgate-bg.jpg');
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  .fade-enter {
    opacity: 0;
  }
  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: all 0.5s;
  }
  .fade-exit {
    opacity: 1;
  }
  .fade-exit.fade-exit-active {
    opacity: 0;
    transition: all 0.5s;
  
`;

export default hot(module)(App);
