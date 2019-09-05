import styled from 'styled-components';

export const GoodsCellStyle = styled.div `
    box-sizing: border-box;
    background-color: #f1f1f1;
    flex: 1 0 17%;
    margin: 2px;
    text-align: center;
    line-height: 50px;
    font-size: 17px;
    text-align: center;
    height: 50px;
    border: 1px solid grey;
	box-shadow: 6px 6px 12px 0 rgba(0, 0, 0, 0.2);
    background-color: #00FF00;
    background-color: ${ props => props.withTime ? 'yellow' : null };
    background-color: ${ props => props.maxTime === Date.parse(props.timer_start_ts) &&
                         props.place_name === `Platz ${props.place}` ? 'red' : null };
    overflow: hidden;
`;

export const ScreenViewStyle = styled.div `
    display: flex;
    flex-wrap: wrap;
    width: 80%;

    & > div:nth-child(-n+5) {
        background-color: #01006A;
        color: white;
	}

    & > div:nth-child(5n+6) {
        background-color: #FFF;
        color: black;
        font-size: 24px;
        font-weight: bold;
	}
`;
