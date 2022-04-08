import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import style from "../styles/payment.module.css";
// import {useHistory} from "react-router-dom";

import { auth, db } from "../firebase";
import { useRouter } from "next/router";
import axios from "../axios";
const Payment = ({ formdata, setoncard,successcode}) => {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter()

  const [processing, setProcessing] = useState("");
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);
  const [discount, setdiscount] = useState(false);


  useEffect(() => {

    const getClientSecret = async () => {
//   console.log(formdata?.amount)
let response;
  if(successcode){
    let discountamount;
    if(formdata?.amount!=999){
      discountamount=(formdata?.amount*80).toString().slice(0,4);
    }
    else{
      discountamount=(formdata?.amount*80).toString().slice(0,3);
    }
setdiscount(discountamount)
    response = await axios({
      method: "post",
      url: `/payments/create?total=${discountamount*100}`,
    });
  }
  if(!successcode){
    response = await axios({
      method: "post",
      url: `/payments/create?total=${formdata?.amount*100}`,
    });
  }

        setClientSecret(response?.data?.clientSecret);
  console.log(clientSecret)
       
    };
    getClientSecret();

  }, [handleSubmit]);




  const handleSubmit = async (e) => {
    // memberAlreadyExists()
    e.preventDefault();
    setProcessing(true);
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        setSucceeded(true);
        setError(null);
        setProcessing(false);
        setoncard(false);
      const finalformdata = {
          ...formdata,
          created: paymentIntent.created,
          discountamount:discount,
      };
        db.collection("member").add(finalformdata)
        router.push("/myplan");
      });
  };
  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };
  return (
    <div className={style.PaymentContainer}>
    {!discount?
      <h2>Amount:{formdata?.amount}</h2>
   :   <h2>Amount:{discount}</h2>

    }
      <form className={style.PaymentForm} onSubmit={handleSubmit}>
        <CardElement onChange={handleChange} />
        <div className={style.cardSubmit}>
          <button disabled={processing || disabled || succeeded}>
            <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
          </button>
        </div>
        {error && <div>{error}</div>}
      </form>
    </div>
  );
};
export default Payment;
