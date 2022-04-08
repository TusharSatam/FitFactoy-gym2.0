import React,{useState} from "react";
import style from "../styles/gallery.module.css";
import g1 from "../utils/G1.jpg";
import g2 from "../utils/G2.jpg";
import g3 from "../utils/G3.jpg";
import g4 from "../utils/G4.jpg";
import bI from "../utils/about_top.jpg";
import b1 from "../utils/b1.jpg";
import s2 from "../utils/s2.jpg";
import s1 from "../utils/s1.jpg";
import PT2 from "../utils/PT2.jpg";

import small1 from "../utils/small1.jpg";
import { Fade,Zoom } from "react-awesome-reveal";
import Image from "next/image";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";

const Gallery = () => {



  return (
    <div className={style.Gallerycontainer}>
    <div className={style.VideoContainer}>
    <h1 className={style.Galleryheading}><span className={style.our}>Gallery</span></h1>
      <div className={style.topVideo1}>
        <Image src={g4} 
        objectFit={"cover"}  
         layout="fill" />
      </div>
      <div className={style.topVideo2}>
        <Image src={g2} objectFit={"cover"} layout="fill" quality={100} />
      </div>
      <div className={style.topVideo3}>
        <Image src={g3} objectFit={"cover"} layout="fill" quality={100} />
      </div>
      <div className={style.topVideo4}>
        <Image src={g1} objectFit={"cover"} layout="fill" quality={100} />
      </div>
    </div>


  <div className={style.ImageContainer}>
      <div className={style.bigImage1}>
      <Image src={b1} objectFit={"cover"} layout="fill"  quality={100} />
      </div>
      <div className={style.smallImageContainer}>
      <motion.div initial={{x:-600}} animate={{x:0}}  transition={{duration:3}}   className={style.smallImage1}>
      {/* <Image src={small1} objectFit={"cover"} layout="fill"  quality={100} /> */}
      </motion.div>
      <motion.div initial={{x:600}} animate={{x:0}}  transition={{duration:3}} className={style.smallImage2}>
      {/* <Image src={PT2} objectFit={"cover"} layout="fill"  quality={100} /> */}
      </motion.div>
      </div>

      <div className={style.bigImage2}>
      {/* <Image src={b1} objectFit={"cover"} layout="fill"  quality={100} /> */}
      </div>
    </div>

    <div className={style.RVContainer}>
    <ReactPlayer
            url="https://www.youtube.com/watch?v=PuAtBlXa350"
            controls={false}
            width="100%"
            height="100%"
          />
</div>

    </div>
  );
};

export default Gallery;
