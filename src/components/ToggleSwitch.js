import React, {Fragment} from 'react';
import '../assets/css/ToggleSwitch.css';
import {changeLanguage} from 'i18next';

function ToggleSwitch({changelanguage}) {
  return (
    <label className="switch">
      <input type="checkbox" onClick={() => changelanguage ()} />
      <span className="slider" />
    </label>
  );
}

export default ToggleSwitch;
