import React from 'react';
import style from './style.module.css'
import { makeStyles } from '@material-ui/core/styles';
import AdressMenu from '../AdressMenu/AdressMenu';
import SearchIcon from '@material-ui/icons/Search';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import EdaLogo from './EdaLogo.png'
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import SignIn from '../SignIn/SignIn';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));



const Header = () => {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div className={style.wrapper}>
      <div className ={style.leftSide}>
        <img src = {EdaLogo} className = {style.logo}/>
        <div className = {style.menu}>
          <AdressMenu/>
        </div>
      </div>
        <div className ={style.rigthSide}>
          <div className = {style.search}>
            <div className = {style.searchIcon}>
              <SearchIcon style={{ fontSize: 30 }} />
            </div>
            <h3 className ={style.headerText}  style ={{textTransform: 'none'}}>Поиск</h3>
          </div>
          <div className = {style.signIn}>
            <div className = {style.enterIcon}>
              <ExitToAppIcon style={{ fontSize: 30 }} />
            </div>
            <h3 classNmae ={style.headerText}  style ={{textTransform: 'none'}} onClick={handleToggle}>Войти</h3>
          </div>
          <div className = {style.cartIcon}>
            <ShoppingCartIcon style={{ fontSize: 30 }} />
          </div>
        </div>
        <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
          <SignIn/>
        </Backdrop>
    </div>

  );
}

export default Header;