import React, {useState} from 'react';
import style from './style.module.css'
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import CoinsIcon from './CoinsIcon.png';
import DeliveryIcon from './DeliveryIcon.png';
import TimeIcon from './TimeIcon.png';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { green } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: '#9CCB3B',
      },
      secondary: {
        // This is green.A700 as hex.
        main: '#11cb5f',
      },
    },
  });

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));
  



 const AlternativeCard = (props) =>{

    const classes = useStyles();
    const [cards, setCards] = useState([
    { img: 'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/chargrilled_halloumi_09010_16x9.jpg',name: 'Название ресторана', deliveryPrice: 0, cookingTime:'20-30 мин', price: '₽₽₽', ratingScore: 4.7},
    { img: 'https://www.sbs.com.au/food/sites/sbs.com.au.food/files/cedar-street-recipe-01.jpg',name: 'Название ресторана', deliveryPrice: 0, cookingTime:'20-30 мин', price: '₽₽₽', ratingScore: 4.7},
    { img: 'https://img.hellofresh.com/f_auto,fl_lossy,h_640,q_auto,w_1200/hellofresh_s3/image/crumbed-haloumi-burger-kumara-fries-c21f9249.jpg',name: 'Название ресторана', deliveryPrice: 0, cookingTime:'20-30 мин', price: '₽₽₽', ratingScore: 4.7}
   
    ]);
     return(
         <div>
             { cards.map(cards =>
            <div className = {style.wrapper} key ={cards.name} >
                    <img src ={cards.img} className = {style.img}/>
                    <h3 className = {style.name}>{cards.name}</h3>
                    <div className = {style.info}>
                        <div className = {style.deliveryGroup}>
                            <img src = {DeliveryIcon} className = {style.deliveryIcon}/>
                            <h4 className = {style.deliveryPrice}>{cards.deliveryPrice + ' ₽'}</h4>
                        </div>
                        <div className = {style.cookingGroup}>
                            <img src = {TimeIcon} className = {style.timeIcon}/>    
                            <h4 className = {style.cookingTime}>{cards.cookingTime}</h4>
                        </div>
                        <div className = {style.priceGroup}>
                            <img src = {CoinsIcon} className = {style.priceIcon}/>
                            <h4 className = {style.price}>{cards.price}</h4>
                        </div>
                    </div>
                    <div className ={style.rating}>
                        <ThemeProvider theme={theme}>
                            <Fab color="primary" aria-label="add">
                                <h2 className = {style.ratingScore}>{cards.ratingScore}</h2>
                            </Fab>
                        </ThemeProvider>
                    </div>
            </div>
             )}
        </div>
     );
 }

 export default AlternativeCard;