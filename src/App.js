import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './HelloWorld';
import ContaClick from './ContaClick';
import "./style.css";
import SideBar from "./Sidebar";

class App extends Component {
 
  render() {
    const nomes = ["Lucas", "Tableless", "Leitor", "Maria", "João", "Ana"];
    return (
      <div className="App">
        <SideBar />

<div id="page-wrap">
  <h1>Cool Restaurant 🍔🍕</h1>
  <h2>Check out our offerings in the sidebar!</h2>
</div>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        
        {nomes.map((n, i) => <HelloWorld nome={n} key={i} />)}
        <ContaClick />
        <label>
          Nome:
    <input type="text" name="name" />
        </label>
      </div>
    );
  }
}

export default App;
