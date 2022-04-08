import dayjs from 'dayjs';

export function gRTUT(timestampMs){
    const timestampDayjs=dayjs(timestampMs);
    const nowDayjs=dayjs();
    return{
        days:getRemainingDays(nowDayjs,timestampDayjs),
        hours:getRemaininghours(nowDayjs,timestampDayjs)
    }
}

function getRemaininghours(nowDayjs,timestampDayjs){
    const hours=timestampDayjs.diff(nowDayjs,'hours') % 24;
    console.log("hours"+hours)
    return hours;
}
function getRemainingDays(nowDayjs,timestampDayjs){
    const days=timestampDayjs.diff(nowDayjs,'days');
    return days;
}