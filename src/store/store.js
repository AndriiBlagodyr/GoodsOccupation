import { createStore, compose, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';
import { goodsLocation, initialGoodsLocationState } from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware, promiseMiddleware()));

export const initialStoreState = {
    goodsLocation: initialGoodsLocationState
};

const store = createStore(
    goodsLocation,
    initialStoreState,
    enhancer
);

export default store;
