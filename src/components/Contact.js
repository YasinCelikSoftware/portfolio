import React, {useEffect, useState} from 'react';
import {Container, Row} from 'reactstrap';
import MainButton from './MainButton';
import '../assets/css/Contact.css';
import SendIcon from '@mui/icons-material/Send';
import {useTranslation} from 'react-i18next';

function Contact () {
  const {t} = useTranslation ();

  useEffect (() => {
    document.title = `Yasin ÇELİK | ${t ('contact')}`;
  });

  const [formData, setFormData] = useState ({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = e => {
    const {name, value} = e.target;

    setFormData (prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault ();
    console.log (formData);
  };

  return (
    <Container className="my-5 p-5">
      <Row className="text-center">
        <h1 className="contact__h1">{t ('contactme')}</h1>
        <form
          className="d-flex flex-column contact__form row-gap-3"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className="contact__input"
            placeholder={t ('name')}
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            className="contact__input"
            placeholder={t ('email')}
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <textarea
            className="contact__input"
            placeholder={t ('message')}
            name="message"
            value={formData.message}
            onChange={handleChange}
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
