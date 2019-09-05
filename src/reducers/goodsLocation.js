import { handleActions } from 'redux-actions';

export const initialGoodsLocationState = [];

export const goodsLocation = handleActions(
  {
    FETCH_GOODS_LOCATION_FULFILLED: (state, { payload: {data} }) => data
  },
  initialGoodsLocationState
);
