import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import $ from 'jquery';

const server = "http://localhost:8081";

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#009688',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

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
  root: {
    width: '20%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
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

  componentWillMount() {
    $.ajax({
      url: server + '/api/v1/rendas',
      data: 'json',
      success: function(resposta) {
        this.setState({rendas:resposta})
      }.bind(this)
    });
  }

  onChange = (event) => {
    event.preventDefault();
    const state = Object.assign({}, this.state);
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  onSubmit = (event) => {
    event.preventDefault();
    $.ajax({
      url: server + '/api/v1/rendas',
      contentType:'application/json',
      dataType:'json',
      type:'POST',
      data:JSON.stringify({renda:this.state.renda, valor:this.state.valor}),
      success: function(resposta) {
        console.log('Renda salva com sucesso!');
        this.setState({
          rendas: resposta
        });
      }.bind(this),
      error: function(error) {
        console.log('Ocorreu um erro: ', JSON.stringify(error));
      }
    })
  }

  render() {
    const { classes: classe } = this.props;
    return (
      <div>
        <form className={classe} onSubmit={this.onSubmit.bind()}>
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
          <br/>
          <Button variant="contained" color="primary" type="submit">
            Adicionar
          </Button>
        </form>
        <div align="center">
          <Paper className={classe.root}>
            <Table >
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">Renda</StyledTableCell>
                  <StyledTableCell align="left">Valor</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.rendas.map((renda, i) => (
                  <StyledTableRow key={i}>
                    <StyledTableCell component="th" scope="row">
                      {renda.renda}
                    </StyledTableCell>
                    <StyledTableCell align="right">{renda.valor}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </div>
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
