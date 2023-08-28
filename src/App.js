import {Route, Routes} from 'react-router-dom';
import './App.css';
import {useTranslation} from 'react-i18next';
import Header from './components/Header';
import {Container} from 'reactstrap';
import MyCv from './components/MyCv';
import Main from './components/Main';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App () {
  const {i18n} = useTranslation ();

  const changeLanguage = () => {
    const newLanguage = i18n.language === 'tr' ? 'en' : 'tr';
    i18n.changeLanguage (newLanguage);
  };

  return (
    <Container fluid>
      <Header changeLanguage={changeLanguage} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/my-cv" element={<MyCv />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
