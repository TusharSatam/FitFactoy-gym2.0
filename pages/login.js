import React from 'react'
import { auth, provider } from "../firebase";
import styles1 from '../styles/Login.module.css'
import gymLogo from "../utils/gymLogo.png"
import Image from 'next/image'
const Login = () => {
    const signIn = () => {
        auth.signInWithPopup(provider).catch(alert);
      };

  return (
    <div className={styles1.Container}>
<div className={styles1.LoginContainer}>
<h1 className={styles1.h1}>Fit Factory</h1>

    <Image
        alt="Mountains"
        src={gymLogo}
        objectFit="cover"
        quality={100}
        height="180"
        width="200"
      />
    <button className={styles1.Button} onClick={signIn}>Login with Google</button>
</div>

    </div>
  )
}

export default Login