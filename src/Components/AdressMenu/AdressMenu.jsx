import React from 'react';
import style from './style.module.css';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ClearIcon from '@material-ui/icons/Clear';


const styles = {
  root: {
    fontFamily: 'Roboto',
    borderRadius: 3,
    border: 0,
    color: 'black',
    height: 48,
    padding: '0 30px',
  },
};

const AdressMenu = (props) => {




  const { classes, children, className, ...other } = props;

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
       <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className={clsx(classes.root, className)} {...other}  style ={{textTransform: 'none'}}>
      <LocationOnIcon />
      <h3>ул. Петровско-Разумоская 17</h3>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <div className = {style.selectAdress}><MenuItem onClick={handleClose}> <LocationOnIcon className ={style.selectAdressIcon}/><h3 className ={style.selectAdressItem}>{'Введите адрес доставки  ｜ '}</h3><ClearIcon className ={style.selectAdressIcon}/></MenuItem></div>
        <MenuItem onClick={handleClose}> <LocationOnIcon /><h3>ул. Петровско-Разумовская 17</h3></MenuItem>
        <MenuItem onClick={handleClose}> <LocationOnIcon /><h3>ул. Сибирский проезд 10, к.2</h3></MenuItem>
        <MenuItem onClick={handleClose}> <LocationOnIcon /><h3>ул. Перервинский бульвар 28, к.1</h3></MenuItem>
      </Menu>
    </div>
  );
}

AdressMenu.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default withStyles(styles)(AdressMenu);