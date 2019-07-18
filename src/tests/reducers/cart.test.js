import phones from '../fixtures/phones';
import reducerAddToCart from '../../reducers/cart';
import reducerAddPhones from '../../reducers/phones';

test('should set default state', () => {
    const state = reducerAddToCart(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
})

test('should remove item form cart', () => {
    const action = {
        type: 'REMOVE_ITEM',
        id: phones[0].id
    }
    const state = reducerAddToCart(phones, action);
    expect(state).toEqual([phones[1], phones[2]]);
})

test('should not remove phone if id not found', () => {
    const action = {
        type: 'REMOVE_ITEM',
        id: 'asd'
    }
    const state = reducerAddPhones(phones, action);
    expect(state).toEqual([phones[0], phones[1], phones[2]])
})

test('should update a cart item', () => {
    const quantity = 2;
    const action = { 
        type: 'UPDATE_ITEM_QUANTITY',
        id: phones[0].id,
        updates: {
            quantity
        }
    }
    const state = reducerAddToCart(phones, action);
    expect(state[0].quantity).toBe(2)
})


test('should add cart item', () => {
    const phone = {
          id: '123',
          name: 'new phone',
          price: 100,
          quantity: 1
      }

    const action = {
        type: 'ADD_TO_CART',
        itemInCart: phone
    } 
    
    const state = reducerAddToCart(phones, action);
    expect(state).toEqual([...phones, phone])
})


//      addToCart({ name: 'name one', price: 12, quantity: 5 }