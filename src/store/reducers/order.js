import * as actionTypes from '../actions/actionTypes';
import updateObject from '../utility';

const initialState = {
  orders: [],
  loading: false,
}

const purchaseBurgerSuccess = (state, action) => {
  const newOrder = {
    ...action.orderData,
    id: action.orderId,
  }
  return updateObject(state, {
    loading: false,
    orders: state.orders.concat(newOrder)
  })
}

const purchaseBurgerFail = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: action.error
  });
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_BURGER_SUCCESS: return purchaseBurgerSuccess(state, action);
    case actionTypes.PURCHASE_BURGER_FAIL: return purchaseBurgerFail(state, action);
    default: return state;
  }
}

export default reducer;