import { createStore, combineReducers } from 'redux';
import reducerAddPhones from '../reducers/phones';
import reducerAddToCart from '../reducers/cart';
import filtersReducer from '../reducers/filters';

export default () => {
    const store = createStore(combineReducers({
        phones: reducerAddPhones,
        cart: reducerAddToCart,
        filters: filtersReducer
      }));
    return store;
}