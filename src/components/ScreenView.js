import React from 'react';

import { GoodsCell } from './GoodsCell';
import { ScreenViewStyle } from './ComponentStyle';
import {TableRow} from './TableRow';

export const ScreenView = ({ ...props }) => (
    <ScreenViewStyle>
        <GoodsCell>HALL ID</GoodsCell>
        <GoodsCell>PLACE 1</GoodsCell>
        <GoodsCell>PLACE 2</GoodsCell>
        <GoodsCell>PLACE 3</GoodsCell>
        <GoodsCell>PLACE 4</GoodsCell>
        {
            props.goodsLocation &&
            props.goodsLocation.map((good, index) =>
        <TableRow key={index} index={index+1} {...good} maxTime={props.maxTimeStamp}></TableRow>)
        }
    </ScreenViewStyle>
    );

ScreenView.displayName = 'ScreenView';
