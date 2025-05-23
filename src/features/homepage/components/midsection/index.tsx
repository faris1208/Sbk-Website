"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Card from "@/components/card";
import { listCard } from "@/components/data";
import bannerImage from "../../../../../public/assets/images/new_bag.jpg";

const Midsection = () => {
  const [activeCategory, setActiveCategory] = useState<string>("new arrivals");
  const [displayCount, setDisplayCount] = useState<number>(8);
  const [wishlist, setWishlist] = useState<string[]>([]);

  // const categories = [
  //   { value: "new arrivals", label: "New Arrivals" },
  //   { value: "best selling", label: "Best Selling" },
  //   { value: "top selling", label: "Top Rating" },
  // ];

  const filteredProducts =
    activeCategory === "all"
      ? listCard
      : listCard.filter((product) => product.category === activeCategory);

  const displayedProducts = filteredProducts.slice(0, displayCount);

  useEffect(() => {
    const saved = localStorage.getItem("wishlist");
    if (saved) setWishlist(JSON.parse(saved));
  }, []);

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) => {
      const newWishlist = prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId];
      localStorage.setItem("wishlist", JSON.stringify(newWishlist));
      return newWishlist;
    });
  };

  // const loadMore = () => {
  //   setDisplayCount((prev) => prev + 8);
  // };

  return (
    <section className={styles.content}>
      <div className={styles.header}>
        <h1>A Touch of brilliance for every look</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.img}>
          <Image
            src={bannerImage}
            alt="img1"
            width={200}
            height={200}
            className={styles.imag}
          />
          <div className={styles.btns}>
            <button
              className={`${styles.btnOne} ${
                activeCategory === "new arrivals" ? styles.active : ""
              }`}
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
          {displayedProducts.map((product) => (
            <Card
              id={product.id}
              key={product.id}
              img={product.img}
              name={product.name}
              oldPrice={product.old}
              newPrice={product.new}
              isInWishlist={wishlist.includes(product.id)}
              onToggleWishlist={() => toggleWishlist(product.id)}
            />
          ))}
        </div>

        {/* {displayedProducts.length < filteredProducts.length && (
          <button className={styles.loadMoreButton} onClick={loadMore}>
            Load More
          </button>
        )} */}
      </div>
    </section>
  );
};

export default Midsection;
