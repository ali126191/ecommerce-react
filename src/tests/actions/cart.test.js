import { addToCart, updateItemQuantity, removeCartItem} from '../../actions/cart';

test('should setup addToCart action object with default values', () => {
  const action = addToCart();
  expect(action).toEqual({
    type: 'ADD_TO_CART',
    itemInCart: {
      id: undefined,
      name: '',
      price: 0,
      quantity: 0
    }
  })
})

test('should setup addToCart action object', () => {
  const action = addToCart({ name: 'name', id: '123abc', price: 0, quantity: 0});
  expect(action).toEqual({
    type: 'ADD_TO_CART',
    itemInCart: {
      id: '123abc',
      name: 'name',
      price: 0,
      quantity: 0
    }
  })
})

test('should setup updateItemQuantity action object', () => {
  const action = updateItemQuantity('123abc', {name: 'item new'});
  expect(action).toEqual({
    type: 'UPDATE_ITEM_QUANTITY',
    id: '123abc',
    updates: {
      name: 'item new'
    }
  })
})

test('should setup removeCartItem action object', () => {
  const action = removeCartItem('123abc');
  expect(action).toEqual({
    type: 'REMOVE_ITEM',
    id: '123abc',
  })
})



