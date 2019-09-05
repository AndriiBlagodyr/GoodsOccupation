export const getMinTimestamp = (array) => {
    return Math.min.apply(Math, array.map(function (obj) {
        return Date.parse(obj.timer_start_ts);
    }));
};

export const getLastCharAsNumber = (str) => {
    return parseInt(str[str.length -1]);
};

export const convertMsToTime = (milliseconds) => {
    let seconds = (milliseconds/1000);
    let minutes = parseInt(seconds/60, 10);
    seconds = Math.round(seconds%60);
    let hours = parseInt(minutes/60, 10);
    minutes = minutes%60;

   return hours + 'h ' + minutes + 'm ' + seconds + 's';
 };
