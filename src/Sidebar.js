import React from "react";
import { slide as Menu } from "react-burger-menu";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from "./home/Home"
import Renda from "./rendas/Renda";

export default props => {
  return (
    <Router>
      <div>
        <Menu>
          <a className="menu-item">
            <Link to={'/'} className="nav-link"> Home </Link>
          </a>

          <a className="menu-item" href="/Renda">
            <Link to={'/renda'} className="nav-link">Renda</Link>
          </a>

          <a className="menu-item" href="/pizzas">
            Pizzas
          </a>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/renda' component={Renda} />
          </Switch>
        </Menu>
      </div>
    </Router>
  );
};