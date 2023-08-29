import React from 'react';
import {useTranslation} from 'react-i18next';
import {Col, Container, Row} from 'reactstrap';
import '../assets/css/Experience.css';
import moon from '../assets/images/moon.jpg';

function Experience () {
  const {t} = useTranslation ();
  return (
    <section id="experiences" className="experience">
      <Container className="pt-5 experience__container">
        <img className="experience__moon" src={moon} alt="moon" />
        <Row className="text-center mb-5">
          <h1 className="experience__h1 shadow-5px">{t ('experience')}</h1>
          <p className="experience__p shadow-5px">{t ('experience-p')}</p>
        </Row>
        <Row className="text-center g-4 pb-5">
          <Col md="12">
            <h5 className="shadow-5px">Front-End Developer</h5>
            <h6 className="experience__company shadow-5px">
              CKY Grup {t ('experience-date-1')}
            </h6>
          </Col>
          <Col md="12">
            <h5 className="shadow-5px">{t ('electrical')}</h5>
            <h6 className="experience__company shadow-5px">
              ZMR Aydınlatma {t ('experience-date-2')}
            </h6>
          </Col>
          <Col md="12">
            <h5 className="shadow-5px">{t ('electrical-intern')}</h5>
            <h6 className="experience__company shadow-5px">
              Optimak S.T.U. {t ('experience-date-3')}
            </h6>
          </Col>
          <Col md="12">
            <h5 className="shadow-5px">{t ('electrical-intern')}</h5>
            <h6 className="experience__company shadow-5px">
              BRC Test ve Otomasyon {t ('experience-date-4')}
            </h6>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Experience;
