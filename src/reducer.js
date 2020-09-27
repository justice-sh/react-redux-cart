import { DECREASE, INCREASE, CLEAR_CART, REMOVE, GET_TOTALS } from './actions';

const reducer = (state, action) => {
   if (action.type === CLEAR_CART) return { ...state, cart: [] };

   if (action.type === INCREASE) {
     const cart = state.cart.map(item => ({ ...item, amount: (item.id === action.payload.id ? item.amount + 1 : item.amount) }));

     return { ...state, cart }
   }

   if (action.type === DECREASE) {
      let cart = [];

      if (action.payload.amount === 1) cart = state.cart.filter(item => item.id !== action.payload.id);
      else cart = state.cart.map(item => ({ ...item, amount: (item.id === action.payload.id ? item.amount - 1 : item.amount) }));

      return { ...state, cart }
   }

   if (action.type === REMOVE) return {...state, cart: state.cart.filter(item => item.id !== action.payload.id)}

   if (action.type === GET_TOTALS) {
      let {total, amount} = state.cart.reduce((cartTotal, { price, amount }) => {
        cartTotal.total += price * amount;
        cartTotal.amount += amount;

        return cartTotal;
      }, { total: 0, amount: 0 });



      total = parseFloat(total.toFixed(2));
     return { ...state, total, amount};
   }

   return state;
 };

 export default reducer;
