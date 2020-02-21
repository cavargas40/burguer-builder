import React from 'react';
import './Layout.css';
import Aux from '../../hoc/Auxiliar';

const layout = props => (
  <Aux>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className="Content">{props.children}</main>
  </Aux>
);

export default layout;
