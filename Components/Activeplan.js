import React, { useState, useEffect } from "react";
import style from "../styles/myplan.module.css";
import { useCollection } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import moment from "moment";
import { extendMoment } from "moment-range";
import Clock from "./Clock.js"
const Activeplan = () => {
  const [user] = useAuthState(auth);
  const { email } = user;
  const [memberSnapshot] = useCollection(
    db.collection("member").where("email", "==", email)
  );

  const data = memberSnapshot?.docs?.[0]?.data();
  
  const [starting, setstarting] = useState(moment().format("DD-MM-YYYY"))

  const [enddate, setenddate] = useState(
    moment(data?.created).add(30, "d").format("MMMM DD,YYYY")
  );
  
  const [enddates, setenddates] = useState(
    moment(data?.created).add(180, "d").format("MMMM DD,YYYY")
  );
  
  const [enddatess, setenddatess] = useState(
    moment(data?.created).add(365, "d").format("MMMM DD,YYYY")
  );

  const [daysleft, setdaysleft] = useState(30);

  const [remainingTime,setremainingTime]=useState({
    days:"fetching",
    hours:"",
});

  useEffect(() => {
    if (remainingTime?.days=="0") {
      const deleteid = memberSnapshot?.docs?.[0]?.id;
      db.collection("member").doc(deleteid).delete();
      console.log("hello delete");
      console.log(deleteid);
    }
  });
  return (
    <div className={style.myPlanContainer}>
      <h1 className={style.activeheading}>MY ACTIVE PLAN</h1>
      {remainingTime.days!="0" ? (
        <div className={style.activeContainer}>
          <div className={style.memberName}>
          <i>Name</i> : {data?.firstname} {data?.lastname}
          </div>
          <span><i>Plan name</i> : {data?.planname}</span>
          <p> <i>Plan Amount :</i> ₹ {data?.amount}</p>
          {data?.discountamount!=false ? <p className={style.paidamount}> <i>Paid(with discount 20%):</i> ₹ {data?.discountamount}</p>:<p className={style.paidamount}> <i>Paid:</i> ₹ {data?.amount}</p>}
          <span><i>Actived on</i> : {moment.unix(data?.created).format("DD-MM-YYYY")}</span>
          {data?.days == 30 && <span><i>Expire on</i>: {enddate}</span>}
          {data?.days == 180 && <span><i>Expire on </i>: {enddates}</span>}
          {data?.days == 365 && <span><i>Expire on </i>: {enddatess}</span>}
          <div className={style.daysleft}>
          {data?.days == 30 &&  <Clock countdownTimestampMs={enddate} setremainingTime={setremainingTime} remainingTime={remainingTime} days={data?.days}/>}
          {data?.days == 180 &&  <Clock countdownTimestampMs={enddates} setremainingTime={setremainingTime} remainingTime={remainingTime}  days={data?.days}/>}
          {data?.days == 365 &&  <Clock countdownTimestampMs={enddatess} setremainingTime={setremainingTime} remainingTime={remainingTime}  days={data?.days}/>}
          </div>
         
        </div>
      ) : (
        <div>
          <h3>NO ACTIVE PLAN AVAILABLE</h3>
        </div>
      )}
    </div>
  );
};

export default Activeplan;
