import React from "react";
import style from "../styles/about.module.css";
import Image from "next/image";
import aboutTop from "../utils/about_top.jpg";
import coach from "../utils/coach.jpg";
import coach2 from "../utils/coach2.jpg";
import membershipmanager from "../utils/membershipmanager.jpg";
import owner from "../utils/owner.jpg";

import { Fade,Zoom } from "react-awesome-reveal";


import ReactPlayer from "react-player";

const About = () => {
  return (
    <div className={style.AboutContainer}>
      <div className={style.aboutTopiamge}>
        <Image
          alt="Mountains"
          src={aboutTop}
          objectFit="cover"
          quality={100}
          layout="fill"
        />
      </div>

      <div className={style.aboutMainContent}>
        <div className={style.heading1}>
          <h1 className={style.pageheading}>ABOUT US</h1>
          <Fade direction={"up"}>
          <h3 className={style.topic}>
            We believe the quality of our health determines the quality of our
            lives—and nothing is more important than that. We believe fitness is
            about strengthening and conditioning your body and mind so you can
            get out there, explore the world, seek new adventures and be the
            person you were meant to be.
          </h3>
          <p>
            Windy City Strength & Conditioning is a dedicated, full time
            Strength and Conditioning facility. We use kettlebells, barbells,
            dumbbells, bumper plates, jump boxes, medicine balls, rowers,
            gymnastics rings, parallettes and pull-up bars to effectively train
            our athletes every day.
          </p>
          </Fade>
        </div>
        <div className={style.aboutvideos}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=PuAtBlXa350"
            controls
            width="100%"
            height="100%"
          />
        </div>

        <div className={style.heading2}>
          <h3 className={style.h3}>
            If you want to be healthy and happy, we want to help!
          </h3>
          <Fade direction={"up"}>
          <p>
            At Fit Factory, we believe getting fit should be FUN, varied, and
            done with friends. There is power in being part of a community of
            like-minded individuals that supports us, shares our experiences,
            and celebrates our successes.
          </p>
          <p>
            There’s no ‘one right way’ to training. Your goals are unique, which
            is why we offer a variety of program options. Whether you’re looking
            to just get fit, get strong, or fuel your competitive fire, we have
            a program for you.
          </p>
          <p>
            We listen to what you’re looking to achieve, then lay-out the best
            path to get there. No prior experience is required.
          </p>
          </Fade>
        </div>
        <div className={style.heading3}>
          <h3 className={style.h3}>Why choose Fit Factory?</h3>
          <Fade direction={"up"}>
          <p>
            Coaches / Community / Results. We help people live the strongest
            lives they can imagine by providing community-centric health and
            fitness focused on the individual experience. We give people the
            tools they need to positively change their lives, live BIG, and
            inspire others to follow in their footsteps.{" "}
          </p>
          <li>
            Our coaches are all highly trained and certified professionals with
            a life-long dedication to wellness, health, fitness and livin’ BIG.
            Experienced at managing groups, as well as working with individuals
            in a one-on-one setting, we will teach, motivate and inspire you to
            get (and stay) in shape.
          </li>
          <li>
            Our community motivates and inspires. We truly believe in the power
            of the group; in being part of a like-minded community that supports
            us, shares our experiences, and celebrates our successes. Fitness is
            better with friends.
          </li>
          <li>
            Results. Guaranteed. Since we first opened our doors in 2007, we’ve
            helped thousands look better, feel better, and perform better than
            they ever have. Whether you’re looking to just be fit for life,
            shatter your best 5k time, or reignite your competitive fire, we are
            experienced at providing solutions to meet you where you are with
            your health and fitness and get you the results you deserve.
          </li>
          </Fade>
        </div>
        <div className={style.heading3}>
          <h3 className={style.h3}>Our Coaching Staff</h3>
          <Fade direction={"up"}>
          <p>
            Our coaches are all highly trained and certified professionals with
            a life-long dedication to wellness, health, fitness and livin’ BIG.
            Experienced at managing groups, as well as working with individuals
            in a one-on-one setting, our staff will teach, motivate and inspire
            you to get (and stay) in shape.
          </p>
          </Fade>
        </div>
        <div className={style.coachinfos}>
          <div className={style.coach}>
            <div className={style.coachImage}>
              <Image
                alt="coach"
                src={coach}
                objectFit="cover"
                quality={100}
                height={300}
                width={300}
              />
            </div>
            <div className={style.coachdetails}>
              <h3 className={style.h3}>Justin Marcis</h3>
              <h4  className={style.h4}>Founder & Owner</h4>
              <p>
                Founder of Windy City Strength & Conditioning, Justins goal is
                to inspire and lead individuals to long-term health, fitness and
                happiness.
              </p>
            </div>
          </div>
        </div>
        <div className={style.coachinfos}>
          <div className={style.coach}>
            <div className={style.coachImage}>
              <Image
                alt="coach"
                src={membershipmanager}
                objectFit="cover"
                quality={100}
                height={300}
                width={300}

              />
            </div>
            <div className={style.coachdetails}>
              <h3 className={style.h3}>Stephanie Perez</h3>
              <h4  className={style.h4}>Membership Manager</h4>
              <p>
              Loves the sport of CrossFit and aims to serve athletes interested in the sport too.
              </p>
            </div>
          </div>
        </div>
        <div className={style.coachinfos}>
          <div className={style.coach}>
            <div className={style.coachImage}>
              <Image
                alt="coach"
                src={owner}
                objectFit="cover"
                quality={100}
                height={300}
                width={300}

              />
            </div>
            <div className={style.coachdetails}>
              <h3 className={style.h3}>Mark Krueger</h3>
              <h4  className={style.h4}>Coach</h4>
              <p>
              Mark firmly believes EVERYBODY has and deserves the right to lead a healthy and active lifestyle!
              </p>
            </div>
          </div>
        </div>
        <div className={style.coachinfos}>
          <div className={style.coach}>
            <div className={style.coachImage}>
              <Image
                alt="coach"
                src={coach2}
                objectFit="cover"
                quality={100}
                height={300}
                width={300}
              />
            </div>
            <div className={style.coachdetails}>
              <h3 className={style.h3}>Marley Wahler</h3>
              <h4  className={style.h4}>Coach</h4>
              <p>
              Hopes to inspire a love of fitness across all age ranges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
