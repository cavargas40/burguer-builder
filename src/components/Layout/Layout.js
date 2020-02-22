import React from 'react';
import './Layout.css';
import Aux from '../../hoc/Auxiliar';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const Layout = props => (
  <Aux>
    <Toolbar></Toolbar>
    <main className="Content">{props.children}</main>
  </Aux>
);

export default Layout;
