import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import "./style.css";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./home/Home"
import Renda from "./rendas/Renda";
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
class App extends Component {

  render() {
    return (
      /*
      <Router>
      <div>
        <h2>Welcome to React Router Tutorial</h2>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
          <li><Link to={'/'} className="nav-link"> Home </Link></li>
          <li><Link to={'/renda'} className="nav-link">Renda</Link></li>
        </ul>
        </nav>
        <hr />
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/renda' component={Renda} />
        </Switch>
      </div>
    </Router>
    */

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
                      <i className="fa fa-fw fa-accessible-icon" style={{ fontSize: '1.75em' }} />
                    </NavIcon >
                    <NavText>
                      Home
                        </NavText>
                  </NavItem>
                  <NavItem eventKey="renda">
                    <NavIcon>
                      <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
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
    );
  }
}

export default App;
