import React from "react";
import {useState} from "react";
import {useEffect} from "react";
import {useRef} from "react";
import Link from "next/link";
import style from "../styles/plans.module.css";
import planstopImage from "../utils/plantopimage.jpg";
import Image from "next/image";
import CheckIcon from "@mui/icons-material/Check";
import Multiselect from "../Components/Multiselect";
import {Elements} from "@stripe/react-stripe-js";
import Payment from "../Components/Payment.js"
import {loadStripe} from "@stripe/stripe-js";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection} from "react-firebase-hooks/firestore";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Benefit from "../Components/Benefit"
import { auth, db } from "../firebase";
import TouchAppIcon from '@mui/icons-material/TouchApp';
import "firebase/compat/firestore";
const promise=loadStripe(
  "pk_test_51JBY5WSFH0H2XJ5NKOwTJxbwFkBEVj3WjQKwMOSQvzv8OueLVnJd2Sc8AFTlIrzc0c3zqZmn2Jz9yjDMmJ4A1XIn00mxlnWRyp"
);

const Plans = () => {
  const [user] = useAuthState(auth);
  const {email} = user;

  const [scrollToform, setscrollToform]=useState(false);

  const ExistsAlert=useRef(null);
  const scrollform=useRef(null)
  const emptycouponbox=useRef(null)

  const [memberexists, setmemberexists]=useState(false);
  const [amount, setAmount]=useState('');
  const [oncard, setoncard]=useState(false);

  const [coupons, setcoupons]=useState("welcome20");
  const [successcode, setsuccesscode]=useState(false);
  const [invalidcode, setinvalidcode]=useState(false);
  const [showform, setshowform]=useState(true);



  const [formdata, setformdata] = useState({  
    firstname: "",
    lastname: "",
    phone:"",
    email:email,
    age:"",
    coupon:"",
    message: "",
    amount:amount,
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),

  });
  console.log(formdata)
  const { firstname,lastname, phone, message,coupon,age } = formdata;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformdata({ ...formdata, [name]: value});
  };
    const [memberSnapshot] = useCollection(
      db.collection("member").where("email", "==",email)
    );
    
      const memberAlreadyExists =  () =>{
        console.log("in inn in inn");
         const tempdata= memberSnapshot?.docs?.[0]?.data();
          if(tempdata?.email == email){
        setmemberexists(true);
        setoncard(false);
        }
        else{
setshowform(false)
        setmemberexists(false);
        setoncard(true);
        }
      }

 
useEffect(()=>{
  ExistsAlert?.current?.scrollIntoView();
},[memberexists])  

useEffect(()=>{
  scrollform?.current?.scrollIntoView();
},[scrollToform])  



const handlecoupon=()=>{
  if(formdata?.coupon=="welcome20"){
    setsuccesscode(true);
    setinvalidcode(false);
    
  }
  else{
    // emptycouponbox?.current?.value=""
    setsuccesscode(false);
    setinvalidcode(true);
  }
}
  return (
    <div className={style.plansContainer}>
      <div className={style.planTopheading}>
        <h1 className={style.Topheading}>
          Our fitness plans are perfect for everyone looking to live a healthier
          lifestyle.
        </h1>
      </div>
      <div className={style.plantypes}>        
          <Benefit days={"1 Month"} amount={999} setscrollToform={setscrollToform}/>  
          <Benefit days={"6 Month"} amount={5499} setscrollToform={setscrollToform}/>  
          <Benefit days={"1 Year"} amount={9999} setscrollToform={setscrollToform}/>
      </div>

  <div className={style.planform}>
          <div  className={style.stformref}/>
            <h1 className={style.formh1}>REGISTER TODAY!</h1>
          <p>We will get in contact with you to start your plan as soon as we can.</p>
{
  showform &&
            <div className={style.formContainer}>
            <div className={style.firstname}>
              <input
                type="text"
                value={firstname}
                name="firstname"
                onChange={handleChange}
                placeholder="First Name:"
                className={style.input}
                required
              onInput={(e) => e.target.value = e.target.value.slice(0, 16)}

              />
            </div>
            <div className={style.lastname}>
              <input
                type="text"
                value={lastname}
                name="lastname"
                onChange={handleChange}
                placeholder="Last Name:"
                className={style.input}
              onInput={(e) => e.target.value = e.target.value.slice(0, 16)}

                required

              />
            </div>
            <div className={style.age}>
              <input
                type="number"
                value={age}
                name="age"
                onChange={handleChange}
                placeholder="Age:"
                className={style.input}
                onInput={(e) => {e.target.value = e.target.value.slice(0, 3);
                if(e.target.value>100){
                  e.target.value=""
                }
                }}

                required
              />
            </div>
            <div className={style.phone}>
              <input
                type="number"
                value={phone}
                name="phone"
                onChange={handleChange}
                placeholder="Phone*"
                className={style.input}
                required
                pattern="/^-?\d+\.?\d*$/"
              onInput={(e) => e.target.value = e.target.value.slice(0, 10)}
              />
            </div>
            <div className={style.message}>
            <textarea
                type="text"
                value={message}
                name="message"
                onChange={handleChange}
                placeholder="enter your message"
                className={style.textarea}
                maxLength={150}
                rows={5}
                cols={35}
                required
              ></textarea>
            </div>
            <Multiselect age={amount} setAge={setAmount} formdata={formdata} setformdata={setformdata} />
            <div className={style.coupon}>
              <input
                type="text"
                value={coupon}
                name="coupon"
                onChange={handleChange}
                placeholder="Coupon Code (optional)"
                className={style.input}
                required
                ref={emptycouponbox}
              />
           
{successcode && <h3 className={style.sgreen}><CheckCircleIcon/>Applied successfully</h3>}
{invalidcode  && <h3 className={style.ered}>Invalid coupon code </h3>}

            </div>
            <button onClick={()=>{handlecoupon()}} className={style.applybutton}>APPLY Coupon</button>
            <div  className={style.planformbutton} onClick={()=>memberAlreadyExists()}  >
              <button disabled={formdata?.amount.length<=0 || formdata?.firstname.length==0} className={style.formbutton}>Submit</button>
            </div>      
  </div>
}
{/* duplicate payment */}
              {
                memberexists && <div className={style.AlreadyExistsAlert}>
                <div ref={ExistsAlert} className={style.refref}/>
                  <h2>Sorry! You cant buy a new plan until your active plan expired</h2>
                  <p>Watch Your Active Plan</p>
                  <Link href="/myplan" className={style.formbutton}>MYPLAN</Link>
                  <TouchAppIcon/>
                  
                </div> 
              }
{/* end of duplicate payment */}


{/* card payment */}
              {oncard && 
              <div className={style.cardContainer}>
              <Elements stripe={promise}>
                <Payment formdata={formdata} setoncard={setoncard} successcode={successcode}/>
              </Elements>
              </div>
              }
 {/* end of card payment */}

      </div>


    </div>
  );
};

export default Plans;
