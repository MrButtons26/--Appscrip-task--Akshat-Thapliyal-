'use client'

import  styles from "./banner.module.css";
import  bannerIcon from "../../public/icons/bannerIcon.svg"
import Image from 'next/image';
import useWindowWidth from "@/utils/useWindowWidth";
export default function Banner():React.ReactElement{
   const screenWidth=useWindowWidth();
    return(
    <div className={styles.banner}>
      {screenWidth > 560 &&<div><Image src={bannerIcon} alt="bannerIcon.svg"></Image><h3>Lorem ipsum delor</h3></div>}
      {screenWidth > 560 &&<div><Image src={bannerIcon} alt="bannerIcon.svg"></Image><h3>Lorem ipsum delor</h3></div>}
      {<div><Image src={bannerIcon} alt="bannerIcon.svg"></Image><h3>Lorem ipsum delor</h3></div>}
    </div>
    )
}

