import React from 'react';
import {GoodsCellStyle} from './ComponentStyle';
import {convertMsToTime} from '../helpers';

export const GoodsCell = ({...props}) =>{
    if(props.index && props.hall_id === props.index && props.place_name === `Platz ${props.place}`){
        props.children =convertMsToTime(Date.now() - Date.parse(props.timer_start_ts));
        props.withTime = true;
    }

    return (< GoodsCellStyle {...props}>
       {props.children}
     </GoodsCellStyle>)
};

GoodsCell.displayName = 'GoodsCell';
