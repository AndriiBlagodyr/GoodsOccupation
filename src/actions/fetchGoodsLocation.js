import axios from 'axios';
import { createAction } from 'redux-actions';

const payloadCreator = () => axios.get('http://localhost:2000/v1/goodsPosition');

const fetchGoodsLocationAsync = createAction('FETCH_GOODS_LOCATION', payloadCreator);

const fetchGoodsLocation = () => dispatch => dispatch(fetchGoodsLocationAsync());

export default fetchGoodsLocation;
