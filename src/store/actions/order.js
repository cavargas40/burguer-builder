import axios from '../../axios-orders';
import { ActionTypes } from './actionTypes';

export const purchaseBurgerSuccess = (id, orderData) => {
  return {
    type: ActionTypes.PurchaseBurgerSuccess,
    orderId: id,
    orderData
  };
};

export const purchaseBurgerFail = error => {
  return {
    type: ActionTypes.PurchaseBurgerFail,
    error
  };
};

export const purchaseBurgerStart = () => {
  return {
    type: ActionTypes.PurchaseBurgerStart
  };
};

export const purchaseBurger = orderData => {
  return dispatch => {
    dispatch(purchaseBurgerStart());
    axios
      .post('/orders.json', orderData)
      .then(response => {
        dispatch(purchaseBurgerSuccess(response.data.name, orderData));
      })
      .catch(error => dispatch(purchaseBurgerFail(error)));
  };
};

export const purchaseInit = () => {
  return {
    type: ActionTypes.PurchaseInit
  };
};
