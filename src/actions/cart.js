import uuid from 'uuid';

export const addToCart = ({
    name = '',
    price = 0,
    quantity = 0,
    id
    } = {}
  ) => ({
    type: 'ADD_TO_CART',
    itemInCart: {
        id, // uuid()
        name,
        price,
        quantity
    }
})

export const updateItemQuantity = (id, updates) => ({
  type: "UPDATE_ITEM_QUANTITY",
  id,
  updates,
})

export const removeCartItem = (id) => ({
  type: "REMOVE_ITEM",
  id,
})
