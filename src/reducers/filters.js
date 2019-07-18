const initalFiltersReducerState = {
    name: '',
    sortBy: 'price'
  }
  
  const reducerFilters = (state = initalFiltersReducerState, action) => {
    switch (action.type) {
      case 'SET_NAME_FILTER':
        return {
          ...state,
          name: action.name
        };
      case 'SORT_BY_PRICE':
          return {
            ...state,
            sortBy: 'price',
          }
      case 'SORT_BY_RANDOM':
        return {
          ...state,
          sortBy: 'random'
        }
      default:
        return state
    }
  }

export default reducerFilters