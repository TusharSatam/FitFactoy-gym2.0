import React from "react";
import style from "../styles/footer.module.css";
import SendIcon from "@mui/icons-material/Send";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from "next/link";
const Footer = () => {
  return (
    <div className={style.Container}>
      <div className={style.details}>
        <h2 className={style.h2}>Find us</h2>
        <p className={style.p}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum,
          aperiam eligendi incidunt odit enim accusantium id? Dolore est
          quibusdam unde maiores minus voluptas fugit, voluptatem blanditiis
          dolorum consectetur ullam molestias!
        </p>
        <div className={style.det}>
          <SendIcon />
          <p className={style.p}>sec 2 South Park Avenue</p>
        </div>
        <div className={style.det}>
          <CallIcon />
          <p className={style.p}>+91-9875387547</p>
        </div>
        <div className={style.det}>
          <EmailIcon />
          <p className={style.p}>fitfactory@gmail.com</p>
        </div>
      </div>
      <div className={style.aboutFF}>
        <h2 className={style.h2}> About Fit_Factory</h2>
        <p className={style.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, neque? Vel quisquam quia laboriosam sint architecto deleniti dicta et ex aliquid error consectetur perspiciatis suscipit, maiores ut cupiditate alias iusto
        </p>
        
        <div className={style.contactUsButton}>
            <Link href="/contact" className={style.a_Contact}>Contact Us</Link>
        </div>
      </div>
      <div className={style.details}>
        <h2 className={style.h2}>Useful Links</h2>
        <div className={style.usefulLinks}>
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/faq">Faq</Link>
          <Link href="/plans">Plans</Link>
          <Link href="/gallery">Gallery</Link>
        </div>
        <div className={style.SocialMedia}>
          <div className={style.FacebookIcon}>
            <FacebookIcon />
          </div>
          <div className={style.InstagramIcon}>
            <InstagramIcon />
          </div>
          <div className={style.TwitterIcon}>
            <TwitterIcon />
          </div>
        </div>
      </div>
 
    </div>
  );
};

export default Footer;
