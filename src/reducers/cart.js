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
              const quantity = { quantity: item.quantity + action.updates.quantity }
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


export default reducerAddToCart;