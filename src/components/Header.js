import React from 'react';
import Navi from './Navi';
import {Container} from 'reactstrap';

function Header (props) {
  return (
    <Container>
      <Navi changelanguage={props.changeLanguage} />
    </Container>
  );
}

export default Header;
