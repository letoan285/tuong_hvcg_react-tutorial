import { combineReducers } from 'redux';
import { categoryReducer } from './category.reducer';
import { productReducer } from './product.reducer';
import { counterReducer } from './counter.reducer';

export const rootReducer = combineReducers({
  categoryReducer, productReducer, counterReducer
});