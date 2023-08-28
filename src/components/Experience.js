import React from 'react';
import {useTranslation} from 'react-i18next';
import {Col, Container, Row} from 'reactstrap';
import '../assets/css/Experience.css';

function Experience () {
  const {t} = useTranslation ();
  return (
    <section id="experiences" className="experience">
      <Container className="pt-5 experience__container">
        <Row className="text-center mb-5">
          <h1 className="experience__h1">{t ('experience')}</h1>
          <p className="experience__p">{t ('experience-p')}</p>
        </Row>
        <Row className="text-center g-4 pb-5">
          <Col md="12">
            <h5>Front-End Developer</h5>
            <h6 className="experience__company">
              CKY Grup {t ('experience-date-1')}
            </h6>
          </Col>
          <Col md="12">
            <h5>{t ('electrical')}</h5>
            <h6 className="experience__company">
              ZMR Aydınlatma {t ('experience-date-2')}
            </h6>
          </Col>
          <Col md="12">
            <h5>{t ('electrical-intern')}</h5>
            <h6 className="experience__company">
              Optimak S.T.U. {t ('experience-date-3')}
            </h6>
          </Col>
          <Col md="12">
            <h5>{t ('electrical-intern')}</h5>
            <h6 className="experience__company">
              BRC Test ve Otomasyon {t ('experience-date-4')}
            </h6>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Experience;
