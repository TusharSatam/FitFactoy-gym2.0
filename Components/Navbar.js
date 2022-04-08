import React, { useState,useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import style from "../styles/Navbar.module.css";
import { useRouter } from "next/router";
import ActiveLink from "./ActiveLink";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import Avatar from "@mui/material/Avatar";
import ViewListIcon from "@mui/icons-material/ViewList";
import { useCollection} from "react-firebase-hooks/firestore";
import { motion } from "framer-motion";

import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
const Navbar = () => {
  const [istoggle, setIstoggle] = useState(false);
const [memberexists,setmemberexists]=useState(false)
  const router = useRouter();
  <style jsx>{`
    .nav-link {
      text-decoration: none;
    }
    .active:after {
      /* color:blue; */
      content: " (current page)";
    }
  `}</style>;

  const [user] = useAuthState(auth);

  const { photoURL, email } = user;



  const [memberSnapshot] = useCollection(
    db.collection("member").where("email", "==",email)
  );
  
  useEffect(() => {
  
    const memberAlreadyExists =  () =>{
      console.log("in inn in inn");
       const tempdata= memberSnapshot?.docs?.[0]?.data();
        if(tempdata?.email == email){
      setmemberexists(true);
      }
    
    }
    memberAlreadyExists()
  })
  


  // console.log(email);
  return (
    <div className={style.Container}>
      <div className={style.Navbar_Container}>
        <div className={style.userImage}>
          {photoURL ? <Avatar src={photoURL} onClick={() => auth.signOut()} /> : <Avatar onClick={() => auth.signOut()}>{email[0]}</Avatar>}
        </div>
        <div className={style.Navbar_items}>
          <ul className={style.flexrow}>
            <motion.li initial={{y:-100}} animate={{y:0}} transition={{duration:1}}>
              <ActiveLink activeClassName="active" href="/">
                <a>HOME</a>
              </ActiveLink>
            </motion.li>
            <motion.li initial={{y:-100}} animate={{y:0}} transition={{duration:1}}>
              <ActiveLink activeClassName="active" href="/about">
                <a>ABOUT</a>
              </ActiveLink>
            </motion.li>
            <motion.li initial={{y:-100}} animate={{y:0}} transition={{duration:1}}>
              <ActiveLink activeClassName="active" href="/gallery">
                <a>GALLERY</a>
              </ActiveLink>
            </motion.li>
            <motion.li initial={{y:-100}} animate={{y:0}} transition={{duration:1}}>
              <ActiveLink activeClassName="active" href="/plans">
                <a>PRICING</a>
              </ActiveLink>
            </motion.li>
            {memberexists &&   
              <motion.li initial={{y:-100}} animate={{y:0}} transition={{duration:.1}}>
              <ActiveLink activeClassName="active" href="/myplan">
                <a>MYPLAN</a>
              </ActiveLink>
            </motion.li>
            }
            <motion.li initial={{y:-100}} animate={{y:0}} transition={{duration:1}}>
              <ActiveLink activeClassName="active" href="/contact">
                <a>CONTACT</a>
              </ActiveLink>
            </motion.li>
            <motion.li initial={{y:-100}} animate={{y:0}} transition={{duration:1}}>
              <ActiveLink activeClassName="active" href="/faq">
                <a>FAQ</a>
              </ActiveLink>
            </motion.li>
          </ul>
        </div>
        <div
          className={style.toggleBar}
          onClick={() => {
            setIstoggle(!istoggle);
          }}
        >
          <MenuIcon />
        </div>
        {istoggle && <div className={style.toggleSidebar}>
        
          <div onClick={() => {
            setIstoggle(!istoggle);
          }}>
          <CloseIcon/>
          </div>
        <ul className={style.flexcol}>
            <motion.li initial={{x:200}} animate={{x:0}} transition={{duration:.6}}>
              <ActiveLink activeClassName="active" href="/">
                <a>HOME</a>
              </ActiveLink>
            </motion.li>
            <motion.li initial={{x:200}} animate={{x:0}} transition={{duration:.6}}>
              <ActiveLink activeClassName="active" href="/about">
                <a>ABOUT</a>
              </ActiveLink>
            </motion.li>
            <motion.li initial={{x:200}} animate={{x:0}} transition={{duration:.6}}>
              <ActiveLink activeClassName="active" href="/gallery">
                <a>GALLERY</a>
              </ActiveLink>
            </motion.li>
            <motion.li initial={{x:200}} animate={{x:0}} transition={{duration:.6}}>
              <ActiveLink activeClassName="active" href="/plans">
                <a>PRICING</a>
              </ActiveLink>
            </motion.li>
            {memberexists &&          
            <motion.li initial={{x:200}} animate={{x:0}} transition={{duration:.1}}>
              <ActiveLink activeClassName="active" href="/myplan">
                <a>MYPLAN</a>
              </ActiveLink>
            </motion.li>
            }
            <motion.li initial={{x:200}} animate={{x:0}} transition={{duration:.6}}>
              <ActiveLink activeClassName="active" href="/contact">
                <a>CONTACT</a>
              </ActiveLink>
            </motion.li>
            <motion.li initial={{x:200}} animate={{x:0}} transition={{duration:.6}}>
              <ActiveLink activeClassName="active" href="/faq">
                <a>FAQ</a>
              </ActiveLink>
            </motion.li>
          </ul>
        </div>}
      </div>
    </div>
  );
};

export default Navbar;
