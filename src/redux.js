import React from 'react';
import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const addToCart = ({
    name = '',
    price = 0,
    quantity = 0
    } = {}
  ) => ({
    type: 'ADD_TO_CART',
    itemInCart: {
        id: uuid(),
        name,
        price,
        quantity
    }
})

const updateItemQuantity = (id, updates) => ({
  type: "UPDATE_ITEM_QUANTITY",
  id,
  updates,
})

const removeCartItem= (id) => ({
  type: "REMOVE_ITEM",
  id,
})

const setTextFilter = (name = '') => ({
  type: 'SET_NAME_FILTER',
  name
})

const sortByPrice = () => ({
  type: 'SORT_BY_PRICE'
})

const reduxFile = () => (
    <div>
        {console.log(store)}
    </div>
)

const initalPhoneReducerState = [
    {
      name: 'Google Pixel',
      price: 1000,
      quantity: 0,
      id: uuid()
    },
    {
      name: 'Black Berry',
      price: 600,
      quantity: 0,
      id: uuid()
    },
    {
      name: 'Iphone xs',
      price: 1400,
      quantity: 0,
      id: uuid()
    },
    {
      name: 'Iphone 8',
      price: 6400,
      quantity: 0,
      id: uuid()
    },
    {
      name: 'Iphone 4',
      price: 300,
      quantity: 0,
      id: uuid()
    },
    {
      name: 'Moto G 5',
      price: 180,
      quantity: 0,
      id: uuid()
    }
]

const reducerAddPhones = (state = initalPhoneReducerState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const initalCartReducerState = []

const reducerAddToCart = (state = initalCartReducerState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return [
              ...state, 
              action.itemInCart
            ]
        case 'UPDATE_ITEM_QUANTITY':
          return state.map((item) => {
            if (item.id === action.id) {
              const quantity = { quantity: item.quantity + action.updates.quantity}
              return {
                ...item,
                ...quantity
              }
            } else {
                return item
            } 
          })
          case 'REMOVE_ITEM':
              return state.filter((item) => item.id !== action.id) 
        default:
          return state;
    }
  }




const filtersReducerDefaultState = {
  name: '',
  sortBy: 'price'
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_NAME_FILTER':
      return {
        ...state,
        name: action.name
      };
    case 'SORT_BY_PRICE':
        return {
          ...state,
          sortBy: 'price'
        }
    default:
      return state
  }
}

const getVisiblePhones = (phones, { name = 'a', sortBy}) => {
  return phones.filter((phone) => {
    const nameMatch = phone.name.toLowerCase().includes(name.toLowerCase());
    return nameMatch;
  }).sort((a, b) => {
    if (sortBy === 'price') {
      return a.price < b.price ? 1 : -1
    } else {
        return ''
    }
  })
}


const store = createStore(combineReducers({
  phones: reducerAddPhones,
  cart: reducerAddToCart,
  filters: filtersReducer
}));

store.subscribe(() => {
  const state = store.getState();
  console.log(state.filters);
  const visiblePhones = getVisiblePhones(state.phones, state.filters)
  console.log(visiblePhones);
});

const itemOne = store.dispatch(addToCart({ name: 'name', price: 3 }))
store.dispatch(updateItemQuantity(itemOne.itemInCart.id, {quantity: 4}))
// store.dispatch(updateItemQuantity(itemOne.itemInCart.id, {quantity: 1}))
// store.dispatch(removeCartItem(itemOne.itemInCart.id))
store.dispatch(sortByPrice());
store.dispatch(setTextFilter('oo'));



export default reduxFile;

