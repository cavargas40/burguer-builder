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
