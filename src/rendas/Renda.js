import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import List from './List';

class Renda extends Component {

  constructor(props) {
    super(props);
    this.state = {
      renda: '',
      valor: '',
      items: []

    }
  }
  onChangeRenda = (event) => {
    this.setState({ renda: event.target.value });
  }
  onChangeValor = (event) => {
    this.setState({ valor: event.target.value });
  }
  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      renda: '',
      valor: '',
      items: [...this.state.items, this.state.renda, this.state.valor]
    });
  }

  render() {
    return (
      <div>
        <form className="Renda" onSubmit={this.onSubmit}>
          <TextField
            id="renda"
            label="Renda"
            margin="normal"
            value={this.state.renda}
            onChange={this.onChangeRenda}
          />
          <TextField
            id="valor"
            label="Valor"
            margin="normal"
            value={this.state.valor}
            onChange={this.onChangeValor}
          />
          <button>Adicionar</button>
        </form>
        <List items={this.state.items} />
      </div>

    );
  }
}

export default Renda;
