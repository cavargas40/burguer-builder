import { ActionTypes } from '../actions/actionTypes';

const initialState = {
  ingredients: null,
  totalPrice: 4,
  error: false
};

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

const addIngredient = (state, action) => {
  return {
    ...state,
    ingredients: {
      ...state.ingredients,
      [action.ingredientName]: state.ingredients[action.ingredientName] + 1
    },
    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
  };
};

const removeIngredient = (state, action) => {
  return {
    ...state,
    ingredients: {
      ...state.ingredients,
      [action.ingredientName]: state.ingredients[action.ingredientName] - 1
    },
    totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
  };
};

const setIngredients = (state, action) => {
  const { salad, bacon, cheese, meat } = action.ingredients;
  return {
    ...state,
    ingredients: {
      salad,
      bacon,
      cheese,
      meat
    },
    totalPrice: 4,
    error: false
  };
};

const fetchIngredientsFail = state => {
  return {
    ...state,
    error: true
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.AddIngredient:
      return addIngredient(state, action);
    case ActionTypes.RemoveIngredient:
      return removeIngredient(state, action);
    case ActionTypes.SetIngredients:
      return setIngredients(state, action);
    case ActionTypes.FetchIngredientsFail:
      return fetchIngredientsFail(state);
    default:
      return state;
  }
};

export default reducer;
