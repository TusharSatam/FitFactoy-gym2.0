import Image from "next/image";
import styles from "../styles/Home.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import ApartmentIcon from '@mui/icons-material/Apartment';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import PeopleIcon from '@mui/icons-material/People';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import leftimage from "../utils/leftimage-removebg-preview.png";
import leftimage1 from "../utils/leftimage1.png";
import leftimage2 from "../utils/leftimage2-removebg-preview.png";
import leftimage3 from "../utils/leftimage3-removebg-preview.png";
import leftimage4 from "../utils/imageleft4-removebg-preview.png";
import leftimage5 from "../utils/leftimage5-removebg-preview.png";
import leftimage6 from "../utils/leftimage6-removebg-preview.png";
import leftimage7 from "../utils/leftimage7-removebg-preview.png";
import leftimage8 from "../utils/leftimage8-removebg-preview.png";
import uparrow from "../utils/arrow-up.png";
import Link from "next/link"
import { motion } from "framer-motion";
import { Fade,Zoom } from "react-awesome-reveal";


export default function Home() {
  const settings = {
    dots: false,
    infiniteLoop: true,
    speed: 30,
    autoPlay: true,
    showArrows: false,
  };
  return (
    <>
    <div className={styles.homeTopImage}>
  <motion.h1 className={styles.HomeTopImageHeading} 
  initial={{opacity:0}}
animate={{opacity:1}}
transition={{duration: 1.3}}
>MAINES 
  <motion.span
   whileHover={{margin:"10px",fontSize:"50px"}}
    className={styles.hTIspan}> BEST </motion.span>
    WORKOUT</motion.h1>
  <motion.p 
    initial={{opacity:0}}
animate={{opacity:1}}
transition={{duration: 1.8}}
  className={styles.HomeTopname}>The Fit Factory</motion.p>
  <Link href="/plans">
  <button className={styles.joinNow}>Join Now</button>
  </Link>
<motion.div className={styles.scrollerarrow}  initial={{y:0}} animate={{y:10}}   transition={{ repeat: Infinity, duration:1 }} >
<Image alt="sas" src={uparrow} objectFit={"cover"}  layout="fill"/>
</motion.div>

</div>
    <div className={styles.container}>
    
      <section className={styles.headerMainContent}>
        <div className={styles.title}>
          <h2 className={styles.title_h2}>We can give you</h2>
          <h1 className={styles.title_h1}>
          <Zoom direction={"up"}>
            <i>Much More Than Others</i>
            </Zoom>
          </h1>
        </div>
        <div className={styles.infoBlocks}>
        <Fade direction={"up"}>
          <div className={styles.block}>
            <FitnessCenterIcon />
            <p className={styles.block_p}>156 Gyms</p>
          </div>
          </Fade>
          <Fade direction={"up"}>
          <div className={styles.block}>
            <ApartmentIcon />
            <p className={styles.block_p}>95 Cities</p>
          </div>
          </Fade>
          <Fade direction={"up"}>
          <div className={styles.block}>
            <AddLocationAltIcon />
            <p className={styles.block_p}>16 States</p>
          </div>
          </Fade>
          <Fade direction={"up"}>
          <div className={styles.block}>
            <SportsGymnasticsIcon />
            <p className={styles.block_p}>Personal Training Program</p>
          </div>
          </Fade>
          <Fade direction={"up"}>
          <div className={styles.block}>
            <PeopleIcon />
            <p className={styles.block_p}>Wellness Programm</p>
          </div>
          </Fade>
          <Fade direction={"up"}>
          <div className={styles.block}>
          <div className={styles.groupblock}>
            <SportsGymnasticsIcon />
            <SportsGymnasticsIcon />
            </div>
            <p className={styles.block_p}>156 Gyms</p>
          </div>
          </Fade>
          <Fade direction={"up"}>
          <div className={styles.block}>
            <AccessibilityIcon />
            <p className={styles.block_p}>Experience Trainers</p>
          </div>
          </Fade>
        </div>
      </section>
      <section className={styles.infoContainer}>
        <div className={styles.info}>
          <div className={styles.hinfo}>
            <h3 className={styles.slideh3}>PERSONAL TRAINING</h3>
            <p className={styles.slidep}>Take your fitness to the nest level and turn your passion for fitness into the role of a fully-qualified Personal Training</p>
          </div>
        </div>
        <div className={styles.infos}>
          <div className={styles.hinfos}>
            <h3 className={styles.slideh3s}>OPTIMISING RECOVERY</h3>
            <p className={styles.slideps}>Explore the effects of fatigue and identify key methods fitness professionals can use to help facilitate recovery to improve exercise and sport performance.</p>
          </div>
        </div>
      </section>
<section className={styles.mot}>
<Carousel {...settings}>
  <div className={styles.mot_LeftImage}>
  <Image alt="sas" src={leftimage} objectFit={"cover"} height={350} width={450} quality={100} />
  </div>
  <div className={styles.mot_LeftImage1}>
  <Image alt="sas" src={leftimage1} objectFit={"cover"} height={350} width={450} quality={100} />
  </div>
  <div className={styles.mot_LeftImage2}>
  <Image alt="sas" src={leftimage2} objectFit={"cover"} height={350} width={450} quality={100} />
  </div>
  <div className={styles.mot_LeftImage3}>
  <Image alt="sas" src={leftimage3} objectFit={"cover"} height={350} width={500} quality={100} />
  </div>
  <div className={styles.mot_LeftImage4}>
  <Image alt="sas" src={leftimage4} objectFit={"cover"} height={350} width={450} quality={100} />
  </div>
  <div className={styles.mot_LeftImage5}>
  <Image alt="sas" src={leftimage5} objectFit={"cover"} height={350} width={550} quality={100} />
  </div>
  <div className={styles.mot_LeftImage6}>
  <Image alt="sas" src={leftimage6} objectFit={"cover"} height={350} width={450} quality={100} />
  </div>
  <div className={styles.mot_LeftImage7}>
  <Image alt="sas" src={leftimage7} objectFit={"cover"} height={350} width={450} quality={100} />
  </div>
  <div className={styles.mot_LeftImage8}>
  <Image alt="sas" src={leftimage8} objectFit={"cover"} height={350} width={450} quality={100} />
  </div>
  </Carousel>
</section>

    </div>
    </>
  );
}
