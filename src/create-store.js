import { createStore } from 'redux';
import categoryReducer from './reducer/categroy-reducer';

export default () => {
  return createStore(categoryReducer);
};
