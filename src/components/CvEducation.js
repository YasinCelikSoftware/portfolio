import React from 'react';
import {useTranslation} from 'react-i18next';
import {Col, Row} from 'reactstrap';

function CvEducation () {
  const {t} = useTranslation ();

  return (
    <Row>
      <h2>{t ('academic')}</h2>
      <Col md="12" className="mycv__education">
        <h5>{t ('sakarya')}</h5>
        <p>{t ('lisans')}</p>
        <ul>
          <li>{t ('electrical')} | 2.71 / 4</li>
        </ul>
      </Col>
    </Row>
  );
}

export default CvEducation;
