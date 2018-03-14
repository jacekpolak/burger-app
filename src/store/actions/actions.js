import * as actionTypes from './actionTypes';

// Action Creator
export const tempAddIngredient = (ingName) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: ingName
  }
}

export const addIngredient = (ingName) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(tempAddIngredient(ingName));
    }, 2000);
  }
}

export const removeIngredient = (ingName) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: ingName
  }
}