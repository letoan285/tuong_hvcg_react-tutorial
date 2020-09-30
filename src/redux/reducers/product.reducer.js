import * as actionTypes from '../constants/productActionType';
const initialState = {
    loading: false,
    message: '',
    product: {},
    products: [],
    cart: [],
  }
  

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.GET_PRODUCTS: {
  
        return {
          ...state,
          products: action.payload
        }
      }
      case actionTypes.GET_PRODUCT_BY_ID: {
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