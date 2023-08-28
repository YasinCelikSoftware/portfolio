import React from 'react';
import '../assets/css/Footer.css';
import {Col, Container, Row} from 'reactstrap';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GithubIcon from '@mui/icons-material/GitHub';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';

function Footer () {
  const {t} = useTranslation ();

  return (
    <section className="footer">
      <Container className="pt-5 pb-4">
        <Row className="justify-content-between">
          <Col md="3" sm="12" className="copyright d-flex align-items-center">
            © Copyright 2023, Yasin ÇELİK
          </Col>
          <Col md="6" sm="12">
            <Row className="footer__links">
              <Col md="7" />
              <Col md="3" sm="12">
                <ul className="footer__nav">
                  <li className="footer__navLink">
                    <Link to="/">{t ('home')}</Link>
                  </li>
                  <li className="footer__navLink">
                    <Link to="/about">{t ('about')}</Link>
                  </li>
                  <li className="footer__navLink">
                    <Link to="/my-cv">{t ('myCv')}</Link>
                  </li>
                  <li className="footer__navLink">
                    <Link to="/contact">{t ('contact')}</Link>
                  </li>
                </ul>
              </Col>
              <Col md="2" sm="12">
                <ul className="footer__social">
                  <li className="footer__socialIcon mb-2">
                    <a
                      href="https://www.instagram.com/yas.celik/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <InstagramIcon />
                    </a>
                  </li>
                  <li className="footer__socialIcon mb-2">
                    <a
                      href="https://twitter.com/yascelik3"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <TwitterIcon />
                    </a>
                  </li>
                  <li className="footer__socialIcon mb-2">
                    <a
                      href="https://www.linkedin.com/in/yasincelik3/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <LinkedInIcon />
                    </a>
                  </li>
                  <li className="footer__socialIcon">
                    <a
                      href="https://github.com/YasinCelikSoftware"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GithubIcon />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Footer;
