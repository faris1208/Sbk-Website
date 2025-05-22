"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import imgOne from "../../../../../public/assets/images/new_bag.jpg";
import Image from "next/image";
import Card from "@/components/card";
import { listCard } from "@/components/data";
// import { listCard } from "@/components/data";

const Midsection = () => {
  const [activeCategory, setActiveCategory] = useState<string>("new arrivals"); 
  const [displayCount, setDisplayCount] = useState<number>(8); 

  const filteredProducts =
    activeCategory === "all"
      ? listCard
      : listCard.filter((product) => product.category === activeCategory);

      const displayedProducts = filteredProducts.slice(0, displayCount);

      // const loadMore = () => {
      //   setDisplayCount(prev => prev + 8); 
      // };

  return (
    <>
      <div className={styles.content}>
        <div className={styles.header}>
          <h1>A Touch of brilliance for every look</h1>
        </div>
        <div className={styles.container}>
          <div className={styles.img}>
            <Image
              src={imgOne}
              alt="img1"
              width={200}
              height={200}
              className={styles.imag}
            />
            <div className={styles.btns}>
              <button
                className={`${styles.btnOne} ${activeCategory === "new arrivals" ? styles.active : ""}`}
                onClick={() => {
                  setActiveCategory("new arrivals");
                  setDisplayCount(8);
                }}
              >
                New Arrivals
              </button>
              <button
                className={`${styles.btnTwo} ${
                  activeCategory === "best selling" ? styles.active : ""
                }`}
                onClick={() => {
                  setActiveCategory("best selling");
                  setDisplayCount(8);
                }}
              >
                Best Selling
              </button>
              <button
                className={`${styles.btnThree} ${
                  activeCategory === "top selling" ? styles.active : ""
                }`}
                onClick={() => {
                  setActiveCategory("top selling");
                  setDisplayCount(8);
                }}
              >
                Top Rating
              </button>
            </div>
          </div>
          <div className={styles.card_wrapper}>
            {displayedProducts.map((feat, index) => (
              <Card
                key={index}
                img={feat.img}
                name={feat.name}
                oldPrice={feat.old}
                newPrice={feat.new}
              />
            ))}
          </div>
          {/* {filteredProducts.length > displayCount && (
          <div className={styles.loadMoreContainer}>
            <button 
              className={styles.loadMoreBtn}
              onClick={loadMore}
            >
              Load More
            </button>
          </div>
        )} */}
        </div>
      </div>
    </>
  );
};

export default Midsection;
