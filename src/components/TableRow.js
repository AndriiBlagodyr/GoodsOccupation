import React from 'react';

import { GoodsCell } from './GoodsCell';

export const TableRow = ({ ...props }) => (
            <React.Fragment>
                <GoodsCell place='0' { ...props }>{props.index}</GoodsCell>
                <GoodsCell place='1' { ...props }/>
                <GoodsCell place='2' { ...props }/>
                <GoodsCell place='3' { ...props }/>
                <GoodsCell place='4' { ...props }/>
            </React.Fragment>
    );

TableRow.displayName = 'TableRow';
