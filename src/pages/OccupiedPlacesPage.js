import React from 'react';

import { HeaderText, Layout, ScreenView } from '../components';

const displayName = 'OccupiedPlacesPage';

export const OccupiedPlacesPage = (props) => (
  <Layout>
    <HeaderText align="center">
        FLAT SCREEN VIEW
    </HeaderText>
    <ScreenView {...props}/>
  </Layout>
);

OccupiedPlacesPage.displayName = displayName;

export default OccupiedPlacesPage;
