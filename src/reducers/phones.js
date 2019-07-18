import uuid from 'uuid';

const initalPhoneReducerState = [
    {
      name: 'Google Pixel',
      price: 1000,
      quantity: 1,
      id: uuid()
    },
    {
      name: 'Black Berry',
      price: 600,
      quantity: 1,
      id: uuid()
    },
    {
      name: 'Iphone xs',
      price: 1400,
      quantity: 1,
      id: uuid()
    },
    {
      name: 'Iphone 8',
      price: 6400,
      quantity: 1,
      id: uuid()
    },
    {
      name: 'Iphone 4',
      price: 300,
      quantity: 1,
      id: uuid()
    },
    {
      name: 'Moto G 5',
      price: 180,
      quantity: 1,
      id: uuid()
    }
]

const reducerAddPhones = (state = initalPhoneReducerState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default reducerAddPhones;