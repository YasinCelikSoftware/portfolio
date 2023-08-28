import React, {Fragment, useState} from 'react';
import '../assets/css/Hamburger.css';

function Hamburger({onClick, checked}) {
  const handleChange = e => {};

  return (
    <Fragment>
      <input
        type="checkbox"
        id="nav_checkbox"
        onClick={() => onClick ()}
        checked={checked}
        onChange={handleChange}
      />
      <label htmlFor="nav_checkbox" className="nav__toggle">
        <div className="bars" id="bar1" />
        <div className="bars" id="bar2" />
        <div className="bars" id="bar3" />
      </label>
    </Fragment>
  );
}

export default Hamburger;
