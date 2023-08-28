import React, {useEffect, useRef, useState} from 'react';
import {Container, Row} from 'reactstrap';
import MainButton from './MainButton';
import '../assets/css/Contact.css';
import SendIcon from '@mui/icons-material/Send';
import {useTranslation} from 'react-i18next';
import emailjs from '@emailjs/browser';
import alertify from 'alertifyjs';

function Contact () {
  const {t} = useTranslation ();
  const myForm = useRef ();

  const [formData, setFormData] = useState ({
    name: '',
    email: '',
    message: '',
  });

  useEffect (() => {
    document.title = `Yasin ÇELİK | ${t ('contact')}`;
  }, []);

  const sendEmail = e => {
    e.preventDefault ();
    alertify.warning (t ('message-sending'));
    emailjs
      .sendForm (
        'service_x7g5jad',
        'template_joxnr7h',
        myForm.current,
        '2dII1UylpfUpZjfs-'
      )
      .then (
        result => {
          alertify.success (t ('message-success'));
          setFormData ({
            name: '',
            email: '',
            message: '',
          });
        },
        error => {}
      );
  };

  const handleChange = e => {
    const {name, value} = e.target;

    setFormData (prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Container className="my-5 p-5">
      <Row className="text-center">
        <h1 className="contact__h1">{t ('contactme')}</h1>
        <form
          ref={myForm}
          className="d-flex flex-column contact__form row-gap-3"
          onSubmit={sendEmail}
        >
          <input
            type="text"
            className="contact__input"
            placeholder={t ('name')}
            name="name"
            onChange={handleChange}
            value={formData.name}
          />
          <input
            type="email"
            className="contact__input"
            placeholder={t ('email')}
            name="email"
            onChange={handleChange}
            value={formData.email}
          />
          <textarea
            className="contact__input"
            placeholder={t ('message')}
            name="message"
            onChange={handleChange}
            value={formData.message}
          />
          <MainButton className="contact__myButton" type="submit">
            <SendIcon className="contact__svg" />{t ('send')}
          </MainButton>
        </form>
      </Row>
    </Container>
  );
}

export default Contact;
