import * as actionTypes from '../actions/actionTypes';
import updateObject from '../utility';

const initialState = {
  ingredients: {
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0
  },
  totalPrice: 4,
};

const INGREDIENT_PRICES = {
  salad: 1.2,
  cheese: 0.4,
  meat: 1,
  bacon: 0.8,
};

const addIngredient = (state, action) => {
  return updateObject(state,
    {
      ingredients: {
        ...state.ingredients,
        [action.ingredientName]: state.ingredients[action.ingredientName] + 1
      },
      totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
    }
  );
};

const removeIngredient = (state, action) => {
  return updateObject(state,
    {
      ingredients: {
        ...state.ingredients,
        [action.ingredientName]: state.ingredients[action.ingredientName] - 1
      },
      totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
    }
  );
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT: return addIngredient(state, action);
    case actionTypes.REMOVE_INGREDIENT: return removeIngredient(state, action);
    default: return state
  }
}

export default reducer;