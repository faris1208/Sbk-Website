"use client";
import React from "react";
import logo from "../../../public/assets/images/sbk_logo_white.svg";
import styles from "../footer/styles.module.scss";
import Image from "next/image";
import Link from "next/link";
import { FacebookIcon, InstagramIcon, LinkdenIcon, TwitterIcon } from "../icon";

const Footer = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.contentOne}>
          <div className={styles.center_align}>
            <p>Limited Offers</p>
            <div className={styles.txt}>
              <h1>Join our style squad- Get 10% off your first order!</h1>
            </div>
            <button>
              <Link href={"/detail"}>
                Shop Our Products
              </Link>
            </button>
          </div>
        </div>
        <div className={styles.contentTwo}>
          <div className={styles.firstPara}>
            <div className={styles.flx}>
              <Link href={"/"}>
                <Image src={logo} alt="fnt" />
              </Link>
              <div className={styles.icons}>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <TwitterIcon />
                </a>

                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon />
                </a>

                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FacebookIcon />
                </a>

                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <LinkdenIcon />
                </a>
              </div>

              <div className={styles.input}>
                <input type="text" placeholder="Enter your email" />
                <button className={styles.btn}>
                  <p>Subscribe</p>
                </button>
              </div>
              {/* <div className={styles.mobileInput}>
                <input type="text" placeholder="Enter your email" />
                <br />
                <button className={styles.mobileBtn}>
                  <h3>Subscribe</h3>
                </button>
              </div> */}
            </div>
            <div className={styles.icon}>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <TwitterIcon />
              </a>

              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
              </a>

              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <FacebookIcon />
              </a>

              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <LinkdenIcon />
              </a>
            </div>
          </div>
          <p>
            <span> © Copyright SBK Fashion 2025, All Rights Reserved.</span> |
            FAQ | Terms & Condition | Privacy Policy
          </p>
          <h6>
            <span>© Copyright SBK Fashion 2025, All Rights Reserved. </span>|
            FAQ | Terms & Condition | Privacy Policy
          </h6>
        </div>
      </div>
    </>
  );
};

export default Footer;
