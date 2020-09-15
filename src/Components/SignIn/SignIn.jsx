import React from 'react';
import style from './style.module.css';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';



const GreenCheckbox = withStyles({
    root: {
      color: '#9CCB3B',
      '&$checked': {
        color: '#9CCB3B',
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);


const SignIn = (props) => {

    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedF: true,
        checkedG: true,
      });
    
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };


  return(
    <div className = {style.wrapper}>
        <div className = {style.CloseButton}>
        <CloseIcon style = {{color: '#000000'}}/>
        </div>
        <h2 className = {style.MainLabel}>Вход в личный кабинет</h2>
        <h3 className = {style.PhoneInputLabel}>Введите номер телефона</h3>
        <div className = {style.PhoneInput}>
            <TextField id="outlined-basic" label="Введите номер телефона" variant="outlined" style ={{width : '370px'}}/>
        </div>
        <div className = {style.SecurityCodeInput}>
            <TextField id="outlined-basic" label="Введите код из смс" variant="outlined" style ={{width : '370px'}}/>
        </div>
        <div className = {style.CheckBox}>
            <FormControlLabel
            control={<GreenCheckbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}
            label='Указывая номер телефона, я принимаю условия пользовательского соглашения'
            style = {{color: '#000000'}}
            />
        </div>
        <div className = {style.Button} >
        <Button variant="contained" color="primary" style ={{width : '370px', backgroundColor : '#9CCB3B', color: '#ffffff'}}>
            Войти
        </Button>
        </div>
        <div className = {style.BottomLabel}>
            <h4 className = {style.FirstTime}>В первый раз?</h4>
            <h4 className = {style.Register}>Зарегестрироваться</h4>
        </div>
    </div>
  );
}

export default SignIn;