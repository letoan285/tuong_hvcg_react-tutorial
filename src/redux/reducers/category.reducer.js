import { GET_CATEGORIES } from '../constants/categoryActionTypes';
const initialState = {
    loading: false,
    message: '',
    categories: [],
    category: {}
  }
  

export const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CATEGORIES: {
            return {
                ...state,
                categories: action.payload
            }
        }
      default: {
        return state;
      }
    }
  }