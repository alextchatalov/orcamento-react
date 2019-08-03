import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
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
  }));

const RendaView = (props) => (
    <div>
        <form className="RendaView" onSubmit={props.onSubmit}>
            <TextField
                required
                id="rend"
                label="Renda"
                name="renda"
                className={"RendaView.useStyles.textField"}
                margin="normal"
                value={props.renda}
                onChange={props.onChange}
            />
               <TextField
                required
                id="valor"
                label="Valor"
                name="valor"
                className={"RendaView.useStyles.textField"}
                margin="normal"
                value={props.valor}
                onChange={props.onChange}
            />
          <Button variant="contained" color="primary" type="submit">
            Adicionar
          </Button>
        </form>
        {
        props.rendas.map((renda) => renda)
        }
      </div>
);
export default RendaView;