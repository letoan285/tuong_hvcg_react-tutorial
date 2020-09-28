import * as actionTypes from './action-types';
const initialState = {
    loading: false,
    message: '',
    product: {id: 1, name: 'product 1', price: 4000},
    products: [],
    cart: []
  }
  

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.GET_ALL: {
  
        return {
          ...state,
          products: [{ id: 2 }]
        }
      }
      case actionTypes.GET_ONE: {
        return {
          ...state,
          product: action.payload
        }
      }
      case actionTypes.ADD_TO_CART: {
          let cart = state.cart;
          cart.push(action.payload);
          return {
              ...state,
              cart: cart
          }
      }
      default: {
        return state;
      }
    }
  }