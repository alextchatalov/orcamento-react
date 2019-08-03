import React, { Component } from 'react';
import RendaView from './RendaView';

class Renda extends Component {

  constructor(props) {
    super(props);
    this.state = {
      renda: '',
      valor: '',
      rendas: []

    }
  }
  onChange = (event) => {
    event.preventDefault();
    const state = Object.assign({},this.state);
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  onSubmit = (event) => {
    event.preventDefault();
    const rendasList = this.state.rendas.slice();
    rendasList.push(this.state.renda,this.state.valor);
    this.setState({
      renda: '',
      valor: '',
      rendas: rendasList
    });
  }

  render() {
    return (
      
      <RendaView
        rendas={this.state.rendas}
        renda={this.state.renda}
        valor={this.state.valor}
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        />
    );
  }
}

export default Renda;
