"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import imgOne from "../../../../../public/assets/images/image-carousel/blackwoman.svg";
import imgTwo from "../../../../../public/assets/images/image-carousel/girl_bag.svg";
import imgThree from "../../../../../public/assets/images/image-carousel/guy.svg";
import imgFour from "../../../../../public/assets/images/image-carousel/lemon_dressed.svg";
import imgFive from "../../../../../public/assets/images/image-carousel/boy_pink.jpg";
import imgSix from "../../../../../public/assets/images/image-carousel/guy.svg";

import styles from "./styles.module.scss";
// import ImageCarousel from "./ImageCarousel";

const images = [imgOne, imgTwo, imgFive, imgSix, imgFour, imgThree];

const ImageCarousel = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`${styles.content} ${isVisible ? styles.slideIn : ""}`}>
      {/* <Image src={rotateImg} alt="rotate" className={styles.rotate} /> */}
      <div className={styles.carousel}>
        {[...images, ...images].map((img, index) => (
          <div key={index} className={styles.card}>
            <Image src={img} alt={`product-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
