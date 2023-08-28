import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {Col, Container, Row} from 'reactstrap';
import profile from '../assets/images/profile.jpg';
import '../assets/css/MyCv.css';
import CvExperiences from './CvExperiences';
import CvEducation from './CvEducation';
import Competencies from './Competencies';
import Certificates from './Certificates';
import MainButton from './MainButton';
import stars from '../assets/images/stars.svg';

function MyCv () {
  const {t, i18n} = useTranslation ();

  useEffect (() => {
    document.title = `Yasin ÇELİK | ${t ('myCv')}`;
  });

  return (
    <Container className="mycv py-5">
      <img className="mycv__stars position-absolute" src={stars} alt="stars" />
      <Row className="mycv__row">
        <Col md="3" className="mycv__leftInfo text-center">
          <img
            className="mycv__photo img-fluid"
            src={profile}
            alt="Yasin ÇELİK"
          />
          <h3>Yasin ÇELİK</h3>
          <h6>{t ('electrical-engineer')}</h6>
          <a
            href={`../../portfolio/assets/files/${i18n.language === 'tr' ? 'cv_tr.pdf' : 'cv_en.pdf'}`}
            download="Yasin_Celik_CV.pdf"
          >
            <MainButton>{t ('download')}</MainButton>
          </a>
        </Col>
        <Col md="9" className="mycv__info">
          <div className="mycv__innerInfo">
            <CvExperiences />
            <CvEducation />
            <Competencies />
            <Certificates />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default MyCv;
