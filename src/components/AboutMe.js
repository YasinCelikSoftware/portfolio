import React, {useEffect} from 'react';
import '../assets/css/AboutMe.css';
import profile from '../assets/images/profile.jpg';
import stars from '../assets/images/stars.svg';
import {useTranslation} from 'react-i18next';
import MainButton from './MainButton';
import {Link} from 'react-router-dom';

function AboutMe () {
  const {t} = useTranslation ();

  useEffect (() => {
    document.title = `Yasin ÇELİK | ${t ('about')}`;
    window.scrollTo (0, 0);
  });

  return (
    <div className="aboutme position-relative">
      <img className="aboutme__stars img-fluid" src={stars} alt="stars" />
      <img className="aboutme__photo" src={profile} alt="Yasin Çelik" />
      <div className="aboutme__pContainer">
        <h2>{t ('aboutme')}</h2>
        <p className="aboutme__p">
          {t ('aboutme-p')}
        </p>
        <p className="aboutme__p">
          {t ('aboutme-p2')}
        </p>
        <Link to="/my-cv"><MainButton>{t ('myCv')}</MainButton></Link>
      </div>

    </div>
  );
}

export default AboutMe;
