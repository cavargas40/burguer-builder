import React from 'react';
import './Burguer.css';
import BurguerIngredient from './BurguerIngredient/BurguerIngredient';

const Burguer = props => {
  const tranformedIngredients = Object.keys(props.ingredients).map(
    ingredient => {
      return [...Array(props.ingredients[ingredient])].map((_, i) => {
        return <BurguerIngredient key={ingredient + i} type={ingredient} />;
      });
    }
  );
  return (
    <div className="Burguer">
      <BurguerIngredient type="bread-top" />
      {tranformedIngredients}
      <BurguerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burguer;
