import React,{useState,useEffect} from 'react';
import {gRTUT} from "./Clockfunction"

const Clock = ({countdownTimestampMs,setremainingTime,remainingTime}) => {

useEffect(()=>{
    const intervalid=setInterval(()=>{
        UpdateRemainingTime(countdownTimestampMs);
    },10000);
    return ()=>clearInterval(intervalid);
},[countdownTimestampMs]);
function UpdateRemainingTime(countdown){
    setremainingTime(gRTUT(countdown))
}


  return (
    <div>{parseInt(remainingTime?.days)+1} days {remainingTime?.hours}</div>
  )
}
 
export default Clock