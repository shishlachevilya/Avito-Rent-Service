const initialState = {
  items: [],
  detailItem: [],
  isLoading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ITEMS_LOADED':
      return {
        ...state,
        items: action.payload,
        isLoading: false
      };
    case 'GET_DETAIL_INFO':

      return {
        ...state,
        detailItem: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};

export default reducer;
