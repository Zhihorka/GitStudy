import React from 'react';
import style from './style.module.css';
import Logo from './EdaGrayLogo.png';
import AppStore from './AppStore.png';
import GooglePlay from './GooglePlay.png';
import FacebookIcon from './FacebookIcon.png';
import InstagramIcon from './InstagramIcon.png';
import VkIcon from './VkIcon.png';


const Footer = (props)=> {
  return(
    <div className = {style.wrapper}>
        <div className = {style.content}>
          <img src = {Logo} className = {style.logo}/>
          <div className = {style.footerNav}>
            <div className = {style.top}>
              <hr className ={style.horizontalLine}/>
              <div className = {style.textGroup}>
                <h4 className = {style.footerText}>Ресторанам</h4>
                <h4 className = {style.footerText}>Курьерам</h4>
                <h4 className = {style.footerText}>Компаниям</h4>
                <h4 className = {style.footerText}>Об акциях</h4>
                <h4 className = {style.footerText}>Контакты</h4>
              </div>
            </div>
            <div className = {style.social}>
              <img src = {InstagramIcon} className = {style.instagram}/>
              <img src = {VkIcon} className = {style.vk}/>
              <img src = {FacebookIcon} className = {style.facebook}/>
            </div>
            <div className = {style.downloadApp}>
              <img src = {AppStore} className = {style.appStore}/>
              <img src = {GooglePlay} className = {style.googlePlay}/>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Footer;