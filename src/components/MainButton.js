import React from 'react';
import '../assets/css/MainButton.css';

function MainButton({children, type}) {
  return (
    <button className="myButton" type={type}>
      <strong>{children}</strong>
      <div id="container-stars">
        <div id="stars" />
      </div>

      <div id="glow">
        <div className="circle" />
        <div className="circle" />
      </div>
    </button>
  );
}

export default MainButton;
