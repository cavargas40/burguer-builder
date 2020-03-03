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

export const purchaseBurger = (orderData, token) => {
  return dispatch => {
    dispatch(purchaseBurgerStart());
    axios
      .post('/orders.json?auth=' + token, orderData)
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

export const fetchOrdersSuccess = orders => {
  return {
    type: ActionTypes.FetchOrdersSuccess,
    orders
  };
};

export const fetchOrdersFail = error => {
  return {
    type: ActionTypes.FetchOrdersFail,
    error
  };
};

export const fetchOrdersStart = () => {
  return {
    type: ActionTypes.FetchOrdersStart
  };
};

export const fetchOrders = token => {
  return dispatch => {
    dispatch(fetchOrdersStart());
    axios
      .get('/orders.json?auth=' + token)
      .then(res => {
        const orders = Object.keys(res.data).reduce((prev, order) => {
          prev.push({ ...res.data[order], id: order });
          return prev;
        }, []);
        dispatch(fetchOrdersSuccess(orders));
      })
      .catch(error => {
        dispatch(fetchOrdersFail(error));
      });
  };
};
