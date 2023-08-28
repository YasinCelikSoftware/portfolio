import React, {Fragment} from 'react';
import '../assets/css/Hamburger.css';

function Hamburger({onClick}) {
  return (
    <Fragment>
      <input type="checkbox" id="nav_checkbox" onClick={() => onClick ()} />
      <label htmlFor="nav_checkbox" className="nav__toggle">
        <div className="bars" id="bar1" />
        <div className="bars" id="bar2" />
        <div className="bars" id="bar3" />
      </label>
    </Fragment>
  );
}

export default Hamburger;
