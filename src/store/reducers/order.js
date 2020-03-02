import { ActionTypes } from '../actions/actionTypes';

const initialState = {
  orders: [],
  loading: false,
  purchased: false
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.PurchaseInit:
      return {
        ...state,
        purchased: false
      };
    case ActionTypes.PurchaseBurgerStart:
      return {
        ...state,
        loading: true
      };
    case ActionTypes.PurchaseBurgerSuccess:
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
    case ActionTypes.PurchaseBurgerFail:
      return {
        ...state,
        loading: false
      };
    case ActionTypes.FetchOrdersStart:
      return {
        ...state,
        loading: true
      };
    case ActionTypes.FetchOrdersSuccess:
      return {
        ...state,
        orders: action.orders,
        loading: false
      };
    case ActionTypes.FetchOrdersFail:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};

export default orderReducer;
