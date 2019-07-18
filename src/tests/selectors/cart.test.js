import uuid from 'uuid';
import getVisiblePhones from '../../selectors/cart';

const phones = [
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
    }
]

test('should filter phones by text value', () => {
    const filters = {
        name: 'o',
        sortBy: 'random'
    }
    const result = getVisiblePhones(phones, filters);
    expect(result).toEqual([phones[0], phones[2]])
})

test('should filter phones by random', () => {
  const filters = {
    sortBy: 'random'
  }
  const result = getVisiblePhones(phones, filters);
  expect(result).toEqual([phones[0], phones[1], phones[2]])
})

test('should filter phones by price', () => {
  const filters = {
    sortBy: 'price'
  }
  const result = getVisiblePhones(phones, filters);
  expect(result).toEqual([phones[1], phones[0], phones[2]])
})