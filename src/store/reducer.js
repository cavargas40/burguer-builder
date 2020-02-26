import { ActionTypes } from './actions';

const initialState = {
  ingredients: null,
  totalPrice: 4
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.AddIngredients:
      break;
    case ActionTypes.RemoveIngredient:
      break;

    default:
      return state;
  }
};

export default reducer;
