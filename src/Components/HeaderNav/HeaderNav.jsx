import React from 'react';
import style from './style.module.css'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
 
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
    },
    secondary: {
      main: '#9CCB3B',
    },
  },
});

const HeaderNav = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className = {style.wrapper}>
       <ThemeProvider theme={theme}>
        <div className ={style.buttons}>
            <Button variant="contained" color='primary'  size="small" style ={{textTransform: 'none'}}>
              <h4 className = {style.selected}>Все</h4>
            </Button>
            <Button color = 'secondary' style ={{textTransform: 'none'}} className = {style.menuButton}><h4 className = {style.unselected}>Суши</h4></Button>
            <Button color = 'secondary' style ={{textTransform: 'none'}} className = {style.menuButton}><h4 className = {style.unselected}>Пицца</h4></Button>
            <Button color = 'secondary' style ={{textTransform: 'none'}} className = {style.menuButton}><h4 className = {style.unselected}>Бургеры</h4></Button>
            <Button color = 'secondary' style ={{textTransform: 'none'}} className = {style.menuButton}><h4 className = {style.unselected}>Фастфуд</h4></Button>
            <Button color = 'secondary' style ={{textTransform: 'none'}} className = {style.menuButton}><h4 className = {style.unselected}>Шашлыки</h4></Button>
            <Button color = 'secondary' style ={{textTransform: 'none'}} className = {style.menuButton}><h4 className = {style.unselected}>Азиатская</h4></Button>
            <Button color = 'secondary' style ={{textTransform: 'none'}} className = {style.menuButton}><h4 className = {style.unselected}>Десерты</h4></Button>
            <Button color = 'secondary' style ={{textTransform: 'none'}} className = {style.menuButton}><h4 className = {style.unselected}>Здоровая еда</h4></Button>
            <div className = {style.more}>
              <Button color = 'secondary' style ={{textTransform: 'none'}}><h4 className = {style.unselected}>Ещё</h4></Button>
              <div className ={style.moreButton}>
                <ExpandMoreIcon style={{ fontSize: 40, color: '#FFFFFF'}}/>
              </div>
            </div>
          </div>
          </ThemeProvider>
        </div>
    </div>
  );
}

export default HeaderNav;