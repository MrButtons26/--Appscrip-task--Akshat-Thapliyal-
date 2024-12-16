'use client'

import styles from './footer.module.css'
import usFlag from '../../public/icons/usFlag.png'
import star from '../../public/icons/star.svg'
import FooterLinks from './FooterLinks'
import Image from 'next/image'
import insta from '../../public/icons/Insta.svg'
import linkedin from '../../public/icons/linkedin.svg'
import gPay from '../../public/icons/gPay.png'
import masterCard from '../../public/icons/masterCard.png'
import amex from '../../public/icons/amex.png'
import applePay from '../../public/icons/applyPay.png'
import oPay from '../../public/icons/oPay.png'
import payPal from '../../public/icons/applyPay.png'
import UseWindowWidth from '@/utils/useWindowWidth'
import arrowDown from '../../public/icons/arrow-down-white.svg'
export default function Footer():React.ReactElement{
  const screenWidth=UseWindowWidth();
    return (
        <footer className={styles.footer}>
        <div className={styles['footer-subsection-one']}>
          <div>
            <h2>BE THE FIRST TO KNOW</h2>
            <h3>Sign up for updates from mettã</h3>
            <form action="" aria-label="Newsletter Subscription Form">
              <input
                type="email"
                id="newsletter-input"
                placeholder="Enter your email . . ."
                aria-required="true"
              />
              <button>SUBSCRIBE</button>
            </form>
          </div>
          <div>
         
            {screenWidth > 1330?<><h2>CONTACT US</h2>
            <h3>+44 221 133 5360</h3>
          <h3>customercare@mettamuse.com</h3></>:<div className={styles['contact-info']}><h2>Call Us <br /><span>+44 221 133 5360</span><Image src={star} alt='skewed square'></Image><span>customercare@mettamuse.com</span></h2></div>}
                  
            <div
              className={styles.currency}
            >
              <Image src={usFlag} alt="Flag of United States of America"></Image>
              <Image src={star} alt="skewed square"></Image>
              <h2 aria-label="Currency Selector">USD</h2>
            </div>
            <h3 className={styles['transaction-header']}>
              Transactions will be completed in Euros and a currency reference is
              available on hover.
            </h3>
          </div>
        </div>
        <div className={styles['footer-subsection-two']}>
          <ul>
            <h2 className={styles['footer-sub-heading']}>mettã Muse <span><Image src={arrowDown} alt='Image of arrow facing downwards'></Image></span></h2>
            {screenWidth >1350&& <>
            <FooterLinks>About Us</FooterLinks>
            <FooterLinks>Stories</FooterLinks>
            <FooterLinks>Artisans</FooterLinks>
            <FooterLinks>Boutiques</FooterLinks>
            <FooterLinks>Contact Us</FooterLinks>
            <FooterLinks>Eu Compliances Docs</FooterLinks>
            </>}
          </ul>
          <ul>
            <h2>Quick Links <span><Image src={arrowDown} alt='Image of arrow facing downwards'></Image></span></h2>
            {screenWidth >1350&& <><FooterLinks>Orders & Shipping</FooterLinks>
            <FooterLinks>Join/Login as a Seller</FooterLinks>
            <FooterLinks>Payment & Pricing</FooterLinks>
            <FooterLinks>Return & Refunds</FooterLinks>
            <FooterLinks>FAQs</FooterLinks>
            <FooterLinks>Privacy Policy</FooterLinks>
            <FooterLinks>Terms & Conditions</FooterLinks> </>}
          </ul>
          <div>
            <h2 className={styles['footer-sub-heading']}>Follow US <span><Image src={arrowDown} alt='Image of arrow facing downwards'></Image></span></h2>
            <div
              style={{
                display: 'flex',
                gap: '6px',
                marginBottom: '30px',
                listStyle: 'none',
              }}
            >
            {screenWidth >1330 &&<> <FooterLinks>
                <Image src={insta} alt="Instagram logo"></Image>
              </FooterLinks>
              <FooterLinks>
                <Image src={linkedin} alt="Linkedin logo"></Image>
              </FooterLinks></>}
            </div>
            <h3 className={styles['payment-gateway-heading']}>mettā muse Accepts</h3>
            <div className={styles['payment-gateway']}>
              <FooterLinks>
                <Image src={gPay} alt="Google Pay logo"></Image>
              </FooterLinks>
              <FooterLinks>
                <Image src={masterCard} alt="MasterCard logo"></Image>
              </FooterLinks>
              <FooterLinks>
                <Image src={payPal} alt="Paypal logo"></Image>
              </FooterLinks>
              <FooterLinks>
                <Image src={amex} alt="Amex logo"></Image>
              </FooterLinks>
              <FooterLinks>
                <Image src={applePay} alt="Apple Pay logo"></Image>
              </FooterLinks>
              <FooterLinks>
                <Image src={oPay} alt="oPay logo"></Image>
              </FooterLinks>
            </div>
          </div>
        </div>
        <h3 style={{ fontSize: '14px', textAlign: 'center' }}>
          Copyright © 2023 mettamuse. All rights reserved.
        </h3>
      </footer>
      )
}