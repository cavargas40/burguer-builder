import React from 'react';

import './Order.css';

const Order = props => {
  const ingredients = Object.entries(props.ingredients).map(([key, value]) => {
    return { name: key, amount: value };
  });

  const ingredientOutput = ingredients.map(({ name, amount }, index) => {
    return (
      <span
        style={{
          textTransform: 'capitalize',
          display: 'inline-block',
          margin: '0 8px',
          border: '1px solid gray',
          padding: '5px'
        }}
        key={index}
      >
        {name} ({amount})
      </span>
    );
  });

  return (
    <div className="Order">
      Ingredients: {ingredientOutput}
      <p>
        Price: <strong> USD {props.price.toFixed(2)} </strong>
      </p>
    </div>
  );
};

export default Order;
