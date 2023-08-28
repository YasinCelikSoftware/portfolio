import React, {Fragment} from 'react';
import '../assets/css/ToggleSwitch.css';

function ToggleSwitch({changelanguage}) {
  return (
    <Fragment>
      <input
        id="checkbox_toggle"
        type="checkbox"
        className="check"
        onClick={() => changelanguage ()}
      />
      <div className="checkbox">
        <label className="slide" htmlFor="checkbox_toggle">
          <label className="toggle" htmlFor="checkbox_toggle" />
          <label className="text text__tr" htmlFor="checkbox_toggle">TR</label>
          <label className="text text__en" htmlFor="checkbox_toggle">EN</label>
        </label>
      </div>
    </Fragment>
  );
}

export default ToggleSwitch;
