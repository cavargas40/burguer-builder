import React from 'react';
import './Burguer.css';
import BurguerIngredient from './BurguerIngredient/BurguerIngredient';

const Burguer = () => {
  return (
    <div className="Burguer">
      <BurguerIngredient type="bread-top"/>
      <BurguerIngredient type="cheese"/>
      <BurguerIngredient type="meat"/>
      <BurguerIngredient type="bread-bottom"/>
    </div>
  );
};

export default Burguer;
