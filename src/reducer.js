import { DECREASE, INCREASE, CLEAR_CART, REMOVE } from './actions';

const reducer = (state, action) => {
   if (action.type === CLEAR_CART) return { ...state, cart: [] };

   if (action.type === INCREASE) {
     let tempCart = [];

     tempCart = state.cart.map(item => ({ ...item, amount: (item.id === action.payload.id ? item.amount + 1 : item.amount) }));

     return { ...state, cart: tempCart }
   }

   if (action.type === DECREASE) console.log('You decreased store');

   if (action.type === REMOVE) return {...state, cart: state.cart.filter(item => item.id !== action.payload.id)}

   return state;

   // switch(action.type) {
   //    case CLEAR_CART: 
   //       return { ...state, cart: [] };
   //    default: 
   //       return state;
   // }
 };

 export default reducer;
