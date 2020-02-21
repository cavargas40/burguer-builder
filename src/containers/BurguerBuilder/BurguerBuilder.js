import React from 'react';
import Aux from '../../hoc/Auxiliar';
import Burguer from '../../components/Burguer/Burguer';

class BurguerBuilder extends React.Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 2
    }
  };
  render() {
    return (
      <Aux>
        <Burguer ingredients={this.state.ingredients} />
        <div>Build Controls</div>
      </Aux>
    );
  }
}

export default BurguerBuilder;
