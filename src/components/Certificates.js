import React from 'react';
import {useTranslation} from 'react-i18next';
import {Col, Row} from 'reactstrap';

function Certificates () {
  const {t} = useTranslation ();

  return (
    <Row>
      <h2>{t ('certificates')}</h2>
      <Col md="12">
        <ul>
          <li>React Basics | by Meta</li>
        </ul>
      </Col>
    </Row>
  );
}

export default Certificates;
