import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

const Checkout = props => {
  const onCheckoutCancelled = () => {
    props.history.goBack();
  };

  const onCheckoutContinued = () => {
    props.history.replace('/checkout/contact-data');
  };

  let summary = <Redirect to="/" />;
  const purchaseRedirect = props.purchased ? <Redirect to="/" /> : null;
  if (props.ingredients) {
    summary = (
      <div>
        {purchaseRedirect}
        <CheckoutSummary
          ingredients={props.ingredients}
          onCheckoutCancelled={onCheckoutCancelled}
          onCheckoutContinued={onCheckoutContinued}
        />
        <Route
          path={`${props.match.path}/contact-data`}
          component={ContactData}
        />
      </div>
    );
  }
  return summary;
};

const mapStateToProps = state => {
  return {
    ingredients: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPrice,
    purchased: state.order.purchased
  };
};

export default connect(mapStateToProps)(Checkout);
