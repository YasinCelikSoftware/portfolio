import React from 'react';
import {useTranslation} from 'react-i18next';
import {Col, Row} from 'reactstrap';

function CvExperiences () {
  const {t} = useTranslation ();
  return (
    <Row>
      <h2>{t ('experience')}</h2>
      <Col md="12" className="mycv__experience">
        <h5>FrontEnd Developer</h5>
        <p>CKY Grup | {t ('experience-date-1')}</p>
        <ul>
          <li>
            {t ('cky-1')}
          </li>
          <li>{t ('cky-2')}</li>
        </ul>
      </Col>
      <hr style={{width: '90%'}} />
      <Col md="12" className="mycv__experience">
        <h5>{t ('electrical-intern')}</h5>
        <p>Optimak S.T.U. | {t ('experience-date-3')}</p>
        <ul>
          <li>{t ('optimak-1')}</li>
          <li>{t ('optimak-2')}</li>
          <li>{t ('optimak-3')}</li>
          <li>{t ('optimak-4')}</li>
          <li>{t ('optimak-5')}</li>
        </ul>
      </Col>

      <hr style={{width: '90%'}} />

      <Col md="12" className="mycv__experience">
        <h5>{t ('electrical')}</h5>
        <p>ZMR Aydınlatma | {t ('experience-date-2')}</p>
        <ul>
          <li>{t ('zmr-1')}</li>
          <li>{t ('zmr-2')}</li>
          <li>{t ('zmr-3')}</li>
        </ul>
      </Col>

      <hr style={{width: '90%'}} />

      <Col md="12" className="mycv__experience">
        <h5>{t ('electrical-intern')}</h5>
        <p>BRC Test ve Otomasyon | {t ('experience-date-4')}</p>
        <ul>
          <li>{t ('brc-1')}</li>
          <li>{t ('brc-2')}</li>
          <li>{t ('brc-3')}</li>
        </ul>
      </Col>
    </Row>
  );
}

export default CvExperiences;
