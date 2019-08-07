import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import "./style.css";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./home/Home"
import Renda from "./rendas/Renda";
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { createMuiTheme } from '@material-ui/core';
import {ThemeProvider} from '@material-ui/styles'

const theme = createMuiTheme({
  status: {
  },
});

class App extends Component {

  render() {
    return (
      <ThemeProvider theme={theme}>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>


        <Router>
          <Route render={({ location, history }) => (
            <React.Fragment>
              <SideNav
                onSelect={(selected) => {
                  const to = '/' + selected;
                  if (location.pathname !== to) {
                    history.push(to);
                  }
                }}
              >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">
                  <NavItem eventKey="home">
                    <NavIcon>
                    <i className="material-icons">
                      home
                    </i>
                    </NavIcon >
                    <NavText>
                      Home
                        </NavText>
                  </NavItem>
                  <NavItem eventKey="renda">
                    <NavIcon>
                    <i className="material-icons">
                      attach_money
                    </i>
                    </NavIcon>
                    <NavText>
                      Renda
                    </NavText>
                  </NavItem>
                </SideNav.Nav>
              </SideNav>
              <main>
                <Route path="/home" component={props => <Home />} />
                <Route path="/renda" component={props => <Renda />} />
              </main>
            </React.Fragment>
          )}
          />
        </Router>
      </div>
      </ThemeProvider>
    );
  }
}

export default App;
