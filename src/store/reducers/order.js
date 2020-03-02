import { ActionTypes } from '../actions/actionTypes';

const initialState = {
  orders: [],
  loading: false,
  purchased: false
};

const purchaseInit = state => {
  return {
    ...state,
    purchased: false
  };
};

const fetchOrdersFail = state => {
  return {
    ...state,
    loading: false
  };
};

const fetchOrdersSuccess = (state, action) => {
  return {
    ...state,
    orders: action.orders,
    loading: false
  };
};

const fetchOrdersStart = state => {
  return {
    ...state,
    loading: true
  };
};

const purchaseBurgerFail = state => {
  return {
    ...state,
    loading: false
  };
};

const purchaseBurgerSuccess = (action, state) => {
  const newOrder = {
    ...action.orderData,
    id: action.orderId
  };
  return {
    ...state,
    loading: false,
    purchased: true,
    orders: [...state.orders, newOrder]
  };
};

const purchaseBurgerStart = state => {
  return {
    ...state,
    loading: true
  };
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.PurchaseInit:
      return purchaseInit(state);
    case ActionTypes.PurchaseBurgerStart:
      return purchaseBurgerStart(state);
    case ActionTypes.PurchaseBurgerSuccess:
      return purchaseBurgerSuccess(action, state);
    case ActionTypes.PurchaseBurgerFail:
      return purchaseBurgerFail(state);
    case ActionTypes.FetchOrdersStart:
      return fetchOrdersStart(state);
    case ActionTypes.FetchOrdersSuccess:
      return fetchOrdersSuccess(state, action);
    case ActionTypes.FetchOrdersFail:
      return fetchOrdersFail(state);
    default:
      return state;
  }
};

export default orderReducer;
