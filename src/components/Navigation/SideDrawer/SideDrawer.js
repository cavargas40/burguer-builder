import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliar/Auxiliar';
import './SideDrawer.css';

const SideDrawer = props => {
  let attachClasses = ['SideDrawer', 'Close'];
  if (props.open) {
    attachClasses = ['SideDrawer', 'Open'];
  }
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachClasses.join(' ')} onClick={props.closed}>
        <div className="LogoContainer">
          <Logo />
        </div>
        <nav>
          <NavigationItems isAuthenticated={props.isAuth} />
        </nav>
      </div>
    </Aux>
  );
};

export default SideDrawer;
