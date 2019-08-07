import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/styles';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});


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
    event.persist();
    console.log(event);
    const rendasList = this.state.rendas.slice();
    rendasList.push({renda:this.state.renda, valor:this.state.valor});
    console.log(rendasList);
    this.setState({
      renda: '',
      valor: '',
      rendas: rendasList
    });
  }

  render() {
    const {classes: classe} = this.props;
    return (
      <div>
        <form className={classe} onSubmit={this.onSubmit}>
            <TextField
                required
                id="rend"
                label="Renda"
                name="renda"
                className={classe.textField}
                margin="normal"
                value={this.state.renda}
                onChange={this.onChange}
            />
               <TextField
                required
                id="valor"
                label="Valor"
                name="valor"
                className={classe.textField}
                margin="normal"
                value={this.state.valor}
                onChange={this.onChange}
            />
          <Button variant="contained" color="primary" type="submit">
            Adicionar
          </Button>
        </form>
        {
        this.state.rendas.map((renda,i) =>  <div key={i}>{renda.renda}: {renda.valor}</div>)
        }
      </div>
      /*
      <RendaView
        rendas={this.state.rendas}
        renda={this.state.renda}
        valor={this.state.valor}
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        />
        */
    );
  }
}

export default withStyles(styles)(Renda)
