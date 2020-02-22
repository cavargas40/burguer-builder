import React from 'react';
import burgerLogofrom from '../../assets/images/burger-logo.png';
import './Logo.css'

const Logo = props => (
  <div className="Logo">
    <img src={burgerLogofrom} alt="MyBurger" />
  </div>
);

export default Logo;
