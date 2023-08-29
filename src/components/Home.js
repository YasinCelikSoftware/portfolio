import React from 'react';
import '../assets/css/Home.css';
import gradient from '../assets/images/gradient.svg';

import {Container, Row} from 'reactstrap';
import {useTranslation} from 'react-i18next';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import KeyboardDoubleArrowDownIcon
  from '@mui/icons-material/KeyboardDoubleArrowDown';
import MainButton from './MainButton';
import underArrow from '../assets/images/logo.svg';
import {Link} from 'react-router-dom';

function Home (props) {
  const {t} = useTranslation ();

  return (
    <div className="home mb-5">
      <img
        className="home__gradient position-absolute img-fluid"
        src={gradient}
        alt="gradient"
      />
      <Container className="d-flex flex-column justify-content-center h-100vh home__info">
        <Row className="text-center py-5 mw-48">
          <div className="color-ae d-flex justify-content-center align-items-center">
            <AutoAwesomeOutlinedIcon fontSize="large" className="me-2" />
            <h3 className="text-xl m-0">{t ('hello')}</h3>
          </div>
          <h1 className="home__h1 text-4xl">{t ('frontendev')}</h1>
          <div>
            <Link to="/about">
              <MainButton>{t ('about')}</MainButton>
            </Link>
          </div>
          <div className="color-ae mt-5">
            <a href="#experiences" className="home__arrow">
              <img
                className="animate-bounce home__underArrow"
                src={underArrow}
                alt="underArrow"
              />
            </a>
          </div>

        </Row>
      </Container>
    </div>
  );
}

export default Home;
