import { setTextFilter, sortByPrice, sortByRandom } from '../../actions/filters';
 
test('should generate setTextFilter with text value', () => {
    const action = setTextFilter('o');
    expect(action).toEqual({
        type: 'SET_NAME_FILTER',
        name: 'o'
    })
})

test('should generate setTextFilter with default', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_NAME_FILTER',
        name: ''
    })
})

test('should generate action object for sortByPrice', () => {
    const action = sortByPrice();
    expect(action).toEqual({ type: "SORT_BY_PRICE"})
})

test('should generate action object for sortByRandom', () => {
    const action = sortByRandom();
    expect(action).toEqual({ type: 'SORT_BY_RANDOM' })
})