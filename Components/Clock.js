import React,{useState,useEffect} from 'react';
import {gRTUT} from "./Clockfunction"

const Clock = ({countdownTimestampMs,setremainingTime,remainingTime,days}) => {

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
    <div> {days} days</div>
  )
}
 
export default Clock