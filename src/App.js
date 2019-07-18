import React from 'react'
import PhoneList from './components/PhoneList';
import Header from './components/Header';
import PhoneListFilters from './components/PhoneListFilters';

const App = (props) => (
    <div>
        <Header />
        <PhoneListFilters />
        <PhoneList />
    </div>
);

export default App;
// import configureStore from './store/configureStore';
// import getVisiblePhones from './selectors/cart';
// import { addToCart } from './actions/cart';
// import { setTextFilter } from './actions/filters';

// const store = configureStore();

// store.dispatch(addToCart({ name: 'name one', price: 12, quantity: 5 }))
// store.dispatch(setTextFilter('o'))

// const state = store.getState();
// const visiblePhones = getVisiblePhones(state.phones, state.filters)

// const reduxFile = () => (
//     <div>
//         {console.log(visiblePhones)}
//     </div>
// )

// export default reduxFile;
