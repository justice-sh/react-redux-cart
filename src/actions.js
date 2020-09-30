// ACTIONS
export const DECREASE = 'DECREASE';
export const INCREASE = 'INCREASE';
export const REMOVE = 'REMOVE';
export const CLEAR_CART = 'CLEAR_CART';
export const GET_TOTALS = 'GET_TOTAL';
export const TOGGLE_AMOUNT = 'TOGGLE_AMOUNT';

// ACTION CREATORS
export const increase = id => ({ type: INCREASE, payload: { id } });
export const decrease = (id, amount) => ({ type: DECREASE, payload: { id, amount } });
export const remove = id => ({ type: REMOVE, payload: { id } });
export const clear_cart = () => ({ type: CLEAR_CART });
export const get_totals = () => ({ type: GET_TOTALS });