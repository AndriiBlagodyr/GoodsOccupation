import React from 'react';

import { Provider } from 'react-redux';
import store from './store';
import { OccupiedPlacesPageContainer } from './pages';

const App = () => (
  <Provider store={store}>
    <OccupiedPlacesPageContainer/>
  </Provider>
);

App.displayName = 'App';

export default App;
