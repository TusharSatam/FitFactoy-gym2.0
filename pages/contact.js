import React, { useState } from "react";
import style from "../styles/contact.module.css";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "firebase/compat/app";
import { useRouter } from "next/router";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
const Contact = () => {
  // AUTH USER
  const [user] = useAuthState(auth);
  const { email } = user;

  //USESTATE
  const [formdata, setformdata] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const { name, phone, message } = formdata;
  const [loading, setloading] = useState(false);
  const [isformsubmit, setisformsubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformdata({ ...formdata, [name]: value });
  };
  const handleSubmit = () => {
    setloading(true);

    if (formdata) {
      db.collection("contacts").add({
        // userid:user.uid,
        name: formdata.name,
        email: email,
        phone: formdata.phone,
        message: formdata.message,
        lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
    setloading(false);
    setisformsubmit(true);
  };

  return (
    <div className={style.Contact_Container}>
    <h1>Contact Us</h1>
      {!isformsubmit ? (
        <form action="#" className={style.form}>
          <div className={style.name}>
            <input
              type="text"
              value={name}
              name="name"
              onChange={handleChange}
              placeholder="FullName:"
              className={style.input}
              required
            />
          </div>
          <div className={style.phone}>
            <input
              type="number"
              value={phone}
              name="phone"
              onChange={handleChange}
              placeholder="Phone:"
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
              rows={6}
              cols={35}
              required
            ></textarea>
          </div>
          <button
            type="button"
            className={style.submitbutton}
            onClick={handleSubmit}
            disabled={name.length<=0||phone.length<=0 ||phone.length>10 || message.length<=0}
          >
            {!loading ? "send message" : "sending"}
          </button>
        </form>
      ) : (
        <div className={style.thanks}>
        <div className={style.innermessage}>
          <CheckCircleOutlineIcon />
          <h1>Thanks for messaging</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
