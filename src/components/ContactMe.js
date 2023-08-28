import React from 'react';
import gradient from '../assets/images/gradient.svg';
import '../assets/css/ContactMe.css';
import {Col, Container, Row} from 'reactstrap';
import {useTranslation} from 'react-i18next';
import MainButton from './MainButton';
import {Link} from 'react-router-dom';

function ContactMe () {
  const {t} = useTranslation ();
  return (
    <div className="contactme">
      {/* <img
        className="contactme__gradient img-fluid position-absolute"
        src={gradient}
        alt="gradient"
      /> */}
      <Container>
        <Row className="flex-column justify-content-center text-center h-100vh">
          <div className="contactme__info">
            <h1 className="contactme__h1">{t ('contactme')}</h1>
            <p className="contactme__p">{t ('contactme-p')}</p>
            <p className="contactme__p">{t ('contactme-p2')}</p>
            <Link to="/contact">
              <MainButton>{t ('contacted')}</MainButton>
            </Link>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default ContactMe;
