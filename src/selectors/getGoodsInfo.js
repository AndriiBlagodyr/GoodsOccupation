import { createSelector } from 'reselect';
import { getMinTimestamp } from '../helpers';

const getGoodsInfo = createSelector(
    state => state.goodsLocation,
    goodsLocation => ({
        goodsLocation,
        maxTimeStamp: getMinTimestamp(goodsLocation)
    })
);

export default getGoodsInfo;
