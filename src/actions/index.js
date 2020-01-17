export const itemsLoaded = (payload) => {
  return {
    type: 'ITEMS_LOADED',
    payload: payload
  }
};

export const getDetailInfo = (payload) => {
  return {
    type: 'GET_DETAIL_INFO',
    payload: payload
  }
};
