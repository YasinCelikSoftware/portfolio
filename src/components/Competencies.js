import React from 'react';
import {useTranslation} from 'react-i18next';
import {Col, Row} from 'reactstrap';

function Competencies () {
  const {t} = useTranslation ();

  return (
    <Row>
      <h2>{t ('competencies')}</h2>
      <Col md="12" className="mycv__competencies">
        <ul>
          <li>HTML / CSS {t ('advanced')}</li>
          <li>Bootstrap CSS Framework {t ('advanced')}</li>
          <li>JavaScript {t ('intermediate')}</li>
          <li>React {t ('intermediate')}</li>
          <li>Java {t ('intermediate')}</li>
          <li>Spring Boot {t ('intermediate')}</li>
          <li>PostgreSQL {t ('intermediate')}</li>
          <li>Material UI {t ('intermediate')}</li>
          <li>Microsoft Office {t ('advanced')}</li>
        </ul>
      </Col>
    </Row>
  );
}

export default Competencies;
