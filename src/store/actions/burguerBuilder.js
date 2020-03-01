import axios from '../../axios-orders';
import { ActionTypes } from './actionTypes';

export const addIngredient = ingredientName => {
  return {
    type: ActionTypes.AddIngredient,
    ingredientName
  };
};

export const removeIngredient = ingredientName => {
  return {
    type: ActionTypes.RemoveIngredient,
    ingredientName
  };
};

export const setIngredients = ingredients => {
  return {
    type: ActionTypes.SetIngredients,
    ingredients
  };
};

export const fetchIngredientsFailed = () => {
  return {
    type: ActionTypes.FetchIngredientsFail
  };
};

export const initIngredients = () => {
  return dispatch => {
    axios
      .get('/ingredients.json')
      .then(response => dispatch(setIngredients(response.data)))
      .catch(error => dispatch(fetchIngredientsFailed()));
  };
};
