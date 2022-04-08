import React from 'react'
import style from "../styles/Faq.module.css";
import { motion } from "framer-motion";
const Faq = () => {
  return (
    <div className={style.box}>
    <p className={style.heading}>FAQs</p>
    <div className={style.faqs}>
       <details>
          <summary>What is Lorem ipsum?</summary>
          <motion.p   initial={{x: 100 }} animate={{ x:0 }} transition={{ ease: "easeInOut", delay:1}} className={style.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique aliquam eius consectetur, quod nulla placeat sed voluptatem excepturi illo, explicabo omnis, magnam dolor laboriosam. Laudantium recusandae iusto corrupti quibusdam laborum.</motion.p>
       </details>
       <details>
          <summary>What is Lorem ipsum?</summary>
          <p className={style.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique aliquam eius consectetur, quod nulla placeat sed voluptatem excepturi illo, explicabo omnis, magnam dolor laboriosam. Laudantium recusandae iusto corrupti quibusdam laborum.</p>

       </details>
       <details>
          <summary>What is Lorem ipsum?</summary>
          <p className={style.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique aliquam eius consectetur, quod nulla placeat sed voluptatem excepturi illo, explicabo omnis, magnam dolor laboriosam. Laudantium recusandae iusto corrupti quibusdam laborum.</p>

       </details>
       <details>
          <summary>What is Lorem ipsum?</summary>
          <p className={style.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique aliquam eius consectetur, quod nulla placeat sed voluptatem excepturi illo, explicabo omnis, magnam dolor laboriosam. Laudantium recusandae iusto corrupti quibusdam laborum.</p>

       </details>
       <details>
          <summary>What is Lorem ipsum?</summary>
          <p className={style.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique aliquam eius consectetur, quod nulla placeat sed voluptatem excepturi illo, explicabo omnis, magnam dolor laboriosam. Laudantium recusandae iusto corrupti quibusdam laborum.</p>

       </details>
    </div>
 </div>
  )
}

export default Faq