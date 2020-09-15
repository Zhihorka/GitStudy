import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import HeaderNav from './Components/HeaderNav/HeaderNav';
import WeeklyOffers from './Components/WeeklyOffers/WeeklyOffers';
import Footer from './Components/Footer/Footer';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import MediaQuery from 'react-responsive'
import NoPhone from './NoPhone.png';

const navTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#F0F0F0',
    },
    secondary: {
      main: '#F3F3F3',
    },
  }
});

function App() {
  return (
    <div className= "App">
      <MediaQuery minDeviceWidth={1224} >
      <Header/>
      <HeaderNav/>
      <ThemeProvider theme={navTheme}>
        <WeeklyOffers/>
      </ThemeProvider>
      <Footer/>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={1224}>
        <div className = "MobileWrapper">
          <img src = {NoPhone} className ="NoPhone"/>
          <h2 className = "InfoText">К сожалению мобильная версия сейчас находится в разработке 🚧</h2>
          <h4 className = "TipText">Если вам нужно открыть страницу на мобильном устройстве - включите вручную отображение полной версии сайта.</h4>
          <h4 className = "Sign">github.Zhihorka</h4>
        </div>
      </MediaQuery>
    </div>
  );
}

export default App;
