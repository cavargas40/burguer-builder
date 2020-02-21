import React from 'react';
import Aux from '../../hoc/Auxiliar';
import Burguer from '../../components/Burguer/Burguer';

class BurguerBuilder extends React.Component {
  render() {
    
    return (
      <Aux>
        <Burguer />
        <div>Build Controls</div>
      </Aux>
    );
  }
}

export default BurguerBuilder;
