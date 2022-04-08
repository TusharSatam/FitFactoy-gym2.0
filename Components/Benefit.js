import React, { useRef } from "react";
import style from "../styles/plans.module.css";
import CheckIcon from "@mui/icons-material/Check";

const Benefit = ({ days, amount, setscrollToform }) => {
  return (
    <div className={style.plantype} onClick={() => setscrollToform(true)}>
      <div className={style.typename}>
        <h2 className={style.typenameh2}>{days}</h2>
      </div>
      <div className={style.typeamount}>
        <h1>₹ {amount}</h1>
      </div>
      <div className={style.typeoptions}>
        <div className={style.option}>
          <p className={style.pp}>
           
            Customized personal training
          </p>
        </div>
        <div className={style.option}>
          <p className={style.pp}>
           
            Customized personal training
          </p>
        </div>
        <div className={style.option}>
          <p className={style.pp}>
            {" "}
           {" "}
            12 week nutritional plan
          </p>
        </div>
        <div className={style.option}>
          <p className={style.pp}>
            {" "}
           
            Monthly progress report
          </p>
        </div>
        <div className={style.option}>
          <p className={style.pp}>
            {" "}
           
            Individual menu planning
          </p>
        </div>
        <div className={style.option}>
          <p className={style.pp}>
            {" "}
           
            Weekly accountability check-ins
          </p>
        </div>
        <div className={style.option}>
          <p className={style.pp}>
            {" "}
           
            Weekly accountability check-ins
          </p>
        </div>
        <div className={style.option}>
          <p className={style.pp}>
            {" "}
           
            Fat burning intervals
          </p>
        </div>
        <div className={style.option}>
          <p className={style.pp}>
            {" "}
           {" "}
            Food journal checklists
          </p>
        </div>
        <div className={style.option}>
          <p className={style.pp}>
            {" "}
           {" "}
            SUPPORT
          </p>
        </div>
        <div className={style.option}>
          <p className={style.pp}>
            {" "}
           {" "}
            100% GUARANTEED results!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
