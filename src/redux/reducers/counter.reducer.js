import * as actionTypes from '../constants/action-types';
const initialState = {
    loading: false,
    message: '',
    counter: 0
  }
  

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.COUNT_DOWN: {
        return {
          ...state,
          counter: state.counter-1
        }
      }
      case actionTypes.COUNT_UP: {
        return {
          ...state,
          counter: state.counter+1
        }
      }
      default: {
        return state;
      }
    }
  }