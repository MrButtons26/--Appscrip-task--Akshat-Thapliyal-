'use client'

import styles from './HeroSection.module.css'
import useWindowWidth from "@/utils/useWindowWidth";
export default function  HeroSection () {
  const screenWidth=useWindowWidth();
    return ( 
    <section className={styles.herosection}>
      {screenWidth <620 &&<div><button>HOME</button>|<button>SHOP</button></div>}
      <h2>Discover Our Products</h2>
      <h3>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</h3>
    </section>);
  }
  