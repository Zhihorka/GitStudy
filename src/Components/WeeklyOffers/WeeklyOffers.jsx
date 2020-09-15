import React,{useState} from 'react';
import style from './style.module.css'
import AlternativeCard from '../AlternativeCard/AlternativeCard';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';


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

const WeeklyOffers = () => {

  const classes = useStyles();

  const [Offers, setOffers] = useState([
    { img: 'https://data.thefeedfeed.com/recommended/post_2738477/600x600.jpeg', name: 'Название ресторана', deliveryPrice: 0, time: '20-30', price : 'РРР',rating: 4.7 },
    
  ]);

  return (
    <div className={style.wrapper}>
        <div className = {style.offers}>
          <div className = {style.navigation}>
            <h2 className = {style.navText}>Предложения недели</h2>
              </div>
                <div className = {style.navButton}>
                    <div className = {style.leftArrow}>
                      <Fab color="primary" aria-label="add">
                        <ArrowBackIcon style={{ fontSize: 30, color: '#C0C0C0'   }} />
                      </Fab>
                    </div>
                    <Fab color="secondary" aria-label="add">
                      <ArrowForwardIcon style={{ fontSize: 30}}  />
                    </Fab>
                </div>
              <AlternativeCard/>
          </div>
    </div>
  );
}

export default WeeklyOffers;