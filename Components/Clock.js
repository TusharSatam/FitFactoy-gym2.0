import React,{useState,useEffect} from 'react';
import {gRTUT} from "./ClockFunction"

const Clock = ({countdownTimestampMs,setremainingTime,remainingTime}) => {

useEffect(()=>{
    const intervalid=setInterval(()=>{
        function UpdateRemainingTime(countdown){
            setremainingTime(gRTUT(countdown))
        }
        UpdateRemainingTime(countdownTimestampMs);
    },10000);
    return ()=>clearInterval(intervalid);
},[countdownTimestampMs]);


  return (
    <div>{parseInt(remainingTime?.days)+1} days {remainingTime?.hours}</div>
  )
}
 
export default Clock