import { ActionTypes } from '../actions/actionTypes';

const initialState = {
  orders: [],
  loading: false
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
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
        orders: [...state.orders, newOrder]
      };
    case ActionTypes.PurchaseBurgerFail:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};

export default orderReducer;
