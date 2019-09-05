import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose, setDisplayName, lifecycle} from 'recompose';
import { bindActionCreators } from 'redux';

import { fetchGoodsLocation } from '../actions';
import OccupiedPlacesPage from './OccupiedPlacesPage';
import { getGoodsInfo } from '../selectors';

export const enhance = compose(
  setDisplayName('OccupiedPlacesPageContainer'),
  withRouter,
  connect(
    state => ({
      ...getGoodsInfo(state),
    }),
    dispatch => ({
      fetchGoodsLocation: bindActionCreators(fetchGoodsLocation, dispatch),
    })
  ),
  lifecycle({
    componentDidMount() {
      this.intervalID = setInterval(
        () => this.props.fetchGoodsLocation(),
        1000
      );
    },
    componentWillUnmount() {
      clearInterval(this.intervalID);
    }
  })
);

const OccupiedPlacesPageContainer = enhance(OccupiedPlacesPage);

export default OccupiedPlacesPageContainer;
