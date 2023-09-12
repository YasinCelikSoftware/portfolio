import React from 'react';
import {useTranslation} from 'react-i18next';
import {Col, Row} from 'reactstrap';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

function Certificates () {
  const {t} = useTranslation ();

  return (
    <Row>
      <h2>{t ('certificates')}</h2>
      <Col md="12">
        <ul>
          <li>
            <a
              href="https://www.coursera.org/account/accomplishments/certificate/S48Z7KWQYYWM"
              target="_blank"
              rel="noreferrer"
            >
              <span className="me-2">React Basics | by Meta</span>
              <OpenInNewIcon />
            </a>
          </li>
          <li>
            <a
              href="https://www.coursera.org/account/accomplishments/certificate/PX2L3CR9Z6XF"
              target="_blank"
              rel="noreferrer"
            >
              <span className="me-2">Advanced React | by Meta</span>
              <OpenInNewIcon />
            </a>
          </li>
        </ul>
      </Col>
    </Row>
  );
}

export default Certificates;
