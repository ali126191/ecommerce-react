import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import AppRouter from './routes/AppRouter'; 
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import getVisiblePhones from './selectors/cart';
import { updateItemQuantity } from './actions/cart';

const store = configureStore();

// store.dispatch(addToCart({ name: 'name one', price: 12, quantity: 5 }))
// store.dispatch(addToCart({ name: 'name two', price: 5, quantity: 4 }))

const state = store.getState();
const visiblePhones = getVisiblePhones(state.phones, state.filters)
console.log(visiblePhones);

const Jsx = () => (
    <div>
        <Provider store={store}>
            <AppRouter />
        </Provider>
    </div>
)

ReactDOM.render(<Jsx />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
