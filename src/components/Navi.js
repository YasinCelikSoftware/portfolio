import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Collapse, Navbar, Nav, NavItem, NavLink, NavbarText} from 'reactstrap';
import '../assets/css/Navi.css';
import {Link} from 'react-router-dom';
import DescriptionIcon from '@mui/icons-material/Description';
import GitHubIcon from '@mui/icons-material/GitHub';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import HomeIcon from '@mui/icons-material/Home';
import ToggleSwitch from './ToggleSwitch';
import Hamburger from './Hamburger';
import logo from '../assets/images/logo.svg';

function Navi({changelanguage}) {
  const [isOpen, setIsOpen] = useState (false);
  const [isHamburgerChecked, setHamburgerChecked] = useState (false);

  const toggle = () => {
    if (window.innerWidth <= 769) setIsOpen (!isOpen);
    setHamburgerChecked (!isHamburgerChecked);
  };

  const brandToggle = () => {
    setIsOpen (false);
    setHamburgerChecked (false);
  };

  const {t} = useTranslation ();

  return (
    <div>
      <Navbar expand="md" className="mt-3 navi px-3">
        <Link to="/" className="navbar-brand" onClick={brandToggle}>
          <img className="navi__logo" src={logo} alt="logo" />
        </Link>
        <Hamburger onClick={toggle} checked={isHamburgerChecked} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="m-auto" navbar>
            <NavItem>
              <Link className="nav-link" to="/" onClick={toggle}>
                <HomeIcon className="me-1 ms-2" />
                {t ('home')}
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/my-cv" onClick={toggle}>
                <DescriptionIcon className="me-1 ms-2" />
                {t ('myCv')}
              </Link>
            </NavItem>
            <NavItem>
              <NavLink
                href="https://github.com/YasinCelikSoftware"
                target="_blank"
              >
                <GitHubIcon className="me-1 ms-2" />
                {t ('github')}
              </NavLink>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/contact" onClick={toggle}>
                <CallOutlinedIcon className="me-1 ms-2" />
                {t ('contact')}
              </Link>
            </NavItem>

          </Nav>
          <div className="navi__langButtonDiv">
            <NavbarText className="me-3 navi__languageButton">
              <ToggleSwitch changelanguage={changelanguage} />
            </NavbarText>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navi;
