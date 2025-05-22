import React from "react";
import styles from "../hero/styles.module.scss";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.text}>
            <h1 className={styles.header}>
              Your New Favourite Look is Just a Click Away.
            </h1>
            <p>
              Step into the season hottest trends at unbeatable prices. Don&apos;t
              miss out- Shop your favourites now!
            </p>
            <div className={styles.btnField}>
              <button className={styles.btn}>
                <Link href={"./detail"}>
                  Shop Now
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
