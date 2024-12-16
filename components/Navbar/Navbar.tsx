"use client";

import useWindowWidth from "@/utils/useWindowWidth";
import styles from './navbar.module.css'
import Image from 'next/image'
import  siteLogo from "../../public/icons/Logo.png"
import Navlinks from './NavLinks'
import arrowDownLogo from "../../public/icons/arrow-down.svg";
import searchLogo from "../../public/icons/search.svg";
import heartLogo from "../../public/icons/heart.svg";
import bagLogo from "../../public/icons/bag.svg";
import userLogo from "../../public/icons/user.svg";
import threeLines from "../../public/icons/threeLines.svg";
export default function Navbar():React.ReactElement{
  const screenWidth=useWindowWidth();
    return(<nav className={styles.navbar}>
        <div className={styles['navbar-subsection-1']}>
          {screenWidth < 620 &&<Navlinks>
            <Image src={threeLines} id='site-logo' alt='Official Logo of the website'></Image>
           </Navlinks>}
            <Navlinks>
            <Image src={siteLogo} id='site-logo' alt='Official Logo of the website'></Image>
           </Navlinks>
            <h1 className={styles.navHeading}>LOGO</h1>
            <ul>
           <Navlinks>
           <Image src={searchLogo} alt="search image"></Image>
           </Navlinks>
           <Navlinks>
           <Image src={heartLogo} alt="heart image"></Image>
           </Navlinks>
         <Navlinks>
           <Image src={bagLogo} alt="bag image"></Image>
           </Navlinks>
           {screenWidth > 620 &&<Navlinks>
           <Image src={userLogo} alt="user image"></Image>
           </Navlinks>}
           {screenWidth > 620&&<button>
        ENG
        <div>
          <Image src={arrowDownLogo} alt="user image"></Image>{" "}
        </div>
      </button>}
            </ul>
        </div>
        {screenWidth >620 &&<ul className={styles['navbar-subsection-2']}>
        <Navlinks text='SHOP'></Navlinks>
        <Navlinks text='SKILLS'></Navlinks>
        <Navlinks text='STORIES'></Navlinks>
        <Navlinks text='ABOUT'></Navlinks>
        <Navlinks text='CONTACT US'></Navlinks>
        </ul>}
        </nav>)
}