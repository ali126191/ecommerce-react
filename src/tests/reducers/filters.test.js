import reducerFilters from '../../reducers/filters';

test('should setup set default filter values', () => {
    const action = {
        type: '@@INIT'
    }
    const state = reducerFilters(undefined, action)
    expect(state).toEqual({
        name: '',
        sortBy: 'price'
    })
})

test('should setup set name filter', () => {
    const name = 'phone 1';
    const action = {
        type: 'SET_NAME_FILTER',
        name
    }
    const state = reducerFilters(undefined, action)
    expect(state).toEqual({
        name,
        sortBy: 'price'
    })
})

test('should setup sortBy price', () => {
    const action = {
        type: 'SORT_BY_PRICE'
    }
    const state = reducerFilters(undefined, action);
    expect(state.sortBy).toBe('price')
})

test('should setup sortBy random', () => {
    const action = {
        type: 'SORT_BY_RANDOM'
    }
    const state = reducerFilters(undefined, action);
    expect(state.sortBy).toBe('random')
})