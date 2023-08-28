import React, {useEffect} from 'react';
import Home from './Home';
import Experience from './Experience';
import ContactMe from './ContactMe';

function Main () {
  useEffect (() => {
    document.title = `Yasin ÇELİK`;
  });

  return (
    <div>
      <Home />
      <Experience />
      <ContactMe />
    </div>
  );
}

export default Main;
